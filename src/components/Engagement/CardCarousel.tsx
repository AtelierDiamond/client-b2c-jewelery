'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useRef} from "react";

const images = [
    { id: 1, src: "/images/engagement/image1.jpg" },
    { id: 2, src: "/images/engagement/image2.jpg" },
    { id: 3, src: "/images/engagement/image6.jpg" },
    { id: 4, src: "/images/engagement/image5.jpg" },
];

const ImageCarousel = ({ link }: { link: string, className: string }) => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="relative flex flex-col items-center w-full max-w-xs">
            <div className="relative w-full h-[300px] flex items-center justify-center">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    loop
                    grabCursor
                    touchEventsTarget="container"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full overflow-hidden h-full"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id} className="flex justify-center items-center">
                            <Link href={link} className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={image.src}
                                    alt={`Slide ${image.id}`}
                                    width={300}
                                    height={400}
                                    className="w-full h-auto object-cover shadow-md cursor-pointer rounded-3xl"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        swiperRef.current?.swiper?.slidePrev();
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100"
                >
                    ❮
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        swiperRef.current?.swiper?.slideNext();
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100"
                >
                    ❯
                </button>
            </div>
            <div className="mt-3 mb-2">
                <div className="swiper-pagination !relative"></div>
            </div>
        </div>
    );
};

export default ImageCarousel;
