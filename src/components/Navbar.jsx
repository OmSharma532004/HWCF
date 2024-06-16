//navbar Component
import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () => {

    return(
        <nav className="flex justify-between  items-center h-16  bg-[#9e5c85] text-white  shadow-sm font-mono" role="navigation">
            <Link to="/" className="pl-8">

            <Link to="/" className="p-4">H W C F</Link>
            </Link>
            {/* <div className="px-4 cursor-pointer md:hidden">
                <FaBars />
            </div> */}
            <div className="pr-8 text-sm">
                <Link to="/" className="p-4">Home</Link>
                {/* <Link to="/about" className="p-4">About</Link> */}
                <Link to="/event" className="p-4">Event</Link>
                {/* <Link to="/conference" className="p-4">Conference</Link> */}
                <Link to="/resources" className="p-4">Resources</Link>
            </div>
        </nav>
    )

}

export default Navbar;