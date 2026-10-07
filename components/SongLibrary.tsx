import MusicCard from "./MusicCard";

const songs = [
  {
    name: "Blinding Lights",
    author: "The Weeknd",
    imageUrl: "/Blinding_Lights.png",
  },
  {
    name: "Shape of You",
    author: "Ed Sheeran",
    imageUrl: "/shape_of_you.png",
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
    name: "Believer",
    author: "Imagine Dragons",
    imageUrl: "/believer.jpg",
  },
  {
    name: "Lose Yourself",
    author: "Eminem",
    imageUrl: "/lose_yourself.jpg",
  },
  {
    name: "Sunflower",
    author: "Post Malone",
    imageUrl: "/Sunflower.jpg",
  },
  {
    name: "As It Was",
    author: "Harry Styles",
    imageUrl: "/as_it_was.jpg",
  },
  {
    name: "Moves Like Jagger",
    author: "Maroon 5",
    imageUrl: "/moves_like_jagger.jfif",
  },
];

export default function Library() {
  return (
    <section className="bg-main-bg col-start-2 col-end-3 row-start-2 row-end-3 px-10 py-7 overflow-y-scroll">
      <h1 className="text-text-primary text-3xl font-bold mb-2">
        Your Library
      </h1>

      <p className="text-text-secondary mb-8">
        Your saved music
      </p>

      <ul className="grid grid-cols-5 gap-5">
        {songs.map((song) => (
          <MusicCard
            key={song.name}
            name={song.name}
            author={song.author}
            imageUrl={song.imageUrl}
          />
        ))}
      </ul>
    </section> 
  );
}