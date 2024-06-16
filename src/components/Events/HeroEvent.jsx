import React from "react";
import bgImage from "../../assets/HomePage/hero.png";

const HeroSectionEvent = () => {
  return (
    <div className="hero-container relative w-full h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
      <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-6 text-center px-6 md:px-10">
          <h1 className="text-white font-semibold font-mono text-4xl md:text-5xl leading-tight md:leading-snug">
            Events
          </h1>
         
        </div>
      
      </div>
    </div>
  );
};

export default HeroSectionEvent;
