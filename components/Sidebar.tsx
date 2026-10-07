"use client";
import {
  Heart,
  House,
  LayoutDashboard,
  LibraryBig,
  Music,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ focusFunction }) {
  return (
    <div className="bg-sidebar-bg py-5 flex flex-col gap-y-6 cursor-default row-start-1 row-end-3 col-start-1 col-end-2 min-h-screen transition-all">
      <div className="firstPart flex px-6 items-center">
        <Image src="/logo.svg" alt="spotifly logo" width={64} height={64} />
        <div>
          <h1 className="text-text-primary text-2xl font-bold mb-0.5">
            Spotifly
          </h1>
          <h2 className="text-text-secondary font-medium">Design system</h2>
        </div>
      </div>
      <div className="secondPart px-10">
        <ul className="list-none text-text-secondary text-lg flex flex-col gap-y-1 font-medium">
          <Link
            href="/"
            className="pb-2 cursor-pointer flex items-center gap-2 group hover:text-text-primary transition-colors"
          >
            <House className="text-nav-icon group-hover:text-purple transition-colors" />
            <span className="transition-colors">Home</span>
          </Link>
          <li
            className="pb-2 cursor-pointer flex items-center gap-2 group hover:text-text-primary transition-colors"
            onClick={focusFunction}
          >
            <Search className="text-nav-icon group-hover:text-purple transition-colors" />
            <span className="transition-colors">Search</span>
          </li>
          <Link
            href="/library"
            className="pb-2 cursor-pointer flex items-center gap-2 group hover:text-text-primary transition-colors"
          >
            <LibraryBig className="text-nav-icon group-hover:text-purple transition-colors" />
            <span className="transition-colors">Your Library</span>
          </Link>
          <Link
            href="/dashboard"
            className="pb-2 cursor-pointer flex items-center gap-2 group hover:text-text-primary transition-colors"
          >
            <LayoutDashboard className="text-nav-icon group-hover:text-purple transition-colors" />
            <span className="transition-colors">Dashboard</span>
          </Link>
          <Link
            href="/liked-songs"
            className="pb-2 cursor-pointer flex items-center gap-2 group hover:text-text-primary transition-colors"
          >
            <Heart className="text-nav-icon group-hover:text-purple transition-colors" />
            <span className="transition-colors">Liked Songs</span>
          </Link>
        </ul>
      </div>
      <div className="thirdPart px-10">
        <h1 className="text-lg text-section-title mb-4 font-bold">PLAYLISTS</h1>
        <ul className="list-none text-text-secondary text-md flex flex-col gap-y-2">
          <li className="group pb-2 cursor-pointer hover:text-text-primary transition-colors flex items-center gap-2">
            <Music className="group-hover:text-purple transition-colors" />
            Chill Vibes
          </li>
          <li className="group pb-2 cursor-pointer hover:text-text-primary transition-colors flex items-center gap-2">
            <Music className="group-hover:text-purple transition-colors" />
            Workout
          </li>
          <li className="group pb-2 cursor-pointer hover:text-text-primary transition-colors flex items-center gap-2">
            <Music className="group-hover:text-purple transition-colors" />
            Focus
          </li>
          <li className="group pb-2 cursor-pointer hover:text-text-primary transition-colors flex items-center gap-2">
            <Music className="group-hover:text-purple transition-colors" />
            Indie mix
          </li>
          <li className="group pb-2 cursor-pointer hover:text-text-primary transition-colors flex items-center gap-2">
            <Music className="group-hover:text-purple transition-colors" />
            Discover Weekly
          </li>
        </ul>
      </div>
    </div>
  );
}
