// constants/sidebar.ts
import {
  LayoutDashboard, BarChart3, FileText, Users, Building2, FolderKanban, CheckSquare, CreditCard, 
  Receipt, ArrowLeftRight, Mail, Bell, Activity, Settings,
  MessageCircleMore,
} from "lucide-react";

export type SidebarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
  badge?: string;
};

export type SidebarSection = {
  section: string;
  items: SidebarItem[];
};

export const sidebarData: SidebarSection[] = [
  {
    section: "Main",
    items: [
      { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
      { title: "Analytics", url: "/analytics", icon: BarChart3 },
      { title: "Reports", url: "/reports", icon: FileText },
    ],
  },
  {
    section: "Management",
    items: [
      { title: "Users", url: "/users", icon: Users },
      { title: "Workspaces", url: "/workspaces", icon: Building2 },
      { title: "Projects", url: "/projects", icon: FolderKanban },
      { title: "Tasks", url: "/tasks", icon: CheckSquare },
      { title: "Messages", url: "/messages", icon: MessageCircleMore },
    ],
  },
  {
    section: "Finance",
    items: [
      { title: "Subscriptions", url: "/subscriptions", icon: CreditCard },
      { title: "Invoices", url: "/invoices", icon: Receipt },
      { title: "Transactions", url: "/transactions", icon: ArrowLeftRight },
    ],
  },
  {
    section: "System",
    items: [
      { title: "Email logs", url: "/emails", icon: Mail, badge: "3" },
      { title: "Notifications", url: "/notifications", icon: Bell },
      { title: "Activity log", url: "/activity", icon: Activity },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];