"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" || "system";
    setTheme(savedTheme);
    
    if (savedTheme === "dark" || (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <Button 
      variant="secondary" 
      aria-label="Toggle theme" 
      onClick={toggleTheme}
      className="size-10 p-0 flex justify-center"
    >
      {theme === "dark" ? (
        <Icons.Sun className="size-4" />
      ) : (
        <Icons.Moon className="size-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 