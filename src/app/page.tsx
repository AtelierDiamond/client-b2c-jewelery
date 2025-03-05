import Banner from '@/components/Home/Banner';
import JewellsCategory from '@/components/Home/JewellsCategory';
import React from 'react';
import Commitment from '@/components/Home/commitment';
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
