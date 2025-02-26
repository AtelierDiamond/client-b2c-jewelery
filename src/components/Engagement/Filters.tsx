import React, { useState } from 'react';
import style1 from '@/utils/images/Mixed_Metal_v2.webp';
import { Icon } from "@iconify/react";
import Image from 'next/image';

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
                    <p className="text-md font-semibold font-serif">Metal</p>
                    <Icon icon={toggleMetal ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
                </div>
                {toggleMetal && (
                    <div className='flex mt-4 gap-3 flex-wrap'>
                    {metal.map(item => (
                        <div key={item.id} className='flex flex-col items-center'>
                            <div className="rounded-full hover:border-black h-14 w-14" style={{ backgroundColor: item.colorCode }}></div>
                            <div className="text-xs text-black w-full text-center mt-1">{item.title}</div>
                        </div>
                    ))}
                </div>
                )}
            </div>
            <div className='mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleStyle(!toggleStyle)}>
                    <p className="text-md font-semibold font-serif">Style</p>
                    <Icon icon={toggleStyle ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
                </div>
                {toggleStyle && (
                    <div className='flex gap-4 mt-2 flex-wrap'>
                        {style.map(item => (
                            <div key={item.id} className='flex flex-col items-center'>
                                <Image src={item.img} alt={item.alt} className="xl:w-10 xl:h-10 w-8 h-8" height={24} width={24} />
                                <div className="text-xs text-black w-auto text-center mt-1">{item.title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleWidth(!toggleWidth)}>
                    <p className="text-md font-semibold font-serif">Width</p>
                    <Icon icon={toggleWidth ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
                </div>
                {toggleWidth && (
                    width.map(item => (
                        <div key={item.id} className='flex gap-2 items-center'>
                            <input type='checkbox' />
                            <div className="text-md text-black">{item.title}</div>
                        </div>
                    ))
                )}
            </div>
            <div className='mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleGemstone(!toggleGemstone)}>
                    <p className="text-md font-semibold font-serif">Gemstone</p>
                    <Icon icon={toggleGemstone ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
                </div>
                {toggleGemstone && (
                    gemstone.map(item => (
                        <div key={item.id} className='flex gap-2 items-center'>
                            <input type='checkbox' />
                            <div className="text-md text-black">{item.title}</div>
                        </div>
                    ))
                )}
            </div>
            <div className='mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setToggleEngravable(!toggleEngravable)}>
                    <p className="text-md font-semibold font-serif">Engravable</p>
                    <Icon icon={toggleEngravable ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
                </div>
                {toggleEngravable && (
                    engravable.map(item => (
                        <div key={item.id} className='flex gap-2 items-center'>
                            <input type='checkbox' />
                            <div className="text-md text-black">{item.title}</div>
                        </div>
                    ))
                )}
            </div>
            <div className="text-center mt-2">
                <button type="submit" className="bg-white px-6 py-2 text-xl font-medium">View Result</button>
            </div>
        </div>
    );
}

export default Filters;