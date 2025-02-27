'use client'
import React from 'react';
import ring from '@/utils/images/RIGTXR05314O250-GY4_1.jpg';
import Image from 'next/image';
import CardFilters from './CardFilters';
import round from '../../../public/images/DiamondShapes/Round.png';
import asscher from '../../../public/images/DiamondShapes/Asscher.png';
import radiant from '../../../public/images/DiamondShapes/Radiant.png';
import pear from '../../../public/images/DiamondShapes/Pear.png';
import oval from '../../../public/images/DiamondShapes/Oval.png';
import cushion from '../../../public/images/DiamondShapes/cushion Square.png';
import emerald from '../../../public/images/DiamondShapes/Emerald.png';
import princess from '../../../public/images/DiamondShapes/Princess.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

function Cards() {
    const pathname = usePathname();
    const card = [
        {
            id: 1,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 2,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 3,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 4,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        }, 
        {
            id:5,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 6,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        }, 
        {
            id: 7,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        }, 
        {
            id: 8,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 9,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
        {
            id: 10,
            img: ring,
            alt: "Oval Petite Solitaire Engagement Ring",
            title: "Oval Petite Solitaire Engagement Ring",
        },
    ];

    const metalType = [
        { id: 1, colorCode: "#ffffff", text: "14K", title: "White gold" },
        { id: 2, colorCode: "#e5ce83", text: "14K", title: "Yellow gold" },
        { id: 3, colorCode: "#e7ba9a", text: "14K", title: "Rose gold" },
        { id: 4, colorCode: "#ffffff", text: "PL", title: "Platinum" },
        { id: 5, colorCode: "#ffffff", text: "14K", title: "White gold" },
        { id: 6, colorCode: "#e5ce83", text: "14K", title: "Yellow gold" },
        { id: 7, colorCode: "#e7ba9a", text: "14K", title: "Rose gold" },
        { id: 8, colorCode: "#ffffff", text: "PL", title: "Platinum" },
    ];

    const shape = [
        {
            id: 1,
            img: round,
            alt: 'round',
        },
        {
            id: 2,
            img: asscher,
            alt: 'round',
        },
        {
            id: 3,
            img: radiant,
            alt: 'round',
        },
        {
            id: 4,
            img: pear,
            alt: 'round',
        },
        {
            id: 5,
            img: oval,
            alt: 'round',
        },
        {
            id: 6,
            img: cushion,
            alt: 'round',
        },
        {
            id: 7,
            img: emerald,
            alt: 'round',
        },
        {
            id: 8,
            img: princess,
            alt: 'round',
        },
];

    const carat = [
        { id: 1, text: "0.75" },
        { id: 2, text: "1" },
        { id: 3, text: "1.5" },
        { id: 4, text: "2" },
        { id: 5, text: "2.5" },
        { id: 6, text: "3" },
        { id: 7, text: "3.5" },
        { id: 8, text: "4" },
    ];

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-4">
                {card.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col">
                        <Link href={pathname+`/${item.id}`}>
                    <div key={item.id} className="p-4 flex flex-col relative">
                        <FaHeart className="absolute top-6 right-6 text-white hover:text-red-500 cursor-pointer text-xl" />
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className="w-full object-cover"
                            height={200}
                            width={360}
                        />
                        </Link>
                        <div className='xl:text-md   font-semibold mt-2 '>{item.title}</div>
                        <div className='xl:text-md font-semibold mt-2 cursor-pointer'>{item.title}</div>
                        <CardFilters metalType={metalType} shape={shape} carat={carat} />
                        <div className='font-semibold xl:text-xl mt-2 cursor-pointer'>$2600</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;