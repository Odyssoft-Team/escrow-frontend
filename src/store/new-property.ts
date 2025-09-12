import { create } from "zustand";

interface NewPropertyStore {
  position: { lat: number; lng: number };
  setPosition: (position: { lat: number; lng: number }) => void;
}

export const useNewPropertyStore = create<NewPropertyStore>((set) => ({
  position: { lat: 40.7128, lng: -74.006 },
  setPosition: (position) => set({ position }),
}));
