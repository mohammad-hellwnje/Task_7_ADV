'use client';
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const StatsCard = ({ data, imageSrc, isAboutPage }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            ref={ref}
            className={`font-open-sans flex flex-col md:flex-row justify-between space-y-8 lg:space-y-0 px-8 ${
                isAboutPage ? "lg:px-[250px] py-[120px]" : "lg:px-0 lg:pe-[250px] mb-[266px]"
            }`}
        >
            <div
                className={`relative w-[100%] md:w-[450px] h-[650px] ${
                    isAboutPage ? "md:mr-4 lg:ml-0" : "lg:mr-[214px] lg:ml-[305px]"
                }`}
            >
                <Image src={imageSrc} alt="Traveler" layout="fill" />
            </div>

            <div className="w-[100%] md:w-[51.28%]">
                <h2 className="text-[#333333] uppercase text-base mb-1.5">
                    Welcome to our site!
                </h2>
                <h1 className="text-[32px] font-extrabold mb-8">{data.title}</h1>
                <p className="text-lg font-normal mb-8 text-[#333333]">{data.description}</p>

                <div className="flex flex-wrap gap-8">
                    {data.stats.map((stat) => (
                        <div key={stat.id} className="w-[82px]">
                            <h2 className="text-[32px] font-bold text-[#FA8B02] mb-1.5">
                                {inView ? <CountUp end={stat.value} duration={3} /> : "0"}+
                            </h2>
                            <p className="text-slate-400 text-base font-normal">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
