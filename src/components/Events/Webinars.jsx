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
        <h1 className="text-white font-bold font-mono text-4xl">Webinars 2025  </h1>
        <div className=' flex flex-col w-full items-center justify-center'>
        <div className=" w-[80vw] flex gap-[50px]  flex-row  items-center justify-center">
            <img src={i1} alt='event' className='w-[30%] h-[100%] rounded-2xl p-6 bg-white '/>
            <p className=' text-white font-serif text-xl'>Motivational Interviewing in health coaching - March 2025 </p>
        </div>
        <div className=" w-[80vw] flex gap-[50px]  flex-row  items-center justify-center">
            <p className=' text-white font-serif text-xl'>Motivational Interviewing in health coaching - March 2025 </p>
            <img src={i1} alt='event' className='w-[30%] h-[100%] rounded-2xl p-6 bg-white '/>
           
        </div>
        </div>


 </div>
    )
};

export default Webinars