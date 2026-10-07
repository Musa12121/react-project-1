"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useRef } from "react";
import LikedSongs from "@/components/LikedSongs";

export default function Home() {
  const { isDark, toggle } = useContext(ThemeContext);
  const searchRef = useRef<HTMLInputElement>(null);

  const focusFunction = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };
  return (
    <main
      className="bg-main-bg h-screen grid grid-cols-[16fr_84fr] grid-rows-[15%_85%]"
    >
      <Sidebar focusFunction={focusFunction} />
      <Topbar searchRef={searchRef} />
      <LikedSongs />
    </main>
  );
}
