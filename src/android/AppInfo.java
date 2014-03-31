package com.phonegap.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;

public class AppInfo extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) {
		if (action.equals("getAppVersionName")) {
			this.getAppVersionName(callbackContext);
			return true;
		}
		
		if (action.equals("getAppVersionCode")) {
			this.getAppVersionCode(callbackContext);
			return true;
		}
		return false;
	}
	
	private void getAppVersionName(CallbackContext callbackContext) {
		PackageManager packageManager = this.cordova.getActivity().getPackageManager();
		PackageInfo packageInfo = null;
		try {
			packageInfo = packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0);
			callbackContext.success(packageInfo.versionName);
		} catch (NameNotFoundException e) {
			// TODO Auto-generated catch block
			callbackContext.error("Fail to get version name.");
		}
	}
	
	private void getAppVersionCode(CallbackContext callbackContext) {
		PackageManager packageManager = this.cordova.getActivity().getPackageManager();
		PackageInfo packageInfo = null;
		try {
			packageInfo = packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0);
			callbackContext.success(packageInfo.versionCode);
		} catch (NameNotFoundException e) {
			// TODO Auto-generated catch block
			callbackContext.error("Fail to get version code");
		}
	}
}