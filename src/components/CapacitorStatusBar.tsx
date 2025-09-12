"use client";

import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";

export function CapacitorStatusBar() {
  useEffect(() => {
    const configure = async () => {
      try {
        // Asegura que la barra de estado sea visible y que el contenido respete el área
        await StatusBar.setOverlaysWebView({ overlay: false });
        await StatusBar.setStyle({ style: Style.Light });
      } catch (err) {
        console.warn("StatusBar plugin not available", err);
      }
    };
    configure();
  }, []);

  return null;
}
