import React from "react";
import techImage from "../../assets/tech-network.png";

function WhatWeDo() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What We Do?</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      {/* Content Container */}
      <div
        className="flex flex-col md:flex-row items-stretch shadow-lg rounded-lg overflow-hidden"
        style={{ height: "435px" }}
      >
        {/* Left Text Box */}
        <div className="w-full md:w-2/5 bg-sky-100 p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Bulipe Tech is a dynamic and innovative company
          </h3>
          <p className="text-gray-600 mb-6">
            We provide cutting-edge solutions to empower businesses through
            digital transformation. Our expertise spans across multiple domains,
            helping organizations achieve their technological goals and drive
            innovation.
          </p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors w-fit">
            Read More
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="white" />
              <path
                d="M8 12h8M13 8l4 4-4 4"
                stroke="#0A2647"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-3/5 relative">
          <img
            src={techImage}
            alt="Technology Network Visualization"
            className="w-full h-full object-cover"
            style={{ maxWidth: "801px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
