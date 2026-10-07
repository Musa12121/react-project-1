"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function MusicCard({ name, author, imageUrl }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <li className="flex flex-col gap-3 rounded hover:scale-110 transition-transform">
      <Image
        src={imageUrl}
        alt="MusicCard"
        className="rounded"
        width={200}
        height={200}
      />
      <h2
        className="text-music-card-text text-xl font-bold"
      >
        {name}
      </h2>
      <p className="text-text-secondary text-sm">{author}</p>
    </li>
  );
}
