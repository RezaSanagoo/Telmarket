package com.mojfinance.app;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.view.WindowManager;

@CapacitorPlugin(name = "ScreenSecurity")
public class ScreenSecurityPlugin extends Plugin {
    @PluginMethod
    public void preventScreenCapture(PluginCall call) {
        try {
            getActivity().runOnUiThread(() -> {
                getActivity().getWindow().setFlags(
                    WindowManager.LayoutParams.FLAG_SECURE,
                    WindowManager.LayoutParams.FLAG_SECURE
                );
            });
            call.resolve();
        } catch (Exception e) {
            call.reject("Error preventing screen capture", e);
        }
    }

    @PluginMethod
    public void allowScreenCapture(PluginCall call) {
        try {
            getActivity().runOnUiThread(() -> {
                getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            });
            call.resolve();
        } catch (Exception e) {
            call.reject("Error allowing screen capture", e);
        }
    }
}