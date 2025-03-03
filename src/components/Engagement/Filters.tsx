"use client";
import React, { useState } from 'react';
import style1 from '@/utils/images/Mixed_Metal_v2.webp';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import PriceInput from '../common/PriceSlider';

function Filters() {
    const [toggleMetal, setToggleMetal] = useState(true);
    const [toggleStyle, setToggleStyle] = useState(true);
    const [toggleWidth, setToggleWidth] = useState(true);
    const [toggleGemstone, setToggleGemstone] = useState(true);
    const [toggleEngravable, setToggleEngravable] = useState(true);

    const metal = [
        { id: 1, colorCode: "#ffffff", text: "14K", title: "White gold" },
        { id: 2, colorCode: "#e5ce83", text: "14K", title: "Yellow gold" },
        { id: 3, colorCode: "#e7ba9a", text: "14K", title: "Rose gold" },
        { id: 4, colorCode: "#ffffff", text: "14K", title: "Platinum" },
    ];
    const style = [
        { id: 1, img: style1, alt: "Mixed Metal", title: "Mixed Metal" },
        { id: 2, img: style1, alt: "Comfort fit", title: "Comfort fit" },
        { id: 3, img: style1, alt: "Unique", title: "Unique" },
        { id: 4, img: style1, alt: "Beveled", title: "Beveled" },
    ];
    const width = [
        { id: 1, title: "under 5mm" },
        { id: 2, title: "5-6mm" },
        { id: 3, title: "6-7mm" },
        { id: 4, title: "Over 7mm" },
    ];
    const gemstone = [
        { id: 1, title: "Natural Diamond" },
        { id: 2, title: "Lab Diamond" },
        { id: 3, title: "Black Diamond" },
        { id: 4, title: "Sapphire" },
        { id: 5, title: "Other Gemstones" }
    ];
    const engravable = [
        { id: 1, title: "Engravable Only" }
    ];

    return (
        <div className='m-4 font-montserrat'>
            <div>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleMetal(!toggleMetal)}>
                    <p className="xl:text-xl text-md font-semibold font-montserrat text-black">Metal</p>
                    <Icon icon={toggleMetal ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                </div>
                {toggleMetal && (
                    <div className='flex mt-4 gap-3 flex-wrap'>
                        {metal.map(item => (
                            <div key={item.id} className='flex flex-col items-center'>
                                <div className="rounded-full border border-gray-300 h-14 w-14" style={{ backgroundColor: item.colorCode }}></div>
                                <div className="xl:text-md text-sm text-black w-full text-center mt-1 font-montserrat font-normal">{item.title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='mt-6'>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleStyle(!toggleStyle)}>
                    <p className="xl:text-xl text-md font-semibold font-montserrat text-black">Style</p>
                    <Icon icon={toggleStyle ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                </div>
                {toggleStyle && (
                    <div className='flex gap-4 mt-4 flex-wrap'>
                        {style.map(item => (
                            <div key={item.id} className='flex flex-col items-center'>
                                <Image src={item.img} alt={item.alt} className="xl:w-10 xl:h-10 w-8 h-8" height={24} width={24} />
                                <div className="xl:text-md text-sm text-black w-auto text-center font-normal mt-1 font-montserrat">{item.title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='mt-6'>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium ">Price</h3>
                    <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black" />
                    <div className="flex justify-between text-sm text-gray-700">
                        <div className="flex items-center gap-2 mt-2">
                            <div className="relative flex items-center">
                                <span className="absolute left-2 text-gray-500">₹</span>
                                <input
                                    type="number"
                                    className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
                                />
                            </div>

                            <span className="text-sm text-gray-500">to</span>

                            <div className="relative flex items-center">
                                <span className="absolute left-2 text-gray-500">₹</span>
                                <input
                                    type="number"
                                    className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleWidth(!toggleWidth)}>
                    <p className="xl:text-xl text-md font-semibold font-montserrat text-black">Width</p>
                    <Icon icon={toggleWidth ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                </div>
                {toggleWidth && (
                    width.map(item => (
                        <div key={item.id} className="flex gap-3 items-center">
                            <input type="checkbox" className="h-5 w-5" />
                            <div className="text-base xl:text-lg text-black font-montserrat font-normal">
                                {item.title}
                            </div>
                        </div>

                    ))
                )}
            </div>
            <div className='mt-6'>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleGemstone(!toggleGemstone)}>
                    <p className="xl:text-xl text-md font-semibold font-montserrat text-black">Gemstone</p>
                    <Icon icon={toggleGemstone ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                </div>
                {toggleGemstone && (
                    gemstone.map(item => (
                        <div key={item.id} className="flex gap-3 items-center">
                            <input type="checkbox" className="h-5 w-5" />
                            <div className="text-base xl:text-lg text-black font-montserrat font-normal">
                                {item.title}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className='mt-6'>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleEngravable(!toggleEngravable)}>
                    <p className="xl:text-xl text-md font-semibold font-montserrat text-black">Engravable</p>
                    <Icon icon={toggleEngravable ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl text-black" />
                </div>
                {toggleEngravable && (
                    engravable.map(item => (
                        <div key={item.id} className="flex gap-3 items-center">
                            <input type="checkbox" className="h-5 w-5" />
                            <div className="text-base xl:text-lg text-black font-montserrat font-normal">
                                {item.title}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="text-center mt-6">
                <button type="submit" className="bg-[#4d6d38] px-6 py-2 xl:text-xl text-md font-[200px] text-white font-montserrat ">View Result</button>
            </div>
        </div>
    );
}

export default Filters;