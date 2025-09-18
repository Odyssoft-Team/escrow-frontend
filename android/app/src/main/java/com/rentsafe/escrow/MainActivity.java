package com.rentsafe.escrow;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.getcapacitor.BridgeActivity;

import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.graphics.Insets;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    WebView webView = findViewById(R.id.myWebView);

    // 🔑 Muy importante: evitar que los links abran el navegador externo
    webView.setWebViewClient(new WebViewClient());

    // Ajustar el WebView para que respete las barras de sistema
    ViewCompat.setOnApplyWindowInsetsListener(webView, (view, insets) -> {
      Insets sysBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
      view.setPadding(0, sysBars.top, 0, sysBars.bottom);
      return insets;
    });

    // Habilitar JS
    webView.getSettings().setJavaScriptEnabled(true);

    // Cargar tu web
    webView.loadUrl("https://escrow-3.vercel.app");
  }
}
