import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import emailjs from 'emailjs-com';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Sending email to the company
    emailjs.send('service_qxpozg8', 'template_p4peewl', formData, 'uRpPV27yFcPfqX43a')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent to the company successfully');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message to the company');
      });

    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(130, 92, 133, 0.9), rgba(128, 31, 96, 0.9))'
      }}
      className='m-9 p-10 text-white rounded-xl flex flex-col justify-center gap-[20px]'
    >
      <footer className='flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2 flex items-center justify-center gap-[30px] flex-col text-center md:text-left mb-8 md:mb-0'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logo4} alt="logo" className="w-[200px] m-5 h-[200px]" />
            <p className='flex  items-center text-sm md:text-lg justify-center'>
              <HiOutlineMail  style={{ fontSize: "2rem" }} /><b className=' text-sm'>:- </b>  Info@healthandwellbeingcoachingforum.com
            </p>
          </div>
          <div className='flex items-start justify-center gap-[100px]'>
            <div className='flex items-center justify-center flex-col'>
              <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
              <ul className='flex items-center justify-center flex-col'>
                <li><Link to="/" className='hover:underline'>Home</Link></li>
                <li><Link to="/event" className='hover:underline'>Events</Link></li>
                <li><Link to="/conference" className='hover:underline'>Conference</Link></li>
                <li><Link to="/resources" className='hover:underline'>Resources</Link></li>
              </ul>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h3 className='text-xl font-bold mb-4'>Policies</h3>
              <ul className='flex items-center justify-center flex-col'>
                <li onClick={()=>{
                  window.location.href = 'https://res.cloudinary.com/dtxejnbnw/image/upload/v1721675262/Policy_c8qhwb.pdf'
                }} className="hover:underline">Privacy Policy</li>
                <li  onClick={()=>{
                  window.location.href = 'https://res.cloudinary.com/dtxejnbnw/image/upload/v1721675262/Policy2_lgvadx.pdf'
                }}
                 className="hover:underline">Disclaimer Policy</li>
                <li  onClick={()=>{
                  window.location.href = 'https://res.cloudinary.com/dtxejnbnw/image/upload/v1721675262/Policy3_ipojgz.pdf'
                }}
                 className="hover:underline">Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl text-center font-bold mb-4">Get In Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                className="form-input w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900"
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                className="form-input w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900"
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Your Phone Number"
                className="form-input w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900"
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                className="form-textarea w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 h-32"
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-purple-950 text-white">
              Submit Response
            </button>
          </form>
        </div>
      </footer>
      <div className='flex items-center justify-center flex-col'>
        <h3 className='text-xl font-bold mb-4'>Disclaimer</h3>
        <p className='text-sm'>The information contained in this website is for general information purposes only. The information is provided by HWCF and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
        <p className='text-white mt-6'>© 2024 Health And Wellbeing Coaching Forum ~ All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
