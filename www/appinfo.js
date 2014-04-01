var exec = require('cordova/exec');

var appInfo = {
	getAppVersionName : function (callback, errCallbac) {
		exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionName", []);
	},
	getAppVersionCode : function (callback, errCallbac) {
		exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionCode", []);
		}
};

module.exports = appInfo;