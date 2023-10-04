import Image from "next/image";
import React from "react";

function WorkStatisticCard({title, amount, image}) {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  flex flex-col items-center justify-center p-10 rounded-lg ">
      <div className="bg-[#D7F5DC] w-20 h-20 rounded-xl flex items-center justify-center mb-4">
        <Image
          className="w-fit"
          src={image}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <h2 className="font-semibold my-1 text-2xl">{amount}</h2>
      <p className="font-medium">{title}</p>
    </div>
  );
}

export default WorkStatisticCard;
