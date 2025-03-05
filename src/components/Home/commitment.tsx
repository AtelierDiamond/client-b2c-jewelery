import React from 'react';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { SlBadge } from 'react-icons/sl';
import { TbHomeEco } from 'react-icons/tb';

const Commitment = () => {
    const commitmentList = [
        { id: 1, icon: <LiaShippingFastSolid size={40} className="text-gray-600" />, title: "Secured Insured Shipping" },
        { id: 2, icon: <RiCustomerService2Fill size={40} className="text-gray-600" />, title: "24/7 Customer Service" },
        { id: 3, icon: <TbHomeEco size={40} className="text-gray-600" />, title: "Eco-Friendly Diamonds" },
        { id: 4, icon: <SlBadge size={40} className="text-gray-600" />, title: "Limited Lifetime Warranty" },
        { id: 5, icon: <FaCircleDollarToSlot size={40} className="text-gray-600" />, title: "Unbeatable Market Price" }
    ];

    return (
        <div className="text-center py-14 font-montserrat">
            <h2 className="text-4xl font-medium mb-6">OUR COMMITMENT</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {commitmentList.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-center">
                        {item.icon}
                        <h3 className="text-xl mt-2 font-medium">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commitment;
