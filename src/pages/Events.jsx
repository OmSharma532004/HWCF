//create a event component
import React from 'react'
import i1 from '../assets/Events/1.png';
import Webinars from '../components/Events/Webinars';
import HeroSectionEvent from '../components/Events/HeroEvent';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Events = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
    return (
        <div className=' w-full min-h-screen flex gap-[40px] flex-col items-center justify-center bg-violet-950 '>
        {/* <h1 className='  text-pink-400  mt-6 font-serif mb-6  text-7xl '>Events</h1> */}
        <div ref={heroRef} className={`section ${heroInView ? 'visible' : ''} w-full` }>
        <HeroSectionEvent />
      </div>
        <div className='flex flex-col items-center mt-5 justify-center w-[80%]'>
            <div className='flex w-full flex-wrap gap-[50px]  items-center justify-around'>
               <img src={i1} alt='event' className='md:w-[40%] w-[80%] md:h-[40%] rounded-2xl p-6 bg-pink-400 '/>
               <div className=' w-[400px] flex flex-col items-center justify-center gap-[40px]'>
                <h1 className='text-pink-300 font-semibold font-serif text-2xl md:text-4xl'>Conference 2024</h1>
                <p className='text-pink-300 font-extralight text-sm  md:text-lg'>This year’s programme is on 7th & 8th November 2024. We have brought together 20+ speakers from across the world, a mix of academics, health and wellbeing coaches and clinical practitioners for this online event.
                </p>
                {/* <p className='text-pink-300 font-extralight  text-lg'>Our aim is to keep fees low to make the event accessible to as many as possible. 

The event is priced at US $75 for this two day event. An early bird fee of US $60 is available until 1 November 2024.

              </p> */}
              <p className='text-pink-300 font-extralight text-sm md:text-lg' >Attendees will also have the opportunity to access a discount code for a new book exploring the issues of health and wellbeing coaching: The Health & Wellbeing Coaches Handbook. The code will be shared with delegates during the event and will not be available elsewhere. </p>
              </div>
            </div>
            <div className=' mt-[40px]'>
                <Link to='/conference' className=' hover:bg-pink-500  p-4 rounded-xl text-violet-950 font-semibold font-serif text-lg bg-pink-400'>Learn More</Link>
            </div>

        </div>
        <Webinars/>


        
        </div>
    )
}

export default Events