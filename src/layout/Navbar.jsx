import { useState } from "react";
import { FiUser, FiChevronDown } from "react-icons/fi"; // install react-icons if needed

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    "Book Flights",
    "My Trips",
    "Check-in",
    "Flight Status",
    "Destinations",
    "Deals",
    "Help",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-primary">Prestigious Air</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-primary">
              {item}
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <select className="border rounded-lg px-2 py-1 text-sm hidden md:block">
            <option>EN</option>
          </select>
          <select className="border rounded-lg px-2 py-1 text-sm hidden md:block">
            <option>NGN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <FiUser size={18} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 border rounded-lg px-2 py-1"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FiChevronDown size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="md:hidden bg-white border-t px-6 py-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-primary">
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}