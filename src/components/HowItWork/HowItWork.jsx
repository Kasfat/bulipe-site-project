import React from "react";
import WorkImg1 from "../../assets/howitwork01.png";
import WorkImg2 from "../../assets/howitwork02.png";
import WorkImg3 from "../../assets/howitwork03.png";

function HowItWorks() {
  return (
    <div className="container mx-auto px-6 py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          How does it Work?
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative">
          {/* Sticky Note Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src={WorkImg1}
              alt="Step 1"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg p-8 pt-24 shadow-lg h-full relative">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Training
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Our training programs, tailored to each subject matter and
              specialized courses, last at least 3 months and take place in our
              physical venues. Access to all course materials will be provided
              through the Bulipe App/repository, ensuring a comprehensive
              learning experience for all participants.
            </p>
            {/* Line in center */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-100 top-0 transform -translate-x-1/2 -z-10"></div>
          </div>
          {/* Bottom Indicator Lines */}
          <div className=" absolute left-1/2 -bottom-1 transform -translate-x-1/2">
            <div className="h-2 w-12 bg-blue-900 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Sticky Note Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src={WorkImg2}
              alt="Step 2"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg p-8 pt-24 shadow-lg h-full relative">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Certification
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Upon completion of your desired course and training, each trainee
              must attend a central examination at their respective geographical
              headquarters of Bulipe. Upon passing, trainee graduates receive
              industry-recognized certifications trusted by employers globally.
            </p>
            {/* Line in center */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-100 top-0 transform -translate-x-1/2 -z-10"></div>
          </div>
          {/* Bottom Indicator Lines */}
          <div className=" absolute left-1/2 -bottom-1 transform -translate-x-1/2">
            <div className="h-2 w-12 bg-orange-500 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          {/* Sticky Note Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src={WorkImg3}
              alt="Step 3"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg p-8 pt-24 shadow-lg h-full relative">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Employment
            </h3>
            <p className="text-gray-600 text-center mb-8">
              We guarantee confirmed job prospects and a base salary of BDT
              30,000 for all Bulipe trainee graduates through our vast alumni
              network, partnerships with 350+ global businesses across Europe,
              America, Asia, and Africa.
            </p>
            {/* Line in center */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-100 top-0 transform -translate-x-1/2 -z-10"></div>
          </div>
          {/* Bottom Indicator Lines */}
          <div className=" absolute left-1/2 -bottom-1 transform -translate-x-1/2">
            <div className="h-2 w-12 bg-cyan-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
