import { create } from "zustand";

interface PropertiesStore {
  reloadData: boolean;
  setReloadData: (state: boolean) => void;
}

export const usePropertiesStore = create<PropertiesStore>((set) => ({
  reloadData: false,
  setReloadData: (state) => set({ reloadData: state }),
}));
