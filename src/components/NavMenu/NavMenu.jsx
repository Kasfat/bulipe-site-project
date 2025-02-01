import React from "react";
import BrandLogo from "../../assets/Logo_01.png";
import vector from "../../assets/Vector.png";

function NavMenu() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white py-3 px-6 flex items-center justify-between border-b">
        {/* Logo container with specific dimensions noted in screenshot */}
        <div className="flex items-center">
          <img
            src={BrandLogo}
           
            className="object-contain"
            alt="BULIPE"
          />
        </div>

        {/* Navigation links with adjusted spacing and colors to match screenshot */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
            HOME
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">
            ABOUT US
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">
            PROGRAMS
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">
            LOCATIONS
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">
            CAREER & PLACEMENT
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">
            CONTACT US
          </a>
        </div>

        {/* Sign Up button with updated styling to match screenshot */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2">
          Sign Up
          <img src={vector} />
        </button>
      </nav>
    </>
  );
}

export default NavMenu;
