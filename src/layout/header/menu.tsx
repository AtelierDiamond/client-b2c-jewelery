import Link from "next/link";
import React from "react";
import MenuList from "./menu-list";

type List = {
  id: number;
  label: string;
  path: string;
  list?: string;
};

function Menu({ route }: { route: List[] }) {
  return (
    <ul className="flex justify-center gap-8 mt-8">
      {route.map((item) => (
        <li key={item.id} className="group">
          <Link href={item.path}>{item.label}</Link>
          {/* Full-width dropdown */}
          <MenuList list={item.list} />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
