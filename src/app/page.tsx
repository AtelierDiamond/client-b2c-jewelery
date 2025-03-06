import Banner from '@/components/Home/Banner';
import JewellsCategory from '@/components/Home/JewellsCategory';
import React from 'react';
import Image from 'next/image';
import bracelet from "../../public/images/banner/necklace.png";
import background from "../../public/images/banner/Texture Background.png";
import Commitment from '@/components/Home/commitment';
import flower1 from '../../public/images/categories/flower-ring1.png';
import flower2 from '../../public/images/categories/flower-ring2.png';
import mountain from '../../public/images/banner/mountain.png';
import Description from '@/components/Home/Description';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Banner />
      <JewellsCategory />
      {/* <div className="relative flex flex-col lg:flex-row items-center justify-center w-full bg-[#f4f4f4] py-10">
      <Image
        src={mountain}
        alt="Banner Image"
        fill
        objectFit="cover"
        className="opacity-90"
        priority
      />
          <div className="w-full text-center lg:text-left px-6 lg:px-12">
            <h2 className="text-2xl xl:text-5xl font-serif font-medium text-black">
              Forest Flower
            </h2>
            <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
              We offer an exquisite selection of colored jewelry available in a variety of hues.
              You'll find a wonderful assortment at Diamond Forest.
            </p>
          </div>
          <div className="relative lg:w-1/2 flex justify-center">
          
        </div>
        </div>
        <hr className="relative border-t border-[#cbc2b5]" />
      <div className="relative flex flex-col lg:flex-row items-center gap-6 bg- bg-[#f4f4f4] p-6 pt-0 rounded-lg w-full overflow-hidden">
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
      </div> */}
      <Description/>
      <Commitment />
    </div>
  );
}

export default Page;
