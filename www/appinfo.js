var exec = require('cordova/exec');

var appInfo = {
	getAppVersionName : function (callback, errCallbac) {
		exec(callback, errCallbac, "AppInfo", "getAppVersionName", []);
	},
	getAppVersionCode : function (callback, errCallbac) {
		exec(callback, errCallbac, "AppInfo", "getAppVersionCode", []);
		}
};

module.exports = appInfo;