"use client";
import React, { useState } from "react";

const PriceInput = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1424);
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= maxPrice - 100) {
      setMinPrice(value);
    }
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice + 100 && value <= 10000) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm font-medium">Price</label>
      <div className="flex items-center gap-2 mt-2">
        <div className="relative flex items-center">
          <span className="absolute left-2 text-gray-500">₹</span>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinChange}
            className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
          />
        </div>

        <span className="text-sm text-gray-500">to</span>

        <div className="relative flex items-center">
          <span className="absolute left-2 text-gray-500">₹</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxChange}
            className="pl-6 pr-2 py-1 border border-gray-300 rounded-md w-20 text-center"
          />
        </div>
      </div>
      <div className="relative w-full mt-4">
        <div className="relative h-2 bg-gray-300 rounded-md">
          <div
            className="absolute h-2 bg-black rounded-md"
            style={{
              left: `${(minPrice / 10000) * 100}%`,
              right: `${100 - (maxPrice / 10000) * 100}%`,
            }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-auto"
          style={{
            zIndex: 3,
            cursor: "pointer",
          }}
        />
        <input
          type="range"
          min="1000"
          max="10000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-auto"
          style={{
            zIndex: 4,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default PriceInput;
