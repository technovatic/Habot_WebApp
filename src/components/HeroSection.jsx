import React from 'react';
import { FaBriefcase, FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-center text-white mt-0 mb-8" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <h2 className="text-3xl md:text-6xl font-bold mb-2">Are You a Supplier?</h2>
        <p className="text-4xl md:text-7xl mb-8">Explore Matching Opportunities.</p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-grow p-2 bg-white text-black rounded md:rounded-l">
            <FaBriefcase className="mr-2 my-auto text-orange-500" />
            <input 
              type="text" 
              placeholder="Search your required service here..." 
              className="w-full outline-none p-2"
              style={{ minWidth: '200px' }}
            />
          </div>
          <div className="flex flex-grow p-2 bg-white text-black rounded md:rounded-none">
            <FaLocationArrow className="mr-2 my-auto text-orange-500" />
            <input 
              type="text" 
              placeholder="Search your desired location here..." 
              className="w-full outline-none p-2"
              style={{ minWidth: '200px' }}
            />
          </div>
          <button className="bg-green-500 text-white p-2 rounded md:rounded-r w-full md:w-auto" style={{ minWidth: '116px', height: '50px' }}>
            Search
          </button>
        </div>
        <a href="www" className="text-white mt-4 block">
          Are you a buyer? <span className="underline">Click here if you are looking to post a requirement.</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
