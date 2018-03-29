(function() {

	var Cateyes = window.Cateyes || (window.Cateyes = {});

	var DicomHolder = Cateyes.DicomHolder = {
		studyMap: {},
		seriesMap: {},
		registStudy: function(study) {
			this.studyMap[study.studyInfo.studyInstanceUID] = study;
		},
		registSeries: function(series) {
			this.seriesMap[series.info.seriesInstanceUID] = series;
		},
		getStudyByUid: function(uid) {
			return this.studyMap[uid];
		},
		getSeriesByUid: function(uid) {
			return this.seriesMap[uid];
		}
	};

	/**
	 * 迭代器
	 * @param {[type]} list [description]
	 */
	var Iterator = function(indexCb, totalCb, loadedCb) {
		this.indexCb = indexCb;
		this.totalCb = totalCb;
		this.loadedCb = loadedCb;
		this.index = 0;
	}
	Iterator.prototype = {
		hasNext: function() {
			return this.totalCb() > this.index + 1;
		},
		next: function() {
			return this.hasNext() ? this.indexCb(++this.index) : null;
		},
		prev: function() {
			return this.index > 0 ? this.indexCb(--this.index) : null;
		},
		getTotal: function() {
			return this.totalCb();
		},
		getLoadedCount: function() {
			return this.loadedCb();
		},
		getCurrent: function() {
			return this.indexCb(this.index);
		},
		getByIndex: function(index) {
			return this.indexCb(index);
		},
		getIndex: function() {
			return this.index;
		},
		gotoIndex: function(index) {
			return (index >= 0 && index < this.totalCb()) ? this.indexCb(this.index = index) : null;
		},
		isEmpty: function() {
			return !(this.totalCb() > 0);
		}
	}
	Iterator.prototype.constructor = Iterator;

	function castNumber(list) {
		var res = [];
		for (var i = 0, t; t = list[i++];) {
			res.push(+t);
		}
		return res;
	}

	/**
	 * 检查
	 */
	var Study = Cateyes.namespace('Cateyes.Entity.Study', function(data) {
		this.init(data);
		DicomHolder.registStudy(this);
	});

	Study.prototype = {
		TYPE: 'STUDY',
		/**
		 * 初始化
		 */
		init: function(data) {
			this.seriesCount = 0;
			this.dicomCount = 0;
			this.data = data;
			this.serieses = data.study.serieses;
			this.seriesMap = {};
			delete data.study.serieses;
			this.studyInfo = $.extend({}, data.patient, data.study);
			this._splitSerires(this.studyInfo, this.serieses);
		},
		_splitSerires: function(studyInfo, ss) {
			var serises = this.serieses = [],
				seriesMap = this.seriesMap,
				simpleFrames,
				series,
				seriesInfo,
				images,
				image,
				imageInfo,
				frames,
				frame,
				s;
			for (var seriesId in ss) {
				series = ss[seriesId];
				images = series.images;
				delete series.images;
				seriesInfo = $.extend({
					studyInfo: studyInfo
				}, series);
				simpleFrames = [];
				for (var i = 0, image; image = images[i++];) {
					frames = image.frames;
					if (frames.length > 1) {
						seriesInfo.isFinished = false;
					}
					this._loadSeriesInfo(seriesInfo, image);
					if (frames.length == 1) {
						frames[0].instanceNumber = image.instanceNumber;
						frames[0].frameNumber = image.instanceNumber;
						simpleFrames.push(frames[0]);
					} else if (frames.length > 1) {
						//多帧图组成序列
						var multiFrameSeriesInfo = $.extend({}, seriesInfo);
						multiFrameSeriesInfo.seriesInstanceUID += '_' + image.instanceNumber;
						multiFrameSeriesInfo.autoPlay = true;
						s = new Series(multiFrameSeriesInfo, frames, this)
						if (s.inited) {
							serises.push(s);
							seriesMap[multiFrameSeriesInfo.seriesInstanceUID] = s;
						}
					}
					this._loadFrameInfo(frames, image);
				}
				if (simpleFrames.length) {
					simpleFrames.sort(function(f1, f2) {
						return f1.instanceNumber - f2.instanceNumber;
					});
					s = new Series(seriesInfo, simpleFrames, this)
					if (s.inited) {
						serises.push(s);
						seriesMap[seriesInfo.seriesInstanceUID] = s;
					}
				}
			}
			//series排序
			serises.sort(function(s1, s2) {
				return s1.info.seriesNumber - s2.info.seriesNumber;
			});
		},
		/**
		 * 汇总序列信息
		 */
		_loadSeriesInfo: function(seriesInfo, image) {
			if (!seriesInfo.isFinished) {
				seriesInfo.width = image.width;
				seriesInfo.height = image.height;
				seriesInfo.windowWidth = image.windowWidth;
				seriesInfo.windowCenter = image.windowCenter;
				seriesInfo.samplesPerPixel = image.samplesPerPixel;
				seriesInfo.sliceThickness = image.sliceThickness;
				if (image.deviceType == 'CT') {
					seriesInfo.rescaleSlope = image.rescaleSlope;
					seriesInfo.rescaleIntercept = image.rescaleIntercept;
				} else {
					seriesInfo.rescaleSlope = 1;
					seriesInfo.rescaleIntercept = 0;
				}
				seriesInfo.deviceType = image.deviceType;
				seriesInfo.pixelSpacing = Cateyes.Utils.isString(image.pixelSpacing) && castNumber(image.pixelSpacing.split('\\'));
				seriesInfo.patientOrientation = image.patientOrientation;
				seriesInfo.recommendedDisplayFrameRate = image.recommendedDisplayFrameRate;
				seriesInfo.imageOrientationPatient = Cateyes.Utils.isString(image.imageOrientationPatient) && castNumber(image.imageOrientationPatient.split('\\'));
				seriesInfo.orientation = Cateyes.DicomHelper.getImageOrientation(seriesInfo.imageOrientationPatient);
				seriesInfo.isFinished = true;
			}
		},
		/**
		 * 汇总影像信息
		 */
		_loadFrameInfo: function(frames, image) {
			for (var i = 0, f; f = frames[i++];) {
				f.info = image;
			}
		},
		/**
		 * 合并多个帧为一个序列
		 * @return {[type]} [description]
		 */
		mergeFrame: function() {

		},
		/**
		 * 获取序列
		 */
		getSeries: function(seriesId) {
			if (Cateyes.Utils.isNumber(seriesId)) {
				return this.serieses && this.serieses[seriesId];
			} else {
				return this.seriesMap && this.seriesMap[seriesId];
			}
		},
		/**
		 * 通过索引获取序列
		 */
		getSeriesByIndex: function(index) {
			index = index || 0;
			return this.serieses[index];
		},
		/**
		 * 获取序列个数
		 */
		getSeriesCount: function() {
			return this.serieses.length;
		},
		loadSeriesFirstDicom: function() {
			this._firstLoadCount || (this._firstLoadCount = 0);
			this._firstLoadCount++;
			if (this._firstLoadCount <= 4) {
				var serieses = this.serieses;
				setTimeout(function() {
					for (var i = 0, s; s = serieses[i++];) {
						s.loadAll();
					}
				}, 1000);
			}
		},
		getMarks: function() {
			var serieses = this.serieses,
				cache = {},
				marks,
				flag = false;
			for (var i = 0, series; series = serieses[i++];) {
				marks = series.getMarks();
				if (marks) {
					flag = true;
					cache[series.info.seriesInstanceUID] = marks;
				}
			}
			return flag ? cache : null;
		},
		setMarks: function(marks) {
			if (marks) {
				var serieses = this.serieses;
				for (var i = 0, series; series = serieses[i++];) {
					if (marks[series.info.seriesInstanceUID]) {
						series.setMarks(marks[series.info.seriesInstanceUID]);
					}
				}
			}
		}
	}
	Study.prototype.constructor = Study;



	/**
	 * 序列
	 */
	var Series = Cateyes.namespace('Cateyes.Entity.Series', function(info, frames, study) {
		//关键影像过滤
		frames = this.filter(study, info, frames);
		if (!frames || frames.length == 0) {
			return;
		}
		this.study = study;
		this.id = Cateyes.UniqueID();
		this.info = info;
		try {
			if (info.extensions) {
				info.extensions = JSON.parse(info.extensions);
			} else {
				info.extensions = {};
			}
		} catch (e) {
			info.extensions = {};
		}
		info._width = info.width;
		info._height = info.height;
		this.adjustQuality();
		info.minGray = frames[0].minGray;
		info.maxGray = frames[0].maxGray;
		//窗宽窗位缺失修正
		this.amendWindow(info);
		//排序
		frames.sort(function(f1, f2) {
			return f1.frameNumber - f2.frameNumber;
		});
		if (frames.length >= 2 && frames[1].info) {
			info.realSliceThickness = Math.abs(frames[1].info.sliceLocation - frames[0].info.sliceLocation) / Math.abs(frames[1].info.instanceNumber - frames[0].info.instanceNumber);
			info.sizeTransform = Math.abs(frames[0].info.sliceLocation - frames[frames.length - 1].info.sliceLocation) / frames.length / info.pixelSpacing[0];
		} else {
			info.realSliceThickness = info.sliceThickness;
			info.sizeTransform = 1;
		}
		this.frames = frames;
		this.loaded = 0;
		DicomHolder.registSeries(this);
		this.AUTO_LOAD && this.loadAll();
		study.seriesCount++;
		study.dicomCount += frames.length;
		this.inited = true;
	});

	Series.prototype = {
		TYPE: 'SERIES',
		AUTO_LOAD: false,
		/**
		 * 调整质量
		 * @return {[type]} [description]
		 */
		adjustQuality: function(quality) {
			var info = this.info;
			if (info.extensions.hasCompress) {
				quality = quality || (Cateyes.getPlat() == 'PHONE' ? 'SPEED' : 'LOSSLESS');
				info.width = Math.floor(info._width / info.extensions.quality[quality]);
				info.height = Math.floor(info._height / info.extensions.quality[quality]);
				info.imageQuality = quality.toLowerCase();
			}
		},
		filter: function(study, info, frames) {
			var Filter = Cateyes.Entity.KeyImageFilter;
			if (Filter.isOpen()) {
				var res = [];
				for (var i = 0, item; item = frames[i++];) {
					if (Filter.contains(study.studyInfo.studyInstanceUID, info.seriesInstanceUID, item.instanceNumber)) {
						res.push(item);
					}
				}
				return res;
			} else {
				return frames;
			}
		},
		amendWindow: function(info) {
			var gtc = Cateyes.DicomHelper.grayToCT;
			if (info.windowWidth == 0 && info.windowCenter == 0) {
				var minCT = gtc(info.minGray, info),
					maxCT = gtc(info.maxGray, info);
				info.windowWidth = maxCT - minCT + 1;
				info.windowCenter = Math.round((maxCT - minCT) / 2);
			}
		},
		/**
		 * 获取信息
		 * @return {[type]} [description]
		 */
		getInfo: function() {
			return this.info;
		},
		/**
		 * 获取一个迭代器
		 */
		getIterator: function() {
			var self = this;
			return this.frames ? new Iterator(function(index) {
				return self.getDicom(index);
			}, function() {
				return self.getTotal();
			}, function() {
				return self.getLoadedCount();
			}) : null;
		},
		/**
		 * 总数
		 */
		getTotal: function() {
			return this.frames && this.frames.length || 0;
		},
		/**
		 * 获取已加载个数
		 */
		getLoadedCount: function() {
			return this.loaded;
		},
		/**
		 * 已缓存全部
		 * @return {Boolean} [description]
		 */
		isCachedAll: function() {
			return this.getLoadedCount() == this.getTotal();
		},
		/**
		 * 获取已加载
		 */
		getLoaded: function() {
			return this._dicoms;
		},
		/**
		 * 获取dicom
		 */
		getDicom: function(index, silent) {
			if (this.frames[index]) {
				var dicoms = this._dicoms = this._dicoms || [];
				if (!dicoms[index]) {
					dicoms[index] = this._fetchDicom(this.frames[index], index);
					dicoms[index].index = index;
					dicoms[index].info = this._castSomeAttributes(this.frames[index].info);
					if (this.marks && this.marks[dicoms[index].info.instanceNumber]) {
						dicoms[index].marks = this._deserializeMarks(this.marks[dicoms[index].info.instanceNumber]);
					}
					//console.log('LOAD:' + index);
				}
				silent || this.preLoad(index);
				return dicoms[index];
			}
		},
		_castSomeAttributes: function(obj) {
			if (obj.imageOrientationPatient && Cateyes.Utils.isString(obj.imageOrientationPatient)) {
				obj.imageOrientationPatient = castNumber(obj.imageOrientationPatient.split('\\'));
			}
			if (obj.imagePositionPatient && Cateyes.Utils.isString(obj.imagePositionPatient)) {
				obj.imagePositionPatient = castNumber(obj.imagePositionPatient.split('\\'));
			}
			if (obj.pixelSpacing && Cateyes.Utils.isString(obj.pixelSpacing)) {
				obj.pixelSpacing = castNumber(obj.pixelSpacing.split('\\'));
			}
			return obj;
		},
		/**
		 * 拉取dicom数据
		 * @return {[type]} [description]
		 */
		_fetchDicom: function(dicomInfo, index) {
			if (dicomInfo.type = 'PNG') {
				return this._fetchImageDicom(dicomInfo);
			} else {
				return this._fetchSimpleDicom(dicomInfo);
			}
		},
		_fetchSimpleDicom: function(dicomInfo) {
			var self = this;
			return $.ajax({
				url: Cateyes.IMAGE_RESOUCE_PREFIX + dicomInfo.uri,
				type: 'GET'
			}).then(function(data) {
				return self.loadedDicom(new SimpleDicom(data));
			});
		},
		_fetchImageDicom: function(dicomInfo) {
			var $q = $.Deferred(),
				img = ImagePool.get(),
				self = this;
			var uri = JSON.parse(dicomInfo.uri);

			var src;
				src = uri[this.info.imageQuality || 'lossless'];

				if(uri.lossless =='3baae4de301733a9b731a54118da0d75'){
					src=uri.hd;
				}
			img.src = Cateyes.IMAGE_RESOUCE_PREFIX + src;
			img.onload = function() {

				dicomInfo.info.width = img.width;

				dicomInfo.info.height = img.height;
				var d = self.loadedDicom(new ImageDicom(dicomInfo, img, $q))
				$q.resolve(d);
			}
			return $q;
		},
		loadedDicom: function(dicom) {
			this.loaded++;
			if (this.loaded == 1) {
				this.study.loadSeriesFirstDicom();
			}
			Cateyes.GlobalPubSub.publish('AFTER_DICOM_LOADED', {
				loaded: this.loaded,
				total: this.getTotal(),
				series: this,
				dicom: dicom
			});
			return dicom;
		},
		/**
		 * 预加载机制
		 */
		_START_PRELOAD_OFFSET: 10,
		_PRELOAD_NUMBER: 20,
		_PHONE_PRELOAD_NUMBER: 20,
		_PHONE_PRELOAD_OFFSET: 10,
		preLoad: function(index) {
			if (Cateyes.getPlat() == 'PHONE') {
				var peace = this._PHONE_PRELOAD_NUMBER;
				var offset = index % peace,
					start = index - offset,
					end = Math.min(this.getTotal(), start + peace);
				for (var i = start; i < end; i++) {
					this.getDicom(i, true);
				}
				//加载下一块
				if (offset == (peace - this._PHONE_PRELOAD_OFFSET)) {
					start += peace;
					end = Math.min(this.getTotal(), start + peace);
					for (var i = start; i < end; i++) {
						this.getDicom(i, true);
					}
				}
			} else {
				if (index == 0) {
					this._preloadedCount = 1;
					return;
				}
				var preloadedCount = this._preloadedCount;
				if (index + this._START_PRELOAD_OFFSET >= preloadedCount) {
					var start = preloadedCount,
						end = Math.min(this.getTotal(), this._preloadedCount += this._PRELOAD_NUMBER);
					for (var i = start; i < end; i++) {
						this.getDicom(i, true);
					}
				}
			}
		},
		loadAll: function() {
			//手机端无加载全部
			if (Cateyes.getPlat() == 'PHONE') {
				return;
			}
			for (var i = 0, l = this.frames.length; i < l; i++) {
				this.getDicom(i);
			}
		},
		getMarks: function() {
			var dicoms = this._dicoms,
				cache = {},
				marksJson = [],
				flag = false;
			if (dicoms && dicoms.length) {
				for (var k = 0, dicom; dicom = dicoms[k++];) {
					if (dicom.marks && dicom.marks.length) {
						let marks = dicom.marks;
						marksJson = [];
						for (var m = 0, mark; mark = marks[m++];) {
							marksJson.push(mark.serialize());
						}
						cache[dicom.info.instanceNumber] = marksJson;
						flag = true;
					}
				}
			}
			return flag ? cache : null;
		},
		setMarks: function(marks) {
			this.marks = marks;
		},
		_deserializeMarks: function(marks) {
			if (marks && marks.length) {
				var res = [],
					MarkFactory = Cateyes.MarkFactory;
				for (var i = 0, m; m = marks[i++];) {
					res.push(MarkFactory.create(m.type, m.params));
				}
				return res;
			}
		}
	}
	Series.prototype.constructor = Series;


	/**
	 * Dicom 基类
	 */
	var Dicom = Cateyes.namespace('Cateyes.Entity.Dicom', function(info) {
		this.info = info;
	});

	Dicom.prototype = {
		TYPE: 'DICOM',
		/**
		 * 获取信息
		 */
		getInfo: function() {
			return this.info;
		},
		/**
		 * 获取像素数据
		 * @return {[type]} [description]
		 */
		getPixelData: function() {
			throw new Error('getPixelData 方法未在子类中实现')
		}
	};

	/**
	 * 简单Dicom类
	 *
	 * 像素数据以json格式存储
	 *
	 * @param  {[type]} )      {	}         [description]
	 * @param  {[type]} {	}) [description]
	 * @return {[type]}        [description]
	 */
	var SimpleDicom = Cateyes.namespace('Cateyes.Entity.SimpleDicom', Cateyes.ClassHelper.extend(Dicom, function(info) {
		this.info = info;
		this.isLoaded = true;
	}, {
		/**
		 * 获取像素数据
		 * @return {[type]} [description]
		 */
		getPixelData: function() {
			return this.info.pixelData;
		}
	}));



	/**
	 * Image对象池
	 * @type {Object}
	 */
	var ImagePool = {
		imgs: [],
		get: function() {
			if (this.imgs.length) {
				return this.imgs.shift();
			} else {
				return new Image();
			}
		},
		recover: function(img) {
			img && this.imgs.push(img);
		}
	};

	/**
	 * 图片压缩型Dicom类
	 *
	 * 像素数据以图像格式压缩存储
	 *
	 * @param  {[type]} )      {	}         [description]
	 * @param  {[type]} {	}) [description]
	 * @return {[type]}        [description]
	 */
	var ImageDicom = Cateyes.namespace('Cateyes.Entity.ImageDicom', Cateyes.ClassHelper.extend(Dicom, function(info, img, $q) {
		this.info = info;
		this.dicomInfo = info.info;
		if (info && info.info && info.info.extensions) {
			try {
				info.extensions = JSON.parse(info.info.extensions);
			} catch (e) {}
		}
		this._img = img;
		this.$q = $q;
		var self = this;
		this.$q.dicomInfo = info.info;
		this.$q.getPixelData = function() {
			return self.getPixelData();
		}
		this.isLoaded = true;
	}, {
		cvs: (function() {
			var cvs = document.createElement('canvas');
			cvs.ctx = cvs.getContext('2d');
			return cvs;
		})(),
		depressList: [],
		CACHE_DEPRESS: true, //是否缓存解压（空间换时间）
		CACHE_DEPRESS_COUNT: (Cateyes.getPlat() == 'PC' ? 0 : 5), //缓存保存个数
		/**
		 * 获取像素数据
		 * @return {[type]} [description]
		 */
		getPixelData: function() {
			if (this.CACHE_DEPRESS) {
				if (!this.info.pixelData) {
					this.info.pixelData = this._depress(this._img);
				}
				return this.info.pixelData;
			} else {
				return this._depress(this._img);
			}
		},
		getImage: function() {
			return this._img;
		},
		_depress: function(img) {
			var cvs = this.cvs,
				ctx = cvs.ctx;
			if (cvs.width != img.width || cvs.height != img.height) {
				cvs.width = img.width;
				cvs.height = img.height;
			}
			this.width = cvs.width;
			this.height = cvs.height;
			ctx.drawImage(img, 0, 0, cvs.width, cvs.height);
			var panel = ctx.getImageData(0, 0, img.width, img.height),
				pixelData = panel.data;
			var grays = [],
				offset = this.info.minGray < 0 ? Math.abs(this.info.minGray) : 0;
			if (this.info.info.samplesPerPixel == 1) {
				for (var i = 0, l = pixelData.length; i < l; i += 4) {
					var gray = (pixelData[i + 0] << 16) + (pixelData[i + 1] << 8) + pixelData[i + 2];
					grays.push(gray - offset);
				}
			} else {
				grays = pixelData;
			}
			if (this.CACHE_DEPRESS) {
				this.depressList.push(this);
				if (this.CACHE_DEPRESS_COUNT > 0 && this.CACHE_DEPRESS_COUNT < this.depressList.length) {
					this.depressList.shift().info.pixelData = null;
				}
			}
			return grays;
		}
	}));


	Dicom.prototype.constructor = Dicom;

	/**
	 * 关键影像过滤
	 */
	Cateyes.namespace('Cateyes.Entity.KeyImageFilter', {
		open: false,
		_filter: null,
		isOpen: function() {
			return this.open;
		},
		addFilter: function(filter) {
			if (this._filter == null) {
				this.open = true;
				this._filter = filter
			}
		},
		contains: function(studyInstanceUID, seriesInstanceUID, instanceNumber) {
			var filter = this._filter;
			return (filter[studyInstanceUID] && filter[studyInstanceUID][seriesInstanceUID] && filter[studyInstanceUID][seriesInstanceUID][instanceNumber]);
		}
	});
})();
