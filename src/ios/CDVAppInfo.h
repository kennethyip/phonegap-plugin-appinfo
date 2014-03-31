//
//  CDVAppInfo.h
//  CustomPlugin
//
//  Created by Kenneth on 28/3/14.
//
//
#import <Cordova/CDV.h>

@interface CDVAppInfo : CDVPlugin

- (void)getAppVersionName:(CDVInvokedUrlCommand*)command;
- (void)getAppVersionCode:(CDVInvokedUrlCommand*)command;


@end
