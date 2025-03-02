"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ring from "../../../public/images/categories/ring.jpg";
import bracelet from "../../../public/images/categories/bracelet.jpg";
import earring from "../../../public/images/categories/earring.jpg";
import necklace from "../../../public/images/categories/necklace.jpg";
import pendant from "../../../public/images/categories/pendant.jpg";
import Link from "next/link";

type Item = {
  img: StaticImageData;
  alt: string;
};

function JewellsCategory() {

  const categoryImages:Item[] = [
    { img: ring, alt: "Ring" },
    { img: bracelet, alt: "Bracelet" },
    { img: earring, alt: "Earring" },
    { img: necklace, alt: "Necklace" },
    { img: pendant, alt: "Pendant" },
  ];
 

  return (
    <div className="w-full p-4 mt-8">
      <h2 className="text-3xl text-black font-medium cursor-pointer mb-2">
        Categories
      </h2>
      <div
  className="flex gap-6 w-full relative"
>
  {categoryImages.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="relative group overflow-hidden">
        <Link href={`/engagement?category=${item.alt.toLowerCase()}`} passHref>
          <Image
            className="object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-14"
            src={item.img}
            alt={item.alt}
          />
        </Link>
      </div>
      <h1 className="text-center text-xl mt-2 font-medium cursor-pointer text-black">
        {item.alt}
      </h1>
    </div>
  ))}
</div>

    </div>
  );
}

export default JewellsCategory;
