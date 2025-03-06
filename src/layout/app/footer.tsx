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
        <div className="relative py-8 lg:py-10 bg-[#5f6a3b] px-10">
            <div className="relative grid grid-cols-2 lg:grid-cols-4 mb-6">
                {footerList.map((section) => (
                    <div key={section.id}>
                        <h3 className="font-semibold text-lg mb-3 text-[#d9d1bc]">{section.label}</h3>
                        <ul className="space-y-2">
                            {section.list.map((item, index) => (
                                <li key={index} className="cursor-pointer text-[#d9d1bc] text-md hover:underline">
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="font-semibold text-lg lg:text-lg text-[#d9d1bc] lg:mt-0 mt-6 mb-3">Contact Number</h3>
                    <p className="text-md text-[#d9d1bc]">+123 12345678</p>
                    <h3 className="font-semibold text-lg lg:text-lg text-[#d9d1bc] mt-6 mb-3">Mail us at</h3>
                    <div className="flex items-center border border-[#d9d1bc] rounded-lg px-3 py-2 w-full max-w-xs">
                        <FaEnvelope className="text-[#d9d1bc] mr-2" size={24} />
                        <input
                            placeholder="Enter your email"
                            type="text"
                            className="w-full bg-transparent text-[#d9d1bc] placeholder-[#d9d1bc] focus:outline-none"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg lg:text-lg text-[#d9d1bc] lg:mt-0 mb-3">Get Social</h3>
                    <div className="flex items-center gap-4">
                        <FaFacebook className="text-[#d9d1bc] cursor-pointer hover:text-[#cbc2b5] transition" size={24} />
                        <FaInstagram className="text-[#d9d1bc] cursor-pointer hover:text-[#cbc2b5] transition" size={24} />
                        <span className="text-[#d9d1bc] text-md cursor-pointer hover:underline">diamondforestinc</span>
                    </div>
                </div>
            </div>
            {/* <hr className="relative border-t border-gray-300 mb-4" /> */}
            <div className="relative flex justify-center">
                <p className="text-[#d9d1bc] text-md">&copy; 2025 Diamond Atelier. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
