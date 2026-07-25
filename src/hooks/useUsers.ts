import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

// ── Get all users (with filters) ───────────────────────────────────────────

type UsersParams = {
  search?: string;
  plan?: string;
  role?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
};

export const useUsers = (params: UsersParams = {}) => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: async () => {
      const res = await api.get("/users", { params });
      return res.data;
    },
  });
};

// ── Get single user ────────────────────────────────────────────────────────

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const res = await api.get(`/users/${id}`);
      return res.data.user;
    },
    enabled: !!id,
  });
};

// ── Update user ────────────────────────────────────────────────────────────

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Record<string, any> }) => {
      const res = await api.put(`/users/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      // refetch users list after update
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// ── Delete user ────────────────────────────────────────────────────────────

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/users/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// ── Toggle suspend ─────────────────────────────────────────────────────────

export const useToggleSuspend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await api.patch(`/users/${id}/suspend`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};