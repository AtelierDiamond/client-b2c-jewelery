import Image from 'next/image';
import React from 'react';
import background from '../../../public/images/banner/background.png';
import flower1 from '../../../public/images/categories/flower-ring1.png';
import flower2 from '../../../public/images/categories/flower-ring2.png';
import bracelet from "../../../public/images/banner/necklace.png";

function Description() {
    return (
        <div className="relative w-full bg-white font-montserrat">
            <div className="top-0 left-0 w-full h-full -z-10">
                <Image src={background} alt="Background Image" layout="fill" objectFit="cover" className="opacity-90" priority />
            </div>
            <div className="relative w-full max-w-7xl mx-auto py-12 px-6 lg:px-12 flex flex-col gap-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl xl:text-5xl font-serif font-medium text-black">Forest Flower</h2>
                        <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
                            We offer an exquisite selection of colored jewelry available in a variety of hues.
                            You'll find a wonderful assortment at Diamond Forest.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                    <Image src={flower1} alt="Forest Flower Jewelry" width={200} height={200} />
                    <Image src={flower2} alt="Forest Flower Jewelry" width={200} height={200} />
                    </div>
                </div>
                <hr className="relative border-t border-[#cbc2b5] mt-36" />
                <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl xl:text-5xl font-serif font-medium text-black">White Gold & Yellow Gold</h2>
                        <p className="mt-4 text-sm xl:text-2xl text-black leading-relaxed">
                            We offer an extensive collection of statement jewelry, giving you the opportunity to choose
                            and create a personalized set across all categories of jewelry.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
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
                
            </div>
        </div>
    </div >
  );
}

export default Description;
