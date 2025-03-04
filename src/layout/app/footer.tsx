"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import background from "../../../public/images/banner/Texture Background.png";

function Footer() {
    const footerList = [
        {
            id: 1,
            label: "Company",
            list: [
                { label: "About us" },
                { label: "Review" },
                { label: "FAQs" },
                { label: "Certification" },
                { label: "Site Map" },
                { label: "Contact us" },
            ],
        },
        {
            id: 2,
            label: "Explore",
            list: [
                { label: "Privacy Policy" },
                { label: "Terms of Service" },
                { label: "Terms & Condition" },
                { label: "Payment Plans" },
                { label: "Return & Exchange" },
                { label: "Track Order" },
            ],
        },
    ];

    return (
        <div className="relative px-6 py-10 md:py-14">
            <div className="absolute inset-0">
                <Image
                    src={background}
                    alt="background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
            </div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 mb-6">
                {footerList.map((section) => (
                    <div key={section.id}>
                        <h3 className="font-semibold text-lg mb-3 text-black">{section.label}</h3>
                        <ul className="space-y-2">
                            {section.list.map((item, index) => (
                                <li key={index} className="cursor-pointer text-black text-md hover:underline">
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="font-semibold text-lg md:text-xl text-black">Contact Number</h3>
                    <p className="text-md text-black mt-1">+123 12345678</p>
                    <h3 className="font-semibold text-lg md:text-xl text-black mt-4">Mail us at</h3>
                    <div className="flex items-center border border-[#4d6d38] rounded-lg px-3 py-2 mt-3 w-full max-w-xs">
                        <FaEnvelope className="text-[#4d6d38] mr-2" size={24} />
                        <input
                            placeholder="Enter your email"
                            type="text"
                            className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg md:text-xl text-black">Get Social</h3>
                    <div className="flex items-center gap-4 mt-3">
                        <FaFacebook className="text-[#4d6d38] cursor-pointer hover:text-gray-700 transition" size={24} />
                        <FaInstagram className="text-[#4d6d38] cursor-pointer hover:text-gray-700 transition" size={24} />
                        <span className="text-black text-md cursor-pointer hover:underline">diamondresinc</span>
                    </div>
                </div>
            </div>
            <hr className="relative border-t border-gray-300 mb-4" />
            <div className="relative flex justify-center">
                <p className="text-[#4d6d38] text-md">&copy; 2025 Diamond Atelier. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
