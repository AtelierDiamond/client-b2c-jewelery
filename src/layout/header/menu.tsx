import Link from "next/link";
import React, { useState } from "react";
import MenuList from "./menu-list";

type List = {
  id: number;
  label: string;
  path: string;
  list?: string;
};

function Menu({ route }: { route: List[] }) {
  const [toggle, setToggle] = useState(false)
  return (
    <ul className="lg:flex flex-col lg:flex-row justify-center gap-8 mt-8 cursor-pointer">
      {route.map((item) => (
        <li key={item.id} className="group my-2">
          <Link onClick={()=>setToggle(!toggle)} href={item.path}>{item.label}</Link>
          {/* Full-width dropdown */}
          <MenuList list={item.list} />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
