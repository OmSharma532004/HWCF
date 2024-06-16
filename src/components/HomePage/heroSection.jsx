import React from "react";
import bgImage from "../../assets/HomePage/hero.png";

const HeroSection = () => {
  return (
    <div className="hero-container relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
      <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-6 text-center px-6 md:px-10">
          <h1 className="text-white font-semibold font-mono text-4xl md:text-5xl leading-tight md:leading-snug">
            Health & Wellbeing Coaching Forum
          </h1>
          <p className="text-white font-semibold font-serif text-lg md:text-2xl">
            Advancing the science and practice of health and wellbeing coaching
          </p>
        </div>
        <p className="text-white w-full md:w-[60vw] font-serif mt-5 tracking-wide text-lg md:text-xl text-center px-6 md:px-10">
          The Health & Wellbeing Coaching Forum (HWCF) aims to bring together private, public and not for profit bodies across the sector, from health care providers, wellbeing services, coaching services, clinicians and carers, and those providing coaching services in the field, with the aim of advancing the science and practice of health and wellbeing coaching.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
