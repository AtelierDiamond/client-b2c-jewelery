"use client";
import Image from "next/image";
import banner from "../../../public/images/banner/Home Page Banner.png";

function Banner() {
  return (
    <div className="relative w-full h-[70vh] flex items-center font-montserrat">
      <Image
        src={banner}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />
      <div className="absolute left-10 md:left-20 lg:left-28 max-w-lg text-left text-black">
        <h2 className="text-4xl xl:text-5xl font-serif font-semibold text-[#f8f3e9]">
          Minimal Collection
        </h2>
        <p className="mt-6 text-lg xl:text-2xl leading-relaxed text-[#f8f3e9]">
          Diamond Forest offers lab diamond jewelry for occasions big and small.
          Discover gifts worth falling for, designed by award-winning artists.
        </p>
        <div className="mt-8">
          <button className="bg-white text-[#4d6d38] text-sm md:text-lg font-medium rounded-md px-1 hover:bg-gray-200 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
