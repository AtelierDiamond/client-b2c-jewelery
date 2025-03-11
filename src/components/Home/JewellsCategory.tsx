"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import ring from "../../../public/images/categories/ring.jpg";
import bracelet from "../../../public/images/categories/bracelet.jpg";
import earring from "../../../public/images/categories/earrings.jpg";
import necklace from "../../../public/images/categories/necklace.jpg";
import pendant from "../../../public/images/categories/pendant.jpg";

type Item = {
  img: StaticImageData;
  alt: string;
  id:number;
  path:string;
};

function JewellsCategory() {
  const categoryImages: Item[] = [
    {id:1, img: earring, alt: "EARRING", path:"#" },
    {id:2, img: ring, alt: "RING", path:"/engagement" },
    {id:3, img: bracelet, alt: "BRACELET", path:"/bracelet" },
    {id:4,img: pendant, alt: "PENDANT", path:"#" },
    {id:5, img: necklace, alt: "NECKLACE", path:"#" },
  ];

  return (
    <div className="w-full px-4 font-montserrat relative mt-4 mb-4">
      {/* <Image
        src={background}
        alt="background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      /> */}
      <h2 className="relative text-4xl text-[#332421] font-medium mb-6 text-center mt-4 cursor-pointer">
        CATEGORIES
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {categoryImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group w-32 h-36 xl:w-64 xl:h-72 overflow-hidden">
              <Link href={`${item.path}?category=${item.alt.toLowerCase()}`} passHref>
                <Image
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={item.img}
                  alt={item.alt}
                />
              </Link>
            </div>
            <h1 className="relative text-center xl:text-xl mt-3 font-bold text-[#332421] hover:text-[#FF5F15] cursor-pointer">
              {item.alt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JewellsCategory;
