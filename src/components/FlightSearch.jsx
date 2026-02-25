import { useState } from "react";
import { FiMapPin, FiCalendar, FiUser, FiPlane } from "react-icons/fi";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <div className="max-w-4xl mx-auto bg-sky-50 border border-gray-200 shadow-lg rounded-2xl p-6 mt-10">
      {/* Trip Type Tabs */}
      <div className="flex space-x-4 mb-6">
        {["one-way", "round-trip", "multi-city"].map((type) => (
          <button
            key={type}
            onClick={() => setTripType(type)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition
              ${tripType === type
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-orange-100"}
            `}
          >
            {type.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {/* From */}
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <FiMapPin className="mr-2 text-orange-500" />
          <input type="text" placeholder="From" className="w-full outline-none" />
        </div>

        {/* To */}
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <FiMapPin className="mr-2 text-orange-500" />
          <input type="text" placeholder="To" className="w-full outline-none" />
        </div>

        {/* Departure */}
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <FiCalendar className="mr-2 text-orange-500" />
          <input type="date" className="w-full outline-none" />
        </div>

        {/* Return */}
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <FiCalendar className="mr-2 text-orange-500" />
          <input type="date" className="w-full outline-none" disabled={tripType==="one-way"} />
        </div>
      </div>

      {/* Passengers & Class */}
      <div className="flex items-center gap-4 mb-6 border rounded-lg px-3 py-2 bg-white">
        <FiUser className="text-orange-500" />
        <select className="w-full outline-none">
          <option>1 Adult, Economy</option>
          <option>2 Adults, Economy</option>
          <option>1 Adult, Business</option>
        </select>
      </div>

      {/* Search Flights Button */}
      <button className="w-full bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-orange-700 transition">
        <FiPlane size={20} />
        Search Flights
      </button>
    </div>
  );
}