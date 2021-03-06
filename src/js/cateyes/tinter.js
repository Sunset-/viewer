import ST from '../SThree/index';

/**
 * 着色器工厂
 *
 * author : fanll
 *
 * createTime : 2015-07-20
 *
 * @return {[type]} [description]
 */
(function (window) {

	var Cateyes = window.Cateyes || (window.Cateyes = {});

	/**
	 * 着色器工厂
	 * @type {[type]}
	 */
	var TinterFactory = Cateyes.TinterFactory = {
		TYPE: {},
		/**
		 * 创建着色器
		 * @return {[type]} [description]
		 */
		create: function (type, opts) {
			if (this.TYPE[type]) {
				return new this.TYPE[type](opts);
			} else {
				throw new Error('着色器【' + type + '】未定义');
			}
		}
	};

	/**
	 * 着色器基类
	 * @param {[type]} opts [description]
	 */
	var Tinter = function (opts) {};
	Tinter.prototype = {
		init: function () {
			throw new Error('init 方法未在子类中实现！');
		},
		refresh: function () {
			throw new Error('refresh 方法未在子类中实现！');
		},
		tint: function () {
			throw new Error('tint 方法未在子类中实现！');
		},
		reset: function () {
			throw new Error('reset 方法未在子类中实现！');
		}
	}
	Tinter.prototype.constructor = Tinter;
	//静态离屏Canvas
	Tinter.getOffScreenCanvasBuffer = (function () {
		var cvs = document.createElement('canvas'),
			panel;

		cvs.context = cvs.getContext('2d');
		cvs.style.display = 'none';
		return function (width, height) {
			if (cvs.width == width && cvs.height == height && panel) {
				return panel;
			} else {
				cvs.width = width;
				cvs.height = height;
				panel = cvs.context.getImageData(0, 0, width, height);
				return panel;
			}
		};
	})();


	/**
	 * 窗宽窗位着色器
	 */
	var WindowTinter = TinterFactory.TYPE['WINDOW'] = Cateyes.ClassHelper.extend(Tinter, function (viewer) {
		this.init(viewer);
	}, {
		/**
		 * 初始化
		 * @return {[type]} [description]
		 */
		init: function (viewer) {
			this.viewer = viewer;
			this._initEvent();
			this._initState();
			this.inited = true;
		},
		_initEvent: function () {
			var self = this;
			if (!this.inited) {
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function (series) {
					self._initState(series);
				});
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_RENDER_DICOM, function (series) {
					self.loading(false);
				});
				this.viewer.subscribe(Cateyes.CustomEvents.BEFORE_RENDER_DICOM, function (params) {
					var viewer = self.viewer,
						dicomProxy = params.dicomProxy;
					// self.loading(true, dicomProxy);
					self.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING, {});
					if (dicomProxy) {
						dicomProxy.then(function (dicom) {
							var currentDicom = viewer.player.getCurrentDicom();
							if (dicom && currentDicom && currentDicom.index == dicomProxy.index) {
								self.tint(viewer.getCanvas('DICOM'), dicom, params.silint);
								viewer.publish('AFTER_RENDER_DICOM', self.state);
							}
						});
					} else {
						self.tint(viewer.getCanvas('DICOM'), null, params.silint);
						viewer.publish('AFTER_RENDER_DICOM', self.state);
					}
				});
			}
		},
		_initState: function (series) {
			series = series || this.viewer.getSeries();
			if (series) {
				var info = this.seriesInfo = series.getInfo();
				this.state = {
					isInverse: false,
					isPseudoColor: false,
					windowWidth: Math.round(series.info.windowWidth),
					windowCenter: Math.round(series.info.windowCenter),
					rescaleSlope: series.info.rescaleSlope,
					rescaleIntercept: series.info.rescaleIntercept,
					samplesPerPixel: series.info.samplesPerPixel,
					orientation: series.info.orientation,
					forceOperate: false //强制处理过
				};
				this._calculateTintSize();
			}
		},
		getState: function () {
			return this.state;
		},
		/**
		 * 刷新
		 * @return {[type]} [description]
		 */
		refresh: function (params) {
			if (params.windowWidth == 'DEFAULT') {
				params.windowWidth = this.seriesInfo.windowWidth;
			}
			if (params.windowCenter == 'DEFAULT') {
				params.windowCenter = this.seriesInfo.windowCenter;
			}
			if (params.windowWidth == 'FULL' || params.windowCenter == 'FULL') {
				var gtc = Cateyes.DicomHelper.grayToCT,
					minCT = gtc(this.seriesInfo.minGray, this.state),
					maxCT = gtc(this.seriesInfo.maxGray, this.state);
				if (params.windowWidth == 'FULL') {
					params.windowWidth = (maxCT - minCT);
				}
				if (params.windowCenter == 'FULL') {
					params.windowCenter = (maxCT - minCT) / 2;
				}
			}
			$.extend(this.state, params);
			if (this.state) {
				this._offset();
			}
		},
		_offset: function () {
			var state = this.state,
				last = state.windowWidth,
				_ = state._;
			if (Cateyes.Utils.isDefined(_)) {
				for (var k in _) {
					state[k] = eval(state[k] + _[k]);
				}
				delete state._;
			}
			state.windowWidth = Math.round(state.windowWidth);
			state.windowCenter = Math.round(state.windowCenter);
			Cateyes.GlobalPubSub.publishAsync(Cateyes.CustomEvents.ON_VIEWER_WINDOW_CHANGE);
		},
		/**
		 * 重置
		 * @return {[type]} [description]
		 */
		reset: function () {
			this._initState();
		},
		/**
		 * 着色
		 * @return {[type]} [description]
		 * getPixelData
		 */
		_tintTime: null,
		tint: function (canvas, dicom, silent, getPixelData) {
			var now = new Date().getTime();
			if (this._throttleEnable && this._tintTime != null && (now - this._tintTime < 220)) {
				return;
			}
			this._tintTime = now;

			var start = new Date().getTime(),
				cc = [];
			var self = this,
				state = this.state,
				isMpring = this.isMpring(),
				img = dicom._img,
				cols = isMpring ? this.state.width : (dicom.info.info.width),
				rows = isMpring ? this.state.height : (dicom.info.info.height),
				panel = Tinter.getOffScreenCanvasBuffer(cols, rows),
				pixelData = panel.data,
				grayMapping = null,
				isInverse = state.isInverse,
				isPseudoColor = state.isPseudoColor,
				l = cols * rows,
				p, rgb;
			var minGray = dicom.info.minGray || 0;

			try {
				dicom.info.uri = JSON.parse(dicom.info.uri);
			} catch (e) {}

			if (canvas.width != cols || canvas.height != rows) {
				canvas.width = cols;
				canvas.height = rows;
				canvas._center();
				this.viewer.publish(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE);
			}
			if (!dicom) {
				return;
			}
			if (dicom.info.info.samplesPerPixel > 1) {
				if (!state.forceOperate) {
					state.forceOperate = true;
					state.windowWidth = 256;
					state.windowCenter = 128;
				}
				var p1, p2, p3, p4;
				//普通图片
				//canvas.context.drawImage(dicom.getImage(), 0, 0);
				//灰度图片
				var dicomPixelData = dicom.getPixelData();
				cc.push('load' + (new Date().getTime() - start));
				grayMapping = self._generateGrayMapping(dicom.info);
				var showMaxGray = grayMapping.showMaxGray,
					showMinGray = grayMapping.showMinGray,
					step = grayMapping.step;
				if (dicom.info.extensions) {
					//DX,CR的反色
					if (dicom.info.extensions.photometricInterpretation == 'MONOCHROME1') {
						isInverse = !isInverse;
					}
				};
				cc.push('map' + (new Date().getTime() - start));
				// 渲染
				// if (isInverse && isPseudoColor) {
				// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
				// 		p = dicomPixelData[i];
				// 		p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
				// 		rgb = self._pseudoColorChange(p);
				// 		pixelData[j] = rgb[0];
				// 		pixelData[j + 1] = rgb[1];
				// 		pixelData[j + 2] = rgb[2];
				// 		pixelData[j + 3] = 255;
				// 	}
				// } else if ((!isInverse) && isPseudoColor) {
				// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
				// 		p = dicomPixelData[i];
				// 		rgb = self._pseudoColorChange(p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
				// 		pixelData[j] = rgb[0];
				// 		pixelData[j + 1] = rgb[1];
				// 		pixelData[j + 2] = rgb[2];
				// 		pixelData[j + 3] = 255;
				// 	}
				// } else if (isInverse && (!isPseudoColor)) {
				// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
				// 		p = dicomPixelData[i];
				// 		p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
				// 		pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
				// 		pixelData[j + 3] = 255;
				// 	}
				// }
				if (canvas.type == 'WEBGL') {
					canvas.ST.options = {
						piscolor: 2,
						pmingray: showMinGray,
						pmaxgray: showMaxGray,
						pstep: step,
						rescaleSlope: state.rescaleSlope,
						rescaleIntercept: minGray < 0 ? minGray : 0,
						pinverse: !!isInverse,
						ppseudocolor: !!isPseudoColor
					};
					let PImage = ST.Particle.PImage;
					let pimage = new PImage(img, null, null, canvas.ST.gl);

					if (!canvas.ST.LOADIMAGE || canvas.ST.LOADIMAGE != img) {
						canvas.ST.options.offset = 0;
						canvas.ST.LOADIMAGE = img;
						canvas.ST.loadparticle(pimage);
						canvas.ST.render(pimage, null, getPixelData);
					} else {
						canvas.ST.render(pimage, null, getPixelData);
					}

				} else {
					if (isInverse) {
						for (var i = 0, j = 0; i < l; i++, j += 4) {
							p = dicomPixelData[j];
							p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
							pixelData[j] = p;

							p = dicomPixelData[j + 1];
							p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
							pixelData[j + 1] = p;

							p = dicomPixelData[j + 2];
							p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
							pixelData[j + 2] = p;
							pixelData[j + 3] = 255;
						}
					} else {
						var starttttt = new Date().getTime();
						var t;
						for (var i = 0, j = 0; i < l; i++, j += 4) {
							p = dicomPixelData[j];
							p = p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step));
							pixelData[j] = p;

							p = dicomPixelData[j + 1];
							p = p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step));
							pixelData[j + 1] = p;

							p = dicomPixelData[j + 2];
							p = p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step));
							pixelData[j + 2] = p;
							pixelData[j + 3] = 255;
						}
					}
					canvas.context.putImageData(panel, 0, 0);
				}

				cc.push('calc' + (new Date().getTime() - start));

				cc.push('put' + (new Date().getTime() - start));
				cc.push('tintf' + (new Date().getTime() - start));
				//self._tintTime = null;
				// cc.forEach(time => {
				// 		console.log(time)
				// 	})
				//SunsetConsole.apply(null, cc);
				var tinterCost = new Date().getTime() - now;
				self._throttleEnable = (tinterCost > 100);
			} else {
				cc.push('pre' + (new Date().getTime() - start));
				//灰度图片
				this.getGrayDataset(dicom).then(function (dicomPixelData) {
					cc.push('load' + (new Date().getTime() - start));
					grayMapping = self._generateGrayMapping(dicom.info);
					var showMaxGray = grayMapping.showMaxGray,
						showMinGray = grayMapping.showMinGray,
						step = grayMapping.step;
					if (dicom.info.extensions) {
						//DX,CR的反色
						if (dicom.info.extensions.photometricInterpretation == 'MONOCHROME1') {
							isInverse = !isInverse;
						}
					};
					cc.push('map' + (new Date().getTime() - start));
					// 渲染
					if (canvas.type == 'WEBGL') {
						canvas.ST.options = {
							piscolor: 1,
							pmingray: showMinGray,
							pmaxgray: showMaxGray,
							pstep: step,
							rescaleSlope: state.rescaleSlope,
							rescaleIntercept: minGray < 0 ? minGray : 0,
							pinverse: !!isInverse,
							ppseudocolor: !!isPseudoColor
						};

						let PImage = ST.Particle.PImage;
						let pimage = new PImage(img, null, null, canvas.ST.gl);

						if (!canvas.ST.LOADIMAGE || canvas.ST.LOADIMAGE != img) {
							canvas.ST.options.offset = 0;
							canvas.ST.loadparticle(pimage);
							canvas.ST.LOADIMAGE = img;
							canvas.ST.render(pimage, null, getPixelData);
						} else {
							canvas.ST.render(pimage, null, getPixelData);
						}

					} else {

						if (isInverse && isPseudoColor) {
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[i];
								p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
								rgb = self._pseudoColorChange(p);
								pixelData[j] = rgb[0];
								pixelData[j + 1] = rgb[1];
								pixelData[j + 2] = rgb[2];
								pixelData[j + 3] = 255;
							}
						} else if ((!isInverse) && isPseudoColor) {
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[i];
								rgb = self._pseudoColorChange(p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
								pixelData[j] = rgb[0];
								pixelData[j + 1] = rgb[1];
								pixelData[j + 2] = rgb[2];
								pixelData[j + 3] = 255;
							}
						} else if (isInverse && (!isPseudoColor)) {
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[i];
								p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
								pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
								pixelData[j + 3] = 255;
							}
						} else {
							var starttttt = new Date().getTime();
							var t;
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[i];
								p = p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step));
								pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
								pixelData[j + 3] = 255;
							}
						}
						canvas.context.putImageData(panel, 0, 0);
					}

					cc.push('calc' + (new Date().getTime() - start));
					cc.push('put' + (new Date().getTime() - start));
					cc.push('tintf' + (new Date().getTime() - start));
					//self._tintTime = null;
					//SunsetConsole.apply(null, cc);
					var tinterCost = new Date().getTime() - now;
					self._throttleEnable = (tinterCost > 100);
				});
			}
			silent || this.synchronizeCloud();
		},
		/**
		 * 加载中
		 * @return {[type]} [description]
		 */
		loading: function (showLoading, dicomProxy) {
			this._isLoading = showLoading;
			if (showLoading && (!dicomProxy.getPixelData)) {
				this.clear();
				this.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING, {});
				//加载前将虚像画入
				if (dicomProxy) {
					var self = this,
						img = new Image();
					img.src = Cateyes.IMAGE_RESOUCE_PREFIX + dicomProxy.info.frames[0].thumbnailUri;
					img.onload = function () {
						if (self._isLoading) {
							var cvs = self.viewer.getCanvas('DICOM');
							// cvs.context.drawImage(img, 0, 0, cvs.width, cvs.height);
						}
					}
				}
			} else {
				this.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING);
			}
		},
		clear: function () {
			var canvas = this.viewer.getCanvas('DICOM');
			if (canvas.type == 'WEBGL') {
				canvas.ST.clean();
			} else {
				canvas.context.clearRect(0, 0, canvas.width, canvas.height);
			}
		},
		/**
		 * 是否MPR重建中
		 * @return {Boolean} [description]
		 */
		isMpring: function () {
			var series = this.viewer.getSeries(),
				originalOrientation = series.info.orientation,
				orientation = this.state.orientation;
			return !(originalOrientation == orientation || (!orientation));
		},
		/**
		 * 获取灰度数组
		 */
		getGrayDataset: function (dicom) {
			var series = this.viewer.getSeries(),
				originalOrientation = series.info.orientation,
				orientation = this.state.orientation;
			if (originalOrientation == orientation || (!orientation)) {
				var a = dicom.getPixelData();
				var d = $.Deferred().resolve(a);
				return d;
			} else {
				var func;
				if (originalOrientation == 'AXIAL') {
					if (orientation == 'CORONAL') {
						func = '_getRowsGray';
					} else {
						func = '_getColumnsGray';
					}
				} else {
					if (orientation == 'AXIAL') {
						func = '_getRowsGray';
					} else {
						func = '_getColumnsGray';
					}
				}
				return this[func](this.viewer.player.getState().index, originalOrientation).then(function (data) {
					Cateyes.loading(false);
					return data;
				});
			}
		},
		_getRowsGray: function (rowIndex, originalOrientation) {
			var series = this.viewer.getSeries(),
				it = series.getIterator(),
				defs = [],
				buff,
				temp,
				merge = Array.prototype.push;
			defs.push(it.getCurrent());
			while (temp = it.next()) {
				defs.push(temp);
			}
			return $.when.apply($, defs).then(function () {
				var cols = series.info.width,
					args = arguments,
					grays = [],
					pixels;
				if (originalOrientation == 'AXIAL') {
					for (var i = 0, l = args.length; i < l; i++) {
						pixels = args[i].getPixelData();
						for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
							grays.push(pixels[j]);
						}
					}
				} else if (originalOrientation == 'SAGITTAL') {
					for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
						for (var i = 0, l = args.length; i < l; i++) {
							pixels = args[i].getPixelData();
							grays.push(pixels[j]);
						}
					}
				} else {
					for (var i = args.length - 1; i >= 0; i--) {
						pixels = args[i].getPixelData();
						for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
							grays.push(pixels[j]);
						}
					}
				}

				return grays;
			});
		},
		_getColumnsGray: function (columnIndex, originalOrientation) {
			var series = this.viewer.getSeries(),
				it = series.getIterator(),
				defs = [],
				buff,
				temp,
				merge = Array.prototype.push;
			defs.push(it.getCurrent());
			while (temp = it.next()) {
				defs.push(temp);
			}
			return $.when.apply($, defs).then(function () {
				var rows = series.info.height,
					cols = series.info.width,
					args = arguments,
					grays = [],
					pixels;
				if (originalOrientation == 'AXIAL') {
					for (var i = 0, l = args.length; i < l; i++) {
						pixels = args[i].getPixelData();
						for (var j = 0, jl = rows; j < jl; j++) {
							grays.push(pixels[j * cols + columnIndex]);
						}
					}
				} else if (originalOrientation == 'SAGITTAL') {
					for (var j = 0, jl = rows; j < jl; j++) {
						for (var i = 0, l = args.length; i < l; i++) {
							pixels = args[i].getPixelData();
							grays.push(pixels[j * cols + columnIndex]);
						}
					}
				} else {
					for (var j = 0, jl = rows; j < jl; j++) {
						for (var i = args.length - 1; i >= 0; i--) {
							pixels = args[i].getPixelData();
							grays.push(pixels[j * cols + columnIndex]);
						}
					}
				}
				return grays;
			});
		},
		/**
		 * 计算渲染画布尺寸
		 * @return {[type]} [description]
		 */
		_calculateTintSize: function () {
			var series = this.viewer.getSeries(),
				originalOrientation = series.info.orientation,
				orientation = this.state.orientation,
				height,
				width;
			if (originalOrientation == orientation || (!orientation)) {
				width = series.info.width;
				height = series.info.height;
			} else {
				if (originalOrientation == 'AXIAL') {
					if (orientation == 'CORONAL') {
						width = series.info.width;
						height = series.getTotal();
					} else {
						width = series.info.height;
						height = series.getTotal();
					}
				} else if (originalOrientation == 'CORONAL') {
					if (orientation == 'AXIAL') {
						width = series.info.width;
						height = series.getTotal();
					} else {
						width = series.getTotal();
						height = series.info.height;
					}
				} else {
					if (orientation == 'AXIAL') {
						width = series.getTotal();
						height = series.info.width;
					} else {
						width = series.getTotal();
						height = series.info.height;
					}
				}
			}
			this.state.width = width;
			this.state.height = height;
		},
		/**
		 * 获取灰度映射面板
		 */
		_generateGrayMapping: function (dicomInfo) {
			/*
			 * 窗宽：灰度映射范围 窗位：灰度映射中心偏移 exp: 窗宽：300H，则映射CT值为
			 * -150H~150H，窗位为40H，则实际映射CT值为-110H~190H
			 */
			var info = dicomInfo.info,
				state = this.state,
				windowWidth = state.windowWidth,
				windowCenter = state.windowCenter,
				gtc = Cateyes.DicomHelper.grayToCT,
				ctg = Cateyes.DicomHelper.cTToGray;
			// ct转换为gray
			if (info.rescaleSlope == 0) {
				info.rescaleSlope = 1;
				info.rescaleIntercept = 0;
			}
			// 生成灰度映射板
			var showMinCT = windowCenter - (windowWidth >> 1),
				showMaxCT = windowCenter + (windowWidth >> 1),
				showMinGray = ctg(showMinCT, info),
				showMaxGray = ctg(showMaxCT, info),
				step = 255.0 / windowWidth,
				i;
			return {
				step: step,
				showMinGray: showMinGray,
				showMaxGray: showMaxGray
			};
		},
		/**
		 * 灰度-彩色转换算法
		 */
		_pseudoColorChange: function (gray) {
			// var r, g, b;
			// if (gray < 64) {
			// 	r = 0;
			// 	g = 4 * gray;
			// 	b = 255;
			// } else if (gray < 128) {
			// 	r = 0;
			// 	g = 255;
			// 	b = (127 - gray) * 4;
			// } else if (gray < 192) {
			// 	r = (gray - 128) * 4;
			// 	g = 255;
			// 	b = 0;
			// } else {
			// 	r = 255;
			// 	g = (255 - gray) * 4;
			// 	b = 0;
			// }
			// return [r, g, b];
			//
			gray = gray / 256;
			var red,
				green,
				blue;
			if (gray <= 0.25) {
				red = 0;
				green = 0;
				blue = 4.0 * gray;
			} else if (gray <= 0.375) {
				red = 4.0 * (gray - 0.25);
				green = 0;
				blue = 1.0;
			} else if (gray < 0.5) {
				red = 4.0 * (gray - 0.25);
				green = 0;
				blue = 1.0 - 8.0 * (gray - 0.375);
			} else if (gray == 0.5) {
				red = 1.0;
				green = 0;
				blue = 0;
			} else if (gray <= 0.75) {
				red = 1.0;
				green = 4.0 * (gray - 0.5);
				blue = 0;
			} else {
				red = 1.0;
				green = 1.0;
				blue = 4.0 * (gray - 0.75);
			}
			return [red * 256, green * 256, blue * 256];
		},
		__pseudoColorChange: function (gray) {
			//return PSEUDO_COLOR_CODING_SCHEDULE.RAINBOW_SATURABILITY_2[Math.round(gray)];
			var rgb = [];
			if (gray <= 51) {
				rgb[2] = 255;
				rgb[1] = gray * 5;
				rgb[0] = 0;
			} else if (gray <= 102) {
				gray -= 51;
				rgb[2] = 255 - gray * 5;
				rgb[1] = 255;
				rgb[0] = 0;
			} else if (gray <= 153) {
				gray -= 102;
				rgb[2] = 0;
				rgb[1] = 255;
				rgb[0] = gray * 5;
			} else if (gray <= 204) {
				gray -= 153;
				rgb[2] = 0;
				rgb[1] = 255 - (128.0 * gray / 51.0 + 0.5);
				rgb[0] = 255;
			} else {
				gray -= 204;
				rgb[2] = 0;
				rgb[1] = 127 - (127.0 * gray / 51.0 + 0.5);
				rgb[0] = 255;
			}
			return rgb;
		},
		/**
		 * mpr重建
		 * @return {[type]} [description]
		 */
		mpr: function (orientation) {
			var lastOrientation = this.state.orientation,
				series = this.viewer.getSeries();
			if (orientation) {
				this.state.orientation = orientation;
			} else if (series) {
				this.state.orientation = series.info.orientation;
			}
			if (lastOrientation != this.state.orientation) {
				this.state.orientation != series.info.orientation && Cateyes.loading('MPR重建中...', $('#major'));
				this.viewer.publish(Cateyes.CustomEvents.AFTER_MPR_REBUILD, {
					orientation: this.state.orientation,
					originalOrientation: series.info.orientation
				});
				this._calculateTintSize();
				var self = this;
				setTimeout(function () {
					self.viewer.player.jump(Math.floor(self.viewer.player.getTotal() / 2));
				});
			}
		},
		/**
		 * 云同步
		 * @return {[type]} [description]
		 */
		synchronizeCloud: function () {
			this.viewer.publish('AFTER_TINT_DICOM', this.state);
			if (Cateyes.CatCloud.isOnline()) {
				Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
			}
		},
		getJson: function () {
			var json = {};
			json['VIEWER_' + this.viewer.getViewerId() + '|tinter'] = JSON.stringify(this.state);
			return json;
		},
		setJson: function (json) {
			var params = JSON.parse(json);
			this.refresh(params);
			this.viewer.render(true)
		}
	});

	WindowTinter.prototype.constructor = WindowTinter;



	//伪彩编码
	//
	var PSEUDO_COLOR_CODING_SCHEDULE = {
		// 红色饱和度编码 
		RED_SATURABILITY:  [
			[   0,   0,   0, 0 ],  
			[   1,   0,   0, 0 ],  
			[   2,   0,   0, 0 ],  
			[   3,   0,   0, 0 ],  
			[   4,   0,   0, 0 ],  
			[   5,   0,   0, 0 ],  
			[   6,   0,   0, 0 ],  
			[   7,   0,   0, 0 ],  
			[   8,   0,   0, 0 ],  
			[   9,   0,   0, 0 ],  
			[  10,   0,   0, 0 ],  
			[  11,   0,   0, 0 ],  
			[  12,   0,   0, 0 ],  
			[  13,   0,   0, 0 ],  
			[  14,   0,   0, 0 ],  
			[  15,   0,   0, 0 ],  
			[  16,   0,   0, 0 ],  
			[  17,   0,   0, 0 ],  
			[  18,   0,   0, 0 ],  
			[  19,   0,   0, 0 ],  
			[  20,   0,   0, 0 ],  
			[  21,   0,   0, 0 ],  
			[  22,   0,   0, 0 ],  
			[  23,   0,   0, 0 ],  
			[  24,   0,   0, 0 ],  
			[  25,   0,   0, 0 ],  
			[  26,   0,   0, 0 ],  
			[  27,   0,   0, 0 ],  
			[  28,   0,   0, 0 ],  
			[  29,   0,   0, 0 ],  
			[  30,   0,   0, 0 ],  
			[  31,   0,   0, 0 ],  
			[  32,   0,   0, 0 ],  
			[  33,   0,   0, 0 ],  
			[  34,   0,   0, 0 ],  
			[  35,   0,   0, 0 ],  
			[  36,   0,   0, 0 ],  
			[  37,   0,   0, 0 ],  
			[  38,   0,   0, 0 ],  
			[  39,   0,   0, 0 ],  
			[  40,   0,   0, 0 ],  
			[  41,   0,   0, 0 ],  
			[  42,   0,   0, 0 ],  
			[  43,   0,   0, 0 ],  
			[  44,   0,   0, 0 ],  
			[  45,   0,   0, 0 ],  
			[  46,   0,   0, 0 ],  
			[  47,   0,   0, 0 ],  
			[  48,   0,   0, 0 ],  
			[  49,   0,   0, 0 ],  
			[  50,   0,   0, 0 ],  
			[  51,   0,   0, 0 ],  
			[  52,   0,   0, 0 ],  
			[  53,   0,   0, 0 ],  
			[  54,   0,   0, 0 ],  
			[  55,   0,   0, 0 ],  
			[  56,   0,   0, 0 ],  
			[  57,   0,   0, 0 ],  
			[  58,   0,   0, 0 ],  
			[  59,   0,   0, 0 ],  
			[  60,   0,   0, 0 ],  
			[  61,   0,   0, 0 ],  
			[  62,   0,   0, 0 ],  
			[  63,   0,   0, 0 ],  
			[  64,   0,   0, 0 ],  
			[  65,   0,   0, 0 ],  
			[  66,   0,   0, 0 ],  
			[  67,   0,   0, 0 ],  
			[  68,   0,   0, 0 ],  
			[  69,   0,   0, 0 ],  
			[  70,   0,   0, 0 ],  
			[  71,   0,   0, 0 ],  
			[  72,   0,   0, 0 ],  
			[  73,   0,   0, 0 ],  
			[  74,   0,   0, 0 ],  
			[  75,   0,   0, 0 ],  
			[  76,   0,   0, 0 ],  
			[  77,   0,   0, 0 ],  
			[  78,   0,   0, 0 ],  
			[  79,   0,   0, 0 ],  
			[  80,   0,   0, 0 ],  
			[  81,   0,   0, 0 ],  
			[  82,   0,   0, 0 ],  
			[  83,   0,   0, 0 ],  
			[  84,   0,   0, 0 ],  
			[  85,   0,   0, 0 ],  
			[  86,   0,   0, 0 ],  
			[  87,   0,   0, 0 ],  
			[  88,   0,   0, 0 ],  
			[  89,   0,   0, 0 ],  
			[  90,   0,   0, 0 ],  
			[  91,   0,   0, 0 ],  
			[  92,   0,   0, 0 ],  
			[  93,   0,   0, 0 ],  
			[  94,   0,   0, 0 ],  
			[  95,   0,   0, 0 ],  
			[  96,   0,   0, 0 ],  
			[  97,   0,   0, 0 ],  
			[  98,   0,   0, 0 ],  
			[  99,   0,   0, 0 ],  
			[ 100,   0,   0, 0 ],  
			[ 101,   0,   0, 0 ],  
			[ 102,   0,   0, 0 ],  
			[ 103,   0,   0, 0 ],  
			[ 104,   0,   0, 0 ],  
			[ 105,   0,   0, 0 ],  
			[ 106,   0,   0, 0 ],  
			[ 107,   0,   0, 0 ],  
			[ 108,   0,   0, 0 ],  
			[ 109,   0,   0, 0 ],  
			[ 110,   0,   0, 0 ],  
			[ 111,   0,   0, 0 ],  
			[ 112,   0,   0, 0 ],  
			[ 113,   0,   0, 0 ],  
			[ 114,   0,   0, 0 ],  
			[ 115,   0,   0, 0 ],  
			[ 116,   0,   0, 0 ],  
			[ 117,   0,   0, 0 ],  
			[ 118,   0,   0, 0 ],  
			[ 119,   0,   0, 0 ],  
			[ 120,   0,   0, 0 ],  
			[ 121,   0,   0, 0 ],  
			[ 122,   0,   0, 0 ],  
			[ 123,   0,   0, 0 ],  
			[ 124,   0,   0, 0 ],  
			[ 125,   0,   0, 0 ],  
			[ 126,   0,   0, 0 ],  
			[ 127,   0,   0, 0 ],  
			[ 128,   0,   0, 0 ],  
			[ 129,   0,   0, 0 ],  
			[ 130,   0,   0, 0 ],  
			[ 131,   0,   0, 0 ],  
			[ 132,   0,   0, 0 ],  
			[ 133,   0,   0, 0 ],  
			[ 134,   0,   0, 0 ],  
			[ 135,   0,   0, 0 ],  
			[ 136,   0,   0, 0 ],  
			[ 137,   0,   0, 0 ],  
			[ 138,   0,   0, 0 ],  
			[ 139,   0,   0, 0 ],  
			[ 140,   0,   0, 0 ],  
			[ 141,   0,   0, 0 ],  
			[ 142,   0,   0, 0 ],  
			[ 143,   0,   0, 0 ],  
			[ 144,   0,   0, 0 ],  
			[ 145,   0,   0, 0 ],  
			[ 146,   0,   0, 0 ],  
			[ 147,   0,   0, 0 ],  
			[ 148,   0,   0, 0 ],  
			[ 149,   0,   0, 0 ],  
			[ 150,   0,   0, 0 ],  
			[ 151,   0,   0, 0 ],  
			[ 152,   0,   0, 0 ],  
			[ 153,   0,   0, 0 ],  
			[ 154,   0,   0, 0 ],  
			[ 155,   0,   0, 0 ],  
			[ 156,   0,   0, 0 ],  
			[ 157,   0,   0, 0 ],  
			[ 158,   0,   0, 0 ],  
			[ 159,   0,   0, 0 ],  
			[ 160,   0,   0, 0 ],  
			[ 161,   0,   0, 0 ],  
			[ 162,   0,   0, 0 ],  
			[ 163,   0,   0, 0 ],  
			[ 164,   0,   0, 0 ],  
			[ 165,   0,   0, 0 ],  
			[ 166,   0,   0, 0 ],  
			[ 167,   0,   0, 0 ],  
			[ 168,   0,   0, 0 ],  
			[ 169,   0,   0, 0 ],  
			[ 170,   0,   0, 0 ],  
			[ 171,   0,   0, 0 ],  
			[ 172,   0,   0, 0 ],  
			[ 173,   0,   0, 0 ],  
			[ 174,   0,   0, 0 ],  
			[ 175,   0,   0, 0 ],  
			[ 176,   0,   0, 0 ],  
			[ 177,   0,   0, 0 ],  
			[ 178,   0,   0, 0 ],  
			[ 179,   0,   0, 0 ],  
			[ 180,   0,   0, 0 ],  
			[ 181,   0,   0, 0 ],  
			[ 182,   0,   0, 0 ],  
			[ 183,   0,   0, 0 ],  
			[ 184,   0,   0, 0 ],  
			[ 185,   0,   0, 0 ],  
			[ 186,   0,   0, 0 ],  
			[ 187,   0,   0, 0 ],  
			[ 188,   0,   0, 0 ],  
			[ 189,   0,   0, 0 ],  
			[ 190,   0,   0, 0 ],  
			[ 191,   0,   0, 0 ],  
			[ 192,   0,   0, 0 ],  
			[ 193,   0,   0, 0 ],  
			[ 194,   0,   0, 0 ],  
			[ 195,   0,   0, 0 ],  
			[ 196,   0,   0, 0 ],  
			[ 197,   0,   0, 0 ],  
			[ 198,   0,   0, 0 ],  
			[ 199,   0,   0, 0 ],  
			[ 200,   0,   0, 0 ],  
			[ 201,   0,   0, 0 ],  
			[ 202,   0,   0, 0 ],  
			[ 203,   0,   0, 0 ],  
			[ 204,   0,   0, 0 ],  
			[ 205,   0,   0, 0 ],  
			[ 206,   0,   0, 0 ],  
			[ 207,   0,   0, 0 ],  
			[ 208,   0,   0, 0 ],  
			[ 209,   0,   0, 0 ],  
			[ 210,   0,   0, 0 ],  
			[ 211,   0,   0, 0 ],  
			[ 212,   0,   0, 0 ],  
			[ 213,   0,   0, 0 ],  
			[ 214,   0,   0, 0 ],  
			[ 215,   0,   0, 0 ],  
			[ 216,   0,   0, 0 ],  
			[ 217,   0,   0, 0 ],  
			[ 218,   0,   0, 0 ],  
			[ 219,   0,   0, 0 ],  
			[ 220,   0,   0, 0 ],  
			[ 221,   0,   0, 0 ],  
			[ 222,   0,   0, 0 ],  
			[ 223,   0,   0, 0 ],  
			[ 224,   0,   0, 0 ],  
			[ 225,   0,   0, 0 ],  
			[ 226,   0,   0, 0 ],  
			[ 227,   0,   0, 0 ],  
			[ 228,   0,   0, 0 ],  
			[ 229,   0,   0, 0 ],  
			[ 230,   0,   0, 0 ],  
			[ 231,   0,   0, 0 ],  
			[ 232,   0,   0, 0 ],  
			[ 233,   0,   0, 0 ],  
			[ 234,   0,   0, 0 ],  
			[ 235,   0,   0, 0 ],  
			[ 236,   0,   0, 0 ],  
			[ 237,   0,   0, 0 ],  
			[ 238,   0,   0, 0 ],  
			[ 239,   0,   0, 0 ],  
			[ 240,   0,   0, 0 ],  
			[ 241,   0,   0, 0 ],  
			[ 242,   0,   0, 0 ],  
			[ 243,   0,   0, 0 ],  
			[ 244,   0,   0, 0 ],  
			[ 245,   0,   0, 0 ],  
			[ 246,   0,   0, 0 ],  
			[ 247,   0,   0, 0 ],  
			[ 248,   0,   0, 0 ],  
			[ 249,   0,   0, 0 ],  
			[ 250,   0,   0, 0 ],  
			[ 251,   0,   0, 0 ],  
			[ 252,   0,   0, 0 ],  
			[ 253,   0,   0, 0 ],  
			[ 254,   0,   0, 0 ],  
			[ 255,   0,   0, 0 ]
		],
		RAINBOW_SATURABILITY_1: [
			[   0,   0,   0, 0 ],  
			[   0,   0,   7, 0 ],  
			[   0,   0,  15, 0 ],  
			[   0,   0,  23, 0 ],  
			[   0,   0,  31, 0 ],  
			[   0,   0,  39, 0 ],  
			[   0,   0,  47, 0 ],  
			[   0,   0,  55, 0 ],  
			[   0,   0,  63, 0 ],  
			[   0,   0,  71, 0 ],  
			[   0,   0,  79, 0 ],  
			[   0,   0,  87, 0 ],  
			[   0,   0,  85, 0 ],  
			[   0,   0, 103, 0 ],  
			[   0,   0, 111, 0 ],  
			[   0,   0, 119, 0 ],  
			[   0,   0, 127, 0 ],  
			[   0,   0, 135, 0 ],  
			[   0,   0, 143, 0 ],  
			[   0,   0, 151, 0 ],  
			[   0,   0, 159, 0 ],  
			[   0,   0, 167, 0 ],  
			[   0,   0, 175, 0 ],  
			[   0,   0, 183, 0 ],  
			[   0,   0, 191, 0 ],  
			[   0,   0, 199, 0 ],  
			[   0,   0, 207, 0 ],  
			[   0,   0, 215, 0 ],  
			[   0,   0, 223, 0 ],  
			[   0,   0, 231, 0 ],  
			[   0,   0, 239, 0 ],  
			[   0,   0, 247, 0 ],  
			[   0,   0, 255, 0 ],  
			[   0,   8, 255, 0 ],  
			[   0,  16, 255, 0 ],  
			[   0,  24, 255, 0 ],  
			[   0,  32, 255, 0 ],  
			[   0,  40, 255, 0 ],  
			[   0,  48, 255, 0 ],  
			[   0,  56, 255, 0 ],  
			[   0,  64, 255, 0 ],  
			[   0,  72, 255, 0 ],  
			[   0,  80, 255, 0 ],  
			[   0,  88, 255, 0 ],  
			[   0,  96, 255, 0 ],  
			[   0, 104, 255, 0 ],  
			[   0, 112, 255, 0 ],  
			[   0, 120, 255, 0 ],  
			[   0, 128, 255, 0 ],  
			[   0, 136, 255, 0 ],  
			[   0, 144, 255, 0 ],  
			[   0, 152, 255, 0 ],  
			[   0, 160, 255, 0 ],  
			[   0, 168, 255, 0 ],  
			[   0, 176, 255, 0 ],  
			[   0, 184, 255, 0 ],  
			[   0, 192, 255, 0 ],  
			[   0, 200, 255, 0 ],  
			[   0, 208, 255, 0 ],  
			[   0, 216, 255, 0 ],  
			[   0, 224, 255, 0 ],  
			[   6, 232, 255, 0 ],  
			[   0, 240, 255, 0 ],  
			[   0, 248, 255, 0 ],  
			[   0, 255, 255, 0 ],  
			[   0, 255, 247, 0 ],  
			[   0, 255, 239, 0 ],  
			[   0, 255, 231, 0 ],  
			[   0, 255, 223, 0 ],  
			[   0, 255, 215, 0 ],  
			[   0, 255, 207, 0 ],  
			[   0, 255, 199, 0 ],  
			[   0, 255, 191, 0 ],  
			[   0, 255, 183, 0 ],  
			[   0, 255, 175, 0 ],  
			[   0, 255, 167, 0 ],  
			[   0, 255, 159, 0 ],  
			[   0, 255, 151, 0 ],  
			[   0, 255, 143, 0 ],  
			[   0, 255, 135, 0 ],  
			[   0, 255, 127, 0 ],  
			[   0, 255, 119, 0 ],  
			[   0, 255, 111, 0 ],  
			[   0, 255, 103, 0 ],  
			[   0, 255,  95, 0 ],  
			[   0, 255,  87, 0 ],  
			[   0, 255,  79, 0 ],  
			[   0, 255,  71, 0 ],  
			[   0, 255,  63, 0 ],  
			[   0, 255,  55, 0 ],  
			[   0, 255,  47, 0 ],  
			[   0, 255,  39, 0 ],  
			[   0, 255,  31, 0 ],  
			[   0, 255,  23, 0 ],  
			[   0, 255,  15, 0 ],  
			[   0, 255,   7, 0 ],  
			[   0, 255,   0, 0 ],  
			[   8, 255,   0, 0 ],  
			[  16, 255,   0, 0 ],  
			[  24, 255,   0, 0 ],  
			[  32, 255,   0, 0 ],  
			[  40, 255,   0, 0 ],  
			[  48, 255,   0, 0 ],  
			[  56, 255,   0, 0 ],  
			[  64, 255,   0, 0 ],  
			[  72, 255,   0, 0 ],  
			[  80, 255,   0, 0 ],  
			[  88, 255,   0, 0 ],  
			[  96, 255,   0, 0 ],  
			[ 104, 255,   0, 0 ],  
			[ 112, 255,   0, 0 ],  
			[ 120, 255,   0, 0 ],  
			[ 128, 255,   0, 0 ],  
			[ 136, 255,   0, 0 ],  
			[ 144, 255,   0, 0 ],  
			[ 152, 255,   0, 0 ],  
			[ 160, 255,   0, 0 ],  
			[ 168, 255,   0, 0 ],  
			[ 176, 255,   0, 0 ],  
			[ 184, 255,   0, 0 ],  
			[ 192, 255,   0, 0 ],  
			[ 200, 255,   0, 0 ],  
			[ 208, 255,   0, 0 ],  
			[ 216, 255,   0, 0 ],  
			[ 224, 255,   0, 0 ],  
			[ 232, 255,   0, 0 ],  
			[ 240, 255,   0, 0 ],  
			[ 248, 255,   0, 0 ],  
			[ 255, 255,   0, 0 ],  
			[ 255, 251,   0, 0 ],  
			[ 255, 247,   0, 0 ],  
			[ 255, 243,   0, 0 ],  
			[ 255, 239,   0, 0 ],  
			[ 255, 235,   0, 0 ],  
			[ 255, 231,   0, 0 ],  
			[ 255, 227,   0, 0 ],  
			[ 255, 223,   0, 0 ],  
			[ 255, 219,   0, 0 ],  
			[ 255, 215,   0, 0 ],  
			[ 255, 211,   0, 0 ],  
			[ 255, 207,   0, 0 ],  
			[ 255, 203,   0, 0 ],  
			[ 255, 199,   0, 0 ],  
			[ 255, 195,   0, 0 ],  
			[ 255, 191,   0, 0 ],  
			[ 255, 187,   0, 0 ],  
			[ 255, 183,   0, 0 ],  
			[ 255, 179,   0, 0 ],  
			[ 255, 175,   0, 0 ],  
			[ 255, 171,   0, 0 ],  
			[ 255, 167,   0, 0 ],  
			[ 255, 163,   0, 0 ],  
			[ 255, 159,   0, 0 ],  
			[ 255, 155,   0, 0 ],  
			[ 255, 151,   0, 0 ],  
			[ 255, 147,   0, 0 ],  
			[ 255, 143,   0, 0 ],  
			[ 255, 139,   0, 0 ],  
			[ 255, 135,   0, 0 ],  
			[ 255, 131,   0, 0 ],  
			[ 255, 127,   0, 0 ],  
			[ 255, 123,   0, 0 ],  
			[ 255, 119,   0, 0 ],  
			[ 255, 115,   0, 0 ],  
			[ 255, 111,   0, 0 ],  
			[ 255, 107,   0, 0 ],  
			[ 255, 103,   0, 0 ],  
			[ 255,  99,   0, 0 ],  
			[ 255,  95,   0, 0 ],  
			[ 255,  91,   0, 0 ],  
			[ 255,  87,   0, 0 ],  
			[ 255,  83,   0, 0 ],  
			[ 255,  79,   0, 0 ],  
			[ 255,  75,   0, 0 ],  
			[ 255,  71,   0, 0 ],  
			[ 255,  67,   0, 0 ],  
			[ 255,  63,   0, 0 ],  
			[ 255,  59,   0, 0 ],  
			[ 255,  55,   0, 0 ],  
			[ 255,  51,   0, 0 ],  
			[ 255,  47,   0, 0 ],  
			[ 255,  43,   0, 0 ],  
			[ 255,  39,   0, 0 ],  
			[ 255,  35,   0, 0 ],  
			[ 255,  31,   0, 0 ],  
			[ 255,  27,   0, 0 ],  
			[ 255,  23,   0, 0 ],  
			[ 255,  19,   0, 0 ],  
			[ 255,  15,   0, 0 ],  
			[ 255,  11,   0, 0 ],  
			[ 255,   7,   0, 0 ],  
			[ 255,   3,   0, 0 ],  
			[ 255,   0,   0, 0 ],  
			[ 255,   4,   4, 0 ],  
			[ 255,   8,   8, 0 ],  
			[ 255,  12,  12, 0 ],  
			[ 255,  16,  16, 0 ],  
			[ 255,  20,  20, 0 ],  
			[ 255,  24,  24, 0 ],  
			[ 255,  28,  28, 0 ],  
			[ 255,  32,  32, 0 ],  
			[ 255,  36,  36, 0 ],  
			[ 255,  40,  40, 0 ],  
			[ 255,  44,  44, 0 ],  
			[ 255,  48,  48, 0 ],  
			[ 255,  52,  52, 0 ],  
			[ 255,  56,  56, 0 ],  
			[ 255,  60,  60, 0 ],  
			[ 255,  64,  64, 0 ],  
			[ 255,  68,  68, 0 ],  
			[ 255,  72,  72, 0 ],  
			[ 255,  76,  76, 0 ],  
			[ 255,  80,  80, 0 ],  
			[ 255,  84,  84, 0 ],  
			[ 255,  88,  88, 0 ],  
			[ 255,  92,  92, 0 ],  
			[ 255,  96,  96, 0 ],  
			[ 255, 100, 100, 0 ],  
			[ 255, 104, 104, 0 ],  
			[ 255, 108, 108, 0 ],  
			[ 255, 112, 112, 0 ],  
			[ 255, 116, 116, 0 ],  
			[ 255, 120, 120, 0 ],  
			[ 255, 124, 124, 0 ],  
			[ 255, 128, 128, 0 ],  
			[ 255, 132, 132, 0 ],  
			[ 255, 136, 136, 0 ],  
			[ 255, 140, 140, 0 ],  
			[ 255, 144, 144, 0 ],  
			[ 255, 148, 148, 0 ],  
			[ 255, 152, 152, 0 ],  
			[ 255, 156, 156, 0 ],  
			[ 255, 160, 160, 0 ],  
			[ 255, 164, 164, 0 ],  
			[ 255, 168, 168, 0 ],  
			[ 255, 172, 172, 0 ],  
			[ 255, 176, 176, 0 ],  
			[ 255, 180, 180, 0 ],  
			[ 255, 184, 184, 0 ],  
			[ 255, 188, 188, 0 ],  
			[ 255, 192, 192, 0 ],  
			[ 255, 196, 196, 0 ],  
			[ 255, 200, 200, 0 ],  
			[ 255, 204, 204, 0 ],  
			[ 255, 208, 208, 0 ],  
			[ 255, 212, 212, 0 ],  
			[ 255, 216, 216, 0 ],  
			[ 255, 220, 220, 0 ],  
			[ 255, 224, 224, 0 ],  
			[ 255, 228, 228, 0 ],  
			[ 255, 232, 232, 0 ],  
			[ 255, 236, 236, 0 ],  
			[ 255, 240, 240, 0 ],  
			[ 255, 244, 244, 0 ],  
			[ 255, 248, 248, 0 ],  
			[ 255, 252, 252, 0 ]
		],
		RAINBOW_SATURABILITY_2:  [ 
			[  0,   0, 255, 0 ],  
			[   0,   3, 255, 0 ],  
			[   0,   7, 255, 0 ],  
			[   0,  11, 255, 0 ],  
			[   0,  15, 255, 0 ],  
			[   0,  19, 255, 0 ],  
			[   0,  23, 255, 0 ],  
			[   0,  27, 255, 0 ],  
			[   0,  31, 255, 0 ],  
			[   0,  35, 255, 0 ],  
			[   0,  39, 255, 0 ],  
			[   0,  43, 255, 0 ],  
			[   0,  47, 255, 0 ],  
			[   0,  51, 255, 0 ],  
			[   0,  55, 255, 0 ],  
			[   0,  59, 255, 0 ],  
			[   0,  63, 255, 0 ],  
			[   0,  67, 255, 0 ],  
			[   0,  71, 255, 0 ],  
			[   0,  75, 255, 0 ],  
			[   0,  79, 255, 0 ],  
			[   0,  83, 255, 0 ],  
			[   0,  87, 255, 0 ],  
			[   0,  91, 255, 0 ],  
			[   0,  95, 255, 0 ],  
			[   0,  99, 255, 0 ],  
			[   0, 103, 255, 0 ],  
			[   0, 107, 255, 0 ],  
			[   0, 111, 255, 0 ],  
			[   0, 115, 255, 0 ],  
			[   0, 119, 255, 0 ],  
			[   0, 123, 255, 0 ],  
			[   0, 127, 255, 0 ],  
			[   0, 131, 255, 0 ],  
			[   0, 135, 255, 0 ],  
			[   0, 139, 255, 0 ],  
			[   0, 143, 255, 0 ],  
			[   0, 147, 255, 0 ],  
			[   0, 151, 255, 0 ],  
			[   0, 155, 255, 0 ],  
			[   0, 159, 255, 0 ],  
			[   0, 163, 255, 0 ],  
			[   0, 167, 255, 0 ],  
			[   0, 171, 255, 0 ],  
			[   0, 175, 255, 0 ],  
			[   0, 179, 255, 0 ],  
			[   0, 183, 255, 0 ],  
			[   0, 187, 255, 0 ],  
			[   0, 191, 255, 0 ],  
			[   0, 195, 255, 0 ],  
			[   0, 199, 255, 0 ],  
			[   0, 203, 255, 0 ],  
			[   0, 207, 255, 0 ],  
			[   0, 211, 255, 0 ],  
			[   0, 215, 255, 0 ],  
			[   0, 219, 255, 0 ],  
			[   0, 223, 255, 0 ],  
			[   0, 227, 255, 0 ],  
			[   0, 231, 255, 0 ],  
			[   0, 235, 255, 0 ],  
			[   0, 239, 255, 0 ],  
			[   6, 243, 255, 0 ],  
			[   0, 247, 255, 0 ],  
			[   0, 251, 255, 0 ],  
			[   0, 255, 255, 0 ],  
			[   0, 255, 247, 0 ],  
			[   0, 255, 239, 0 ],  
			[   0, 255, 231, 0 ],  
			[   0, 255, 223, 0 ],  
			[   0, 255, 215, 0 ],  
			[   0, 255, 207, 0 ],  
			[   0, 255, 199, 0 ],  
			[   0, 255, 191, 0 ],  
			[   0, 255, 183, 0 ],  
			[   0, 255, 175, 0 ],  
			[   0, 255, 167, 0 ],  
			[   0, 255, 159, 0 ],  
			[   0, 255, 151, 0 ],  
			[   0, 255, 143, 0 ],  
			[   0, 255, 135, 0 ],  
			[   0, 255, 127, 0 ],  
			[   0, 255, 119, 0 ],  
			[   0, 255, 111, 0 ],  
			[   0, 255, 103, 0 ],  
			[   0, 255,  95, 0 ],  
			[   0, 255,  87, 0 ],  
			[   0, 255,  79, 0 ],  
			[   0, 255,  71, 0 ],  
			[   0, 255,  63, 0 ],  
			[   0, 255,  55, 0 ],  
			[   0, 255,  47, 0 ],  
			[   0, 255,  39, 0 ],  
			[   0, 255,  31, 0 ],  
			[   0, 255,  23, 0 ],  
			[   0, 255,  15, 0 ],  
			[   0, 255,   7, 0 ],  
			[   0, 255,   0, 0 ],  
			[   8, 255,   0, 0 ],  
			[  16, 255,   0, 0 ],  
			[  24, 255,   0, 0 ],  
			[  32, 255,   0, 0 ],  
			[  40, 255,   0, 0 ],  
			[  48, 255,   0, 0 ],  
			[  56, 255,   0, 0 ],  
			[  64, 255,   0, 0 ],  
			[  72, 255,   0, 0 ],  
			[  80, 255,   0, 0 ],  
			[  88, 255,   0, 0 ],  
			[  96, 255,   0, 0 ],  
			[ 104, 255,   0, 0 ],  
			[ 112, 255,   0, 0 ],  
			[ 120, 255,   0, 0 ],  
			[ 128, 255,   0, 0 ],  
			[ 136, 255,   0, 0 ],  
			[ 144, 255,   0, 0 ],  
			[ 152, 255,   0, 0 ],  
			[ 160, 255,   0, 0 ],  
			[ 168, 255,   0, 0 ],  
			[ 176, 255,   0, 0 ],  
			[ 184, 255,   0, 0 ],  
			[ 192, 255,   0, 0 ],  
			[ 200, 255,   0, 0 ],  
			[ 208, 255,   0, 0 ],  
			[ 216, 255,   0, 0 ],  
			[ 224, 255,   0, 0 ],  
			[ 232, 255,   0, 0 ],  
			[ 240, 255,   0, 0 ],  
			[ 248, 255,   0, 0 ],  
			[ 255, 255,   0, 0 ],  
			[ 255, 251,   0, 0 ],  
			[ 255, 247,   0, 0 ],  
			[ 255, 243,   0, 0 ],  
			[ 255, 239,   0, 0 ],  
			[ 255, 235,   0, 0 ],  
			[ 255, 231,   0, 0 ],  
			[ 255, 227,   0, 0 ],   
			[ 255, 223,   0, 0 ],  
			[ 255, 219,   0, 0 ],  
			[ 255, 215,   0, 0 ],  
			[ 255, 211,   0, 0 ],  
			[ 255, 207,   0, 0 ],  
			[ 255, 203,   0, 0 ],  
			[ 255, 199,   0, 0 ],  
			[ 255, 195,   0, 0 ],  
			[ 255, 191,   0, 0 ],  
			[ 255, 187,   0, 0 ],  
			[ 255, 183,   0, 0 ],  
			[ 255, 179,   0, 0 ],  
			[ 255, 175,   0, 0 ],  
			[ 255, 171,   0, 0 ],  
			[ 255, 167,   0, 0 ],  
			[ 255, 163,   0, 0 ],  
			[ 255, 159,   0, 0 ],  
			[ 255, 155,   0, 0 ],  
			[ 255, 151,   0, 0 ],  
			[ 255, 147,   0, 0 ],  
			[ 255, 143,   0, 0 ],  
			[ 255, 139,   0, 0 ],  
			[ 255, 135,   0, 0 ],  
			[ 255, 131,   0, 0 ],  
			[ 255, 127,   0, 0 ],  
			[ 255, 123,   0, 0 ],  
			[ 255, 119,   0, 0 ],  
			[ 255, 115,   0, 0 ],  
			[ 255, 111,   0, 0 ],  
			[ 255, 107,   0, 0 ],  
			[ 255, 103,   0, 0 ],  
			[ 255,  99,   0, 0 ],  
			[ 255,  95,   0, 0 ],  
			[ 255,  91,   0, 0 ],  
			[ 255,  87,   0, 0 ],  
			[ 255,  83,   0, 0 ],  
			[ 255,  79,   0, 0 ],  
			[ 255,  75,   0, 0 ],  
			[ 255,  71,   0, 0 ],  
			[ 255,  67,   0, 0 ],  
			[ 255,  63,   0, 0 ],  
			[ 255,  59,   0, 0 ],  
			[ 255,  55,   0, 0 ],  
			[ 255,  51,   0, 0 ],  
			[ 255,  47,   0, 0 ],  
			[ 255,  43,   0, 0 ],  
			[ 255,  39,   0, 0 ],  
			[ 255,  35,   0, 0 ],  
			[ 255,  31,   0, 0 ],  
			[ 255,  27,   0, 0 ],  
			[ 255,  23,   0, 0 ],  
			[ 255,  19,   0, 0 ],  
			[ 255,  15,   0, 0 ],  
			[ 255,  11,   0, 0 ],  
			[ 255,   7,   0, 0 ],  
			[ 255,   3,   0, 0 ],  
			[ 255,   0,   0, 0 ],  
			[ 255,   4,   4, 0 ],  
			[ 255,   8,   8, 0 ],  
			[ 255,  12,  12, 0 ],  
			[ 255,  16,  16, 0 ],  
			[ 255,  20,  20, 0 ],  
			[ 255,  24,  24, 0 ],  
			[ 255,  28,  28, 0 ],  
			[ 255,  32,  32, 0 ],  
			[ 255,  36,  36, 0 ],  
			[ 255,  40,  40, 0 ],  
			[ 255,  44,  44, 0 ],  
			[ 255,  48,  48, 0 ],  
			[ 255,  52,  52, 0 ],  
			[ 255,  56,  56, 0 ],  
			[ 255,  60,  60, 0 ],  
			[ 255,  64,  64, 0 ],  
			[ 255,  68,  68, 0 ],  
			[ 255,  72,  72, 0 ],  
			[ 255,  76,  76, 0 ],  
			[ 255,  80,  80, 0 ],  
			[ 255,  84,  84, 0 ],  
			[ 255,  88,  88, 0 ],  
			[ 255,  92,  92, 0 ],  
			[ 255,  96,  96, 0 ],  
			[ 255, 100, 100, 0 ],  
			[ 255, 104, 104, 0 ],  
			[ 255, 108, 108, 0 ],  
			[ 255, 112, 112, 0 ],  
			[ 255, 116, 116, 0 ],  
			[ 255, 120, 120, 0 ],  
			[ 255, 124, 124, 0 ],  
			[ 255, 128, 128, 0 ],  
			[ 255, 132, 132, 0 ],  
			[ 255, 136, 136, 0 ],  
			[ 255, 140, 140, 0 ],  
			[ 255, 144, 144, 0 ],  
			[ 255, 148, 148, 0 ],  
			[ 255, 152, 152, 0 ],  
			[ 255, 156, 156, 0 ],  
			[ 255, 160, 160, 0 ],  
			[ 255, 164, 164, 0 ],  
			[ 255, 168, 168, 0 ],  
			[ 255, 172, 172, 0 ],  
			[ 255, 176, 176, 0 ],  
			[ 255, 180, 180, 0 ],  
			[ 255, 184, 184, 0 ],  
			[ 255, 188, 188, 0 ],  
			[ 255, 192, 192, 0 ],  
			[ 255, 196, 196, 0 ],  
			[ 255, 200, 200, 0 ],  
			[ 255, 204, 204, 0 ],  
			[ 255, 208, 208, 0 ],  
			[ 255, 212, 212, 0 ],  
			[ 255, 216, 216, 0 ],  
			[ 255, 220, 220, 0 ],  
			[ 255, 224, 224, 0 ],  
			[ 255, 228, 228, 0 ],  
			[ 255, 232, 232, 0 ],  
			[ 255, 236, 236, 0 ],  
			[ 255, 240, 240, 0 ],  
			[ 255, 244, 244, 0 ],  
			[ 255, 248, 248, 0 ],  
			[ 255, 252, 252, 0 ]
		]

	}


})(window);