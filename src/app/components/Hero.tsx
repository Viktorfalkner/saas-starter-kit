import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-750 text-white h-screen flex flex-col md:flex-row items-center justify-evenly px-8 md:px-16 lg:px-24">
      {/* Left Text Section */}
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          A tool for high-growth startups
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-loose">
          We make your business <span className="text-orange-500">better</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Find out how our product can revolutionalize your business today!
        </p>

        {/* Buttons */}
        <div className="space-x-4 mb-8 flex justify-center hidden">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg">
            Stream Now
          </button>
          <button className="text-white font-semibold py-3 px-6 border border-white rounded-lg">
            Watch how it works &rarr;
          </button>
        </div>

        {/* Email Capture */}
        {/* <div className="bg-gray-800 p-6 rounded-lg mx-auto md:mx-0 w-full md:w-auto">
          <p className="text-lg font-semibold mb-4 text-center">
            Sign up for our newsletter to stay updated!
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto flex-grow px-4 py-3 mb-4 md:mb-0 md:mr-4 text-gray-900 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      {/* Right Icon/Graphic Section */}
      <div className="hidden md:flex flex-col items-center">
        {/* Simple geometric icon with Tailwind */}
        <div className="flex space-x-2">
          <div className="w-32 h-32 bg-yellow-500 rounded-full"></div>
          <div className="w-32 h-32 bg-purple-500 rounded-full"></div>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="w-32 h-32 bg-red-400 rounded-full"></div>
          <div className="w-32 h-32 bg-blue-600 rounded-full"></div>
        </div>
        <div className="mt-6">
          {/* Custom "star" icon using Tailwind and CSS */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-75 animate-ping"></div>
            <div className="absolute inset-0 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-6 left-6 w-12 h-12 bg-yellow-500 rotate-45 transform">
              <div className="absolute inset-0 w-full h-full bg-yellow-300 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
