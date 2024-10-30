import React, { useState } from "react";
import logo from "../Assests/Images/Logo.svg";
import menuIcon from "../Assests/Images/Menu.svg"; // Adjust the path to your menu SVG

const Header = () => {
  // State to manage the mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white xl:px-[80px] xl:py-[16px] md:px-[40px] md:py-[16px] lg:px-[60px] lg:py-[16px] py-[16px] px-[20px]">
      <div className="flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[238px] xl:h-[30px] lg:h-[30px] md:h-[45px] mb-[10px]"
          />
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <button
          className="md:hidden focus:outline-none" // Hidden on medium screens and above
          onClick={toggleMenu} // Toggle mobile menu on click
        >
          <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />{" "}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-white font-InterBold font-medium xl:text-[14px] lg:text-[14px] md:text-[14px]">
          <a href="/">SERVICES</a>
          <a href="/">ABOUT US</a>
          <a href="/">CONTACT US</a>
          <a href="/">CAREERS</a>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white text-black p-8">
          {/* Navigation Links for Mobile Menu */}
          <div className="flex flex-col space-y-8 text-lg font-normal font-Inter text-left text-[14px] gap-[8px]">
            <div className="flex justify-between items-center">
              <a href="/" className="">
                HOME
              </a>
              <button
                className="text-2xl focus:outline-none"
                onClick={toggleMenu} // Close mobile menu on click
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <a href="/">SERVICES</a>
            <a href="/">ABOUT US</a>
            <a href="/">CONTACT US</a>
            <a href="/">CAREERS</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
