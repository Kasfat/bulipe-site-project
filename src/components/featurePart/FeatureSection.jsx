import React from "react";
import FeatureImg1 from "../../assets/feature01.png";
import FeatureImg2 from "../../assets/feature02.png";
import FeatureImg3 from "../../assets/feature03.png";

function FeatureSection() {
  return (
    <div className="container mx-auto px-6 -mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative ">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-[#0A2647] flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-orange-500">
                <img src={FeatureImg1} alt="Feature 1" />
              </div>
            </div>
          </div>
          <div className="pt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Master In-Demand Digital Skills to Advance Your Career
            </h3>
            <p className="text-gray-600">
              Unlock career opportunities through our industry-recognized
              Digital Skill Development program. Begin your journey today with
              300 local partners to stay ahead of the curve!
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-[#0A2647] flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-orange-500">
                <img src={FeatureImg2} alt="Feature 2" />
              </div>
            </div>
          </div>
          <div className="pt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Earn Vendor Certifications and Join Us
            </h3>
            <p className="text-gray-600">
              Our post-training assessments connect you with leading U.S.
              certification providers. Join over 3,000 global partners across
              21+ countries and begin your career today!
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-[#0A2647] flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-orange-500">
                <img src={FeatureImg3} alt="Feature 3" />
              </div>
            </div>
          </div>
          <div className="pt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Start Earning BDT 30,000 Monthly and Grow Your Skills
            </h3>
            <p className="text-gray-600">
              Salary-based employment starting at BDT 30,000, with the potential
              to exceed BDT 3,00,000+ as you up-skill and master new digital
              skills. Your earning potential is limitless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
