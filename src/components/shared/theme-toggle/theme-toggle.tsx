"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-border bg-transparent px-2 h-9 font-medium text-primary tracking-tight hover:bg-card/60",
        className
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      type="button"
    >
      <span
        className={cn(
          "relative size-6 scale-75 rounded-full bg-gradient-to-tr"
        )}
      >
        <span
          className={cn(
            "absolute top-0 left-0 z-10     h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-indigo-400 to-sky-200 transition-color duration-500",
            theme === "dark" ? "scale-100" : "scale-90"
          )}
        />
        <span
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 transition-color duration-500 dark:from-rose-600 dark:to-amber-600",
            theme === "light" ? "opacity-100" : "opacity-0"
          )}
        />
        <span
          className={cn(
            "absolute top-0 right-0 z-20 size-4 origin-top-right transform-gpu rounded-full transition-transform duration-500 bg-background group-hover:bg-card",
            theme === "dark" ? "scale-100" : "scale-0"
          )}
        />
      </span>
      <span className="relative h-5 w-12">
        <span
          className={cn(
            "absolute top-0 left-0 text-sm transition-all duration-1000",
            theme === "light"
              ? "-translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0"
          )}
        >
          Escuro
        </span>
        <span
          className={cn(
            "absolute top-0 text-sm left-0 transition-all duration-1000",
            theme === "dark"
              ? "translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0"
          )}
        >
          Claro
        </span>
      </span>
    </button>
  );
}
