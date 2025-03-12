"use client";

import React, { useState } from "react";
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
                <Carousel/>
                <div className="relative grid xl:grid-cols-2 md:grid-cols-2 m-6 mt-4 cursor-pointer hidden lg:block">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 font-bold xl:mt-4 mt-4 rounded-lg">
                            <select className="bg-white text-[#332421]">
                                <option value="" className="xl:text-2xl text-md font-medium" defaultValue="">
                                    Sort By
                                </option>
                                <option value="Best Sellers">Best Sellers</option>
                                <option value="Newest">Newest</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(!isOpen)}>
                                <h3 className="xl:text-2xl text-md font-medium text-[#332421] hover:text-[#FF5F15] xl:mt-4 mt-4">
                                    Filter
                                </h3>
                                <TbAdjustmentsHorizontal size={25} className="text-[#332421] hover:text-[#FF5F15] xl:mt-4 mt-4" />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-auto" : "max-h-0"} w-full bg-white shadow-lg`}>
                                <div className="w-full flex justify-end items-center p-2">
                                    <RxCross2
                                        onClick={() => setIsOpen(false)}
                                        size={25}
                                        className="text-[#332421] me-2 cursor-pointer hover:text-[#FF5F15]"
                                    />
                                </div>
                                <Filters />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex justify-between items-center m-8 mb-0 cursor-pointer lg:hidden'>
                    <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(true)}>
                        <h3 className="xl:text-2xl text-md font-medium text-[#332421] hover:text-[#FF5F15]">Filter</h3>
                        <TbAdjustmentsHorizontal size={25} className="text-[#332421] hover:text-[#FF5F15]"/>
                    </div>
                    <div>
                        <section className={`${isOpen ? "block" : "hidden"} xl:w-1/4 p-2 w-full top-0 left-0 z-50 bg-white h-screen fixed cursor-pointer overflow-y-auto`}>
                            <div className='w-full h-10 rounded-md flex justify-end items-center '>
                                <RxCross2 onClick={() => setIsOpen(false)} size={25} className='text-black me-2' />
                            </div>
                            <Filters />
                        </section>
                    </div>
                    <div className="flex items-center gap-3 font-bold rounded-lg">
                            <select className="bg-white text-[#332421]">
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
                 <h1 className="font-semibold text-md md:text-xl xl:text-2xl cursor-pointer font-droid uppercase flex items-center justify-center underline">BRACELETS</h1>   
                <div className="w-full bg-[#f4f4f4] relative">
                    <Cards />
                </div>
            </div>
        </>
    );
}

export default Page;
