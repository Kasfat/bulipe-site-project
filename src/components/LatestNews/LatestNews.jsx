import React from "react";
import MainNewsImg from "../../assets/main-news.png";
import NewsImg1 from "../../assets/news1.png";

function LatestNews() {
  const featuredNews = [
    {
      image: NewsImg1,
      category: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      image: NewsImg1,
      category: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      image: NewsImg1,
      category: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
  ];

  return (
    <div className="py-16 container mx-auto px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest News</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
      </div>

      {/* Main News */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-[#f2f2f2] rounded-lg overflow-hidden">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={MainNewsImg}
            alt="Main news"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 bg-[#f2f2f2]">
          <span className="inline-block bg-sky-50 text-[#004464] text-sm px-4 py-1 rounded-full font-medium">
            Current Events
          </span>
          <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
            Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10
            with no penalty
          </h3>
          <p className="text-gray-600 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className=" flex items-center gap-4 justify-end">
            <button className="bg-[#f2f2f2] text-orange-500 px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-orange-50 transition-colors border border-orange-500">
              Read More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Featured news</h3>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#0A2647]/90 transition-colors">
              <svg
                className="w-5 h-5"
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

            <button className="w-10 h-10 rounded-full bg-[#0A2647] flex items-center justify-center text-white hover:bg-[#0A2647]/90 transition-colors">
              <svg
                className="w-5 h-5"
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

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-sky-50 text-[#004464] text-sm px-4 py-1 rounded-full font-medium">
                  {news.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-800 mt-2 mb-3">
                  {news.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                <button className="bg-white text-[#004464] font-medium px-6 py-2 rounded-full flex items-center gap-2 border-[#004464] hover:bg-orange-50 transition-colors border">
                  Read More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
