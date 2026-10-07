"use client";
import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  isHighContrast: boolean;
  toggle: () => void;
  toggleContrast: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  isHighContrast: false,
  toggle: () => {},
  toggleContrast: () => {},
});

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const contrast = localStorage.getItem("contrast");
    if (saved === "dark") setIsDark(true);
    if (contrast === "high") setIsHighContrast(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.toggle("hc", isHighContrast);
    localStorage.setItem("contrast", isHighContrast ? "high" : "normal");
  }, [isHighContrast]);

  function toggle() {
    setIsDark((prev) => !prev);
  }

  function toggleContrast() {
    setIsHighContrast((prev) => !prev);
  }

  return (
    <ThemeContext.Provider
      value={{ isDark, isHighContrast, toggle, toggleContrast }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
