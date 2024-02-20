package com.hymnapp;

import android.app.Application;
import android.content.res.Configuration;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.hymnapp.ToastManager;

import java.util.List;

import expo.modules.ApplicationLifecycleDispatcher;
import expo.modules.ReactNativeHostWrapper;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost reactNativeHost = new ReactNativeHostWrapper(
            this,
            new ReactNativeHost(this) {
                @Override
                protected List<ReactPackage> getPackages() {
                    // Packages that cannot be autolinked yet can be added manually here, for example:
                    // packages.add(new MyReactNativePackage());
                    List<ReactPackage> packages = new PackageList(this).getPackages();
                    packages.add(new ToastManager());
                    return packages;
                }

                @Override
                protected String getJSMainModuleName() {
                    return ".expo/.virtual-metro-entry";
                }

                @Override
                protected boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected boolean isNewArchEnabled() {
                    return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
                }

                @Override
                protected boolean isHermesEnabled() {
                    return BuildConfig.IS_HERMES_ENABLED;
                }
            }
    );

    @Override
    public ReactNativeHost getReactNativeHost() {
        return reactNativeHost;
    }

    @Override
    public ReactHost getReactHost() {
        return reactNativeHost.getReactHost();
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        if (!BuildConfig.REACT_NATIVE_UNSTABLE_USE_RUNTIME_SCHEDULER_ALWAYS) {
            ReactFeatureFlags.unstable_useRuntimeSchedulerAlways = false;
        }
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load();
        }
        if (BuildConfig.DEBUG) {
            ReactNativeFlipper.initializeFlipper(this, reactNativeHost.getReactInstanceManager());
        }
        ApplicationLifecycleDispatcher.onApplicationCreate(this);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig);
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage()
        );
    }

    @Override
    protected String getJSMainModuleName() {
        return "index";
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public ReactInstanceManagerBuilder reactInstanceManagerBuilder() {
        ReactInstanceManagerBuilder builder = super.reactInstanceManagerBuilder();
        return builder;
    }

    @Override
    public ReactInstanceManager getReactInstanceManager() {
        return reactNativeHost.getReactInstanceManager();
    }

    @Override
    public ReactApplicationContext getReactApplicationContext() {
        return reactNativeHost.getReactApplicationContext();
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
