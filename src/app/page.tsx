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
      <Description/>
      <Commitment />
    </div>
  );
}

export default Page;
