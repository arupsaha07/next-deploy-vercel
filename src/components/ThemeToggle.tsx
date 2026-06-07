"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("light", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(getIsDark());
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = !getIsDark();
    applyTheme(next);
    setIsDark(next);
  }

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border border-border bg-card"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-card
        text-foreground
        transition-all
        duration-300
        hover:border-primary/30
        hover:bg-muted
        hover:text-primary
      "
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
