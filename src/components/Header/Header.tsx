"use client";
import BellIcon from "@/components/icons/BellIcon";
import AddIcon from "@/components/icons/AddIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import UserIcon from "@/components/icons/UserIcon";
import { useState } from "react";
import BackIcon from "@/components/icons/BackIcon";
import { useResize } from "@/components/Header/use-resize.hook";

const Header = () => {
  const [searchShow, setSearchShow] = useState(false);
  const { isScreenSm } = useResize();

  const openSearchShow = (newSearchShow: boolean) => () =>
    setSearchShow(newSearchShow);

  if (searchShow && !isScreenSm) {
    return (
      <header className="flex justify-between items-center px-4 gap-2">
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <button onClick={openSearchShow(false)}>
            <BackIcon />
          </button>
        </div>
        <div className="flex-grow justify-center items-center flex py-2">
          <input
            className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
            name="search"
          />
          <button className="flex justify-center items-center px-3  bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800">
            <SearchIcon />
          </button>
        </div>
      </header>
    );
  }

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
        <input
          className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
          name="search"
        />
        <button className="flex justify-center items-center px-3 bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800">
          <SearchIcon />
        </button>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-2 md:px-3 py-2">
        <button
          className="sm:hidden w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer"
          onClick={openSearchShow(true)}
        >
          <SearchIcon />
        </button>
        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <AddIcon />
        </button>
        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer">
          <BellIcon />
        </button>
        <button className="w-8 h-8 rounded-full bg-sky-600 flex justify-center items-center hover:bg-sky-700 cursor-pointer">
          <UserIcon className="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
