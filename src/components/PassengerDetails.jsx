import React, { useState } from "react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";

export default function PassengerDetails() {
  const [passengers, setPassengers] = useState([
    { type: "Adult", name: "", email: "", phone: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { type: "Adult", name: "", email: "", phone: "" }]);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
      {passengers.map((p, idx) => (
        <div key={idx} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 mb-4">
          <h3 className="font-semibold mb-3">Passenger {idx + 1} ({p.type})</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FiUser className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
                value={p.name}
                onChange={(e) => handleChange(idx, "name", e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FiMail className="mr-2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none"
                value={p.email}
                onChange={(e) => handleChange(idx, "email", e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FiPhone className="mr-2 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full outline-none"
                value={p.phone}
                onChange={(e) => handleChange(idx, "phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
        onClick={addPassenger}
      >
        Add Passenger
      </button>
    </div>
  );
}