"use client";
import Image from "next/image";
import banner from "../../../public/images/categories/Home page.png";
import gif from "../../../public/images/banner/Untitled-design.gif";

function Banner() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center font-montserrat">
      <Image
        src={banner}
        alt="Banner Image"
        fill
        objectFit="cover"
        className="opacity-90"
        priority
      />
      <div className="absolute flex flex-col items-center text-center space-y-1 lg:mt-10">
        <h3 className="text-md md:text-xl lg:text-2xl font-medium text-black tracking-wide">
          DISCOVER
        </h3>
        <p className="text-sm md:text-md lg:text-xl font-medium text-black tracking-wide">
          THE LUXURY OF THE NATURE
        </p>
        <Image
          src={gif}
          alt="Overlay GIF"
          width={300}
          height={300}
          className="z-10 w-64 md:w-48 lg:w-full"
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
