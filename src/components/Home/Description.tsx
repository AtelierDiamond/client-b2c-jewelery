import Image from "next/image";
import React from "react";
import background from "../../../public/images/banner/description-background.png";

function Description() {
  return (
    <div className="min-h-screen bg-white font-droid-serif relative flex flex-col">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="left center"
          className="w-full h-full object-cover opacity-90"
          priority
        />
      </div>
      <div className="relative flex flex-col justify-center items-center flex-grow py-12 px-4 sm:px-6 md:px-12 gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-8">
          <div className="md:w-1/2 text-center md:text-left p-4 rounded-lg">
            <h2 className="text-xl sm:text-xl md:text-2xl xl:text-4xl font-medium text-black">Forest Flower</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-md xl:text-2xl text-black leading-relaxed">
              We offer an exquisite selection of colored jewellery available in a variety of hues.
              You&apos;ll find a wonderful assortment at Diamond Forest.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 lg:gap-8 lg:mt-32 mt-10">
          <div className="md:w-1/2 text-center md:text-left p-4 rounded-lg">
            <h2 className="text-xl sm:text-xl md:text-2xl xl:text-4xl font-medium text-black">White Gold & Yellow Gold</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-md xl:text-2xl text-black leading-relaxed">
              We offer an extensive collection of statement jewellery, giving you the opportunity
              to choose and create a personalized set across all categories of jewellery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;