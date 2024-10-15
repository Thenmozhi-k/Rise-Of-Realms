import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Features", path: "features" },
        { link: "Game Loop", path: "gameloop" },
        { link: "Mini Games", path: "minigames" },
        { link: "NFT Market", path: "nftmarket" },
        { link: "Community", path: "connect" },
    ];

    return (
        <header className='w-full fixed top-0 left-0 right-0 z-50'>
            <nav className={`lg:px-14 px-4 ${isSticky ? "bg-[#0d0517] text-white shadow-md duration-300" : "bg-transparent"} transition-all ease-in-out`} 
                 style={{ padding: '0 5%' }}
            >
                <div className='flex justify-between items-center py-4'>
                    {/* Left side (Logo) */}
                    <a href="/" className='text-2xl font-semibold'>
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='w-16 h-16 md:w-18 md:h-18 lg:w-16 lg:h-16 object-contain'
                        />
                    </a>

                    {/* Right side (NavItems and Connect button for desktop) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className='flex space-x-6'>
                            {navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={-50} // Adjusting offset for quicker navigation
                                        duration={300} // Set duration for smooth scrolling
                                        className={`block text-xl font-medium cursor-pointer ${isSticky ? "text-white" : "text-white"} hover:text-[#8689EB]`}
                                        activeClass="text-[#8689EB]" // Set active class for active link styling
                                        onSetActive={(to) => {
                                            const element = document.getElementById(to);
                                            if (element) {
                                                console.log('Active section:', to); // Log active section for debugging
                                            } else {
                                                console.warn(`Element with id ${to} not found.`);
                                            }
                                        }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Connect Button */}
                        <a
                            href="#connect"
                            className="ml-4 px-6 py-2 bg-[#64748B] text-white text-lg rounded-lg hover:bg-[#8689eb94] transition duration-300 ease-in-out"
                            style={{ border: 'none' }} // Ensure no border is shown
                        >
                            Connect
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button className='text-gray-300 focus:outline-none' onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute bg-[#0d0517] top-16 left-0 w-full py-4 z-40 transition-all ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className='space-y-4 px-4'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-50} // Adjusting offset for quicker navigation
                                    duration={300} // Set duration for smooth scrolling
                                    className="block text-base font-medium text-white cursor-pointer"
                                    activeClass="text-[#8689EB]" // Set active class for mobile
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Connect Button for Mobile */}
                    <div className="px-4 mt-4">
                        <a
                            href="#connect"
                            className="block w-full text-center py-2 bg-[#64748B] text-white rounded-lg hover:bg-[#8689eb94] transition duration-300 ease-in-out"
                            style={{ border: 'none' }} // Ensure no border is shown
                        >
                            Connect
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
