import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:w-[846px] lg:w-[896px]  md:w-[655px]  w-[334px] p-4 bg-[#FAF8FF] md:text-left text-left">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`font-InterBold font-medium md:text-[22px] lg:text-[22px] xl:text-[22px] text-[20px] ${
            isOpen ? "text-primary" : "text-black"
          }`}
        >
          {title}
        </h3>
        <span className="font-InterBold font-medium text-[22px]">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="mt-6 bg-[#FAF8FF] mb-6 rounded-md text-left text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
          <p className="text-[#6F6C90] xl:max-w-[777px]">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
