"use client";
import Image from "next/image";
import banner from "../../../public/images/categories/Home page.png";
import gif from "../../../public/images/banner/Untitled-design.gif";

function Banner() {
  return (
    <div className="relative w-full min-h-screen sm:h-[500px] flex items-center justify-center font-montserrat">
      <Image
        src={banner}
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute flex flex-col items-center text-center space-y-1 mt-36 md:mt-10 xl:mt-32">
        <h3 className="text-md md:text-xl xl:text-3xl font-medium text-black tracking-wide font-dejavu-serif">
          DISCOVER
        </h3>
        <p className="text-sm md:text-md xl:text-xl font-medium text-black tracking-wide font-dejavu-serif">
          THE LUXURY OF THE NATURE
        </p>
        <Image
          src={gif}
          alt="Overlay GIF"
          width={100}
          height={100}
          className="z-10 w-48 md:w-48 xl:w-64"
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
