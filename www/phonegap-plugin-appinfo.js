var exec = require('cordova/exec');
exports.getAppVersionName = function (callback, errCallbac) {
    exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionName", []);
};
exports.getAppVersionCode = function (callback, errCallbac) {
    exec(callback, errCallbac, "phonegap-plugin-appinfo", "getAppVersionCode", []);
};