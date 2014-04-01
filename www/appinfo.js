var exec = require('cordova/exec');

var appInfo = {
	getAppVersionName : function (callback, errCallbac) {
		exec(callback, errCallbac, "appinfo", "getAppVersionName", []);
	},
	getAppVersionCode : function (callback, errCallbac) {
		exec(callback, errCallbac, "appinfo", "getAppVersionCode", []);
		}
};

module.exports = appInfo;