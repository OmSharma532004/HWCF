import React from "react";

const Section1 = () => {
  return (
    <div 
      className="flex flex-col py-5 items-center justify-center gap-6 min-h-screen w-full"
      style={{
        background: 'linear-gradient(135deg, rgba(158, 92, 133, 0.9), rgba(89, 31, 96, 0.9))'
      }}
    >
      <h1 className="text-white font-bold  font-mono text-2xl md:text-5xl text-center px-6 md:px-10">
        What is Health & Wellbeing Coaching?
      </h1>
      <div className="w-full md:w-[60vw] flex flex-col gap-6 items-center justify-center px-6 md:px-10">
        <p className="text-white font-light tracking-wide text-sm md:text-lg text-center">
          Health and wellbeing coaching is a client-centered process that draws on psychological, evidenced-based models of behavioral change to help clients make effective and sustained changes in their thoughts, feelings, and behaviors, and thus contributes to enhanced physical and mental wellbeing and quality of life.
        </p>
        <p className="text-white font-light tracking-wide text-sm md:text-lg text-center">
          Health and wellbeing coaching are forms of coaching. Although there is no universally agreed, nor legally binding definition of coaching, John Whitmore (2009:11) suggested that coaching; ‘is unlocking people’s potential to maximize their own performance. It is helping them to learn rather than teaching them’.
        </p>
        <p className="text-white font-light tracking-wide text-sm md:text-lg text-center">
          Passmore and Fillery-Travis (2011, p70) offer a more process-based definition in an attempt to differentiate coaching from mentoring, counseling, and other conversational-based approaches to change. They suggested coaching involved “a Socratic based dialogue between a facilitator (coach) and a participant (client) where the majority of interventions used by the facilitator are open questions which are aimed at stimulating the self-awareness and personal responsibility of the participant”.
        </p>
      </div>
    </div>
  );
}

export default Section1;
