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
    <ul className="lg:flex flex-col lg:flex-row justify-center gap-14 lg:text-xl cursor-pointer relative">
      {route.map((item) => (
        <li key={item.id} className="group my-2">
          <Link href={item.path}>{item.label}</Link>
          {/* <MenuList list={item.list} /> */}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
