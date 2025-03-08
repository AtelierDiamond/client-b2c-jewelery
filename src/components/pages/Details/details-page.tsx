import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import img1 from "@/../public/images/engagement/ring1.jpg";
import img2 from "@/../public/images/engagement/ring12.jpg";
import img3 from "@/../public/images/engagement/image3.jpg";
import ProductDetailSlider from "./ProductDetailSlider";
import MetalType from "./MetalType";
import SizeSelectors from "./SizeSelectors";
import Selector from "./Selector";

const OPTIONS: EmblaOptionsType = {};

const ProductDetail = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:gap-8 gap-2 font-montserrat pt-32 px-6">
      <div className="flex flex-col items-center">
        <ProductDetailSlider slides={sliderImages} options={OPTIONS} />
      </div>
      <div className="space-y-4">
        <h1 className="xl:text-2xl text-xl font-semibold text-[#5f6a3b]">Double Heart Ring</h1>
        <h2 className="xl:text-xl text-md text-[#5f6a3b] font-medium">$2,350.00</h2>
        <p className="text-black">Story about the product</p>
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="font-bold mb-1">Color:</h1>
          <Selector options={colors} customClass="bg-white border border-gray-300 rounded-md text-black w-full p-2" />
        </div>

        <div>
          <h1 className="font-bold mb-1">Clarity:</h1>
          <Selector options={colors} customClass="bg-white border border-gray-300 rounded-md text-black w-full p-2" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full">
            <h1 className="font-bold mb-1">Metal Type:</h1>
            <MetalType metalType={metalTypes} />
          </div>
          <div className="w-full">
            <h1 className="font-bold mb-1">Size (MM)</h1>
            <SizeSelectors sizes={sizes} />
          </div>
        </div>
        <div>
          <button className="bg-[#5f6a3b] text-white xl:text-lg font-medium px-6 py-2 m-2 xl:m-0 rounded-full shadow-md hover:bg-[#3b562c] transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
