import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  currentUser: string | null;
  savedUsers: string[];
  hasHydrated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
  setCurrentUser: (user: string | null) => void;
  saveUser: (user: string) => void;
  removeUser: (user: string) => void;
  setHasHydrated: (state: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      currentUser: null,
      savedUsers: [],
      hasHydrated: false,

      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
      setCurrentUser: (user) => set({ currentUser: user }),
      saveUser: (user) => {
        const users = new Set(get().savedUsers);
        users.add(user);
        set({ savedUsers: Array.from(users) });
      },
      removeUser: (user) => {
        const users = get().savedUsers.filter((u) => u !== user);
        set({ savedUsers: users });

        if (get().currentUser === user) {
          set({ token: null });
        }
      },
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
