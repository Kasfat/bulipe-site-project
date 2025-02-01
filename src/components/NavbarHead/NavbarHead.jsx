import React from "react";
import headImage from "../../assets/100.png";

function NavbarHead() {
  return (
    <>
      <div className="bg-sky-200 py-1 px-4 flex items-center justify-between">
        {/* Left section with logo */}
        <div className="flex-none">
          <img src={headImage} alt="100%" className="h-8" />
        </div>

        {/* Center section with scholarship text in box */}
        <div className="flex items-center mx-4">
          <div className=" rounded-md px-3 py-1 flex items-center border border-[#004464]">
            <p className="text-[#004464] text-sm font-bold">
              <span className="text-orange-500 font-bold">Scholarship</span> on
              all <br />
              of our programs
            </p>
          </div>
        </div>

        {/* Right section with text and close button */}
        <div className="flex items-center">
          <span className="text-gray-600 text-sm">
            Exclusively for the physically challenged, and third-gender
            communities!
          </span>
          <button className="ml-4 text-white hover:text-gray-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarHead;
