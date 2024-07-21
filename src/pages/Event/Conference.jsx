import React from 'react';
import { useInView } from 'react-intersection-observer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Speakers from '../../components/Conference/Speakers';
import CheckoutForm from './CheckoutForm';
import { Link } from 'react-router-dom';
import Footer from '../../components/HomePage/Footer';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Conference = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraph1Ref, inView: paragraph1InView } = useInView({ triggerOnce: true });
  const { ref: paragraph2Ref, inView: paragraph2InView } = useInView({ triggerOnce: true });
  const { ref: speakersRef, inView: speakersInView } = useInView({ triggerOnce: true });
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className='w-full flex flex-col gap-10 items-center justify-center bg-violet-950 px-4 md:px-8'>
      <div className='w-full min-h-screen flex flex-col items-center justify-center gap-10 bg-violet-950'>
        <h1
          ref={headerRef}
          className={`section ${headerInView ? 'visible' : ''} text-pink-400 mt-6 font-serif mb-6 text-3xl md:text-4xl lg:text-6xl text-center`}
        >
          Health & Wellbeing Coaching Conference
        </h1>
        <div className='flex flex-col items-center mt-5 justify-center w-full md:w-[80%]'>
          <div className='flex flex-col gap-12 w-full items-center justify-around'>
            <p
              ref={paragraph1Ref}
              className={`section ${paragraph1InView ? 'visible' : ''} text-lg md:text-xl w-full md:w-[80%] text-center text-pink-300`}
            >
              We have brought together 20+ speakers from across the world, a mix of academics, health and wellbeing coaches and clinical practitioners for this online event.
            </p>
            <p
              ref={paragraph2Ref}
              className={`section ${paragraph2InView ? 'visible' : ''} text-lg md:text-xl w-full md:w-[80%] text-center text-pink-300`}
            >
              Attendees will also have the opportunity to access a discount code for a new book exploring the issues of health and wellbeing coaching: The Health & Wellbeing Coaches Handbook. The code will be shared with delegates during the event and will not be available elsewhere.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={speakersRef}
        className={`section ${speakersInView ? 'visible' : ''} w-full`}
      >
        <Speakers />
      </div>
      <div className=' flex flex-col items-center mb-8 justify-center m-5'>
       <Link to='/checkout' className=' hover:bg-pink-500  p-4 rounded-xl text-violet-950 font-semibold font-serif text-lg bg-pink-400'>Conference Fee </Link>

      </div>
      <div className=' '>
    <Footer/>

    </div>
    </div>
  );
};

export default Conference;
