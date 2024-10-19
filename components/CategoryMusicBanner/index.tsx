
import React from "react";
import Image from "next/image";
import BufferIcon from './icon/BufferIcon.png'

const CategoryMusicBanner= () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4 bg-black">
      <div className="text-white flex flex-col space-y-4 items-center md:items-start text-center md:text-left p-8 md:p-12">
        <p className="text-[#00FF66] text-sm md:text-base font-semibold">
          Categories
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Enhance Your
          <br />
          Music Experience
        </h2>

        <div className="flex space-x-2 md:space-x-4 mt-4 justify-center md:justify-start">
          <div className="flex flex-col justify-center items-center text-center rounded-full bg-gray-400 w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
            <p className="text-xs md:text-4xl font-bold">23</p>
            <p className="text-[10px] md:text-xs mt-1">Hours</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rounded-full bg-gray-400 w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
            <p className="text-xs md:text-4xl font-bold">05</p>
            <p className="text-[10px] md:text-xs mt-1">Days</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rounded-full bg-gray-400 w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
            <p className="text-xs md:text-4xl font-bold">59</p>
            <p className="text-[10px] md:text-xs mt-1">Minutes</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center rounded-full bg-gray-400 w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
            <p className="text-xs md:text-4xl font-bold">35</p>
            <p className="text-[10px] md:text-xs mt-1">Seconds</p>
          </div>
        </div>

        <button className="mt-4 w-full md:w-auto bg-[#00FF66] hover:bg-green-600 text-white py-2 px-6 rounded-sm text-sm md:text-lg">
          Buy Now!
        </button>
      </div>

      <div className="relative flex w-full md:w-[400px] h-[300px] mt-8 md:mt-0">
        <div className="absolute inset-0 bg-black/10 opacity-50 rounded-lg"></div>
        <Image
          src={BufferIcon}
          alt="Product Image"
          className="relative object-contain max-w-full max-h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default CategoryMusicBanner;
