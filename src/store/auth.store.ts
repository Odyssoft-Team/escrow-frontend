import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  hasHydrated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      hasHydrated: false,

      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "auth",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
