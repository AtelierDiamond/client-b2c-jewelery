import CheckBoxButton from "@/components/common/CheckBoxButton";
import React from "react";

type Size = {id:string, value:number, title:string};

function SizeSelectors({ sizes }: { sizes: Size[] }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold">Size (in)</h1>
      <div className="mb-4">
        {sizes.map((size, index) => (
          <CheckBoxButton key={index} title={size.title} value={size.value} id={size.id}/>
        ))}
      </div>
    </div>
  );
}

export default SizeSelectors;
