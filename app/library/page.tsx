"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useRef } from "react";
import SongLibrary from "@/components/SongLibrary";

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);

  const focusFunction = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };
  return (
    <main
      className="bg-main-bgh-screen grid grid-cols-[16fr_84fr] grid-rows-[15fr_85fr]"
    >
      <Sidebar focusFunction={focusFunction} />
      <Topbar searchRef={searchRef} />
      <SongLibrary />
    </main>
  );
}
