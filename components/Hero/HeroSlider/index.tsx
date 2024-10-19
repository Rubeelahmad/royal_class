"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { sliderItems } from "@/utils/SliderData/data";
import AppleIcon from "../icons/AppleIcon.png";
import RightArrowIcon from "../icons/RightArrowIcon.png";
export const HeroSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {sliderItems.map((slide, index) => (
          <>
            <SwiperSlide key={index}>
              <div
                className="relative flex items-start md:items-center justify-between w-screen bg-black py-3 md:py-4 px-4 md:px-8 "
                style={{ height: "110%", maxWidth: "120%", margin: "14px", }}
              >
                {/* Left Content */}
                <div className="realtive z-20 flex flex-col text-white items-start text-wrap text-start pl-3 md:pl-8 pt-3 md:pt-8">
                  <div className="flex items-center gap-1 md:gap-4 text-xs md:text-[16px] ">
                    <div className="w-[24px] h-[24px] md:w-[40px] md:h-[49px]">
                      <Image
                        src={AppleIcon}
                        alt="apple"
                        width={24}
                        height={24}
                      />
                    </div>
                    <h2 className="font-normal md:font-medium">{slide.heading}</h2>
                  </div>

                  <h3 className="flex text-[12px] md:text-[48px] font-normal md:font-semibold mt-2 md:mt-4 leading-[20px] md:leading-[50px] ">
                    {slide.subHeading.split("off")[0]}
                    <br />
                    off Voucher
                  </h3>

                  <button className="flex text-white items-center text-center gap-2 md:gap-4 mt-1 md:mt-4   ">
                    <div className="border-b-2 border-b-white py-0 md:py-2">
                      {slide.buttonText}
                    </div>
                    <div className="w-[24px] h-[24px] md:w-[40px] md:h-[49px] *:hover:bg-gray-500/50">
                      <Image src={RightArrowIcon} alt="shopnow"  />
                    </div>
                  </button>
                </div>

                {/* Right Image */}
                <div className=" absolute flex md:relative z-10 right-0 h-[80%] py-4 md:py-8 items-end justify-end md:items-center md:justify-center ">
                  <Image
                    src={slide.icon}
                    alt={slide.heading}
                    className="object-contain"
                  />
                </div>

              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
