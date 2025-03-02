"use client";
import Cards from '@/components/Engagement/Cards'
import Filters from '@/components/Engagement/Filters';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { TbAdjustmentsHorizontal } from 'react-icons/tb'

function page() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className='font-montserrat'>
                <div className='mx-auto mt-5'>
                    <p className='flex justify-center items-center text-center text-sm cursor-pointer font-semibold text-md'>Lab Grown Diamond</p>
                    <h1 className='flex justify-center items-center text-center text-2xl cursor-pointer font-semibold text-md'>Engagement Ring</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-6 mt-6">
                    <div className="flex flex-col gap-4 m-8">
                        <h4 className='xl:text-xl text-md font-semibold font-montserrat text-black m-4'>Sort By</h4>
                        <select className=" m-4 p-2 border border-gray-300 rounded-md text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                            <option defaultValue="">Best Sellers</option>
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                        <Filters />
                    </div>
                    <div className="w-full">
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page