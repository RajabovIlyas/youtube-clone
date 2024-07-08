"use client";
import BellIcon from "@/components/icons/BellIcon";
import AddIcon from "@/components/icons/AddIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import UserIcon from "@/components/icons/UserIcon";
import { useState } from "react";
import BackIcon from "@/components/icons/BackIcon";
import { useResize } from "@/components/Header/use-resize.hook";
import Link from "next/link";
import SearchForm from "@/components/Header/SearchForm";
import "./header.style.css";

const Header = () => {
  const [searchShow, setSearchShow] = useState(false);
  const { isScreenSm } = useResize();

  const openSearchShow = (newSearchShow: boolean) => () =>
    setSearchShow(newSearchShow);

  if (searchShow && !isScreenSm) {
    return (
      <header className="header-container relative">
        <button
          className="header-container_item"
          onClick={openSearchShow(false)}
        >
          <BackIcon />
        </button>
        <SearchForm className="flex py-2 " />
      </header>
    );
  }

  return (
    <header className="header-container">
      <Link href="/">
        <div className="header-container_logo">
          <LogoIcon />
          <div>
            <span className="dark:text-white">Raj</span>
            <span className="text-sky-500">Tube</span>
          </div>
        </div>
      </Link>
      <SearchForm className="sm:flex hidden relative" />
      <ul className="header-container_items">
        <li className="sm:hidden">
          <button
            className="header-container_item"
            onClick={openSearchShow(true)}
          >
            <SearchIcon />
          </button>
        </li>
        <li>
          <Link href="#" className="header-container_item">
            <AddIcon />
          </Link>
        </li>
        <li>
          <Link href="#" className="header-container_item">
            <BellIcon />
          </Link>
        </li>
        <li>
          <Link href="#" className="header-container_user">
            <UserIcon className="" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
