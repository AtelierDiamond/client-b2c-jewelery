import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuList({list}:{list:any}) {
  return <div className="border wrap flex-1 absolute start-0 w-full hidden group-hover:flex gap-14 justify-center p-4 bg-white shadow-sm">
          {
            list.map((item:any , index:number)=>(
                <div key={index} >
                    <h1 className="font-semibold">{item.title}</h1> 
                    <ul>
                        {
                            item?.items?.map((subitem:any,index:number) =>{
                               return <li className="p-1.5 items-center gap-1 hover:bg-stone-100" key={index}>
                                 <Link className="flex items-center" href="#">
                                 {subitem?.icon ? <Image height={20} width={20} alt={subitem.label} src={subitem.icon}/> : null}
                                 <span className="text-xs"> {subitem?.label}</span>
                                 </Link>
                               </li>
                            })
                        }
                    </ul> 
                </div>
            ))
          }
  </div>;
}

export default MenuList;
