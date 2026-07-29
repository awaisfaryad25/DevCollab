import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  plan: "free" | "pro";
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  // actions
  setAuth: (user: User, token: string) => void;
  updateUser: (user: Partial<User>) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user, token) => {
        // localStorage.setItem("token", token);
        set({ user, token, isAuthenticated: true });
      },

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      logout: () => {
        // localStorage.removeItem("token");
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);