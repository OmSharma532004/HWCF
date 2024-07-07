import React from 'react';

const ConferenceFee = () => {
  return (
    <div className=" flex-col min-h-screen flex items-center justify-center">
      <div className=" w-full min-h-screen p-8 flex items-center bg-purple-200 justify-around flex-col">
        <h2 className="text-5xl font-bold text-purple-900 mb-6">Conference Details</h2>

       <div className=' w-[50%] text-2xl'>
       <div className="mb-6 ">
          <p className=" ">
            <strong>Conference fee (2 days):</strong> £95
          </p>
        </div>

        <div className="mb-6">
          <p className="">
            <strong>Early Bird booking Fee (2 days):</strong> £75 - On bookings before 1 October 2025
          </p>
        </div>

        <div className="mb-6  ">
          <p className=" ">
            <strong>Super early bird (2 Days):</strong> £75 - Summer booking - First 50 bookings receive a free copy of the Routledge book, 'The Health & Wellbeing Coaches' Handbook' accompanying the conference.
          </p>
        </div>
        </div>

        <div className="mt-8">
          <p className="text-xl text-purple-900">
            To reserve your place at the conference:
            <a
              href="https://isaacson.uk/buy/health-wellbeing-coaching-forum-conference-2024/"
              className="text-white ml-[30px] bg-purple-950 p-4 rounded-lg  hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConferenceFee;
