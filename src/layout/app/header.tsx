"use client";

import React, { useState } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Menu from "../header/menu";

type Route = {
  id: number;
  label: string;
  path: string;
};

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const routes: Route[] = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "#" },
  ];

  return (
    <>
      <header className="absolute top-4 left-0 w-full z-50 font-montserrat text-black">
        <div className="flex justify-between items-center px-6 py-4 relative">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden z-50"
            aria-label="Toggle menu"
          >
            {open ? (
              <IoClose className="text-[#332421]" size={25} />
            ) : (
              <IoReorderThree className="text-[#332421]" size={25} />
            )}
          </button>
          <nav className="hidden lg:block">
            <Menu route={routes} />
          </nav>
          <h1
            className="font-semibold text-md md:text-xl xl:text-2xl cursor-pointer uppercase font-beaufort"
            onClick={() => router.push("/")}
          >
            DIAMOND FOREST
            {/* <Image
                              className="w-full"
                              src={logo}
                              alt='Diamond Forest'
                            /> */}
          </h1>
          <div className="relative w-32 lg:w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-black shadow-md rounded-full text-center border border-[#332421] placeholder:text-[#332421] text-sm lg:text-md px-3 py-1 focus:outline-none"
            />
            <FaSearch
              className="absolute right-3 top-2 text-[#332421] cursor-pointer"
              size={12}
            />
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed top-0 left-0 w-2/3 h-screen bg-[#707C48] z-50 flex flex-col items-center justify-center lg:hidden transition-all duration-300">
          <Menu route={routes} />
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 left-6"
            aria-label="Close menu"
          >
            <IoClose className="text-[#332421]" size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
