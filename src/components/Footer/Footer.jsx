import React from "react";
import LogoImg from "../../assets/Logo-Main.png";
import FillImag from "../../assets/fill.png";
import AppImag from "../../assets/app.png";
import GoogleImag from "../../assets/google.png";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="Bulipe Tech" className="w-32" />
            <p className="text-sm mt-2">
              Bulipe Tech collaborates with parent companies from the US and UK
              to bring a far-reaching Digital Skills Development project for
              Bangladesh.
            </p>
            <div className="flex space-x-3 mt-3">
              <FaLinkedin className="text-white text-2xl cursor-pointer" />
              <FaXTwitter className="text-white text-2xl cursor-pointer" />
              <FaFacebook className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">ADDRESSES</h3>
            <p className="text-sm">Mobile: 01712 944 876</p>
            <p className="text-sm">info@buliipetech.com</p>
            <p className="text-sm">
              House: 82, Road: 23/16, Block: A, Banani, Dhaka-1213
            </p>
            <div className="flex items-center gap-2 text-md font-semibold mt-4 text-[#F15B2D]">
              COUNTRY OFFICES{" "}
              <span>
                <img src={FillImag} className="inline-block" />
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">QUICK LINKS</h3>
            <ul className="text-sm space-y-2 text-[#F15B2D]">
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> Home
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> About Us
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> Our Programs
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> Career & Placement
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> Contact Us
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> News & Media
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2" /> Privacy & Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">GET THE APP</h3>
            <button className=" px-4 py-2 rounded mt-2">
              <img src={AppImag} className="inline-block" />
            </button>
            <button className=" px-4 py-2 rounded mt-2">
              <img src={GoogleImag} className="inline-block" />
            </button>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center bg-[#E6ECEF] py-3 flex-col">
        <h6 className="text-center text-[#004464] my-4 underline underline-offset-4">
          &copy; 2025{" "}
          <span className="text-[#F15B2D]">Bulipe Tech Limited</span>. All
          rights reserved.
        </h6>
        <p className="text-center text-xs text-gray-400 mt-2 max-w-[1000px] px-4 mb-2">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog once upon a time. The quick brown fox jumps over the
          lazy dog. The quick brown fox jumps over the lazy dog once upon a
          time. The quick brown fox jumps over the lazy dog. The lazy dog once
          upon a time. The quick brown fox jumps over the lazy dog. The quick
          brown fox jumps over the lazy dog once upon a time.
        </p>
      </div>
    </>
  );
};

export default Footer;
