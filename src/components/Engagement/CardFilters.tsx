"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

type MetalType = {
    id: number;
    colorCode: string;
    text: string;
    title: string;
};

type Shape = {
    id: number;
    img: string | StaticImageData;
    alt: string;
};

type Carat = {
    id: number;
    text: string;
};

function CardFilters({
    metalType,
    shape,
    carat,
}: {
    metalType: MetalType[];
    shape: Shape[];
    carat: Carat[];
}) {
    const scrollRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        Metal: useRef<HTMLDivElement>(null),
        Shape: useRef<HTMLDivElement>(null),
        Carat: useRef<HTMLDivElement>(null),
    };

    const [selected, setSelected] = useState({
        Metal: null as number | null,
        Shape: null as number | null,
        Carat: null as number | null,
    });

    const [scrollState, setScrollState] = useState({
        Metal: { left: false, right: true },
        Shape: { left: false, right: true },
        Carat: { left: false, right: true },
    });

    const updateScrollButtons = (category: string) => {
        if (scrollRefs[category].current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRefs[category].current;
            setScrollState((prev) => ({
                ...prev,
                [category]: {
                    left: scrollLeft > 0,
                    right: scrollLeft < scrollWidth - clientWidth,
                },
            }));
        }
    };

    const scroll = (category: string, direction: 'left' | 'right') => {
        if (scrollRefs[category].current) {
            const offset = 200;
            scrollRefs[category].current.scrollBy({
                left: direction === 'left' ? -offset : offset,
                behavior: 'smooth',
            });
        }
    };

    const handleSelection = (category: string, id: number) => {
        setSelected((prev) => ({ ...prev, [category]: id }));
    };

    return (
        <div className="container space-y-3 md:space-y-5">
            {[
                { title: 'Metal', items: metalType },
                { title: 'Shape', items: shape },
                { title: 'Carat', items: carat },
            ].map(({ title, items }) => (
                <div key={title} className="flex flex-col md:flex-row items-center md:items-start mt-2">
                    <h3 className="xl:text-lg sm:text-xs text-gray-600 mr-2 cursor-pointer">{title}</h3>
                    <div className="flex justify-around items-center w-full">
                        <button
                            onClick={() => scroll(title, 'left')}
                            className="text-[#999696] hover:text-black disabled:text-gray-300"
                        >
                            <SlArrowLeft size={25} />
                        </button>
                        <div
                            ref={scrollRefs[title]}
                            onScroll={() => updateScrollButtons(title)}
                            className="flex overflow-x-auto scrollbar-none scroll-smooth gap-2 md:gap-3"
                            style={{ width: '100%', maxWidth: '200px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {items.map((item: MetalType | Shape | Carat) => (
                                <label key={item.id} className="flex flex-col justify-center items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name={title}
                                        checked={selected[title] === item.id}
                                        onChange={() => handleSelection(title, item.id)}
                                        className="hidden"
                                    />
                                    {title === 'Metal' && "colorCode" in item ? (
                                        <div
                                            className={`group rounded-full xl:h-8 xl:w-8 w-6 h-6 border border-gray-300 flex items-center justify-center ${selected[title] === item.id ? 'border-black' : 'hover:border-black'}`}
                                            style={{ backgroundColor: item.colorCode }}
                                        >
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-black">
                                                {item.text}
                                            </span>
                                        </div>
                                    ) : title === 'Shape' && "img" in item ? (
                                      <div
                                      className={`text-xs text-black xl:h-10 xl:w-10 w-10 h-10 flex items-center justify-center ${selected[title] === item.id ? 'border border-black' : 'hover:border hover:border-black'}`}
                                  >
                                      <Image src={item.img} alt={item.alt || ''} height={40} width={40} />
                                  </div>
                                  
                                    ) : title === 'Carat' && "text" in item ? (
                                        <div
                                            className={`xl:text-xl text-black flex items-center justify-center p-1 cursor-pointer ${selected[title] === item.id ? 'border border-black' : 'hover:border hover:border-black'}`}
                                        >
                                            {item.text}
                                        </div>
                                    ) : null}
                                </label>
                            ))}
                        </div>
                        <button
                            onClick={() => scroll(title, 'right')}
                            className="text-[#999696] hover:text-black disabled:text-gray-300"
                        >
                            <SlArrowRight size={25} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardFilters;