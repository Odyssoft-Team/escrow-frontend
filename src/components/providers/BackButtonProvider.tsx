"use client";

import { useEffect } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import { useRouter } from "next/navigation";

export function BackButtonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    let listener: { remove: () => void } | null = null;

    const setupListener = async () => {
      listener = await CapacitorApp.addListener(
        "backButton",
        ({ canGoBack }) => {
          if (canGoBack) {
            router.back();
          } else {
            // Si no puede ir atrás, opcionalmente salir de la app:
            // CapacitorApp.exitApp();
          }
        }
      );
    };

    setupListener();

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, [router]);

  return <>{children}</>;
}
