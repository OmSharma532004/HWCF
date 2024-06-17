import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Speakers from '../../components/Conference/Speakers';

const Conference = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraph1Ref, inView: paragraph1InView } = useInView({ triggerOnce: true });
  const { ref: paragraph2Ref, inView: paragraph2InView } = useInView({ triggerOnce: true });
  const { ref: speakersRef, inView: speakersInView } = useInView({ triggerOnce: true });
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:3000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000, // amount in INR, 1000 paise = 10 INR
          currency: 'INR',
          receipt: 'receipt#1'
        }),
      });
      const order = await response.json();

      const options = {
        key: 'rzp_test_L2xGUPd25MH4Rj', // replace with your Razorpay key ID
        amount: order.amount,
        currency: order.currency,
        name: 'Your Company Name',
        description: 'Conference Registration Fee',
        image: 'https://your-logo-url.com/logo.png',
        order_id: order.id,
        handler: function (response) {
          alert('Payment successful');
          // You can handle the response further as needed
        },
        prefill: {
          name: 'John Doe', // Replace with actual user data
          email: 'john.doe@example.com', // Replace with actual user data
          contact: '9999999999', // Replace with actual user data
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

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
      <button
        onClick={handlePayment}
        className='bg-pink-500 text-white font-bold py-2 px-4 rounded mt-8'
      >
        Pay for Conference
      </button>
    </div>
  );
};

export default Conference;
