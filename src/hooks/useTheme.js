import { useEffect, useState } from "react";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    /* storage unavailable, fall through */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function useTheme() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark((d) => !d) };
}
