import React from 'react';
import { IoMusicalNotes } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiMusicalNote } from "react-icons/hi2";
import { FaCompass } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/5 h-full bg-gray-900 text-white p-6  flex flex-col justify-between h-screen">
        {/* Top Section */}
        <div>
          <div className="flex items-center space-x-2">
            <IoMusicalNotes className="h-8 w-8 text-red-600" />
            <h1 className="text-2xl font-bold">
              <span className="text-red-600">Dream</span>
              <span className="text-white">Music</span>
            </h1>
          </div>

          <ul className="space-y-4 mt-5">
            <li className="hover:text-gray-400 cursor-pointer flex items-center">
              <span className="text-red-600 mr-1 h-4 w-4">
                <IoMdHome />
              </span>
              <span className="text-white">Home</span>
            </li>
            <li className="hover:text-gray-400 cursor-pointer flex items-center">
              <span className="text-red-600 mr-1 h-4 w-4">
                <FaArrowTrendUp />
              </span>
              <span className="text-white">Trends</span>
            </li>
            <li className="hover:text-gray-400 cursor-pointer flex items-center">
              <span className="text-red-600 mr-1 h-4 w-4">
                <HiMusicalNote />
              </span>
              <span className="text-white">Library</span>
            </li>
            <li className="hover:text-gray-400 cursor-pointer flex items-center">
              <span className="text-red-600 mr-1 h-4 w-4">
                <FaCompass />
              </span>
              <span className="text-white">Discover</span>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <ul className="space-y-4">
          <li className="hover:text-gray-400 cursor-pointer flex items-center">
            <span className="text-red-600 mr-1 h-4 w-4">
              <IoSettingsSharp />
            </span>
            <span className="text-white">Settings</span>
          </li>
          <li className="hover:text-gray-400 cursor-pointer flex items-center">
            <span className="text-red-600 mr-1 h-4 w-4">
              <MdOutlineLogout />
            </span>
            <span className="text-white">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
