"use client"

import Image, { StaticImageData } from "next/image";
import React from "react";

function CheckBoxButton({
    value,
    title,
    image,
    other,
    src,
    alt,
    type,
    customClass,
    shadow,
    id,
}: {
    value?: number;
    title?: string;
    type?: string;
    image?: boolean;
    src?: string | StaticImageData;
    alt?: string;
    other?: boolean;
    customClass?: string;
    shadow?: boolean;
    id?: string | undefined;
}) {
    return (
        <div className="relative pt-1">
            {other ? (
                <div>
                    <input onChange={(e) => { console.log(e) }} className="hidden peer" id={id} type={type ?? "checkbox"} value={value} />
                    <label className="border py-1 px-5 xl:px-8 peer-checked:bg-[#ebe5df] peer-checked:text-black rounded-md" htmlFor={id}>{title}</label>
                </div>
            ) : null}
            {image ? (
                <div key={id}>
                    <input
                        type="checkbox"
                        id={id}
                        className="hidden peer"
                        value={value}
                        onClick={(e) => { console.log(e) }}
                    />
                    <label
                        htmlFor={id}
                        className={`${customClass} ${shadow ? "shadow-custom" : ""
                            } drop-shadow-lg rounded-full  flex mx-auto items-center justify-center  cursor-pointer border-4 text-md bg-white border-transparent peer-checked:text-white peer-checked:border-black peer-checked:z-[1]  peer-checked:relative
            `}
                    >
                        <Image src={src ?? ""} alt={alt ?? ""} />
                    </label>
                    <p
                        className={`text-center peer-checked:font-medium peer-checked:text-black text-black text-md font-medium text-nowrap mt-4 font-montserrat`}
                    >
                        {alt}
                    </p>
                </div>
            ) : null}
        </div>
    );
}

export default CheckBoxButton;
