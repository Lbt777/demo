// ==UserScript==
// @name         青书学堂自动刷课
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  青书学堂自动后台静音播放 刷课B站两不误
// @author       zhuzhengliang Arslan
// @match        *://*.qingshuxuetang.com/*
// @grant        none
// ==/UserScript==
/* jshint esversion: 6 */

(function() {
	'use strict';
	var i
	var href = location.href
    var list = [
    {
        "studentId": 0,
        "courseId": 2123,
        "courseName": "康复护理学(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/lfsf/course/005/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:52NUAW843XVZ3TElVT32uCOJZ_Q=",
        "teachingPlanCourseId": 17866,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 14,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2158,
        "courseName": "急危重症护理学(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/xjshz/course/005/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:pJoXh2rk4ueu65OP8iZQr7wc4oA=",
        "teachingPlanCourseId": 17867,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2179,
        "courseName": "护理教育学(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/qsxt/course/137/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:mdKqQX05In1ZtL0qvB_oznOqeGw=",
        "teachingPlanCourseId": 17871,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2181,
        "courseName": "护理研究(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/zsdx/course/53002017/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:fXFIw3_HlbaqQJe1alOleNCfY18=",
        "teachingPlanCourseId": 17872,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2185,
        "courseName": "护理美学(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/qsxt/course/2719/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:htd3PGH-QW16a0f8dLpYk0hEc94=",
        "teachingPlanCourseId": 17874,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2468,
        "courseName": "眼耳鼻喉口腔科护理学(专升本)",
        "courseCoverImg": "https://c.qsxt.info/cdn/feifan2/course/012/cover.jpg",
        "teachingPlanCourseId": 17881,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 2601,
        "courseName": "老年护理学(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/zsdx/course/53002013/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:Xa2g6_lOecOlAruoRbBjRuAnvNw=",
        "teachingPlanCourseId": 17886,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 3716,
        "courseName": "实践教学(专升本)",
        "courseCoverImg": null,
        "teachingPlanCourseId": 17892,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 90,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    },
    {
        "studentId": 0,
        "courseId": 3719,
        "courseName": "毕业论文(专升本)",
        "courseCoverImg": "https://cp.qsxt.info/cdn/dllg/course/0030/cover.jpg?e=1652281469&token=pCyqfXl1B4KjNCHB-hdnyaEhdLgvUYKmxX8Hl4kT:egt-Uh2ywtq7FCKxFw0M7Un8-K8=",
        "teachingPlanCourseId": 17893,
        "teachPlanId": 927,
        "periodId": 63,
        "learnStatus": 2,
        "term": 5,
        "score": 0,
        "coverImg": null,
        "isCurrent": true,
        "maintenanceFreeSettingflag": 0,
        "maintenanceFreeSettingScore": 0,
        "scoreLevel": null,
        "computedMaintenanceFreeScore": 0,
        "learnStatusName": "在修"
    }
]
	// 通过cw_nodeId判断是否在读取页面
	if (href.indexOf('cw_nodeId') > -1) {
		// 有视频组件的时候判定为正常
		setTimeout(function() {
			var video = document.getElementsByTagName("video")[0]
			var params = new UrlSearch()
			// 课程ID
			var courseId = params.courseId
			const courseArr = params.cw_nodeId.split('_')
			// 下一个播放的视频的key
			var nextKey = ''

			// 章节中课程播放完以后会跳转到错误的kcjs，以video为依据判断是否应该进入下一章节
			if (!video) {
				console.log('找不到视频组，尝试跳转到下一个章节')
				for(let i =0;i<list.length;i++) {
                    if(list[i].courseId===courseId) {
                      courseId = list[i+1].courseId
                        break
                    }
                }
				const nextUrl =
					`https://${window.location.host}${window.location.pathname}?teachPlanId=${params.teachPlanId}&periodId=${params.periodId}&courseId=${courseId}&cw_nodeId=kcjs_1&category=${params.category}`
				console.log(params, 'currentId:', params.cw_nodeId, 'nextKey:', nextKey, 'nextUrl:',
					nextUrl)
				location.replace(nextUrl);
			}

			console.log('找到视频组件,开始静音并自动播放...', video)
			// 设置静音并播放
			// video.muted = true
			// 设置倍速播放 支持以下速率: [2, 1.5, 1.2, 0.5] ；默认开启 如有问题请手动注释下面这行代码；或者邮箱反馈我
			video.playbackRate = 1
			video.play()
			if (courseArr.length == 2) {
				nextKey = `kcjs_${Number(courseArr[1]) + 1}`
			} else if (courseArr.length == 3) {
				nextKey = `kcjs_${courseArr[1]}_${Number(courseArr[2]) + 1}`
			}
			const nextUrl =
				`https://${window.location.host}${window.location.pathname}?teachPlanId=${params.teachPlanId}&periodId=${params.periodId}&courseId=${courseId}&cw_nodeId=${nextKey}&category=${params.category}`
			console.log(params, 'currentId:', params.cw_nodeId, 'nextKey:', nextKey, 'nextUrl:',
				nextUrl)
			// 视频播放结束,自动下一条视频
			video.addEventListener("ended", function() {
				location.replace(nextUrl);
			})
		}, 5000)
		// 打印播放进度
		getvideoprogress();
	}
})();

function UrlSearch() {
	var name, value;
	var str = location.href; //取得整个地址栏
	var num = str.indexOf("?")
	str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

	var arr = str.split("&"); //各个参数放到数组里
	for (var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if (num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}
	}
}

// 检测当前播放的进度
function getvideoprogress() {
	setInterval(function() {
		var vid = document.getElementsByTagName("video")[0]
		var currentTime = vid.currentTime.toFixed(1);
		console.log('当前进度:', currentTime);
	}, 10000);
}
