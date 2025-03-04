import Banner from '@/components/Home/Banner';
import JewellsCategory from '@/components/Home/JewellsCategory';
import React from 'react';
import Image from 'next/image';
import bracelet from "../../public/images/banner/necklace.png";
import background from "../../public/images/banner/Texture Background.png";
import Commitment from '@/components/Home/commitment';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Banner />
      <JewellsCategory />
      <div className="relative flex flex-col lg:flex-row items-center gap-6 bg-gray-100 rounded-lg p-6 w-full overflow-hidden">
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-90"
          priority
        />
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src={bracelet}
            alt="White gold bracelet"
            width={300}
            height={200}
            className="relative top-0 left-28 z-10  hidden lg:block"
          />
          <Image
            src={bracelet}
            alt="Yellow gold bracelet"
            width={300}
            height={200}
            className="relative top-4 left-0 z-20"
          />
        </div>

        <div className="relative w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl xl:text-5xl font-serif font-medium text-black">
            White Gold & Yellow Gold
          </h2>
          <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
            We offer an extensive collection of statement jewelry, allowing you to
            choose and create a personalized set across all categories of jewelry.
          </p>
        </div>
      </div>
      <Commitment />
    </div>
  );
}

export default Page;
