"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppSidebar from "./app-sidebar";
import { ModeToggle } from "./mode-toggle";
import UserNav from "./user-nav";
import { useAuthStore } from "@/store/auth.store";

interface ProtectedLayoutClientProps {
  children: React.ReactNode;
}

export function ProtectedLayoutClient({ children, }: ProtectedLayoutClientProps) {

  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  // Wait for Zustand to rehydrate from localStorage
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (hydrated && !isAuthenticated) {
      router.replace("/login");
    }
  }, [hydrated, isAuthenticated, router]);

  // Show nothing while hydrating or redirecting
  if (!hydrated || !isAuthenticated) return null;

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      {/* Sidebar */}
      <AppSidebar />

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Navbar */}
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b px-4 bg-background">
          <div className="w-full flex items-center justify-end gap-1 lg:gap-2">
            <ModeToggle />
            <UserNav />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-primary/3! dark:bg-accent! p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}