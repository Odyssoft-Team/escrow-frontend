"use client";

import { useEffect } from "react";

export default function ClientProvider() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("Service Worker registrado");
      });
    }
  }, []);

  return null;
}
