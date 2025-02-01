import React from "react";
import IbmImg from "../../assets/IBM.png";
import HostingerImg from "../../assets/Hostinger.png";
import DigitaloceanImg from "../../assets/digitalocean.png";
import MicrosoftImg from "../../assets/Microsoft.png";

function OurPartners() {
  const categories = [
    "Technology Partners",
    "Branding Partners",
    "Training Partners",
    "Banking Partners",
  ];

  const partners = [
    {
      name: "IBM",
      logo: IbmImg,
    },
    {
      name: "Hostinger",
      logo: HostingerImg,
    },
    {
      name: "Digital Ocean",
      logo: DigitaloceanImg,
    },
    {
      name: "Microsoft",
      logo: MicrosoftImg,
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Partners
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-8 mb-12 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-lg whitespace-nowrap ${
                index === 0
                  ? "text-cyan-500 border-b-2 border-cyan-500 pb-2"
                  : "text-gray-600 hover:text-cyan-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Partners Logo Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#B7E4E0] rounded-full px-8 py-4 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
