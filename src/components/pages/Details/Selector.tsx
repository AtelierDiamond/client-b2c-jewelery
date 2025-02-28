import React from "react";

type Option = {
    title:string,
    value:string
}

function Selector({options, customClass}:{
    options:Option[],
    customClass:string
}) {
  return <select className={`bg-[#20403a] border border-white rounded-md w-full focus:outline-none p-1 ${customClass}`} name="" id="">
      {
        options.map((option,index)=>(
            <option key={index} value={option.value}>{option.value}</option>
        ))
      }
  </select>;
}

export default Selector;
