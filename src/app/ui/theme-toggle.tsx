// components/theme-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch: don't render real state until mounted
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-27 rounded-lg border border-border bg-muted" />;
  }

  return (
    <div className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-background p-1">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`${label} theme`}
          title={label}
          className={cn(
            "flex size-7 items-center justify-center rounded-md transition-colors",
            theme === value
              ? "gradient text-white"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}