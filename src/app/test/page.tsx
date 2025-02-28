"use client";
import Cards from '@/components/Engagement/Cards'
import Filters from '@/components/Engagement/Filters';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { TbAdjustmentsHorizontal } from 'react-icons/tb'

function Page() {
    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <div>
            <div className='mx-auto mt-5'>
                <p className='flex justify-center items-center text-center text-sm'>Lab Grown Diamond</p>
                <h1 className='flex justify-center items-center text-center text-2xl font-normal'>Engagement Ring</h1>
            </div>
            <div className='flex justify-between items-center m-8 mb-0 cursor-pointer'>
                <div className="flex items-center gap-3 p-1 " onClick={() => setIsOpen(true)}>
                    <h3 className="text-2xl font-medium">Filter</h3>
                    <TbAdjustmentsHorizontal size={25} />
                </div>
                <div>
                    <section className={`${isOpen ? "block" : "hidden"} w-1/4 p-2 w-[200] top-0 left-0 -50 bg-[#F5F5DC] h-screen fixed cursor-pointer`}>
                        <div className='w-full h-10 rounded-md flex justify-end items-center '>
                            <RxCross2 onClick={() => setIsOpen(false)} size={25} className='text-black me-2' />
                        </div>
                        <Filters />
                    </section>
                </div>
                <div className="flex items-center gap-3 p-1">
                    <select className='mr-10'>
                        <option className='text-2xl font-medium' defaultValue="">Sort By: Best Sellers</option>
                        <option value='Best Sellers'>Best Sellers</option>
                        <option value='Newest'>Newest</option>
                        <option value='Price: Low to High'>Price: Low to High</option>
                        <option value='Price: High to Low'>Price: High to Low</option>
                    </select>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Page