import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import img1 from "@/../public/images/single-page/bracelet.jpg";
import img2 from "@/../public/images/single-page/first.png";
import img3 from "@/../public/images/single-page/fourth.png";
import ProductDetailSlider from "./ProductDetailSlider";
import MetalType from "./MetalType";
import SizeSelectors from "./SizeSelectors";
import Selector from "./Selector";

const OPTIONS: EmblaOptionsType = {};

function ProductDetail() {
  const SliderImage = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  const metalType = [
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
    <div className="grid grid-cols-1 md:grid-cols-2 h-full font-montserrat gap-8 md:gap-12">
      <div className="flex justify-center items-center">
        <ProductDetailSlider slides={SliderImage} options={OPTIONS} />
      </div>
      <div className="text-black ml-14 xl:mx-0">
        <h1 className="text-2xl font-medium mt-10">14K Round Diamond Tennis Bracelet</h1>
        <h2 className="text-xl mt-4">$5,050</h2>

        <div className="w-[80%] mt-6 space-y-6">
          <MetalType metalType={metalType} />
          <SizeSelectors sizes={sizes} />

          <div className="flex gap-4">
            <div className="w-1/2">
              <h1 className="font-medium">Color:</h1>
              <Selector options={colors} customClass="bg-white text-black" />
            </div>
            <div className="w-1/2">
              <h1 className="font-medium">Clarity:</h1>
              <Selector options={colors} customClass="bg-white text-black" />
            </div>
          </div>

          <div>
            <h1 className="font-medium">Size (MM):</h1>
            <Selector options={colors} customClass="bg-white border border-[#4d6d38] text-black" />
          </div>

          <div className="text-center mt-10">
            <button className="text-white font-medium px-6 py-2 my-4 text-xl bg-[#4d6d38] rounded-lg shadow-md hover:bg-[#3b562c] transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
