"use client";
import BellIcon from "@/components/icons/BellIcon";
import AddIcon from "@/components/icons/AddIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import UserIcon from "@/components/icons/UserIcon";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4">
      <a href="/">
        <div className="py-3 md:px-3 flex gap-1">
          <LogoIcon />
          <div>
            <span className="dark:text-white">Raj</span>
            <span className="text-sky-500">Tube</span>
          </div>
        </div>
      </a>
      <div className="max-w-96 flex-grow justify-center items-center sm:flex hidden">
        <input className="h-10 w-full border border-zinc-700 rounded-l-full bg-black focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2" />
        <button className="flex justify-center items-center px-3 border border-r-0 border-zinc-700 bg-zinc-800 rounded-r-full w-16 h-10 hover:bg-zinc-700">
          <SearchIcon />
        </button>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-2 md:px-3 py-2">
        <div className="sm:hidden w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <SearchIcon />
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <AddIcon />
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <BellIcon />
        </div>
        <div className="w-8 h-8 rounded-full bg-sky-600 flex justify-center items-center hover:bg-sky-700 cursor-pointer">
          <UserIcon className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
