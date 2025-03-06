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
        <div className="flex justify-between items-center lg:px-32 px-6 py-4">
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? (
              <IoClose className="text-black" size={25} />
            ) : (
              <IoReorderThree className="text-black" size={25} />
            )}
          </button>
          <div className="hidden lg:block">
            <Menu route={routes} />
          </div>
          
          <h1
            className="font-semibold text-md lg:text-3xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            B2C Jewellery
          </h1>
          <div className="relative w-32 lg:w-48">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-black shadow-md rounded-full text-center border border-black placeholder:text-black text-sm lg:text-md px-3 py-1"
            />
            <FaSearch className="absolute right-3 top-2 text-black cursor-pointer" size={12} />
          </div>
        </div>
      </header>
      {open && (
            <div className="fixed inset-0 h-[50vh] bg-white z-40 flex items-center justify-center lg:hidden">
              <Menu route={routes} />
            </div>
          )}

    </>
  );
};

export default Header;
