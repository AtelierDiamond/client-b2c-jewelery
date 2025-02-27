"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Footer() {
    const router = useRouter();
    const footerList = [
        {
            id: 1, label: "Support", path: "#",
            list: [
                { label: "Free Shipping" },
                { label: "Free Returns" },
                { label: "Warranty" },
                { label: "Payment & Financing" },
                { label: "Special Offers" },
                { label: "GB Club" },
                { label: "Blog" },
                { label: "Accessibility" },
                { label: "Support Center" },
            ]
        },
        {
            id: 2, label: "Contact", path: "#",
            list: [
                { label: "7452589631" },
                { label: "Affiliates" },
                { label: "Email Us" },
                { label: "Live Chat" },
                { label: "Book an Appointment" },
                { label: "Store Locator" },
                { label: "Careers" },
            ]
        },
    ];

    return (
        <div className="py-6 px-4">
            <hr className="border-t border-gray-300 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
                <div onClick={() => router.push("/")} className="font-semibold text-xl lg:text-3xl cursor-pointer font-montserrat">
                    B2C Jewellery
                </div>
                {footerList.map((section) => (
                    <div key={section.id}>
                        <h3 className="font-bold text-lg mb-2 font-montserrat">{section.label}</h3>
                        <ul className="space-y-1">
                            {section.list.map((item, index) => (
                                <li key={index} className="text-gray-600 cursor-pointer hover:text-black transition font-montserrat">
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="font-bold text-lg cursor-pointer font-montserrat">Subscribe</h3>
                    <h4 className="font-bold text-md cursor-pointer font-montserrat">Get on the Guest List</h4>
                    <p className="text-sm text-gray-700 cursor-pointer font-montserrat">Perks include $100 off your first order*</p>
                    <p className="text-sm text-gray-700 cursor-pointer font-montserrat">Plus new product launches, store openings, and more!</p>
                    <div className="relative flex items-center mt-3 w-full max-w-md">
                        <input
                            placeholder="Sign Me Up"
                            type="text"
                            className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none"
                        />
                        <button className="absolute right-0 bg-black p-2 rounded-md hover:bg-gray-800 cursor-pointer">
                            <FaLongArrowAltRight className="text-white" size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* <hr className="border-t border-gray-300 mb-2" /> */}
            <div className='flex justify-center items-center gap-8 mt-6 flex-wrap'>
                <p className='cursor-pointer font-montserrat'>© 2025 b2cjewellery.com</p>
                <p className='cursor-pointer font-montserrat'>Terms & Conditions</p>
                <p className='cursor-pointer font-montserrat'>Privacy Policy</p>
                <p className='cursor-pointer font-montserrat'>Do not sell my information</p>
                <p className='cursor-pointer font-montserrat'>Site Map</p>
            </div>
        </div>
    );
}

export default Footer;
