import React from "react";
import OurProgramBannerImg from "../../assets/Background.png";
import ProgramImg1 from "../../assets/Program1.png";
import ProgramImg2 from "../../assets/Program2.png";
import ProgramImg3 from "../../assets/Program3.png";
import ProgramImg4 from "../../assets/Program4.png";
import selfImg from "../../assets/self-development.png";
import certificateImg from "../../assets/certificate.png";
import resourcesImg from "../../assets/resources.png";

function OurProgram() {
  const programs = [
    {
      title: "IT Support Specialist",
      image: ProgramImg1,
      rating: 5.0,
      reviews: "(255)",
      price: "$300",
    },
    {
      title: "Digital Marketing",
      image: ProgramImg2,
      rating: 4,
      reviews: "(255)",
      price: "$299",
    },
    {
      title: "Online Sales and Marketing",
      image: ProgramImg3,
      rating: 4,
      reviews: "(255)",
      price: "$195",
    },
    {
      title: "Social Media",
      image: ProgramImg4,
      rating: 5,
      reviews: "(255)",
      price: "$160",
    },
    {
      title: "Data Entry & Virtual Assistance",
      image: ProgramImg2,
      rating: 4,
      reviews: "(255)",
      price: "$299",
    },
    {
      title: "Online Web Posting",
      image: ProgramImg2,
      rating: 4,
      reviews: "(255)",
      price: "$199",
    },
  ];

  return (
    <div
      className="py-16 relative"
      style={{
        backgroundImage: `url(${OurProgramBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button className="flex items-center gap-2 text-cyan-500 border-b-2 border-cyan-500 pb-2">
            <img src={selfImg} alt="Self Development" className="w-6 h-6" />
            Digital Skills Development
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-cyan-500">
            <img src={certificateImg} alt="Certificate" className="w-6 h-6" />
            Skill Development
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-cyan-500">
            <img src={resourcesImg} alt="Resources" className="w-6 h-6" />
            All
          </button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              {/* Program Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full object-cover"
              />

              {/* Program Details */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {program.title}
                </h3>

                {/* Rating and Price Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-orange-500">{"★".repeat(5)}</div>
                    <span className="text-gray-600 text-sm ml-1">
                      {program.rating} {program.reviews}
                    </span>
                  </div>
                  <span className="font-bold text-lg">{program.price}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button className="text-cyan-500 hover:text-cyan-600 text-sm flex items-center">
                    More Info
                    <span className="ml-1 bg-cyan-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      i
                    </span>
                  </button>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProgram;
