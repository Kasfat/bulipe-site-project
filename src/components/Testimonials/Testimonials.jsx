import React from "react";
import TestimonialImg from "../../assets/Ellipse_5.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Asharaful Islam",
      role: "SEO Specialist",
      image: TestimonialImg,
      content:
        "I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
    },
    {
      name: "Asharaful Islam",
      role: "SEO Specialist",
      image: TestimonialImg,
      content:
        "I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
    },
  ];

  return (
    <div className="w-full bg-[#f2f2f2] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Title and Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Testimonials
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

        {/* Testimonials Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 relative shadow-sm"
            >
              {/* Blue Border Accent */}
              <div className="absolute left-0 top-0 h-full w-2 bg-blue-900 rounded-l-lg"></div>

              <div className="flex gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
