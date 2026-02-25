import React from "react";
import { FiGlobe, FiUser, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-orange-600 font-bold text-xl">Prestigious Air</div>

        {/* Center: Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li className="hover:text-orange-600 cursor-pointer">Book Flights</li>
          <li className="hover:text-orange-600 cursor-pointer">Manage Booking</li>
          <li className="hover:text-orange-600 cursor-pointer">Online Check-in</li>
          <li className="hover:text-orange-600 cursor-pointer">Flight Status</li>
          <li className="hover:text-orange-600 cursor-pointer">Destinations</li>
          <li className="hover:text-orange-600 cursor-pointer">Deals</li>
          <li className="hover:text-orange-600 cursor-pointer">Help / FAQ</li>
        </ul>

        {/* Right: Language + Currency + Account */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
            <FiGlobe />
            EN <FiChevronDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
            NGN <FiChevronDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
            <FiUser /> Login
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-700">☰</div>
      </div>
    </nav>
  );
}