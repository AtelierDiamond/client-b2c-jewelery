import React from "react";

type Option = {
    title:string,
    value:string
}

function Selector({options, customClass}:{
    options:Option[],
    customClass:string
}) {
  return <select className={`text-[#332421] border border-[#332421] rounded-md w-full focus:outline-none p-1 ${customClass}`} name="" id="">
      {
        options.map((option,index)=>(
            <option key={index} value={option.value}>{option.value}</option>
        ))
      }
  </select>;
}

export default Selector;
