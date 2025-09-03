// types/capacitor.d.ts
export {};

declare global {
  interface Window {
    capacitor?: {
      isNative: boolean;
      // Puedes agregar más propiedades si las necesitas
    };
  }
}
