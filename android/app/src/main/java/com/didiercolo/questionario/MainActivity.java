package com.didiercolo.questionario;

import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final String TAG = "QuestionarioApp";
    
    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Enable WebView debugging
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }
        
        // Configure WebView settings
        WebView webView = this.bridge.getWebView();
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        
        // Add WebView client for debugging
        this.bridge.getWebView().setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Log.d(TAG, "Page finished loading: " + url);
                // Inject a script to check if the page has any errors
                view.evaluateJavascript(
                    "(function() { " +
                    "  var errors = []; " +
                    "  window.onerror = function(message, source, lineno, colno, error) { " +
                    "    errors.push({message: message, source: source, lineno: lineno, colno: colno, error: error}); " +
                    "    console.error('Uncaught error:', message, source, lineno, colno, error); " +
                    "  }; " +
                    "  return 'JavaScript errors: ' + errors.length; " +
                    "})();",
                    null
                );
            }
            
            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                String errorMsg = "Error loading " + request.getUrl() + ": " + error.getDescription();
                Log.e(TAG, errorMsg);
                // Show error in WebView
                view.loadData(
                    "<html><body><h1>Error loading page</h1><p>" + errorMsg + "</p></body></html>",
                    "text/html",
                    "UTF-8"
                );
            }
            
            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                super.onReceivedError(view, errorCode, description, failingUrl);
                String errorMsg = "Error " + errorCode + " loading " + failingUrl + ": " + description;
                Log.e(TAG, errorMsg);
                // Show error in WebView
                view.loadData(
                    "<html><body><h1>Error loading page</h1><p>" + errorMsg + "</p></body></html>",
                    "text/html",
                    "UTF-8"
                );
            }
        });
        
        // Load the local index.html file
        webView.loadUrl("file:///android_asset/public/index.html");
    }
}
