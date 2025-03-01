import Banner from '@/components/Home/Banner';
import JewellsCategory from '@/components/Home/JewellsCategory';
import React from 'react';
import Image from 'next/image';
import round from '../../public/images/DiamondShapes/Round.png';
import asscher from '../../public/images/DiamondShapes/Asscher.png';
import radiant from '../../public/images/DiamondShapes/Radiant.png';
import pear from '../../public/images/DiamondShapes/Pear.png';
import oval from '../../public/images/DiamondShapes/Oval.png';
import cushionS from '../../public/images/DiamondShapes/cushion Square.png';
import emerald from '../../public/images/DiamondShapes/Emerald.png';
import princess from '../../public/images/DiamondShapes/Princess.png';
import marquise from '../../public/images/DiamondShapes/Marquise.png';
import heart from '../../public/images/DiamondShapes/Heart.png';
import cushionL from '../../public/images/DiamondShapes/cushion Long.png';
import radiantSq from '../../public/images/DiamondShapes/Radiant Square.png';

function Page() {
  const DiamondShapes = [
    { id: 'round', src: round, alt: 'Round' },
    { id: 'oval', src: oval, alt: 'Oval' },
    { id: 'emerald', src: emerald, alt: 'Emerald' },
    { id: 'radiant', src: radiant, alt: 'Radiant' },
    { id: 'cushion-long', src: cushionL, alt: 'Cushion Long' },
    { id: 'pear', src: pear, alt: 'Pear' },
    { id: 'marquise', src: marquise, alt: 'Marquise' },
    { id: 'princess', src: princess, alt: 'Princess' },
    { id: 'cushion', src: cushionS, alt: 'Cushion Square' },
    { id: 'heart', src: heart, alt: 'Heart' },
    { id: 'asscher', src: asscher, alt: 'Asscher' },
    { id: 'radiantsq', src: radiantSq, alt: 'Radiant Square' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Banner />
      <div className="w-full mt-8 text-center">
        <h2 className="text-2xl font-semibold">Shop Diamonds By Shape</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {DiamondShapes.map((shape) => (
            <div key={shape.id} className="flex flex-col items-center">
              <Image
                src={shape.src}
                alt={shape.alt}
                width={80}
                height={80}
                className="transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-2 text-sm font-medium">{shape.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <JewellsCategory />
    </div>
  );
}

export default Page;