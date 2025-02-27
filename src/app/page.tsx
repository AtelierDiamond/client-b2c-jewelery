import Banner from '@/components/Home/Banner'
import JewellsCategory from '@/components/Home/JewellsCategory'
import React from 'react'
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
import Image from 'next/image';

function page() {
  const DimondShapes = [
    { id: "round", src: round, alt: "Round" },
    { id: "Oval", src: oval, alt: "Oval" },
    { id: "Emerald", src: emerald, alt: "Emerald" },
    { id: "Radiant", src: radiant, alt: "Radiant" },
    { id: "CushionLong", src: cushionL, alt: "Cushion Lg." },
    { id: "Pear", src: pear, alt: "Pear" },
    { id: "Marquise", src: marquise, alt: "Marquise" },
    { id: "Princess", src: princess, alt: "Princess" },
    { id: "Cushion", src: cushionS, alt: "Cushion Sq." },
    { id: "Heart", src: heart, alt: "Heart" },
    { id: "Asscher", src: asscher, alt: "Asscher" },
    { id: "RadiantSq", src: radiantSq, alt: "Radiant Sq." },
  ];
  return (
    <>
      <div className='h-screen'>
        <Banner />
        <div className="mt-4">
          <h2 className="font-medium text-2xl text-center font-montserrat">
            Shop Diamonds By Shape
          </h2>
          <div className="p-3 lg:rounded-full flex flex-wrap justify-center gap-6 items-center font-serif m-3">
            {DimondShapes.map((shape) => (
              <div key={shape.id} className="flex flex-col items-center">
                <Image
                  src={shape.src}
                  alt={shape.alt || ""}
                  className="w-16 sm:w-20 lg:w-24 transition-transform duration-300 hover:scale-110"
                  height={75}
                  width={75}
                />
                <p className="text-center text-black text-md font-medium mt-2 font-montserrat">
                  {shape.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

        <JewellsCategory />
      </div>
    </>
  )
}

export default page