import React from "react";
import BannerImg from "../../assets/bannerImg.png";
import BannerMainImg from "../../assets/fullBanner.png";
import vector from "../../assets/Vector.png";

function Banner() {
  return (
    <>
      <div
        className="bg-[#004464] text-white py-16 relative "
        style={{
          backgroundImage: `url(${BannerMainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Add an overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#004464] opacity-90"></div>

        {/* Content container */}
        <div className="container mx-auto px-6 flex flex-wrap md:flex-nowrap items-center relative z-10 mb-16">
          <div className="w-full md:w-1/2 pr-8">
            <p className="text-sm mb-2">ELEARNING</p>
            <h1 className="text-4xl font-bold mb-4">
              IT Service Industry
              <br />
              with Digital Skills
              <br />
              Development
            </h1>
            <p className="text-gray-300 mb-8">
              Bulipe Tech is a company opens collaboration with the private
              <br />
              sector and local community in Bangladesh for launching the
              <br />
              Digital Skills Development project for the ever-changing workforce
              <br />
              of Bangladesh.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                Enroll Now
                <img src={vector} />
              </button>
              <button className="border border-white hover:bg-white hover:text-[#0A2647] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={BannerImg}
              alt="IT Services Illustration"
              className="w-full"
              style={{ height: "485px", width: "532px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
