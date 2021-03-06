// 工具栏
$(function () {

	//工具栏事件中介
	var ToolbarPubSub = (function () {
		var tps = $({});
		tps.EVENTS = {
			BIND_OPERATE: 'BIND_OPERATE',
			SELECTED_MODE: 'SELECTED_MODE',
			CHANGED_STATE: 'CHANGED_STATE',
			REFRESH_TOOLBAR_STATUS: 'REFRESH_TOOLBAR_STATUS',
			DOCUMENT_CLICK: 'DOCUMENT_CLICK'
		};
		return tps;
	})();

	//预设窗宽窗位常量
	var WINDOW_CONSTANT = {
		DEFAULT: "SET_WINDOW|{windowWidth:'DEFAULT',windowCenter:'DEFAULT'}",
		FULL: "SET_WINDOW|{windowWidth:'FULL',windowCenter:'FULL'}",
		'FQ': 'SET_WINDOW|{windowWidth:350,windowCenter:50}',
		'NC': 'SET_WINDOW|{windowWidth:120,windowCenter:40}',
		'GC': 'SET_WINDOW|{windowWidth:150,windowCenter:50}',
		'FC': 'SET_WINDOW|{windowWidth:1500,windowCenter:-500}',
		'ZG': 'SET_WINDOW|{windowWidth:300,windowCenter:50}',
		'GP': 'SET_WINDOW|{windowWidth:400,windowCenter:40}',
		'GUC': 'SET_WINDOW|{windowWidth:1300,windowCenter:350}',
		'CUSTOM': 'CUSTOM_WINDOW'
	};

	//操作事件
	var Operate = (function () {
		var Operate = {
			working: true,
			mouseKeyRel: {
				'0': 'LEFT',
				'1': 'MIDDLE',
				'2': 'RIGHT'
				// 'SCROLL'
			},
			cis: {
				MIDDLE: Cateyes.InputCovert.getCovert('ZOOM'),
				LEFT: Cateyes.InputCovert.getCovert('CHANGE_WINDOW'),
				RIGHT: Cateyes.InputCovert.getCovert('CHANGE_WINDOW')
			},
			cisName: {
				MIDDLE: 'ZOOM',
				LEFT: 'CHANGE_WINDOW',
				RIGHT: 'CHANGE_WINDOW'
			},
			init: function () {
				var self = this;
				this.initEvent();
				Cateyes.GlobalPubSub.subscribe('STOP_OPERATE', function () {
					self.working = false;
				});
				Cateyes.GlobalPubSub.subscribe('RESTORE_OPERATE', function () {
					self.working = true;
				});
				ToolbarPubSub.on(ToolbarPubSub.EVENTS.BIND_OPERATE, function (ev, data) {
					var type = data.type,
						cmd = data.cmd;
					switch (type) {
						case "global":
							Operate.globalOperate(cmd);
							break;
						case "state":
							Operate.globalOperate(cmd);
							ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.CHANGED_STATE, cmd);
							break;
						case "normal":
							Operate.normalOperate(cmd);
							break;
						case "mode":
							Operate.bindModeOperate(cmd);
							ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.SELECTED_MODE, cmd);
							break;
						case "custom":
							Operate.customOperate(cmd);
					}
				});
			},
			/**
			 * 绑定模式操作
			 * @param  {[type]} mode  [description]
			 * @param  {[type]} mouse [description]
			 * @return {[type]}       [description]
			 */
			bindModeOperate: function (mode, mouse) {
				mouse = mouse || 'LEFT';
				this.cisName[mouse] = mode;
				this.cis[mouse] = Cateyes.InputCovert.getCovert(mode);
			},
			/**
			 * 普通操作
			 */
			normalOperate: function (op) {
				if (op) {
					var viewer = Cateyes.ViewerManager.getCurrentViewer();
					if (viewer) {
						op = op.split('|');
						var cmd = Cateyes.InputCovert.getCovert(op[0], eval('(' + op[1] + ')'))();
						viewer.executeCommond(cmd);
					}
				}
			},
			/**
			 * 全局操作
			 * @return {[type]} [description]
			 */
			globalOperate: function (op) {
				if (op) {
					op = op.split('|');
					var cmd = Cateyes.InputCovert.getCovert(op[0], eval('(' + op[1] + ')'))();
					cmd && cmd();
				}
			},
			/**
			 * 特殊操作
			 * @return {[type]} [description]
			 */
			customOperate: function (cmd) {
				switch (cmd) {
					case "CUSTOM_WINDOW":
						this.showCustomWindow();
				}
			},
			/**
			 * 快捷键定义
			 */
			SHORTCUT_KEY: {
				BIND: {
					'87': 'CHANGE_WINDOW', //w
					'70': 'BROWSE', //f
					'77': 'TRANSLATE', //m
					'90': 'ZOOM', //z
					'76': 'MARK_PYS_LENGTH',
					'69': 'MARK_CT_ELLIPSE',
					'83': 'MARK_CT_RECT',
					'74': 'MARK_PYS_ANGLE',
					'84': 'SHOW_TEXT_MARKER',
					'65': 'MARK_ARROWS',
					'CTRL+17': 'MARK_CT_POINT'
				},
				NORMAL: {
					'CTRL+90': 'CMD_MARK_REVOKE',
					'CTRL+68': 'CMD_MARK_CLEAR',
					'112': WINDOW_CONSTANT.DEFAULT,
					'113': WINDOW_CONSTANT.FULL,
					'114': WINDOW_CONSTANT.FQ,
					'115': WINDOW_CONSTANT.NC,
					'116': WINDOW_CONSTANT.GC,
					'117': WINDOW_CONSTANT.FC,
					'118': WINDOW_CONSTANT.ZG,
					'119': WINDOW_CONSTANT.GP,
					'120': WINDOW_CONSTANT.GUC,
					'57': 'PSEUDOCOLOR',
					'72': 'CMD_TOGGLE_INFO',
					'38': 'BROWSE|"PREV"',
					'40': 'BROWSE|"NEXT"',
					'37': 'ACTIVE_VIEWER|"PREV"',
					'39': 'ACTIVE_VIEWER|"NEXT"',
					'82': 'CMD_RESET',
					'80': 'PLAY'
				},
				CUSTOM: {
					'48': 'CUSTOM_WINDOW'
				}
			},
			/**
			 * 常驻处理
			 * @type {Array}
			 */
			RESIDENT: [Cateyes.InputCovert.getCovert('MARK_REFRESH_BASE')],
			resident: function (viewer) {
				var flag = false;
				if (viewer && this.RESIDENT) {
					for (var i = 0, f; f = this.RESIDENT[i++];) {
						flag = flag || viewer.executeCommond(f());
					}
				}
				return flag;
			},
			/**
			 * 全局事件
			 * @param  {[type]} ev){			var cmd           [description]
			 * @return {[type]}             [description]
			 */
			baseEvent: function (ev) {
				if (!this.working) {
					return;
				}
				var viewer = Cateyes.ViewerManager.getCurrentViewer(),
					touches = ev.originalEvent.touches;
				if (viewer) {
					var self = this;
					// setTimeout(function() {
					if (touches && touches.length == 2) {
						self.twoTouchesOperate(ev.type, touches[0], touches[1]);
					} else {
						var stop = Operate.resident(viewer);
						if (!stop) {
							var ci = Operate.cis[self.mouseKeyRel[ev.button] || 'LEFT'];
							if ('MAGNIFYING_GLASS' == ci) {
								debugger;
							}
							var cmd = ci && ci();
							cmd && viewer.executeCommond(cmd);
						}
					}
					// });
				}
			},
			initEvent: function () {
				var self = this,
					$major = $('.cateyes-major'),
					$document = $(document);
				$major.bind(Cateyes.EVENTS.MOUSE_MOVE, function (ev) {
					self.baseEvent(ev);
				});
				$major.bind(Cateyes.EVENTS.MOUSE_DOWN, function (ev) {
					self.baseEvent(ev);
				});
				$major.bind(Cateyes.EVENTS.MOUSE_UP, function (ev) {
					self.baseEvent(ev);
				});
				//滚轮操作
				$major.mousewheel(function (ev, delta) {
					var $tgt = $(ev.target),
						$viewer;
					if ($tgt.hasClass('cateyes-viewer')) {
						$viewer = $tgt;
					} else {
						$viewer = $tgt.closest('.cateyes-viewer');
					}
					if ($viewer && $viewer.length) {
						var viewer = Cateyes.ViewerManager.getViewerById($viewer.data('cateyes-viewer-id'));
						if (viewer) {
							var cmd = Cateyes.InputCovert.getCovert('BROWSE', delta < 0 ? 'NEXT' : 'PREV')();
							cmd && viewer.executeCommond(cmd);
						}
					}
				});
				//快捷键事件
				var lastMode;
				$document.on('keydown', ':not(input,textarea)', function (ev) {
					if ($(ev.target).is('input,textarea')) {
						return;
					}
					var key = '',
						normalOp = self.SHORTCUT_KEY.NORMAL,
						bindOp = self.SHORTCUT_KEY.BIND,
						customOp = self.SHORTCUT_KEY.CUSTOM,
						cmd;
					if (ev.ctrlKey) {
						key += 'CTRL+';
					}
					key += ev.keyCode;
					if (key == 'CTRL+17' && self.cisName.LEFT != 'MARK_CT_POINT') {
						lastMode = self.cisName.LEFT;
					}
					if (cmd = normalOp[key]) {
						self.normalOperate(cmd);
						return false;
					} else if (cmd = bindOp[key]) {
						$('.dicom-op-mode[data-cmd="' + cmd + '"]').trigger('click');
						return false;
					} else if (cmd = customOp[key]) {
						self.customOperate(cmd);
						return false;
					}
				});
				$document.on('keyup', function (ev) {
					var key = ev.keyCode,
						cmd;
					if (key == '17') {
						$('.dicom-op-mode[data-cmd="' + lastMode + '"]').trigger('click');
					}
				});
				//监听业务事件
				Cateyes.GlobalPubSub.subscribe('AFTER_VIEWER_STATUS_CHANGE', function () {
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS);
				});
				Cateyes.GlobalPubSub.subscribe('ON_VIEWER_ACTIVE', function () {
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS);
				});
			},
			/**
			 * 多触点操作
			 */
			trace: {},
			twoTouchesOperate: function (evType, t0, t1) {
				var trace = this.trace,
					viewer = Cateyes.ViewerManager.getCurrentViewer(),
					state = viewer.positioner.getState(),
					distance = Cateyes.MathUtils.getDistance(t0.pageX, t0.pageY, t1.pageX, t1.pageY);
				if (evType == "touchstart") {
					var CanvasMouse = viewer.positioner.getMouseXYofCanvas((t0.pageX + t1.pageX) / 2, (t0.pageY + t1.pageY) / 2);
					trace._zoomAmendX = CanvasMouse.width / 2 - CanvasMouse.x;
					trace._zoomAmendY = CanvasMouse.height / 2 - CanvasMouse.y;
					trace._zoomStartDistance = distance;
					trace._translateStartX = (t0.pageX + t1.pageX) >> 1;
					trace._translateStartY = (t0.pageY + t1.pageY) >> 1;
					if (CanvasMouse.x < 0 || CanvasMouse.x > CanvasMouse.width) {
						trace._zoomAmendX = 0;
					}
					if (CanvasMouse.y < 0 || CanvasMouse.y > CanvasMouse.height) {
						trace._zoomAmendY = 0;
					}
				}
				if (evType == "touchmove") {
					var changeScale = (distance - trace._zoomStartDistance) * 0.01;
					trace._zoomStartDistance = distance;

					var nowTranslateStartX = (t0.pageX + t1.pageX) >> 1,
						nowTranslateStartY = (t0.pageY + t1.pageY) >> 1,
						offsetX = nowTranslateStartX - trace._translateStartX,
						offsetY = nowTranslateStartY - trace._translateStartY;
					trace._translateStartX = nowTranslateStartX;
					trace._translateStartY = nowTranslateStartY;
					//平移 and 缩放
					if (changeScale > 0 || state.scale > 0.2) {
						var cmd = Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
							_: {
								scale: changeScale,
								x: changeScale * trace._zoomAmendX + offsetX,
								y: changeScale * trace._zoomAmendY + offsetY
							}
						});
						viewer.executeCommond(cmd);
					}
				}
			}
		};
		Operate.init();
		return Operate;
	})();


	//菜单
	(function () {
		//1.顶部菜单
		(function () {
			var configs = [{
					name: '浏览 F',
					type: 'mode',
					icon: 'browse',
					cmd: 'BROWSE'
				}, {
					name: '平移 M',
					type: 'mode',
					icon: 'translate',
					cmd: 'TRANSLATE'
				}, {
					name: '窗宽窗位 W',
					type: 'mode',
					icon: 'window',
					cmd: 'CHANGE_WINDOW',
					active: true
				}, {
					name: '视图多窗',
					icon: 'viewergrid',
					className: 'multi-window'
				}, {
					name: '多图',
					icon: 'imagegrid',
					className: 'multi-viewer'
				},
				/* {
								name: '放大镜 F',
								type: 'mode',
								icon: 'magnifying_glass',
								cmd: 'MAGNIFYING_GLASS'
							},*/
				{
					name: '缩放',
					type: 'mode',
					icon: 'zoom',
					cmd: 'ZOOM'
				}, {
					name: '单点CT',
					type: 'mode',
					icon: 'pointct',
					cmd: 'MARK_CT_POINT'
				}, {
					name: '还原',
					type: 'normal',
					icon: 'reset',
					cmd: 'CMD_RESET'
				}, {
					name: '播放',
					type: 'normal',
					icon: 'play',
					cmd: 'PLAY'
				}, {
					name: '快照',
					type: 'normal',
					icon: 'snapshoot',
					cmd: 'SNAPSHOOT'
				}
			];

			var $headerTools = $('.header-toolbar-main'),
				html = [];
			for (var i = 0, temp; temp = configs[i++];) {
				html.push('<li class="tool op-mode-' + temp.cmd + ' ' + (temp.className || '') + (temp.active ? ' active ' : '') + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" title="' + temp.name + '"><i class="nav-icon nav-icon-' + temp.icon + '"></i></li>');
			}
			$headerTools.html(html.join(''));
		})();

		//多窗
		(function () {
			var $trigger = $('.multi-window'),
				$windows,
				html = [];
			html.push('<div class="multi-window-grid">');
			for (var i = 0; i < 12; i++) {
				html.push('<div class="multi-window-grid-cell" data-row="' + Math.floor(i / 4 + 1) + '" data-col="' + Math.floor(i % 4 + 1) + '"></div>');
			}
			html.push('</div>');
			$windows = $(html.join(''));
			$trigger.append($windows);
			var $allCell = $('.multi-window-grid-cell', $windows);
			var timer = null;
			$trigger.on('click touchstart', function (ev) {
				var $tgt = $(ev.target);
				if ($tgt.hasClass('multi-window-grid-cell')) {
					var row = $tgt.data('row'),
						col = $tgt.data('col');
					$windows.hide();
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
						type: 'global',
						cmd: ('VIEWER_GRID|{rows:' + row + ',cols:' + col + '}')
					});
				} else {
					clearTimeout(timer);
					$windows.show();
				}
			});
			$windows.on('mousemove', '.multi-window-grid-cell', function () {
				var $tgt = $(this),
					row = $tgt.data('row'),
					col = $tgt.data('col');
				clearTimeout(timer);
				$allCell.removeClass('hover');
				for (var i = 1; i <= row; i++) {
					for (var j = 1; j <= col; j++) {
						$allCell.eq((i - 1) * 4 + j - 1).addClass('hover');
					}
				}
			});
			$windows.on('mouseleave', function () {
				$allCell.removeClass('hover');
				clearTimeout(timer);
				timer = setTimeout(function () {
					$windows.hide();
				}, 500);
			});
		})();

		//多图
		(function () {
			var $trigger = $('.multi-viewer'),
				$windows,
				html = [];
			html.push('<div class="multi-window-grid">');
			for (var i = 0; i < 12; i++) {
				html.push('<div class="multi-window-grid-cell" data-row="' + Math.floor(i / 4 + 1) + '" data-col="' + Math.floor(i % 4 + 1) + '"></div>');
			}
			html.push('</div>');
			$windows = $(html.join(''));
			$trigger.append($windows);
			var $allCell = $('.multi-window-grid-cell', $windows);
			var timer = null;
			$trigger.on('click touchstart', function (ev) {
				var $tgt = $(ev.target);
				if ($tgt.hasClass('multi-window-grid-cell')) {
					var row = $tgt.data('row'),
						col = $tgt.data('col');
					$windows.hide();
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
						type: 'global',
						cmd: ('VIEWER_MULTI|{rows:' + row + ',cols:' + col + '}')
					});
				} else {
					clearTimeout(timer);
					$windows.show();
				}
			});
			$windows.on('mousemove', '.multi-window-grid-cell', function () {
				var $tgt = $(this),
					row = $tgt.data('row'),
					col = $tgt.data('col');
				clearTimeout(timer);
				$allCell.removeClass('hover');
				for (var i = 1; i <= row; i++) {
					for (var j = 1; j <= col; j++) {
						$allCell.eq((i - 1) * 4 + j - 1).addClass('hover');
					}
				}
			});
			$windows.on('mouseleave', function () {
				$allCell.removeClass('hover');
				clearTimeout(timer);
				timer = setTimeout(function () {
					$windows.hide();
				}, 500);
			});
		})();

		//2.窗宽窗位
		(function () {
			var $windowWidth = $('.header-window-width-input'),
				$windowCenter = $('.header-window-center-input'),
				$windowTrigger = $('.header-window-trigger'),
				oldValue = {
					lastWindowWidth: ($windowWidth.val() || 0),
					lastWindowCenter: ($windowCenter.val() || 0)
				};
			$('.header-window-width-input,.header-window-center-input').on('input', function (ev) {
				var val = this.value;
				if (val != '-' && isNaN(+val)) {
					this.value = oldValue[$(this).hasClass('header-window-width-input') ? 'lastWindowWidth' : 'lastWindowCenter'];
				} else {
					oldValue[$(this).hasClass('header-window-width-input') ? 'lastWindowWidth' : 'lastWindowCenter'] = val;
				}
			});
			$windowTrigger.on('touchstart click', function () {
				ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
					type: 'normal',
					cmd: ('SET_WINDOW|{windowWidth:' + $windowWidth.val() + ',windowCenter:' + $windowCenter.val() + '}')
				});
			});
			$windowWidth.on('keydown', function (ev) {
				if (ev.keyCode == 13) {
					$windowTrigger.trigger('click');
				}
			});
			$windowCenter.on('keydown', function (ev) {
				if (ev.keyCode == 13) {
					$windowTrigger.trigger('click');
				}
			});
			Cateyes.GlobalPubSub.subscribe('ON_VIEWER_WINDOW_CHANGE', function () {
				var currentViewer = Cateyes.ViewerManager.getCurrentViewer();
				if (currentViewer) {
					var state = currentViewer.getTinter().state;
					if (state) {
						$windowWidth.val(oldValue.lastWindowWidth = state.windowWidth);
						$windowCenter.val(oldValue.lastWindowCenter = state.windowCenter);
					}
				}
			});
			//预设窗宽窗位
			var $windowSelector = $('.header-window-selector'),
				windowSelectHtml = [],
				windowSelectItems = [{
					name: 'F1 默认',
					type: 'normal',
					cmd: WINDOW_CONSTANT.DEFAULT
				}, {
					name: 'F2 全窗',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FULL
				}, {
					name: 'F3 腹腔(350,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FQ
				}, {
					name: 'F4 脑窗(120,40)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.NC
				}, {
					name: 'F5 肝窗(150,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GC
				}, {
					name: 'F6 肺窗(1500,-500)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FC
				}, {
					name: 'F7 纵膈(300,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.ZG
				}, {
					name: 'F8 骨盆(400,40)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GP
				}, {
					name: 'F9 骨窗(1300,350)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GUC
				}];
			windowSelectHtml.push('<ul class="window-combobox sunset-combobox">');
			for (var i = 0, item; item = windowSelectItems[i++];) {
				windowSelectHtml.push('<li data-cmd="' + item.cmd + '">' + item.name + '</li>')
			}
			windowSelectHtml.push('</ul>');
			var $selector = $(windowSelectHtml.join(''));
			$windowSelector.append($selector);
			$windowSelector.on('click touchstart', function (ev) {
				var $tgt = $(ev.target),
					cmd = $tgt.data('cmd');
				if (cmd) {
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
						type: 'normal',
						cmd: cmd
					});
				}
				$selector.toggle();
				return false;
			});
			ToolbarPubSub.on(ToolbarPubSub.EVENTS.DOCUMENT_CLICK, function () {
				$selector.hide();
			});
		})();

		//伪彩，反色，旋转，反转
		(function () {
			var configs = [{
					name: '反色',
					type: 'normal',
					icon: 'inverse',
					cmd: 'INVERSE'
				}, {
					name: '伪彩',
					type: 'normal',
					icon: 'pseudocolor',
					cmd: 'PSEUDOCOLOR'
				}],
				html = [];
			for (var i = 0, temp; temp = configs[i++];) {
				html.push('<div class="mini-tool tool" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" style="margin-left: 8px;"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></div>');
			}
			$('.header-window-selector').after($(html.join('')));
			var configs2 = [{
				name: '左转90度',
				type: 'normal',
				icon: "rotate_left",
				cmd: "ROTATE_LEFT"
			}, {
				name: '右转90度',
				type: 'normal',
				icon: 'rotate_right',
				cmd: 'ROTATE_RIGHT'
			}, {
				name: '水平翻转',
				type: 'normal',
				icon: 'horizontal_turn',
				cmd: 'HORIZONTAL_TURN'
			}, {
				name: '垂直翻转',
				type: 'normal',
				icon: 'vertical_turn',
				cmd: 'VERTICAL_TURN'
			}];
			html = ['<li>'];
			for (var i = 0, temp; temp = configs2[i++];) {
				html.push('<div class="mini-tool tool" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></div> ');
				if (i == 2) {
					html.push('</li><li>');
				}
			}
			html.push('</li>');
			$('.header-rotate').append($(html.join('')));
		})();

		//各种标注
		(function () {
			var configs = [{
				name: '箭头',
				type: 'mode',
				icon: 'arrows',
				cmd: 'MARK_ARROWS'
			}, {
				name: '文字',
				type: 'mode',
				icon: 'text',
				cmd: 'SHOW_TEXT_MARKER'
			}, {
				line: true
			}, {
				name: '涂鸦',
				type: 'mode',
				icon: 'scrawl',
				cmd: "MARK_SCRAWL"
			}, {
				name: '直线',
				type: 'mode',
				icon: 'line',
				cmd: "MARK_PYS_LENGTH"
			}, {
				name: '角度',
				type: 'mode',
				icon: 'angle',
				cmd: 'MARK_PYS_ANGLE'
			}, {
				name: '矩形',
				type: 'mode',
				icon: 'rect',
				cmd: 'MARK_CT_RECT'
			}, {
				name: '椭圆',
				type: 'mode',
				icon: 'ellipse',
				cmd: 'MARK_CT_ELLIPSE'
			}, {
				line: true
			}, {
				name: '撤销（ctrl+z）',
				type: 'normal',
				icon: 'mark_revoke',
				cmd: 'CMD_MARK_REVOKE'
			}, {
				name: '全部清除',
				type: 'normal',
				icon: 'mark_clear',
				cmd: 'CMD_MARK_CLEAR'
			}];

			var html = [];
			for (var i = 0, temp; temp = configs[i++];) {
				if (temp.line) {
					html.push('<li class="line"></li>');
					continue;
				}
				html.push('<li class="mini-tool tool op-mode-' + temp.cmd + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" title="' + temp.name + '"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></li>')
			}
			$('.left-side-toolbar-wrap').append($(html.join('')));
		})();

		//高级操作
		(function () {
			var $ext = $('.header-toolbar-ext');
			$ext.append($([
				//'<li class="tool op-mode-KEYIMAGE" data-type="normal" data-cmd="KEYIMAGE" title="标记关键帧"><i class="nav-icon nav-icon-keyimage"></i></li>',
				'<li class="tool" data-type="global" data-cmd="MPR_REBUILD" title="MPR重建"><i class="nav-icon nav-icon-mpr"></i></li>',
				'<li class="toolbar-setting" title="设置"><i class="nav-icon nav-icon-setting"></i></li>'
			].join('')));
			//设置
			var $settingTrigger = $('.toolbar-setting'),
				html = [];
			var configs = [{
				name: '全屏',
				cmd: 'TOGGLE_FULLSCREEN',
				type: 'global'
			}, {
				name: '显示定位线',
				cmd: 'TOGGLE_POSITION_LINE',
				type: 'state',
				active: true
			}, {
				name: '四角信息',
				cmd: 'TOGGLE_INFO',
				type: 'state',
				active: true
			}];
			html.push('<ul class="toolbar-settion-wrapper sunset-combobox" style="display: none;position: absolute;top: 30px;' + ($(window).width() <= 1024 ? 'right: 0px;left: auto;' : '') + '">');
			for (var i = 0, temp; temp = configs[i++];) {
				html.push('<li class="tool op-state-' + temp.cmd + ' ' + (temp.active ? 'active' : '') + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '"><i class="icon-ok"></i>' + temp.name + '</li>');
			}
			html.push('</ul>');
			var $setting = $(html.join('')),
				timer = null;
			$settingTrigger.append($setting).on(Cateyes.EVENTS.CLICK, function (ev) {
				var $tgt = $(ev.target),
					cmd = $tgt.data('cmd');
				clearTimeout(timer);
				$setting.toggle();
			});
			$setting.on('mouseleave', function () {
				clearTimeout(timer);
				timer = setTimeout(function () {
					$setting.hide();
				}, 500);
			});
			//全屏事件
			var $fullScreen = $('li.op-state-TOGGLE_FULLSCREEN');
			(function () {
				function refresh(isFull) {
					$fullScreen[isFull ? 'addClass' : 'removeClass']('active');
					Cateyes.GlobalPubSub.publish('AFTER_TOGGLE_FULLSCREEN', isFull);
				}
				var topDoc = window.top.document;
				topDoc.addEventListener("fullscreenchange", function () {
					refresh(topDoc.fullscreen);
				}, false);
				topDoc.addEventListener("mozfullscreenchange", function () {
					refresh(topDoc.mozFullScreen);
				}, false);
				topDoc.addEventListener("webkitfullscreenchange", function () {
					refresh(topDoc.webkitIsFullScreen);
				}, false);
				topDoc.addEventListener("msfullscreenchange", function () {
					refresh(topDoc.msFullscreenElement);
				}, false);
			})();
		})();

		//收起序列影像
		(function () {
			var $trigger = $('.left-side-trigger'),
				$mainContainer = $('.main-container');
			$trigger.on('click touchstart', function () {
				$mainContainer.toggleClass('close');
			});
		})();
	})();


	//事件绑定
	(function () {
		//工具栏
		$('.header,.left-side-toolbar').on(Cateyes.EVENTS.CLICK, '.tool', function () {
			var $this = $(this);
			ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
				type: $this.data('type'),
				cmd: $this.data('cmd')
			});
		});
		$(document).on('click touchstart', function () {
			ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.DOCUMENT_CLICK);
		});
		//钩子事件
		ToolbarPubSub.on(ToolbarPubSub.EVENTS.SELECTED_MODE, function (ev, op) {
			$('.tool.active').removeClass('active');
			$('.op-mode-' + op).addClass('active');
		});
		ToolbarPubSub.on(ToolbarPubSub.EVENTS.CHANGED_STATE, function (ev, op) {
			$('.op-state-' + op).toggleClass('active');
		});
		ToolbarPubSub.on(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS, function (ev) {
			var viewer = Cateyes.ViewerManager.getCurrentViewer();
			//播放状态
			if (viewer) {
				$(".nav-icon-play").css({
					'background-position': (viewer.player.isPlaying() ? '-391px center' : '-210px center')
				});
			} else {
				$(".nav-icon-play").css({
					'background-position': '-210px center'
				});
			}
		});

	})();


	//右键菜单
	(function () {
		var config = [{
			name: '还原',
			type: 'normal',
			cmd: 'CMD_RESET'
		}, {
			name: '撤销测量',
			type: 'normal',
			cmd: 'CMD_MARK_REVOKE'
		}, {
			name: '清除测量',
			type: 'normal',
			cmd: 'CMD_MARK_CLEAR'
		}, {
			name: '窗宽窗位',
			type: 'mode',
			cmd: 'CHANGE_WINDOW'
		}, {
			name: '单点CT',
			type: 'mode',
			cmd: 'MARK_CT_POINT'
		}, {
			name: '负片',
			type: 'normal',
			cmd: 'INVERSE'
		}, {
			name: '浏览',
			type: 'mode',
			cmd: 'BROWSE'
		}, {
			name: '平移',
			type: 'mode',
			cmd: 'TRANSLATE'
		}, {
			name: '缩放',
			type: 'mode',
			cmd: 'ZOOM'
		}, {
			name: '四角信息',
			type: 'normal',
			cmd: 'CMD_TOGGLE_INFO'
		}];
		var html = [],
			$document = $(document);
		for (var i = 0, temp; temp = config[i++];) {
			html.push('<li data-type="' + temp.type + '" data-cmd="' + temp.cmd + '">' + temp.name + '</li>')
		}
		var $menu = $('<div class="sunset-content-menu"><ul class="sunset-combobox">' + html.join('') + '</ul></div>').appendTo($('body')).hide();
		$document["bind"]("contextmenu", function (ev) {
			if (Cateyes.Mouse.startX == ev.pageX && Cateyes.Mouse.startY == ev.pageY) {
				$menu.css({
					display: 'block',
					position: 'absolute',
					top: ev.pageY,
					left: ev.pageX
				}).show();
			}
			return false;
		});
		$menu.on('click', 'li', function () {
			var $this = $(this),
				type = $this.data('type'),
				cmd = $this.data('cmd');
			switch (type) {
				case "global":
					Operate.globalOperate(cmd);
					break;
				case "normal":
					Operate.normalOperate(cmd);
					break;
				case "mode":
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
						type: 'mode',
						cmd: cmd
					});
					break;
				case "custom":
					Operate.customOperate(cmd);
			}
			$menu.hide();
		});
		$document.bind(Cateyes.EVENTS.MOUSE_DOWN, function (ev) {
			if ($(ev.target).closest('.sunset-content-menu').length == 0) {
				$menu.hide();
			}
		});
	})();


	//影像类型屏蔽功能
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
	if (getQueryString('imageType') == 'EYE') {
		$(".op-mode-MARK_CT_RECT").hide();
		$(".op-mode-MARK_CT_ELLIPSE").hide();
		$(".header-window-selector").hide();
	}

});