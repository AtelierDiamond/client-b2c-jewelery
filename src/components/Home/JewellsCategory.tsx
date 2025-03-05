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
};

function JewellsCategory() {
  const categoryImages: Item[] = [
    { img: earring, alt: "EARRING" },
    { img: ring, alt: "RING" },
    { img: bracelet, alt: "BRACELET" },
    { img: pendant, alt: "PENDANT" },
    { img: necklace, alt: "NECKLACE" },
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
      <h2 className="relative text-4xl text-black font-medium mb-6 text-center mt-4">
        CATEGORIES
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {categoryImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group w-32 h-32 xl:w-64 xl:h-64 overflow-hidden">
              <Link href={`/engagement?category=${item.alt.toLowerCase()}`} passHref>
                <Image
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={item.img}
                  alt={item.alt}
                />
              </Link>
            </div>
            <h1 className="relative text-center xl:text-xl mt-3 font-bold text-[#a49886]">
              {item.alt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JewellsCategory;
