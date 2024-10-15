import React from 'react';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with your logo image path

const Footer = () => {
  return (
    <footer className="bg-[#07030b] text-white py-10 border border-t-2 border-[#0d0517]">
      <div className="relative z-10" style={{ padding: '0 5%' }}>
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 flex flex-col items-center text-center md:text-left">
            <img src={logo} alt="World Builders: Rise of Realms" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2" />
            <h2 className="text-lg font-bold">World Builders: Rise of Realms</h2>
          </div>

          {/* Quick Links (if needed, uncomment to add) */}
          {/* <div className="hidden md:flex flex-col md:space-x-8 items-center mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-shadow-custom">Quick Links</h3>
            <ul className="space-y-2 flex flex-col md:flex-row gap-4 mt-2">
              <li><a href="#features" className="hover:text-[#FF8C00] transition duration-300">Features</a></li>
              <li><a href="#minigames" className="hover:text-[#FF8C00] transition duration-300">Mini-Games</a></li>
              <li><a href="#nftmarket" className="hover:text-[#FF8C00] transition duration-300">NFT Marketplace</a></li>
              <li><a href="#community" className="hover:text-[#FF8C00] transition duration-300">Community</a></li>
              <li><a href="#contact" className="hover:text-[#FF8C00] transition duration-300">Contact</a></li>
            </ul>
          </div> */}

          {/* Social Icons */}
          <div className="mt-4 md:mt-16 ml-auto flex space-x-6">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-3xl hover:text-[#5865F2] transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-[#1DA1F2] transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-[#E1306C] transition duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} World Builders: Rise of Realms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
