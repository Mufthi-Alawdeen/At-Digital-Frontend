import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 bg-[#F28D35] text-white font-bold rounded-[4px] font-Inter text-[14px]">
      {text}
    </button>
  );
};

export default Button;
