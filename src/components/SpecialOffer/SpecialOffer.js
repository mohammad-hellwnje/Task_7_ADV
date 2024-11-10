import React from 'react';
import Image from 'next/image';

const SpecialOffer = ({ data }) => {
    return (
        <div className="font-open-sans flex flex-col-reverse lg:flex-row items-center lg:justify-between h-auto lg:h-[450px] px-4 sm:px-8 lg:px-[250px] bg-[url('/image/bg1.png')] bg-cover bg-center py-12 lg:py-0">
            <div className="bg-[#FFFFFF4D] p-6 sm:p-[30px] rounded-[24px] shadow-md w-full lg:w-[40.07%] text-center mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-[32px] font-extrabold mb-4 lg:mb-8">{data.title}</h2>
                <p className="mb-4 lg:mb-8 text-base sm:text-lg font-normal">{data.description}</p>
                <button className="bg-[#FA8B02] text-white px-6 py-2.5 text-lg sm:text-xl rounded-full">
                    {data.buttonText}
                </button>
            </div>
            <div className="relative w-[50%] lg:w-[30.07%] h-[300px] lg:h-[600px] mt-[-152px]">
                <Image
                    src={data.imageUrl}
                    alt="Special Offer"
                    layout="fill"
                />
            </div>
        </div>
    );
};

export default SpecialOffer;
