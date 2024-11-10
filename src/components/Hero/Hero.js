import React from 'react';
import Image from 'next/image';
import TourForm from '../TourForm/TourForm';
import { FaUserFriends, FaCalendarAlt, FaClock, FaFlag, FaBus } from "react-icons/fa";

function Hero({ heroImage, mainText, subText, showForm, isAboutPage }) {
  const publicTourFields = [
    { icon: <FaUserFriends />, label: "Number of people", options: ["Choose number", "1", "2", "3", "4+"] },
    { icon: <FaCalendarAlt />, label: "Date", options: ["Choose Date", "2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04"] },
    { icon: <FaClock />, label: "Time", options: ["Choose Time", "08:00", "10:00", "12:00"] },
    { icon: <FaFlag />, label: "Tour", options: ["Select Tour", "Tour 1", "Tour 2", "Tour 3"] },
    { icon: <FaBus />, label: "Transportation", options: ["Select Transportation", "Bus", "Car", "Train"] },
  ];

  const privateTourFields = [
    { icon: <FaCalendarAlt />, label: "Date", options: ["Choose Date", "2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04"] },
    { icon: <FaUserFriends />, label: "Number of people", options: ["Choose number", "1", "2", "3", "4+"] },
    { icon: <FaFlag />, label: "Tour", options: ["Select Tour", "Tour 1", "Tour 2", "Tour 3"] },
    { icon: <FaClock />, label: "Time", options: ["Choose Time", "08:00", "10:00", "12:00"] },
    { icon: <FaBus />, label: "Transportation", options: ["Select Transportation", "Bus", "Car", "Train"] },
  ];

  return (
    <div className="relative h-screen">
      <Image src={heroImage} fill={true} quality={80} alt="hero-img" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-5xl lg:text-7xl text-white mb-4 font-bold">{mainText}</h1>

        <p
          className={`text-base md:text-lg lg:text-2xl text-white font-open-sans ${
            isAboutPage ? 'my-6' : 'mb-4 lg:mb-[60px]'
          } sm:w-[60%] lg:w-[44.11%]`}
        >
          {subText}
        </p>
        
        {showForm ? (
          <TourForm publicTourFields={publicTourFields} privateTourFields={privateTourFields} />
        ) : (
          <button className="px-8 py-3 text-white text-xl rounded-full border border-white font-open-sans">
            View our Tour Packages
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
