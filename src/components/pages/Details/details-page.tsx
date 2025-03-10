"use client";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import img1 from "@/../public/images/engagement/ring1.jpg";
import img2 from "@/../public/images/engagement/ring12.jpg";
import img3 from "@/../public/images/engagement/image3.jpg";
import ProductDetailSlider from "./ProductDetailSlider";
import MetalType from "./MetalType";
import SizeSelectors from "./SizeSelectors";
import Selector from "./Selector";
// import { FaArrowLeft } from "react-icons/fa";
// import { useRouter } from "next/navigation";

const OPTIONS: EmblaOptionsType = {};

const ProductDetail = () => {
  // const { back } = useRouter();

  const sliderImages = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  const metalTypes = [
    { id: 1, colorCode: "#ffffff", text: "14K", title: "White Gold" },
    { id: 2, colorCode: "#e5ce83", text: "", title: "Yellow Gold" },
    { id: 3, colorCode: "#e7ba9a", text: "", title: "Rose Gold" },
  ];

  const sizes = [
    { id: "size1", value: 6, title: "6" },
    { id: "size2", value: 6.5, title: "6.5" },
    { id: "size3", value: 7, title: "7" },
    { id: "size4", value: 7.5, title: "7.5" },
  ];

  const colors = [
    { value: "DEF", title: "DEF" },
    { value: "GHI", title: "GHI" },
    { value: "JKL", title: "JKL" },
    { value: "MNO", title: "MNO" },
  ];

  return (
    <>
      {/* <div className="xl:pt-32 pt-24 xl:px-8 px-4 pb-6">
        <button
          onClick={() => back()}
          className="m-2 text-xl border-0 bg-white flex items-center font-serif text-[#707C48]"
        >
          <FaArrowLeft size={22} />
        </button>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:gap-8 gap-2 font-montserrat px-6 pt-32">
        <div className="flex flex-col items-center">
          <ProductDetailSlider slides={sliderImages} options={OPTIONS} />
        </div>
        <div className="space-y-4">
          <h1 className="xl:text-2xl text-xl font-semibold text-[#707C48]">Double Heart Ring</h1>
          <h2 className="xl:text-xl text-md text-[#707C48] font-medium ">$2,350.00</h2>
          <p className="text-[#332421]">Story about the product</p>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="font-bold mb-1 text-[#332421] hover:text-[#FF5F15]">Color:</h1>
            <Selector options={colors} customClass="bg-white border border-[#332421] rounded-md text-black w-full p-2" />
          </div>

          <div>
            <h1 className="font-bold mb-1 text-[#332421] hover:text-[#FF5F15]">Clarity:</h1>
            <Selector options={colors} customClass="bg-white border border-[#332421] rounded-md text-black w-full p-2" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full">
              <h1 className="font-bold mb-1 text-[#332421] hover:text-[#FF5F15]">Metal Type:</h1>
              <MetalType metalType={metalTypes} />
            </div>
            
          </div>
          <div className="w-full">
              <h1 className="font-bold mb-1 text-[#332421] hover:text-[#FF5F15]">Size (MM)</h1>
              <Selector  options={colors} customClass="" />
              {/* <SizeSelectors sizes={sizes} /> */}
            </div>
          <div>
            <button className="bg-[#707C48] text-white xl:text-lg font-medium px-6 py-2 xl:m-0 xl:mb-4 mb-4 rounded-full shadow-md hover:bg-[#3b562c] transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
