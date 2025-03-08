"use client";
import Cards from '@/components/Engagement/Cards'
import Filters from '@/components/Engagement/Filters';
import Image from 'next/image';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import protrait from '../../../public/images/engagement/portrait.png'

function Page() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className='font-montserrat relative pt-24'>
                <div className="flex flex-col md:flex-row justify-between items-center mx-auto mt-6 px-4">
                    <div className="text-center md:text-left">
                        <h1 className="xl:text-3xl text-xl font-semibold cursor-pointer font-droid-serif">
                            Engagement Ring
                        </h1>
                        <p className="mt-2 font-montserrat">Because forever deserves nothing less than perfection</p>
                        <p className="mt-4 leading-relaxed font-montserrat">
                            An engagement ring isn’t just jewelry—it’s a promise, a moment frozen in time, and the beginning of a beautiful journey.
                            At Diamond Forest, we craft rings that reflect your unique love story,
                            blending timeless elegance with modern sophistication.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-1/6 w-1/2">
                        <Image
                            className="rounded-lg object-cover w-full "
                            src={protrait}
                            alt="Engagement portrait"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] mt-6">
                    <div className="hidden lg:block flex flex-col gap-4 w-full">
                        <h4 className="xl:text-2xl text-md font-semibold font-montserrat text-black m-4">Sort By</h4>
                        <select className="mx-4 p-2 border border-gray-300 rounded-md text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                            <option defaultValue="">Best Sellers</option>
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                        <Filters />
                    </div>
                    <div className="flex justify-between items-center cursor-pointer mx-auto gap-10 lg:hidden">
                        <div className="flex items-center" onClick={() => setIsOpen(true)}>
                            <h3 className="text-md font-medium">Filter</h3>
                            <TbAdjustmentsHorizontal size={25} />
                        </div>
                        <section className={`${isOpen ? "block" : "hidden"} p-2 w-full top-0 left-0 z-50 bg-white h-screen fixed cursor-pointer overflow-y-auto`}>
                            <div className="w-full h-10 rounded-md flex justify-end items-center">
                                <RxCross2 onClick={() => setIsOpen(false)} size={25} className="text-black me-2" />
                            </div>
                            <Filters />
                        </section>
                        <div className="flex items-center">
                            <select className="border border-gray-300 rounded-md text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                <option className="text-md font-medium" defaultValue="">
                                    Sort By: Best Sellers
                                </option>
                                <option value="Best Sellers">Best Sellers</option>
                                <option value="Newest">Newest</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full bg-[#f4f4f4]">
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page