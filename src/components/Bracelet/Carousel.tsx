"use client";
import React, { useRef } from "react";
import bracelet from "../../../public/images/categories/bracelet.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Item = {
  img: StaticImageData;
  alt: string;
};

function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const categoryImages: Item[] = new Array(10).fill({
    img: bracelet,
    alt: "Bracelet",
  });

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-500 w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#332421] hover:text-white"
      >
        <MdKeyboardArrowLeft size={25} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-500 w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#332421] hover:text-white"
      >
        <MdKeyboardArrowRight size={25} />
      </button>

      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll w-full scroll-smooth no-scrollbar px-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categoryImages.map((item, index) => (
          <div key={index} className="p-2 ">
            <div className="min-w-[180px] min-h-[160px] relative">
              <Link href={`/jewells?category=${item.alt.toLowerCase()}`} passHref>
                <Image className=" object-cover" src={item.img} alt={item.alt} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
