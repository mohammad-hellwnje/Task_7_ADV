"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { destinations } from "./../../Data/destinationsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1560) {  
        setItemsPerPage(4);
      } else if (window.innerWidth >= 900 && window.innerWidth <= 1550) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 576 && window.innerWidth <= 900){
        setItemsPerPage(2);
      }
      else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + destinations.length) % destinations.length
    );
  };

  return (
    <div className="relative px-8 lg:px-[250px] py-[120px] font-open-sans">
      <div className="flex justify-between mb-[60px]">
        <h2 className="text-[32px] font-extrabold font-open-sans">Explore Our Popular Destinations</h2>
        <div>
          <button
            onClick={prevSlide}
            className="w-[50px] h-[50px] rounded-full bg-[#EFEFEF] me-5 font-open-sans"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-orange-500 text-white w-[50px] h-[50px] rounded-full font-open-sans"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="flex gap-[33px] font-open-sans">
        {destinations
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((destination, index) => (
            <div
              key={index}
              className="w-[100%] sm:w-[48%] lg:w-[23%] transition-transform duration-700 ease-in-out font-open-sans"
            >
              <Image
                src={destination.imageUrl}
                alt={destination.title}
                width={330}
                height={404}
                className="rounded-[24px] object-cover w-full"
              />
              <div className="mt-4 font-open-sans">
                <h2 className="text-2xl font-bold mb-3 font-open-sans">{destination.title}</h2>
                <div className="flex items-center mb-3 font-open-sans">
                  <p className="text-lg font-semibold me-2.5 text-[#333333]">{destination.from}</p>
                  <p className="text-[#FA8B02] text-2xl font-extrabold">{destination.price}</p>
                </div>
                <div className="flex justify-between mb-3 font-open-sans">
                  <div className="flex">
                    <Image
                      src={destination.imageUrl2}
                      alt={destination.title}
                      width={18.29}
                      height={18.29}
                      className="me-1.5"
                    />
                    <span className="text-base text-[#FA8B02] font-semibold">{destination.schedule}</span>
                  </div>
                  <div className="flex">
                    <Image
                      src={destination.imageUrl3}
                      alt={destination.title}
                      width={24}
                      height={15.82}
                      className="me-1.5"
                    />
                    <span className="text-base text-[#FA8B02] font-semibold">{destination.time}</span>
                  </div>
                </div>
                <p className="text-lg font-normal text-[#333333] font-open-sans">{destination.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
