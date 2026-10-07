"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Play, ArrowUpRight, Heart, Clock3 } from "lucide-react";
import Image from "next/image";
import MusicCard from "./MusicCard";
import styles from "./Dashboard.module.css";

const recentlyPlayed = [
  {
    name: "Blinding Lights",
    author: "The Weeknd",
    imageUrl: "/Blinding_Lights.png",
  },
  {
    name: "Uptown Funk",
    author: "Bruno Mars",
    imageUrl: "/Uptown_Funk.jfif",
  },
  {
    name: "Stay",
    author: "Justin Bieber",
    imageUrl: "/Stay.png",
  },
  {
    name: "One Dance",
    author: "Drake",
    imageUrl: "/One_Dance.jfif",
  },
  {
    name: "Despacito",
    author: "Luis Fonsi",
    imageUrl: "/Despacito.jfif",
  },
];

const topArtists = [
  {
    name: "The Weeknd",
    listens: 342,
    image: "/Blinding_Lights.png",
  },
  {
    name: "Justin Bieber",
    listens: 287,
    image: "/Stay.png",
  },
  {
    name: "Drake",
    listens: 241,
    image: "/One_Dance.jfif",
  },
];

export default function Dashboard() {
  const { isDark } = useContext(ThemeContext);
  return (
    <section className="bg-main-bg col-start-2 col-end-3 row-start-2 row-end-3 px-10 py-7 overflow-y-scroll">
      <div>
        <h1
          style={{ color: isDark ? "white" : "black" }}
          className="text-2xl font-bold"
        >
          Dashboard
        </h1>
        <p style={{ color: isDark ? "gray" : "darkgray" }} className="text-lg">
          Your music at a glance
        </p>
      </div>
      <div className="cardsBlock grid grid-cols-4 gap-9 mt-5">
        <div
          className={`card ${styles.cardGrid} bg-purple-200 h-25 rounded-lg px-3 py-2`}
        >
          <div className="p-6 bg-purple-300 w-11 h-11 rounded-full flex items-center justify-center">
            <div className="bg-purple-800 p-1.5 rounded-full">
              <Play className="border-0" size={20} fill="white" color="white" />
            </div>
          </div>
          <div>
            <p className="text-sm">Total Listens</p>{" "}
            <p className="text-lg font-bold">2340</p>
            <div className="flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <p>+12%</p>
            </div>
          </div>
        </div>
        <div
          className={`card ${styles.cardGrid} bg-red-100 h-25 rounded-lg px-3 py-2`}
        >
          <div className="p-6 bg-red-200 w-11 h-11 rounded-full flex items-center justify-center">
            <div className="bg-red-500 p-1.5 rounded-full">
              <Heart size={20} fill="white" color="white" />
            </div>
          </div>
          <div>
            <p className="text-sm">Total Listens</p>{" "}
            <p className="text-lg font-bold">128</p>
            <div className="flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <p>+8%</p>
            </div>
          </div>
        </div>
        <div
          className={`card ${styles.cardGrid} bg-blue-100 h-25 rounded-lg px-3 py-2`}
        >
          <div className="p-6 bg-blue-200 w-11 h-11 rounded-full flex items-center justify-center">
            <div className="bg-blue-500 p-1.5 rounded-full">
              <Clock3 className="border-0" size={20} color="white" />
            </div>
          </div>
          <div>
            <p className="text-sm">Listening Time</p>{" "}
            <p className="text-lg font-bold">24 hrs 32 mins</p>
            <div className="flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <p>+16%</p>
            </div>
          </div>
        </div>
        <div
          className={`card ${styles.cardGrid} bg-orange-100 h-25 rounded-lg px-3 py-2`}
        >
          <div className="p-6 bg-orange-200 w-11 h-11 rounded-full flex items-center justify-center">
            <div className="bg-orange-500 p-1.5 rounded-full">
              <Play className="border-0" size={20} fill="white" color="white" />
            </div>
          </div>
          <div>
            <p className="text-sm">Top Genre</p>{" "}
            <p className="text-lg font-bold">Pop</p>
            <div className="flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <p className="text-sm">32% of listens</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {/* Listening Activity */}

        <div
          className="bg-card-bg rounded-lg p-5"
        >
          <h2
            style={{ color: isDark ? "white" : "black" }}
            className="text-xl font-bold"
          >
            Listening Activity
          </h2>

          <p className="text-gray-500">Your listening activity this week</p>
          <div className="h-60 flex items-end justify-evenly mt-5">
            <div className="bg-purple-400 w-8 h-24 rounded-t" />
            <div className="bg-purple-400 w-8 h-32 rounded-t" />
            <div className="bg-purple-400 w-8 h-20 rounded-t" />
            <div className="bg-purple-400 w-8 h-40 rounded-t" />
            <div className="bg-purple-400 w-8 h-28 rounded-t" />
            <div className="bg-purple-400 w-8 h-48 rounded-t" />
            <div className="bg-purple-400 w-8 h-36 rounded-t" />
          </div>
        </div>

        {/**/}

        {/* Top Genres */}

        <div
          className="bg-card-bg rounded-lg p-5"
        >
          <h2
            style={{ color: isDark ? "white" : "black" }}
            className="text-xl font-bold"
          >
            Top Genres
          </h2>

          <p className="text-gray-500">Your most listened genres</p>

          <div className="flex justify-center items-center h-60">
            <div
              style={{ color: isDark ? "white" : "black" }}
              className="w-40 h-40 rounded-full border-30 border-purple-500 border-r-blue-400 border-b-orange-400 flex flex-col justify-center items-center"
            >
              <p className="text-xl font-bold">2340</p>
              <p>Listens</p>
            </div>
          </div>
        </div>

        {/**/}
      </div>
      <div className="lowerpartContainer grid grid-cols-[65fr_35fr] gap-5 mt-10">
        <div className="bg-card-bg recentlyPlayed rounded-lg p-5">
          <h2
            style={{ color: isDark ? "white" : "black" }}
            className="text-xl font-bold"
          >
            Recently Played
          </h2>
          <ul className="grid grid-cols-3 gap-10 mt-5">
            {recentlyPlayed.map((song, index) => (
              <MusicCard
                key={index}
                name={song.name}
                author={song.author}
                imageUrl={song.imageUrl}
              />
            ))}
          </ul>
        </div>
        <div
          style={{ color: isDark ? "white" : "black" }}
          className="bg-card-bg recentlyPlayed rounded-lg p-5"
        >
          <h2 className="text-xl font-bold">Your Top Artists</h2>
          <ul>
            {topArtists.map((artist, index) => (
              <li key={index} className="flex items-center gap-3 mt-5">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-bold">{artist.name}</p>
                  <p className="text-gray-500">{artist.listens} listens</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
