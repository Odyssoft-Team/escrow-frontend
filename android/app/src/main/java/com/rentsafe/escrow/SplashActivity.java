package com.rentsafe.escrow;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Mostrar el splash con el tema fullscreen
        setTheme(R.style.AppTheme_NoActionBarLaunch);

        // Redirigir al MainActivity
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish(); // cerrar splash
    }
}
