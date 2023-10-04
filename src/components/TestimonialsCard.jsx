import Image from "next/image";
import React from "react";

function TestimonialsCard({name, designation, imgSrc, msg}) {
  return (
    <div className="p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col items-center gap-8">
      <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={imgSrc}
          alt="image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-[#9D9D9D] text-center text-xs">
        {msg}
      </div>

      <div className="flex flex-col text-center gap-1">
        <div className="text-[26px] font-bold uppercase">
          {name}
        </div>
        <div className="font-normal text-[16px]">{designation}</div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
