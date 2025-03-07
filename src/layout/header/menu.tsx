import Link from "next/link";
import React from "react";
// import MenuList from "./menu-list";

type List = {
  id: number;
  label: string;
  path: string;
  list?: string;
};

function Menu({ route }: { route: List[] }) {

  return (
    <ul className="lg:flex flex-col lg:flex-row lg:text-black text-[#d9d1bc] justify-center lg:mt-0 mt-5 lg:text-xl w-full cursor-pointer relative">
      {route.map((item) => (
        <li key={item.id} className="group my-2 text-center m-2 p-2 lg:border-none border border-[#d9d1bc] rounded-md ">
          <Link href={item.path}>{item.label}</Link>
          {/* <MenuList list={item.list} /> */}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
