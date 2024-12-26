import React from 'react';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="flex justify-between items-center">
        {/* Left side navigation */}
        <div className="flex space-x-6">
          <a href="#" className="text-white font-semibold hover:text-gray-400">Music</a>
          <a href="#" className="text-white font-semibold hover:text-gray-400">Podcast</a>
          <a href="#" className="text-white font-semibold hover:text-gray-400">Live</a>
          <a href="#" className="text-white font-semibold hover:text-gray-400">Radio</a>
        </div>
        
        {/* Right side search bar */}
        <div className="relative ml-40 ">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2  pl-10 pr-4 bg-transparent text-white rounded border  border-white focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
           <IoSearch/>
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
