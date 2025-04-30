'use client';

import { useState, useEffect } from 'react';

export default function PriceFilter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(800);
  const minLimit = 0;
  const maxLimit = 1000;

  useEffect(() => {
    onFilterChange({ min: minPrice, max: maxPrice });
  }, [minPrice, maxPrice, onFilterChange]);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value < maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md relative">
      <h2 className="text-lg font-semibold mb-4">Price Filter</h2>
      <div className="relative w-full h-6">
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-full"></div>
        {/* Active Range */}
        <div
          className="absolute top-1/2 bg-blue-500 h-1 rounded-full"
          style={{
            left: `${(minPrice / maxLimit) * 100}%`,
            width: `${((maxPrice - minPrice) / maxLimit) * 100}%`,
          }}
        ></div>
        {/* Min Handle */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 2 }}
        />
        {/* Max Handle */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 1 }}
        />
      </div>
      <p className="text-center mt-2">Price Range: ${minPrice} - ${maxPrice}</p>
    </div>
  );
}
