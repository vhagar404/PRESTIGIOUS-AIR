import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-orange-600 font-bold text-2xl">Prestigious Air</div>

      {/* Center: Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <li className="hover:text-orange-600 cursor-pointer">Book Flights</li>
        <li className="hover:text-orange-600 cursor-pointer">Manage Booking</li>
        <li className="hover:text-orange-600 cursor-pointer">Online Check-in</li>
        <li className="hover:text-orange-600 cursor-pointer">Flight Status</li>
        <li className="hover:text-orange-600 cursor-pointer">Destinations</li>
        <li className="hover:text-orange-600 cursor-pointer">Deals</li>
        <li className="hover:text-orange-600 cursor-pointer">Help / FAQ</li>
      </ul>

      {/* Right: Login + Language/Currency */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 hover:text-orange-600 font-medium">NGN | USD</button>
        <button className="text-gray-700 hover:text-orange-600 font-medium">EN</button>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={24} className="text-orange-600" />
          <span className="font-medium hover:text-orange-700">Login</span>
        </div>
      </div>
    </nav>
  );
}