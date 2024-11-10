import React from "react";
import Image from "next/image";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center   justify-center bg-[#FFFFFF4D] rounded-lg shadow-md p-[30px] w-full h-full md:w-[292px] md:h-[189px] text-center">
      <div >
        <Image src={icon} alt={title} width={60} height={60} className="mb-[15px]" />
      </div>
      <p className="text-xl font-extrabold">{title}</p>
    </div>
  );
};

export default FeatureCard;
