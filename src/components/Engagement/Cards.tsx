'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import ImageCarousel from '@/components/Engagement/CardCarousel';
import Link from 'next/link';

const Cards = () => {
    const pathname = usePathname();

    const cardList = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: 'Oval Petite Solitaire Engagement Ring',
    }));

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            {cardList.map((item) => (
                <div
                    key={item.id}
                    className="p-4 flex flex-col items-center w-full max-w-xs mx-auto"
                >
                    <div className="w-full flex justify-center items-center">
                        <ImageCarousel
                            link={`${pathname}/${item.id}`}
                            className="w-full h-48 object-cover rounded-md"
                        />
                    </div>
                    <div className="w-full font-semibold mt-2 text-sm md:text-md">
                        {item.title}
                    </div>
                    <div className="w-full text-sm mt-1">
                        ★★★★☆ <span className="text-gray-400 ml-1">(4.0)</span>
                    </div>
                    <div className="w-full mt-1">
                        <span className="font-semibold text-lg text-black">₹1,424</span>
                        <span className="text-gray-400 text-sm line-through ml-2">₹1,499</span>
                    </div>
                    <Link href={`${pathname}/${item.id}`} className="w-full">
                        <button
                            type="button"
                            className="w-full bg-[#5f6a3b] text-white font-semibold py-2 px-6 mt-3 text-md md:text-lg"
                        >
                            Add To Cart
                        </button>
                    </Link>
                </div>
            ))}
        </div>

    );
};

export default Cards;