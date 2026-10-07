"use client";
import ContentPage from "@/components/ContentPage";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useRef } from "react";

export default function Home() {
  const { isDark, toggle } = useContext(ThemeContext);
  const searchRef = useRef<HTMLInputElement>(null);

  const focusFunction = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };
  return (
    <main className="min-h-screen grid grid-cols-[20fr_80fr] grid-rows-[15fr_85fr]">
      <Sidebar focusFunction={focusFunction} />
      <Topbar searchRef={searchRef} />
      <ContentPage />
    </main>
  );
}
