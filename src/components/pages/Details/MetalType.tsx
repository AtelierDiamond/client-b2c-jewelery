import React from "react";

type MetalType = {
    id:number, 
    colorCode:string,
    text:string,
    title:string 
} 

function MetalType({
    metalType
}:{
    metalType: MetalType[]
}) {
 

  return (
    <div className="mt-5">
      <h1>Metal Type:</h1>
      <div className="flex gap-6">
        {metalType.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <div
              className={`rounded-full text-sm text-black h-12 w-12 border border-red-200 flex items-center justify-center`}
              style={{
                backgroundColor: item.colorCode,
              }}
            >
              {item.text}
            </div>
            <span className="text-xs">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetalType;
