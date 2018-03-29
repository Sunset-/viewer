/**
 * Dicom服务（处理加载/格式化/缓存）
 *
 * author : fanll
 *
 * createTime : 2015-07-30
 *
 */
(function() {

	var DicomService = Cateyes.namespace('Cateyes.DicomService', {
		cache: {},
		studies: [],
		/**
		 * 获取多个检查
		 */
		getStudies: function(studyIds, keysUrl) {
			var defs = [];
			if (keysUrl) {
				var self = this;
				return this.getKeys(keysUrl).then(function(keys) {
					Cateyes.Entity.KeyImageFilter.addFilter(keys);
					for (var i = 0, id; id = studyIds[i++];) {
						defs.push(self.getStudy(id));
					}
					return $.when.apply($, defs);
				})
			} else {
				for (var i = 0, id; id = studyIds[i++];) {
					defs.push(this.getStudy(id));
				}
				return $.when.apply($, defs);
			}
		},
		/**
		 * 获取检查
		 */
		getStudy: function(studyId) {
			var self = this;
			if(self.cache[studyId]){
				return Promise.resolve(self.cache[studyId]);
			}else{
				return self._fetchStudyInfo(studyId);
			}
			// return Promise.resolve().then(function(){
			// 	debugger;
			// 	return self.cache[studyId] || (self.cache[studyId] = self._fetchStudyInfo(studyId));
			// });
		},
		/**
		 * 获取关键影像索引
		 */
		getKeys: function(keysUrl) {
			return $.ajax({
				url: keysUrl,
				type: 'GET'
			}).then(function(res) {
				if (res && res.code == 200 && res.data && res.data.data) {
					var keys = {};
					try {
						keys = JSON.parse(res.data.data[0].keyDcm);
					} catch (e) {}
					return keys;
				}
			});
		},
		/**
		 * 获取所有检查
		 *
		 * @param  {[type]} studyId [description]
		 * @return {[type]}         [description]
		 */
		getAllStudies: function() {
			return this.studies;
		},
		_fetchStudyInfo: function(studyId) {
			var self = this;
			Cateyes.loading();
			return $.ajax({
				url: studyId,
				type: 'GET',
				cache: true,
				headers: {
					Accept: 'application/json, text/plain, */*'
				},
			}).then(function(res) {
				Cateyes.loading(false);
				if (res && res.code == 200 && res.data) {
					var study = new Cateyes.Entity.Study(res.data);
					self.cache[study.studyInfo.studyInstanceUID] = study;
					self.studies.push(study);
					self._loadBusinessInfo(study);
					Cateyes.GlobalPubSub.publish('AFTER_LOAD_STUDY', study);
					return study;
				}
				// var study = new Cateyes.Entity.Study(res);
				// Cateyes.GlobalPubSub.publish('AFTER_LOAD_STUDY', study);
				// return study;
			});
		},
		getSeries: function(studyId, seriesId) {
			//var study = this.getStudy('/' + studyId + '/' + studyId + '.json');
			var study = this.getStudy(studyId);
			return study.then(function(sy) {
				return sy.getSeries(seriesId);
			});
		},
		_loadBusinessInfo: function(study) {
			var cpb;
			if (cpb = window.parent.window.CateyesPubSub) {
				var replyMarks = cpb.replyMarks || {},
					studyMarks;
				if (studyMarks = replyMarks[study.studyInfo.studyInstanceUID]) {
					study.setMarks(studyMarks)
				}
			}
		}
	});

	//业务钩子挂载
	var cpb;
	if (cpb = window.parent.window.CateyesPubSub) {
		cpb.getAllMarks = function() {
			var allStudies = Cateyes.DicomService.getAllStudies();
			var markDicomCount = 0;
			if (allStudies && allStudies.length) {
				var marks,
					markCache = {};
				for (var i = 0, study; study = allStudies[i++];) {
					marks = study.getMarks();
					if (marks) {
						markCache[study.studyInfo.studyInstanceUID] = marks;
					}
				}
			}
			return markCache;
		}
	}
})();
