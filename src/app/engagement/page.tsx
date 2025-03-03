"use client";
import Cards from '@/components/Engagement/Cards'
import Filters from '@/components/Engagement/Filters';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { TbAdjustmentsHorizontal } from 'react-icons/tb'

function Page() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className='font-montserrat'>
                <div className='mx-auto mt-5'>
                    <p className='flex justify-center items-center text-center text-sm cursor-pointer font-semibold text-md'>Lab Grown Diamond</p>
                    <h1 className='flex justify-center items-center text-center text-2xl cursor-pointer font-semibold text-md'>Engagement Ring</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] mt-6">
                    <div className="hidden lg:block flex flex-col gap-4 w-full mx-8">
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
                    <div className="w-full">
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page