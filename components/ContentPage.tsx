'use client'
import MusicCard from "./MusicCard";

const playlists = [
  { id: 1, name: "Chill Vibes", author: "Spotifly", imageUrl: "/chill_vibes.jpg" },
  { id: 2, name: "Workout", author: "Spotifly", imageUrl: "/workout.jpg" },
  { id: 3, name: "Focus", author: "Spotifly", imageUrl: "/focus.jpg" },
  { id: 4, name: "Today's Top Hits", author: "Spotifly", imageUrl: "/top_hits.webp" },
  { id: 5, name: "Indie Mix", author: "Billie Eilish", imageUrl: "/indie.jfif" },
];

const songs = [
  { id: 1, name: "Blinding Lights", author: "The Weeknd", imageUrl: "/Blinding_Lights.png" },
  { id: 2, name: "Uptown Funk", author: "Bruno Mars", imageUrl: "/Uptown_Funk.jfif" },
  { id: 3, name: "Stay", author: "Justin Bieber", imageUrl: "/Stay.png" },
  { id: 4, name: "One Dance", author: "Drake", imageUrl: "/One_Dance.jfif" },
  { id: 5, name: "Despacito", author: "Luis Fonsi ft. Daddy Yankee", imageUrl: "/Despacito.jfif" },
  { id: 6, name: "Birds of a Feather", author: "Billie Eilish", imageUrl: "/Birds_Of_A_Feather.jfif" },
];

export default function ContentPage() {

  return (
    <div className=" bg-main-bg col-start-2 col-end-3 row-start-2 row-end-3 px-10 pb-10 pt-2 overflow-y-scroll flex flex-col gap-10 transition-colors">
      <div>
        <h1 className="text-text-primary text-2xl font-bold mb-5 mt-2 transition-colors">
          Popular Playlists
        </h1>
        <ul className="grid grid-cols-6 gap-5">
          {playlists.map(playlist=><MusicCard key={playlist.id} name={playlist.name} author={playlist.author} imageUrl={playlist.imageUrl}/>)}
        </ul>
      </div>
      <div>
        <h1 className="text-text-primary text-2xl font-bold mb-5 mt-2 transition-colors">Recently Played</h1>
        <ul className="grid grid-cols-6 gap-5">
          {songs.map(song=><MusicCard key={song.id} name={song.name} author={song.author} imageUrl={song.imageUrl}/>)}
        </ul>
      </div>
    </div>
  );
}
