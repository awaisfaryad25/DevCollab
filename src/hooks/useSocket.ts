"use client";

import { useEffect, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthStore } from "@/store/auth.store";

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000", {
      autoConnect: false,
      transports: ["websocket"],
    });
  }
  return socket;
};

export const useSocket = () => {
  const { token } = useAuthStore();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const s = getSocket();
    socketRef.current = s;

    // attach token for auth on backend
    s.auth = { token };

    if (!s.connected) s.connect();

    s.on("connect", () => console.log("🟢 Socket connected:", s.id));
    s.on("disconnect", () => console.log("🔴 Socket disconnected"));
    s.on("connect_error", (err) => console.error("Socket error:", err.message));

    return () => {
      s.off("connect");
      s.off("disconnect");
      s.off("connect_error");
    };
  }, [token]);

  const joinRoom = useCallback((roomId: string) => {
    socketRef.current?.emit("join_room", { roomId });
  }, []);

  const leaveRoom = useCallback((roomId: string) => {
    socketRef.current?.emit("leave_room", { roomId });
  }, []);

  const sendMessage = useCallback(
    (roomId: string, message: string) => {
      socketRef.current?.emit("send_message", { roomId, message });
    },
    []
  );

  const onMessage = useCallback(
    (callback: (data: ChatMessage) => void) => {
      socketRef.current?.on("receive_message", callback);
      // ✅ return a plain cleanup function, not the socket
      return () => { socketRef.current?.off("receive_message", callback); };
    },
    []
  );

  const onTyping = useCallback(
    (callback: (data: TypingEvent) => void) => {
      socketRef.current?.on("user_typing", callback);
      // ✅ return a plain cleanup function, not the socket
      return () => { socketRef.current?.off("user_typing", callback); };
    },
    []
  );

  const emitTyping = useCallback((roomId: string, isTyping: boolean) => {
    socketRef.current?.emit("typing", { roomId, isTyping });
  }, []);

  const onOnlineUsers = useCallback(
    (callback: (users: string[]) => void) => {
      socketRef.current?.on("online_users", callback);
      return () => socketRef.current?.off("online_users", callback);
    },
    []
  );

  return {
    socket: socketRef.current,
    joinRoom,
    leaveRoom,
    sendMessage,
    onMessage,
    onTyping,
    emitTyping,
    onOnlineUsers,
  };
};

// ─── TYPES ────────────────────────────────────────────────────────────────────

export type ChatMessage = {
  _id: string;
  roomId: string;
  sender: {
    _id: string;
    name: string;
    email: string;
  };
  message: string;
  createdAt: string;
};

export type TypingEvent = {
  userId: string;
  name: string;
  isTyping: boolean;
};