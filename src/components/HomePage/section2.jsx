import React from "react";

const Section2 = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center gap-6 min-h-[100vh] p-[50px] w-full" 
            // style={{
            //     background: 'linear-gradient(135deg, rgba(158, 92, 133, 0.9), rgba(89, 31, 96, 0.9))'
            // }}
        >
            <h1 className="text-purple-900 font-bold text-center font-mono text-2xl md:text-4xl mb-[50px] mt-[40px]">Health Coaching  </h1>
      <div className=" w-[60vw] flex gap-[50px]  flex-col items-center justify-center">
      <p className="text-purple-800 font-light tracking-wide text-sm md:text-lg">A debate continues over the precise definition of health coaching. One reason for this is the existence of multiple frameworks and models available within health coaching. Wolever et al. (2013) have offered one definition; “a patient-centered process that is based upon behavior change theory and…entails goal setting determined by the patient, encourages self-discovery in addition to content education, and incorporates mechanisms for developing accountability in health behaviors” (Wolever et al., 2013:38).  </p>
      <p className="text-purple-800 font-light tracking-wide  text-sm md:text-lg">This definition dove-tails nicely with the broader coaching definitions but also includes patient-led goal setting and content education and accountability for healthy behaviors. The educational element has been highlighted as a limitation, because coaching is difficult to extrapolate in terms of it being standalone in delivering outcomes versus other mechanisms - particularly in relation to educational programmes and other inventions.  </p>
      <p className="text-purple-800 font-light tracking-wide  text-sm  md:text-lg">The Evidence Centre has suggested “The health coach’s main role is not to teach, advise or counsel people, but rather to support people to plan and reach their own goals” (The Evidence Centre, 2014:12).  </p>
      <p className="text-purple-800 font-light tracking-wide  text-sm  md:text-lg">However, in a healthcare setting, we believe there is a need for explanation and education as part of the process. The question is whether this is invited by the patient (patient-led) or imposed.   </p>
      <p className="text-purple-800 font-light tracking-wide  text-sm  md:text-lg">The UK’s National Health Service England describes health coaching as helping “people gain and use the knowledge, skills, tools and confidence to become active participants in their care so that they can reach their self identified health and wellbeing goals”. </p>
      <p className="text-purple-800 font-light tracking-wide  text-sm  md:text-lg">In our view this definition however falls short. First,it risks confusing coaching with other behavioral change interventions. Secondly, there is value in broadening health coaching to wellbeing, with a greater focus on preventative health. In response we have suggested the following definition: </p>
                </div>  </div>
    );
}

export default Section2;
