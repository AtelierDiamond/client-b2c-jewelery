import Image from "next/image";
import React from "react";
import background from "../../../public/images/banner/description-background.png";

function Description() {
  return (
    <div className="relative h-screen bg-white font-montserrat">
      <div className="inset-0 -z-10">
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </div>
      <div className="relative w-full py-12 px-6 lg:px-12 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl xl:text-4xl font-medium text-black">Forest Flower</h2>
            <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
              We offer an exquisite selection of colored jewelry available in a variety of hues. 
              You&apos;ll find a wonderful assortment at Diamond Forest.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 mt-32">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl xl:text-4xl font-medium text-black">White Gold & Yellow Gold</h2>
            <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
              We offer an extensive collection of statement jewelry, giving you the opportunity 
              to choose and create a personalized set across all categories of jewelry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
