import React from "react";

const CTASection = () => {
  return (
    <div className="bg-teal-500 flex justify-center items-center py-10 px-5">
      <div className="text-center md:text-left md:flex md:items-center md:space-x-6 max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-black">
          Ready to start your <br className="md:hidden" /> career?
        </h2>
        <div className="border-l-2 border-black pl-6 mt-4 md:mt-0">
          <p className="text-lg font-semibold text-white">
            We are waiting for you to contact us
          </p>
          <p className="text-sm text-white mt-1">
            If you have any query call us at any of the following numbers
          </p>
          <p className="text-lg font-bold text-black mt-2">
            01825 004 976, 01804 181 257
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
