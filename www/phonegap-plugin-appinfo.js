var appInfo_exec = require('cordova/exec');
window.getAppVersionName = function (callback, errCallbac) {
    appInfo_exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionName", []);
};
window.getAppVersionCode = function (callback, errCallbac) {
    appInfo_exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionCode", []);
};