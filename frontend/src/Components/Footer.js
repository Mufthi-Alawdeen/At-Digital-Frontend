import React from "react";
import Logo from "../Assests/Images/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary mb-0 text-white xl:px-[60px] xl:pt-[40px] xl:pb-[20px] lg:px-[60px] lg:pt-[40px] lg:pb-[20px] md:px-[40px] md:pt-[40px] md:pb-[20px] px-[20px] pt-[40px] pb-[20px]">
      <div className="container mx-auto flex flex-col md:flex-col xl:flex-row lg:flex-row xl:space-x-4 lg:space-x-4 justify-start items-start text-left">
        {/* Logo and Description Section */}
        <div className="flex-1 mb-8 md:mb-4 md:pr-10 ">
          <img src={Logo} alt="AT Digital Logo" className="h-10 mb-4" />
          <p className="mt-4 xl:max-w-[413px] md:max-w-[413px] lg:max-w-[428px] font-Lato font-normal text-[16px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Technologies and Services Section */}
        <div className="flex flex-col md:flex-row md:mt-8 lg:mt-0 xl:mt-0 xl:flex-row lg:flex-row md:space-x-[100px] xl:space-x-10 lg:space-x-10">
          {/* Our Technologies Section */}
          <div className="flex-1 mb-8 md:mb-0 xl:mr-[100px]">
            <h3 className="text-[21px] font-InterBold font-medium">
              Our Technologies
            </h3>
            <ul className="mt-4 space-y-2 text-[14px] font-InterBold font-medium">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="flex-2">
            <h3 className="text-[21px] font-InterBold font-medium">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-[14px] font-InterBold font-medium">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 border-t border-white pt-4 text-center ">
        <a href="#" className="text-white hover:underline mx-2">
          Privacy Policy
        </a>
        |
        <a href="#" className="text-white hover:underline mx-2">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
