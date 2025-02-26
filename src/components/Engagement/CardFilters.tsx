"use client";
import Image from 'next/image';
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
    img: string;
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

    const [scrollState, setScrollState] = useState<Record<string, { left: boolean; right: boolean }>>({
        Metal: { left: false, right: true },
        Shape: { left: false, right: true },
        Carat: { left: false, right: true },
    });

    // useEffect(() => {
    //     Object.keys(scrollRefs).forEach((category) => updateScrollButtons(category));
    // }, []);

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

    const handleShape = () => {
        console.log("Shape selected")
    }

    const handleMetal = () => {
        console.log("Metal Selected")
    }

    const handleCarat = () => {
        console.log('Carat selected')
    }

    return (
        <div className="container space-y-3 md:space-y-5">
  <div className="flex flex-col space-y-3 md:space-y-5">
    {[
      { title: 'Metal', items: metalType },
      { title: 'Shape', items: shape },
      { title: 'Carat', items: carat },
    ].map(({ title, items }) => (
      <div key={title} className="flex flex-col md:flex-row items-center md:items-start">
        <h3 className="xl:text-lg sm:text-xs text-gray-600 mr-2">{title}</h3>
        <div className="flex justify-around items-center w-full">
          <button
            onClick={() => scroll(title, 'left')}
            disabled={!scrollState[title]?.left}
            className="text-[#999696] hover:text-black disabled:text-gray-300"
          >
            <SlArrowLeft size={25}/>
          </button>
          <div
            ref={scrollRefs[title]}
            onScroll={() => updateScrollButtons(title)}
            className="flex overflow-x-auto scrollbar-none scroll-smooth gap-2 md:gap-3"
            style={{
              width: '100%',
              maxWidth: '200px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {items.map((item: MetalType | Shape | Carat) => (
              <div key={item.id} className="flex flex-col justify-center items-center ">
                {title === 'Metal' && "colorCode" in item ? (
                  <div
                    className="group rounded-full xl:h-8 xl:w-8 w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-black"
                    style={{ backgroundColor: item.colorCode }}
                    onClick={handleMetal}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-black">
                      {item.text}
                    </span>
                  </div>
                ) : title === 'Shape' && "img" in item ? (
                  <div
                    onClick={handleShape}
                    className="text-xs text-black xl:h-10 xl:w-10 w-5 h-5 flex items-center justify-center hover:border hover:border-black"
                  >
                    <Image
                      src={item.img}
                      alt={item.alt || ''}
                      className="xl:w-10 xl:h-10"
                      height={24}
                      width={24}
                    />
                  </div>
                ) : title === "Carat" && "text" in item ? (
                  <div
                    onClick={handleCarat}
                    className="xl:text-xl text-black flex items-center justify-center cursor-pointer p-1 hover:border hover:border-black"
                  >
                    {item.text}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(title, 'right')}
            disabled={!scrollState[title]?.right}
            className="text-[#999696] hover:text-black disabled:text-gray-300"
          >
            <SlArrowRight size={25}/>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    );
}

export default CardFilters;
