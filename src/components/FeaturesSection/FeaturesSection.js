import React from "react";
import FeatureCard from "./../FeatureCard/FeatureCard";
import { features } from "./../../Data/featuresData"; 

const FeaturesSection = () => {
  return (
    <div
      className="flex flex-wrap justify-between items-center font-open-sans  py-[83px] lg:gap-[83px] gap-[40px] px-8 lg:px-[250px] bg-cover bg-center bg-[url('/image/about-bg.png')]"
    >
      {features.map((feature) => (
        <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} />
      ))}
    </div>
  );
};

export default FeaturesSection;
