var appInfo_exec = require('cordova/exec');
exports.getAppVersionName = function (callback, errCallbac) {
    appInfo_exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionName", []);
};
exports.getAppVersionCode = function (callback, errCallbac) {
    appInfo_exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionCode", []);
};