import { useState } from "react";
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";
import { FaPlaneDeparture } from "react-icons/fa";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-6 mt-10">
      
      {/* Trip Type Tabs */}
      <div className="flex gap-3 mb-6">
        {["one-way", "round-trip", "multi-city"].map((type) => (
          <button
            key={type}
            onClick={() => setTripType(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                tripType === type
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {type.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center border rounded-xl px-3 py-2">
          <FiMapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="From"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center border rounded-xl px-3 py-2">
          <FiMapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="To"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center border rounded-xl px-3 py-2">
          <FiCalendar className="text-gray-400 mr-2" />
          <input type="date" className="w-full outline-none" />
        </div>

        <div className="flex items-center border rounded-xl px-3 py-2">
          <FiCalendar className="text-gray-400 mr-2" />
          <input
            type="date"
            className="w-full outline-none"
            disabled={tripType === "one-way"}
          />
        </div>
      </div>

      {/* Passengers */}
      <div className="flex items-center gap-3 border rounded-xl px-3 py-2 mb-6">
        <FiUser className="text-gray-400" />
        <select className="w-full outline-none">
          <option>1 Adult · Economy</option>
          <option>2 Adults · Economy</option>
          <option>1 Adult · Business</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition">
        <FaPlaneDeparture />
        Search Flights
      </button>
    </div>
  );
}