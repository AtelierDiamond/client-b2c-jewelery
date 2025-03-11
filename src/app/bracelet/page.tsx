"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Cards from "@/components/Engagement/Cards";
import Filters from "@/components/Engagement/Filters";
import Carousel from "@/components/Bracelet/Carousel";


function Page() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="font-montserrat pt-24">
                {/* <div className="absolute hidden lg:block">
                    <Image
                        className="object-cover"
                        src={protrait}
                        alt="Engagement portrait"
                    />
                </div>
                <div className="relative w-full px-6 xl:px-12 xl:py-32 flex items-center hidden lg:block cursor-pointer">
                    <div className="max-w-4xl">
                        <h1 className="xl:text-5xl text-2xl font-semibold font-droid-serif text-[#332421] cursor-pointer">
                            Engagement Rings
                        </h1>
                        <p className="mt-4 italic font-Playwrite_US_Modern text-2xl text-[#332421] cursor-pointer">
                            Because forever deserves nothing less than perfection
                        </p>
                        <p className="mt-4 leading-relaxed text-[#332421] text-xl cursor-pointer">
                            An engagement ring isn’t just jewelry—it’s a promise, a moment frozen in time,
                            and the beginning of a beautiful journey. At Diamond Forest, we craft rings that
                            reflect your unique love story, blending timeless elegance with modern sophistication.
                        </p>
                    </div>
                </div> */}
                <Carousel/>
                <div className="relative flex items-center m-6 mt-6 mb-0 cursor-pointer">
                    <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(true)}>
                        <h3 className="xl:text-2xl text-md font-medium text-[#332421] hover:text-[#FF5F15] xl:mt-0 mt-4">Filter</h3>
                        <TbAdjustmentsHorizontal size={25} className="text-[#332421] hover:text-[#FF5F15] xl:mt-0 mt-4" />
                    </div>
                    {isOpen && (
                        <section className="xl:w-1/4 p-2 w-full top-0 left-0 z-50 bg-white h-screen fixed overflow-y-auto">
                            <div className="w-full h-10 flex justify-end items-center">
                                <RxCross2
                                    onClick={() => setIsOpen(false)}
                                    size={25}
                                    className="text-[#332421] me-2 cursor-pointer hover:text-[#FF5F15]"
                                />
                            </div>
                            <Filters />
                        </section>
                    )}
                    <div className="flex items-center gap-3 p-1 font-bold ml-8 xl:mt-0 mt-4 rounded-lg">
                        <select className="mr-10 bg-white px-3 text-[#332421]">
                            <option value="" className="xl:text-2xl text-md font-medium" defaultValue="">
                                Sort By
                            </option>
                            <option value="Best Sellers">Best Sellers</option>
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                 <h1 className="font-semibold text-md md:text-xl xl:text-2xl cursor-pointer uppercase font-montserrat flex items-center justify-center">BRACELETS</h1>   
                {/* Cards Section */}
                <div className="w-full bg-[#f4f4f4] relative">
                    <Cards />
                </div>
            </div>
        </>
    );
}

export default Page;
