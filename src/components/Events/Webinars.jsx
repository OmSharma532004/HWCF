//create a webinar component
import React from 'react'
import i1 from '../../assets/Events/1.png';

const Webinars = () => {

    return (
        <div 
        className="flex flex-col items-center justify-center gap-6 py-[100px] min-h-[100vh] w-full" 
        style={{
            background: 'linear-gradient(135deg, rgba(158, 92, 133, 0.9), rgba(89, 31, 96, 0.9))'
        }}
    >
        <h1 className="text-white font-bold mb-[100px] font-mono text-2xl md:text-4xl">Webinars</h1>
        <div className=' flex  flex-col gap-[80px] w-full items-center justify-center'>
     <div>
     <p className=' text-white text-2xl'>Motivational Interviewing in health coaching - April 2025 -Details to be confirmed</p>
     
        </div> <p className=' text-white text-2xl'>Schema based heath coaching - June 2025 - Details to be confirmed </p>
      <p className=' text-white text-2xl'>Cognitive behavioural coaching for health - October 2025 -Details to be confirmed </p>
     
        </div>


 </div>
    )
};

export default Webinars