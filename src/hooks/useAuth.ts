import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/auth.store";

// ── Types ──────────────────────────────────────────────────────────────────

type RegisterInput = { name: string; email: string; password: string };
type LoginInput = { email: string; password: string };
type ForgotInput = { email: string };
type ResetInput = { password: string; confirmPassword: string };

// ── Register ───────────────────────────────────────────────────────────────

export const useRegister = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const res = await api.post("/auth/register", data);
      return res.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      router.push("/app/dashboard");
    },
  });
};

// ── Login ──────────────────────────────────────────────────────────────────

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      // redirect based on role
      if (data.user.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/app/dashboard");
      }
    },
  });
};

// ── Forgot password ────────────────────────────────────────────────────────

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (data: ForgotInput) => {
      const res = await api.post("/auth/forgot-password", data);
      return res.data;
    },
  });
};

// ── Reset password ─────────────────────────────────────────────────────────

export const useResetPassword = (token: string) => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: ResetInput) => {
      const res = await api.post(`/auth/reset-password/${token}`, data);
      return res.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      router.push("/app/dashboard");
    },
  });
};

// ── Get current user ───────────────────────────────────────────────────────

export const useMe = () => {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await api.get("/auth/me");
      return res.data.user;
    },
    enabled: isAuthenticated, // only fetch if logged in
  });
};

// ── Logout ─────────────────────────────────────────────────────────────────

export const useLogout = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      await api.post("/auth/logout");
    },
    onSettled: () => {
      // always clear local state even if API call fails
      logout();
      router.push("/auth/login");
    },
  });
};