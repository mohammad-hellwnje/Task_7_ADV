import React from 'react';
import Image from 'next/image';

const BookingForm = () => {
    return (
        <div
            className="relative flex justify-between px-8 flex-wrap  lg:px-[250px] bg-[url('/image/bg.png')] bg-cover bg-center"
        >
            <div className="lg:w-[48%]  w-full  rounded-lg my-[60px]">
                <h2 className=" font-open-sans text-2xl font-bold text-center mb-[36px]">Book Now Bike</h2>

                <form className="font-open-sans flex flex-wrap bg-[#FFFFFF4D] px-[34px] py-[30px] rounded-[24px]">
                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label>Name and Surname</label>
                        <input
                            type="text"
                            placeholder="Enter your name and surname"
                            className="w-full py-3.5 px-6 mt-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label className="text-gray-600">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full py-3.5 px-6 mt-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label className="text-gray-600">Telephone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your telephone number"
                            className="w-full py-3.5 px-6 mt-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label className="text-gray-600">Service Type</label>
                        <select className="w-full py-3.5 px-6 mt-2 border border-gray-300 rounded-lg">
                            <option className="text-slate-500">Select the service type</option>
                            <option>Standard Bike</option>
                            <option>Mountain Bike</option>
                            <option>Electric Bike</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label className="text-gray-600">Date</label>
                        <input
                            type="date"
                            className="w-full py-3.5 px-6 mt-2 border border-gray-300 text-slate-500 rounded-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-[30px]">
                        <label className="text-gray-600">Time</label>
                        <input
                            type="time"
                            className="w-full py-3.5 px-6 mt-2 text-slate-500 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="w-full flex justify-center mt-[30px]">
                        <button type="submit" className="bg-[#FA8B02] text-white py-2.5 px-6 rounded-full text-xl">
                            Book Now
                        </button>
                    </div>
                </form>

            </div>
            <div className="lg:w-[48%] w-full mt-10 sm:mb-[-34px] flex lg:mt-[140px] ">
                <Image
                    src="/image/bike.png"
                    alt="Bike"
                    width={724}
                    height={648}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default BookingForm;



