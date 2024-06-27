"use client";
import BellIcon from "@/components/icons/BellIcon";
import AddIcon from "@/components/icons/AddIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import UserIcon from "@/components/icons/UserIcon";
import { useState } from "react";
import BackIcon from "@/components/icons/BackIcon";
import { useResize } from "@/components/Header/use-resize.hook";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const searchParams = useSearchParams();
  const [searchShow, setSearchShow] = useState(false);
  const { isScreenSm } = useResize();

  const searchQuery = searchParams.get("search_query");

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
        <form
          action="/results"
          className="flex-grow justify-center items-center flex py-2"
        >
          <input
            className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
            name="search_query"
            defaultValue={searchQuery || ""}
          />
          <button
            type="submit"
            className="flex justify-center items-center px-3  bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800"
          >
            <SearchIcon />
          </button>
        </form>
      </header>
    );
  }

  return (
    <header className="flex justify-between items-center px-4">
      <Link href="/">
        <div className="py-3 sm:px-3 flex gap-1">
          <LogoIcon />
          <div>
            <span className="dark:text-white">Raj</span>
            <span className="text-sky-500">Tube</span>
          </div>
        </div>
      </Link>
      <form
        action="/results"
        className="max-w-lg flex-grow justify-center items-center sm:flex hidden"
      >
        <input
          className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
          name="search_query"
          defaultValue={searchQuery || ""}
        />
        <button
          type="submit"
          className="flex justify-center items-center px-3 bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800"
        >
          <SearchIcon />
        </button>
      </form>
      <div className="flex justify-center items-center gap-1 sm:gap-2 sm:px-3 py-2">
        <button
          className="sm:hidden w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer"
          onClick={openSearchShow(true)}
        >
          <SearchIcon />
        </button>
        <Link
          href="#"
          className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer"
        >
          <AddIcon />
        </Link>
        <Link
          href="#"
          className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 cursor-pointer"
        >
          <BellIcon />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 rounded-full bg-sky-600 flex justify-center items-center hover:bg-sky-700 cursor-pointer"
        >
          <UserIcon className="" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
