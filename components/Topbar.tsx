'use client'
import { ThemeContext } from "@/contexts/ThemeContext";
import { Moon } from "lucide-react";
import { useContext, useState } from "react";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";

export default function Topbar({ searchRef }) {
  const { toggle } = useContext(ThemeContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  return (
    <div className="bg-topbar-bg col-start-2 col-end-3 row-start-1 row-end-2 grid grid-cols-[60fr_40fr] items-center px-7 transition-colors">
      <div>
        <input
          ref={searchRef}
          type="text"
          className="w-full text-text-primary border border-gray-400 rounded px-2 py-1.5 text-lg font-medium"
        />
      </div>
      <div className="flex justify-end gap-11 items-center">
        <div className="profile w-12 rounded-full overflow-hidden cursor-pointer">
          <Image src="/profilepicture.jpg" alt="" width={48} height={48} onClick={() => setShowProfileDropdown(prev => !prev)} />
          {showProfileDropdown && <ProfileDropdown />}
        </div>
        <div className="toggleMode">
          <button className="group cursor-pointer p-2 text-gray-500" onClick={toggle}>
            <Moon className="group-hover:text-gray-600 group-active:text-gray-700 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
