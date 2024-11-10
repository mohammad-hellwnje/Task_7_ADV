"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsSlider({ testimonialsData}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) { 
                setItemsPerPage(2);
            } else if (window.innerWidth >= 768) { 
                setItemsPerPage(2);
            } else { 
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    const visibleTestimonials = [
        ...testimonialsData.slice(currentIndex, currentIndex + itemsPerPage),
        ...testimonialsData.slice(0, Math.max(0, currentIndex + itemsPerPage - testimonialsData.length))
    ];

    return (
        <div className="relative px-8 lg:px-[250px] pt-[120px] pb-[160px] text-center">
            <div className="flex justify-between mb-[60px]">
                <h2 className="text-xl lg:text-[32px] font-extrabold font-open-sans">Happy Customers Says</h2>
                <div className="flex gap-5">
                    <button
                        onClick={prevSlide}
                        className="w-[50px] h-[50px] rounded-full bg-[#EFEFEF] text-lg font-bold flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-orange-500 text-white w-[50px] h-[50px] rounded-full text-lg font-bold flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 font-open-sans">
                {visibleTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg border p-[30px] w-[49.29%] text-left relative w-full"
                    >
                        <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-center">{testimonial.name}</h3>
                        <Image
                            src={"/image/T-icon.png"}
                            alt="Quote Icon"
                            width={20}
                            height={20}
                            className="mb-2.5 opacity-25"
                        />
                        <p className="text-gray-600 text-lg font-normal">{testimonial.comment}</p>
                        <Image
                            src={"/image/T-icon.png"}
                            alt="Quote Icon"
                            width={20}
                            height={20}
                            className="absolute bottom-[20px] right-[30px] opacity-25"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
