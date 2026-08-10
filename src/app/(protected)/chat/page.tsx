"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Send, Hash, Users, Smile, Paperclip,
  ChevronDown, Circle, Search, MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";
import { useSocket, ChatMessage, TypingEvent } from "@/hooks/useSocket";
import api from "@/lib/axios";

// ─── MOCK DATA ────────────────────────────────────────────────────────────────

const channels = [
  { _id: "ch_001", type: "channel", name: "general", description: "General team discussion" },
  { _id: "ch_002", type: "channel", name: "frontend", description: "Frontend development" },
  { _id: "ch_003", type: "channel", name: "backend", description: "Backend & API" },
  { _id: "ch_004", type: "channel", name: "design", description: "UI/UX and design" },
  { _id: "ch_005", type: "channel", name: "random", description: "Off-topic" },
];

const directMembers = [
  { _id: "u1", type: "dm", name: "Sara Ahmad", initials: "SA", color: "bg-emerald-100 text-emerald-700", online: true },
  { _id: "u2", type: "dm", name: "Omar Farooq", initials: "OF", color: "bg-orange-100 text-orange-700", online: true },
  { _id: "u3", type: "dm", name: "Maria Khan", initials: "MK", color: "bg-blue-100 text-blue-700", online: false },
  { _id: "u4", type: "dm", name: "Hassan Ali", initials: "HA", color: "bg-indigo-100 text-indigo-700", online: false },
];

type Room = {
  _id: string;
  type: "channel" | "dm";
  name: string;
  description?: string;
  initials?: string;
  color?: string;
  online?: boolean;
};

// ─── AVATAR ───────────────────────────────────────────────────────────────────

function Avatar({ name, color = "bg-primary/10 text-primary", size = "sm" }: {
  name: string; color?: string; size?: "sm" | "md";
}) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className={cn(
      "flex shrink-0 items-center justify-center rounded-full font-semibold",
      size === "sm" ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm",
      color
    )}>
      {initials}
    </div>
  );
}

// ─── MESSAGE BUBBLE ───────────────────────────────────────────────────────────

function MessageBubble({ msg, isOwn, showAvatar }: {
  msg: ChatMessage; isOwn: boolean; showAvatar: boolean;
}) {
  const time = new Date(msg.createdAt).toLocaleTimeString([], {
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <div className={cn("flex items-end gap-2", isOwn && "flex-row-reverse")}>
      <div className="w-8 shrink-0">
        {showAvatar && !isOwn && <Avatar name={msg.sender.name} />}
      </div>
      <div className={cn("flex max-w-[70%] flex-col gap-1", isOwn && "items-end")}>
        {showAvatar && !isOwn && (
          <span className="ml-1 text-[11px] font-medium text-muted-foreground">
            {msg.sender.name}
          </span>
        )}
        <div className={cn(
          "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isOwn
            ? "rounded-br-sm bg-primary text-white"
            : "rounded-bl-sm bg-muted text-foreground"
        )}>
          {msg.message}
        </div>
        <span className="px-1 text-[10px] text-muted-foreground">{time}</span>
      </div>
    </div>
  );
}

// ─── ROOM DROPDOWN ────────────────────────────────────────────────────────────

function RoomDropdown({ active, onSelect }: {
  active: Room;
  onSelect: (room: Room) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredChannels = channels.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredDMs = directMembers.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {active.type === "channel"
          ? <Hash className="h-4 w-4 text-muted-foreground" />
          : <div className="relative">
              <div className={cn("flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold", active.color)}>
                {active.initials}
              </div>
              {active.online && <Circle className="absolute -bottom-0.5 -right-0.5 h-2 w-2 fill-emerald-500 text-emerald-500" />}
            </div>
        }
        <span>{active.type === "channel" ? `#${active.name}` : active.name}</span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1.5 w-64 rounded-xl border border-border bg-background shadow-lg">
          {/* Search */}
          <div className="p-2 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="w-full rounded-lg bg-muted py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto p-1.5">
            {/* Channels */}
            {filteredChannels.length > 0 && (
              <>
                <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Channels
                </p>
                {filteredChannels.map((ch) => (
                  <button
                    key={ch._id}
                    onClick={() => { onSelect(ch as Room); setOpen(false); setSearch(""); }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors",
                      active._id === ch._id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    <Hash className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <span className="flex-1 truncate">{ch.name}</span>
                    {active._id === ch._id && (
                      <span className="text-[10px] text-primary">active</span>
                    )}
                  </button>
                ))}
              </>
            )}

            {/* Direct messages */}
            {filteredDMs.length > 0 && (
              <>
                <p className="mt-1 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Direct messages
                </p>
                {filteredDMs.map((member) => (
                  <button
                    key={member._id}
                    onClick={() => { onSelect(member as Room); setOpen(false); setSearch(""); }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors",
                      active._id === member._id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    <div className="relative shrink-0">
                      <div className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold",
                        member.color
                      )}>
                        {member.initials}
                      </div>
                      {member.online && (
                        <Circle className="absolute -bottom-0.5 -right-0.5 h-2 w-2 fill-emerald-500 text-emerald-500" />
                      )}
                    </div>
                    <span className="flex-1 truncate">{member.name}</span>
                    <span className={cn(
                      "text-[10px]",
                      member.online ? "text-emerald-600" : "text-muted-foreground"
                    )}>
                      {member.online ? "online" : "offline"}
                    </span>
                  </button>
                ))}
              </>
            )}

            {filteredChannels.length === 0 && filteredDMs.length === 0 && (
              <p className="py-6 text-center text-xs text-muted-foreground">No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CHAT PAGE ────────────────────────────────────────────────────────────────

export default function ChatPage() {
  const { user } = useAuthStore();
  const { joinRoom, leaveRoom, sendMessage, onMessage, onTyping, emitTyping } = useSocket();

  const [activeRoom, setActiveRoom] = useState<Room>(channels[0] as Room);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [showMembers, setShowMembers] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Load history ────────────────────────────────────────────────────────────

  const loadHistory = useCallback(async (roomId: string) => {
    setLoadingHistory(true);
    try {
      const res = await api.get(`/chat/${roomId}/messages`);
      setMessages(res.data.messages ?? []);
    } catch {
      setMessages([]);
    } finally {
      setLoadingHistory(false);
    }
  }, []);

  // ── Switch room ─────────────────────────────────────────────────────────────

  useEffect(() => {
    leaveRoom(activeRoom._id);
    setMessages([]);
    setTypingUsers([]);
    loadHistory(activeRoom._id);
    joinRoom(activeRoom._id);
    return () => leaveRoom(activeRoom._id);
  }, [activeRoom._id]);

  // ── Incoming messages ───────────────────────────────────────────────────────

  useEffect(() => {
    const cleanup = onMessage((msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => cleanup?.();
  }, [onMessage]);

  // ── Typing events ───────────────────────────────────────────────────────────

  useEffect(() => {
    const cleanup = onTyping((event: TypingEvent) => {
      if (event.userId === user?._id) return;
      setTypingUsers((prev) =>
        event.isTyping
          ? prev.includes(event.name) ? prev : [...prev, event.name]
          : prev.filter((n) => n !== event.name)
      );
    });
    return () => cleanup?.();
  }, [onTyping, user?._id]);

  // ── Scroll to bottom ────────────────────────────────────────────────────────

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── Send ────────────────────────────────────────────────────────────────────

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || !user) return;
    // ✅ No optimistic update — server broadcasts back to sender too
    sendMessage(activeRoom._id, trimmed);
    setInput("");
    emitTyping(activeRoom._id, false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    emitTyping(activeRoom._id, true);
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      emitTyping(activeRoom._id, false);
    }, 2000);
  };

  const isFirstInGroup = (index: number) => {
    if (index === 0) return true;
    return messages[index].sender._id !== messages[index - 1].sender._id;
  };

  const roomLabel = activeRoom.type === "channel"
    ? `#${activeRoom.name}`
    : activeRoom.name;

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-background">

      {/* ── Main chat ── */}
      <div className="flex flex-1 flex-col min-w-0">

        {/* Topbar */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Room selector dropdown */}
            <RoomDropdown active={activeRoom} onSelect={setActiveRoom} />

            {/* Description */}
            {activeRoom.type === "channel" && activeRoom.description && (
              <span className="hidden text-xs text-muted-foreground truncate sm:block">
                — {activeRoom.description}
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => setShowMembers(!showMembers)}
              className={cn(
                "rounded-md p-1.5 transition-colors",
                showMembers
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              title="Toggle members"
            >
              <Users className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {loadingHistory ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                {activeRoom.type === "channel"
                  ? <Hash className="h-7 w-7 text-muted-foreground" />
                  : <MessageSquare className="h-7 w-7 text-muted-foreground" />
                }
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {activeRoom.type === "channel"
                    ? `Welcome to #${activeRoom.name}`
                    : `Start a conversation with ${activeRoom.name}`}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Send a message to get started.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              {messages.map((msg, i) => (
                <MessageBubble
                  key={msg._id}
                  msg={msg}
                  isOwn={msg.sender._id === user?._id}
                  showAvatar={isFirstInGroup(i)}
                />
              ))}
            </div>
          )}

          {/* Typing indicator */}
          {typingUsers.length > 0 && (
            <div className="mt-2 flex items-center gap-2 px-2">
              <div className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {typingUsers.join(", ")} {typingUsers.length === 1 ? "is" : "are"} typing...
              </p>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-end gap-3 rounded-xl border border-border bg-background px-4 py-3">
            <button className="mb-0.5 shrink-0 text-muted-foreground hover:text-foreground">
              <Paperclip className="h-4 w-4" />
            </button>
            <textarea
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={`Message ${roomLabel}`}
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              style={{ maxHeight: "120px" }}
            />
            <button className="mb-0.5 shrink-0 text-muted-foreground hover:text-foreground">
              <Smile className="h-4 w-4" />
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="mb-0.5 shrink-0 rounded-lg bg-primary p-1.5 text-white transition-colors hover:bg-primary/90 disabled:opacity-40"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">Enter</kbd> to send ·{" "}
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">Shift+Enter</kbd> for new line
          </p>
        </div>
      </div>

      {/* ── Members panel ── */}
      {showMembers && (
        <div className="hidden w-52 shrink-0 flex-col border-l border-border xl:flex">
          <div className="flex h-14 items-center border-b border-border px-4">
            <h3 className="text-sm font-semibold text-foreground">Members</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {/* Online */}
            <div>
              <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Online — {directMembers.filter(m => m.online).length + 1}
              </p>
              <div className="space-y-1">
                {directMembers.filter(m => m.online).map((m) => (
                  <button
                    key={m._id}
                    onClick={() => setActiveRoom(m as Room)}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-accent transition-colors text-left"
                  >
                    <div className="relative shrink-0">
                      <div className={cn("flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold", m.color)}>
                        {m.initials}
                      </div>
                      <Circle className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 fill-emerald-500 text-emerald-500" />
                    </div>
                    <span className="truncate text-xs font-medium text-foreground">{m.name}</span>
                  </button>
                ))}
                {/* Current user */}
                {user && (
                  <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
                    <div className="relative shrink-0">
                      <Avatar name={user.name} size="sm" />
                      <Circle className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 fill-emerald-500 text-emerald-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-foreground">{user.name}</p>
                      <p className="text-[10px] text-muted-foreground">you</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Offline */}
            {directMembers.filter(m => !m.online).length > 0 && (
              <div>
                <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Offline — {directMembers.filter(m => !m.online).length}
                </p>
                <div className="space-y-1">
                  {directMembers.filter(m => !m.online).map((m) => (
                    <button
                      key={m._id}
                      onClick={() => setActiveRoom(m as Room)}
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-accent transition-colors text-left opacity-60"
                    >
                      <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold", m.color)}>
                        {m.initials}
                      </div>
                      <span className="truncate text-xs font-medium text-foreground">{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}