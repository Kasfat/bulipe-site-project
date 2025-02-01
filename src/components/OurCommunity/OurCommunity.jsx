import React from "react";

function OurCommunity() {
  const stats = [
    {
      number: "3K+",
      description: "Global partners worldwide",
    },
    {
      number: "23+",
      description: "Countries and adding",
    },
    {
      number: "300+",
      description: "Local training partners",
    },
  ];

  return (
    <div className="bg-[#01111E] text-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Title and Description */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our community</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Bulipe Tech aims to train unemployed individuals in Bangladesh,
            equipping them with essential digital skills and linking them to job
            opportunities across 23 countries worldwide.
          </p>
        </div>

        {/* Stats Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border border-gray-800 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-gray-700"
                  : ""
              }`}
            >
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCommunity;
