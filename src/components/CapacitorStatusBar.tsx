"use client";

import { useEffect } from "react";

export function CapacitorStatusBar(): null {
  useEffect(() => {
    const configureStatusBar = async (): Promise<void> => {
      // Verificar si estamos en Capacitor de forma type-safe
      if (typeof window !== "undefined" && window.capacitor) {
        try {
          const { StatusBar, Style } = await import("@capacitor/status-bar");

          // Configurar la barra de estado
          await StatusBar.show();
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setOverlaysWebView({ overlay: false });

          console.log("StatusBar configurado correctamente");
        } catch (error) {
          console.log(error);

          console.log(
            "StatusBar no disponible (probablemente en navegador web)"
          );
        }
      }
    };

    configureStatusBar().catch((error) => {
      console.error("Error configuring status bar:", error);
    });
  }, []);

  return null;
}
