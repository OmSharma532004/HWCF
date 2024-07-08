import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="flex justify-between items-center h-16 bg-[#9e5c85] text-white shadow-sm font-mono w-screen p-6">
                <Link to="/" className="pl-8 text-2xl font-bold">H W C F</Link>
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className="hidden md:flex pr-8 text-sm">
                    <Link to="/" className="p-4">Home</Link>
                    <Link to="/event" className="p-4">Events</Link>
                    <Link to="/conference" className="p-4">Conference</Link>
                    <Link to="/resources" className="p-4">Resources</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                    <div className="fixed top-0 right-0 w-1/2 h-full bg-[#9e5c85] text-white p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            <Link to="/" onClick={closeMenu}>Home</Link>
                            <Link to="/event" onClick={closeMenu}>Events</Link>
                            <Link to="/conference" onClick={closeMenu}  >Conference</Link>
                            <Link to="/resources" onClick={closeMenu}>Resources</Link>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
