'use client'
import BellIcon from "@/components/icons/BellIcon";
import AddIcon from "@/components/icons/AddIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import UserIcon from "@/components/icons/UserIcon";

const Header = () => {

    return (
        <header className="flex justify-between items-center px-7">
            <div className="p-3 flex gap-1"><LogoIcon/>
                <div><span className="dark:text-white">Raj</span><span className="text-sky-500">Tube</span></div>
            </div>
            <div className="max-w-96 flex-grow flex justify-center items-center">
                <input className="h-10 w-full border border-zinc-700 rounded-l-full bg-black focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"/>
                <button
                    className="flex justify-center items-center px-3 border border-r-0 border-zinc-700 bg-zinc-800 rounded-r-full w-16 h-10 hover:bg-zinc-700">
                    <SearchIcon/></button>
            </div>
            <div className="flex justify-center items-center gap-3 px-3 py-2">
                <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800"><AddIcon/>
                </div>
                <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800"><BellIcon/>
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-600 flex justify-center items-center hover:bg-sky-700"><UserIcon className=""/></div>
            </div>
        </header>
    );
};

export default Header;
