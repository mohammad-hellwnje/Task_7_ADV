"use client";
import { useEffect, useState } from "react";
import { FaUserFriends, FaGlobe } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function TourForm({ publicTourFields, privateTourFields }) {
  const [activeTab, setActiveTab] = useState("public");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-[rgba(255,255,255,0.2)] rounded-[12px] p-3 lg:p-5 font-open-sans">
      <div className="flex items-center">
        <button
          onClick={() => setActiveTab("public")}
          className={`p-4 font-semibold transition-all rounded-tl-[12px] ${activeTab === "public" ? "bg-white text-[#FA8B02]" : "bg-[rgba(255,255,255,0.4)] text-white"} font-open-sans`}
        >
          <FaGlobe className="inline mr-2" /> Public Tours
        </button>
        <button
          onClick={() => setActiveTab("private")}
          className={`p-4 font-semibold transition-all rounded-tr-[12px] ${activeTab === "private" ? "bg-white text-[#FA8B02]" : "bg-[rgba(255,255,255,0.4)] text-white"} font-open-sans`}
        >
          <FaUserFriends className="inline mr-2" /> Private Tours
        </button>
      </div>
      {activeTab === "public" && (
        <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 items-center rounded-b-[12px] p-2 lg:py-7 lg:ps-7 rounded-tr-[12px] font-open-sans">
          {publicTourFields.map((field, index) => (
            <div key={index} className="col-span-1">
              <div className="flex items-center space-x-2">
                {field.icon}
                <span className="text-gray-700 font-open-sans">{field.label}</span>
              </div>
              <select className="w-full ps-5 focus:border-orange-500 mt-1 border-none font-open-sans">
                {field.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          <div className="flex justify-end me-3">
            <button className="bg-orange-500 text-white flex items-center justify-center rounded-[12px] w-20 h-20 font-open-sans">
              <IoIosSearch className="text-[25.33px]" />
            </button>
          </div>
        </div>
      )}
      {activeTab === "private" && (
        <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 items-center py-7 ps-7 font-open-sans">
          {privateTourFields.map((field, index) => (
            <div key={index} className="col-span-1">
              <div className="flex items-center">
                {field.icon}
                <span className="text-gray-700 font-open-sans">{field.label}</span>
              </div>
              <select className="w-full ps-5 focus:border-orange-500 mt-1 border-none font-open-sans">
                {field.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          <div className="flex justify-end me-3">
            <button className="bg-orange-500 text-white flex items-center justify-center rounded-[12px] w-20 h-20 font-open-sans">
              <IoIosSearch className="text-[25.33px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
