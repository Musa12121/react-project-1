import { ThemeContext } from "@/contexts/ThemeContext";
import {
  Clock3,
  Heart,
  MoreHorizontal,
  Play,
} from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import styles from "./LikedSongs.module.css";

const likedSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "/Blinding_Lights.png",
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53",
    image: "/shape_of_you.png",
  },
  {
    id: 3,
    title: "Uptown Funk",
    artist: "Bruno Mars",
    album: "Uptown Special",
    duration: "4:29",
    image: "/Uptown_Funk.jfif",
  },
  {
    id: 4,
    title: "Stay",
    artist: "Justin Bieber",
    album: "Justice",
    duration: "2:21",
    image: "/Stay.png",
  },
  {
    id: 5,
    title: "One Dance",
    artist: "Drake",
    album: "Views",
    duration: "2:54",
    image: "/One_Dance.jfif",
  },
  {
    id: 6,
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "3:24",
    image: "/believer.jpg",
  },
  {
    id: 7,
    title: "Moves Like Jagger",
    artist: "Maroon 5",
    album: "Moves Like Jagger",
    duration: "3:21",
    image: "/moves_like_jagger.jfif",
  },
];

export default function LikedSongs() {
  const {isDark}=useContext(ThemeContext)
  return (
    <section className="bg-main-bg col-start-2 col-end-3 row-start-2 row-end-3 px-10 py-7 overflow-y-auto">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-36 h-36 rounded-lg bg-purple-700 flex items-center justify-center">
          <Heart size={64} fill="red" strokeWidth={1} />
        </div>

        <div>
          <p className="text-text-secondary text-sm mb-2">PLAYLIST</p>

          <h1 className="text-text-primary text-4xl font-bold mb-2">
            Liked Songs
          </h1>

          <p className="text-text-secondary">
            245 songs · 12 hours 30 minutes
          </p>

          <div className="flex items-center gap-4 mt-5">
            <button className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center transition-colors">
              <Play size={22} fill="white" />
            </button>

            <button className="text-text-secondary hover:text-white transition-colors">
              <MoreHorizontal size={26} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_2fr_1.5fr_1.5fr_1fr_1fr] items-center px-4 pb-3 border-b border-gray-800 text-gray-500 font-bold text-lg">
        <span>#</span>
        <span>Title</span>
        <span>Artist</span>
        <span>Album</span>
        <Clock3 size={16} />
        <Heart size={16} />
      </div>

      <div className="mt-2 flex flex-col gap-2">
        {likedSongs.map((song) => (
          <div
            key={song.id}
            className={`${styles.row} ${isDark ? styles.rowDark : styles.rowLight}`}
          >
            <span className="text-sm text-gray-500">
              {song.id}
            </span>

            <div className="flex items-center gap-4 min-w-0">
              <Image
                src={song.image}
                alt={song.title}
                className="rounded" width={48} height={48}
              />

              <div>
                <p style={{color:isDark ? "#fff":"#000"}} className="font-medium">
                  {song.title}
                </p>

                <p className="text-sm text-gray-500">
                  {song.artist}
                </p>
              </div>
            </div>

            <span className="text-sm text-gray-400">
              {song.artist}
            </span>

            <span className="text-sm text-gray-400">
              {song.album}
            </span>

            <span className="text-sm text-gray-400">
              {song.duration}
            </span>

            <Heart
              size={18}
              className="text-purple-500"
              fill="currentColor"
            />
          </div>
        ))}
      </div>
    </section>
  );
}