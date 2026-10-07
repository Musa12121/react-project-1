import { ThemeContext } from "@/contexts/ThemeContext";
import { Heart, LogOut, Settings, User } from "lucide-react";
import { useContext } from "react";

export default function ProfileDropdown() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="border border-text-secondary bg-dropdown-bg absolute flex flex-col gap-4 rounded-md shadow-lg p-4 right-0 mt-2 w-48 mx-2"
    >
      <div className="grid grid-cols-[1fr_3fr] items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          M
        </div>
        <div>
          <p className="text-text-primary font-semibold">Your name</p>
          <p className="text-text-secondary text-sm">you@gmail.com</p>
        </div>
      </div>
      <hr />
      <ul className="flex flex-col gap-4">
        <li className="text-text-primary flex items-center gap-2 group hover:bg-[#d8d7dbc1] p-2 rounded-md transition-all">
          <User className="group-hover:text-purple-500" />
          Profile
        </li>
        <li className="text-text-primary flex items-center gap-2 group hover:bg-[#d8d7dbc1] p-2 rounded-md transition-all">
          <Heart className="group-hover:text-purple-500" />
          Liked Songs
        </li>
        <li className="text-text-primary flex items-center gap-2 group hover:bg-[#d8d7dbc1] p-2 rounded-md transition-all">
          <Settings className="group-hover:text-purple-500" />
          Settings
        </li>
      </ul>
      <hr />
      <div className="flex items-center justify-center gap-2 text-red-500 hover:text-red-600 cursor-pointer p=2">
        <LogOut /> Logout
      </div>
    </div>
  );
}
