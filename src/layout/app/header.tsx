"use client"
import React, { useState } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { PiHamburgerDuotone, PiShoppingCartSimple } from "react-icons/pi";
import Menu from "../header/menu";
import round from "@/../public/images/DiamondShapes/Round.png";
import { IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/navigation";

type Route = {
    id:number,
    label:string,
    path:string,
    list?:any
}

function Header() {
    
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter();
    const route:Route[] = [
        { id: 1, label: "Engagement", path: "/engagement", 
          list: [
            {
              title: "Shop by Style",
              items: [
                { label: "Solitaire" },
                { label: "Side Stone" },
                { label: "Halo" },
                { label: "Three Stone" },
                { label: "Hidden Halo" },
                { label: "Vintage" },
                { label: "Bridal Sets" },
                { label: "Gemstone" },
                { label: "Badgley Mischka" },
                { label: "Customer Favorites" },
              ],
            },
            {
              title: "Shop by Shape",
              items: [
                { label: "Round", icon: round },
                { label: "Princess", icon: round },
                { label: "Oval", icon: round },
                { label: "Cushion", icon: round},
                { label: "Radiant", icon: round },
                { label: "Elongated Cushion", icon: round },
                { label: "Pear", icon: round },
                { label: "Emerald", icon: round },
                { label: "Asscher", icon: round },
                { label: "Marquise", icon: round},
                { label: "Heart", icon: round },
              ],
            },
            {
              title: "Shop by Metal",
              items: [
                { label: "Yellow Gold", color: "#FFD700" },
                { label: "White Gold", color: "#F5F5F5" },
                { label: "Rose Gold", color: "#E6A1A1" },
                { label: "Platinum", color: "#D3D3D3" },
              ],
            },
            {
              title: "Diamond Education",
              items: [
                { label: "Learn About the 4Cs" },
                { label: "Learn About the Diamond Shapes" },
                { label: "Learn About Lab Grown Diamonds" },
              ],
            },
            {
              title: "Jewellery Guide",
              items: [
                { label: "Engagement Ring Style" },
                { label: "Find the Perfect Engagement Ring" },
                { label: "Find the Right Metal" },
                { label: "Find Your Ring Size" },
              ],
            },
          ]
         },
        { id: 2, label: "Wedding", path: "/wedding",
          list: [
            {
              title: "Shop by Style",
              items: [
                { label: "Solitaire" },
                { label: "Side Stone" },
                { label: "Halo" },
                { label: "Three Stone" },
                { label: "Hidden Halo" },
                { label: "Vintage" },
                { label: "Bridal Sets" },
                { label: "Gemstone" },
                { label: "Badgley Mischka" },
                { label: "Customer Favorites" },
              ],
            },
            {
              title: "Shop by Shape",
              items: [
                { label: "Round", icon: round },
                { label: "Princess", icon: round },
                { label: "Oval", icon: round },
                { label: "Cushion", icon: round},
                { label: "Radiant", icon: round },
                { label: "Elongated Cushion", icon: round },
                { label: "Pear", icon: round },
                { label: "Emerald", icon: round },
                { label: "Asscher", icon: round },
                { label: "Marquise", icon: round},
                { label: "Heart", icon: round },
              ],
            },
            {
              title: "Shop by Metal",
              items: [
                { label: "Yellow Gold", color: "#FFD700" },
                { label: "White Gold", color: "#F5F5F5" },
                { label: "Rose Gold", color: "#E6A1A1" },
                { label: "Platinum", color: "#D3D3D3" },
              ],
            },
            {
              title: "Diamond Education",
              items: [
                { label: "Learn About the 4Cs" },
                { label: "Learn About the Diamond Shapes" },
                { label: "Learn About Lab Grown Diamonds" },
              ],
            },
            {
              title: "Jewellery Guide",
              items: [
                { label: "Engagement Ring Style" },
                { label: "Find the Perfect Engagement Ring" },
                { label: "Find the Right Metal" },
                { label: "Find Your Ring Size" },
              ],
            },
          ]
         },
        { id: 3, label: "Jewellery", path: "/Jewellery",
          list: [
            {
              title: "Shop by Style",
              items: [
                { label: "Solitaire" },
                { label: "Side Stone" },
                { label: "Halo" },
                { label: "Three Stone" },
                { label: "Hidden Halo" },
                { label: "Vintage" },
                { label: "Bridal Sets" },
                { label: "Gemstone" },
                { label: "Badgley Mischka" },
                { label: "Customer Favorites" },
              ],
            },
            {
              title: "Shop by Shape",
              items: [
                { label: "Round", icon: round },
                { label: "Princess", icon: round },
                { label: "Oval", icon: round },
                { label: "Cushion", icon: round},
                { label: "Radiant", icon: round },
                { label: "Elongated Cushion", icon: round },
                { label: "Pear", icon: round },
                { label: "Emerald", icon: round },
                { label: "Asscher", icon: round },
                { label: "Marquise", icon: round},
                { label: "Heart", icon: round },
              ],
            },
            {
              title: "Shop by Metal",
              items: [
                { label: "Yellow Gold", color: "#FFD700" },
                { label: "White Gold", color: "#F5F5F5" },
                { label: "Rose Gold", color: "#E6A1A1" },
                { label: "Platinum", color: "#D3D3D3" },
              ],
            },
            {
              title: "Diamond Education",
              items: [
                { label: "Learn About the 4Cs" },
                { label: "Learn About the Diamond Shapes" },
                { label: "Learn About Lab Grown Diamonds" },
              ],
            },
            {
              title: "Jewellery Guide",
              items: [
                { label: "Engagement Ring Style" },
                { label: "Find the Perfect Engagement Ring" },
                { label: "Find the Right Metal" },
                { label: "Find Your Ring Size" },
              ],
            },
          ]
         },
        { id: 4, label: "Diamonds", path: "/diamonds", list: [
          {
            title: "Shop by Style",
            items: [
              { label: "Solitaire" },
              { label: "Side Stone" },
              { label: "Halo" },
              { label: "Three Stone" },
              { label: "Hidden Halo" },
              { label: "Vintage" },
              { label: "Bridal Sets" },
              { label: "Gemstone" },
              { label: "Badgley Mischka" },
              { label: "Customer Favorites" },
            ],
          },
          {
            title: "Shop by Shape",
            items: [
              { label: "Round", icon: round },
              { label: "Princess", icon: round },
              { label: "Oval", icon: round },
              { label: "Cushion", icon: round},
              { label: "Radiant", icon: round },
              { label: "Elongated Cushion", icon: round },
              { label: "Pear", icon: round },
              { label: "Emerald", icon: round },
              { label: "Asscher", icon: round },
              { label: "Marquise", icon: round},
              { label: "Heart", icon: round },
            ],
          },
          {
            title: "Shop by Metal",
            items: [
              { label: "Yellow Gold", color: "#FFD700" },
              { label: "White Gold", color: "#F5F5F5" },
              { label: "Rose Gold", color: "#E6A1A1" },
              { label: "Platinum", color: "#D3D3D3" },
            ],
          },
          {
            title: "Diamond Education",
            items: [
              { label: "Learn About the 4Cs" },
              { label: "Learn About the Diamond Shapes" },
              { label: "Learn About Lab Grown Diamonds" },
            ],
          },
          {
            title: "Jewellery Guide",
            items: [
              { label: "Engagement Ring Style" },
              { label: "Find the Perfect Engagement Ring" },
              { label: "Find the Right Metal" },
              { label: "Find Your Ring Size" },
            ],
          },
        ] },
        { id: 5, label: "Custom", path: "/custom", list: [
          {
            title: "Shop by Style",
            items: [
              { label: "Solitaire" },
              { label: "Side Stone" },
              { label: "Halo" },
              { label: "Three Stone" },
              { label: "Hidden Halo" },
              { label: "Vintage" },
              { label: "Bridal Sets" },
              { label: "Gemstone" },
              { label: "Badgley Mischka" },
              { label: "Customer Favorites" },
            ],
          },
          {
            title: "Shop by Shape",
            items: [
              { label: "Round", icon: round },
              { label: "Princess", icon: round },
              { label: "Oval", icon: round },
              { label: "Cushion", icon: round},
              { label: "Radiant", icon: round },
              { label: "Elongated Cushion", icon: round },
              { label: "Pear", icon: round },
              { label: "Emerald", icon: round },
              { label: "Asscher", icon: round },
              { label: "Marquise", icon: round},
              { label: "Heart", icon: round },
            ],
          },
          {
            title: "Shop by Metal",
            items: [
              { label: "Yellow Gold", color: "#FFD700" },
              { label: "White Gold", color: "#F5F5F5" },
              { label: "Rose Gold", color: "#E6A1A1" },
              { label: "Platinum", color: "#D3D3D3" },
            ],
          },
          {
            title: "Diamond Education",
            items: [
              { label: "Learn About the 4Cs" },
              { label: "Learn About the Diamond Shapes" },
              { label: "Learn About Lab Grown Diamonds" },
            ],
          },
          {
            title: "Jewellery Guide",
            items: [
              { label: "Engagement Ring Style" },
              { label: "Find the Perfect Engagement Ring" },
              { label: "Find the Right Metal" },
              { label: "Find Your Ring Size" },
            ],
          },
        ] },
        { id: 6, label: "Collections", path: "/collections", list: [
          {
            title: "Shop by Style",
            items: [
              { label: "Solitaire" },
              { label: "Side Stone" },
              { label: "Halo" },
              { label: "Three Stone" },
              { label: "Hidden Halo" },
              { label: "Vintage" },
              { label: "Bridal Sets" },
              { label: "Gemstone" },
              { label: "Badgley Mischka" },
              { label: "Customer Favorites" },
            ],
          },
          {
            title: "Shop by Shape",
            items: [
              { label: "Round", icon: round },
              { label: "Princess", icon: round },
              { label: "Oval", icon: round },
              { label: "Cushion", icon: round},
              { label: "Radiant", icon: round },
              { label: "Elongated Cushion", icon: round },
              { label: "Pear", icon: round },
              { label: "Emerald", icon: round },
              { label: "Asscher", icon: round },
              { label: "Marquise", icon: round},
              { label: "Heart", icon: round },
            ],
          },
          {
            title: "Shop by Metal",
            items: [
              { label: "Yellow Gold", color: "#FFD700" },
              { label: "White Gold", color: "#F5F5F5" },
              { label: "Rose Gold", color: "#E6A1A1" },
              { label: "Platinum", color: "#D3D3D3" },
            ],
          },
          {
            title: "Diamond Education",
            items: [
              { label: "Learn About the 4Cs" },
              { label: "Learn About the Diamond Shapes" },
              { label: "Learn About Lab Grown Diamonds" },
            ],
          },
          {
            title: "Jewellery Guide",
            items: [
              { label: "Engagement Ring Style" },
              { label: "Find the Perfect Engagement Ring" },
              { label: "Find the Right Metal" },
              { label: "Find Your Ring Size" },
            ],
          },
        ] },
        { id: 7, label: "Education", path: "/education", list: [
            {
              title: "Shop by Style",
              items: [
                { label: "Solitaire" },
                { label: "Side Stone" },
                { label: "Halo" },
                { label: "Three Stone" },
                { label: "Hidden Halo" },
                { label: "Vintage" },
                { label: "Bridal Sets" },
                { label: "Gemstone" },
                { label: "Badgley Mischka" },
                { label: "Customer Favorites" },
              ],
            },
            {
              title: "Shop by Shape",
              items: [
                { label: "Round", icon: round },
                { label: "Princess", icon: round },
                { label: "Oval", icon: round },
                { label: "Cushion", icon: round},
                { label: "Radiant", icon: round },
                { label: "Elongated Cushion", icon: round },
                { label: "Pear", icon: round },
                { label: "Emerald", icon: round },
                { label: "Asscher", icon: round },
                { label: "Marquise", icon: round},
                { label: "Heart", icon: round },
              ],
            },
            {
              title: "Shop by Metal",
              items: [
                { label: "Yellow Gold", color: "#FFD700" },
                { label: "White Gold", color: "#F5F5F5" },
                { label: "Rose Gold", color: "#E6A1A1" },
                { label: "Platinum", color: "#D3D3D3" },
              ],
            },
            {
              title: "Diamond Education",
              items: [
                { label: "Learn About the 4Cs" },
                { label: "Learn About the Diamond Shapes" },
                { label: "Learn About Lab Grown Diamonds" },
              ],
            },
            {
              title: "Jewellery Guide",
              items: [
                { label: "Engagement Ring Style" },
                { label: "Find the Perfect Engagement Ring" },
                { label: "Find the Right Metal" },
                { label: "Find Your Ring Size" },
              ],
            },
          ] },
    ];

  return (
    <header id="siteHeader" className="p-4 font-montserrat sticky w-full z-50">
      <div id="logoHeader" className="flex justify-around">
        <IoReorderThree className="lg:hidden" size={25} onClick={()=>{setOpen(!open)}} />
        <div className="lg:flex lg:gap-4 hidden lg:relative lg:right-20">
          <span className="flex items-center gap-1 text-xs opacity-80 cursor-pointer">
            <IoDiamondSharp /> CONTACT US
          </span>
          <span className="flex items-center gap-1 text-xs opacity-80 cursor-pointer">
            <IoLocationOutline /> STORE LOCATOR
          </span>
        </div>
        <div onClick={() => router.push("/")}  className="font-semibold text-md lg:text-3xl relative lg:right-20 cursor-pointer">
          B2C Jewellery
        </div>
        <div className="flex gap-4 items-center">
          <CiHeart size={20} />
          <BiUser size={20} />
          <PiShoppingCartSimple size={20} />
        </div>
      </div>
      <div className="hidden lg:block">
        <Menu route={route}/>
      </div>
      <div className="absolute start-0 p-2 bg-white w-full lg:hidden">
         {open && <Menu route={route}/>}
      </div>
    </header>
  );
}

export default Header;
