import React, { useState } from "react";
import { FiClock, FiArrowRight, FiCheckCircle, FiMapPin } from "react-icons/fi";

export default function FlightResults() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const flights = [
    {
      airline: "Prestigious Air",
      from: "Lagos",
      to: "London",
      depTime: "08:00",
      arrTime: "14:00",
      duration: "6h 0m",
      stops: 0,
      price: "₦250,000",
    },
    {
      airline: "Prestigious Air",
      from: "Lagos",
      to: "London",
      depTime: "12:00",
      arrTime: "18:30",
      duration: "6h 30m",
      stops: 1,
      price: "₦230,000",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Available Flights</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="md:w-1/4 bg-white border border-gray-200 shadow-sm rounded-2xl p-4">
          <h3 className="font-semibold mb-3">Filters</h3>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" /> Non-stop
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" /> 1 Stop
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" /> 2+ Stops
          </div>
        </div>

        {/* Flights list */}
        <div className="md:w-3/4 flex flex-col gap-4">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 shadow-sm rounded-2xl p-4 cursor-pointer ${
                selectedFlight === idx ? "border-orange-600" : ""
              }`}
              onClick={() => setSelectedFlight(idx)}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{flight.airline}</p>
                <p className="text-orange-600 font-bold">{flight.price}</p>
              </div>

              <div className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <FiMapPin /> {flight.from} → {flight.to}
                </div>
                <div className="flex items-center gap-2">
                  <FiClock /> {flight.duration}
                </div>
                <div>{flight.stops === 0 ? "Non-stop" : `${flight.stops} stop(s)`}</div>
              </div>

              <div className="flex justify-between items-center mt-2 text-gray-700">
                <span>{flight.depTime}</span>
                <FiArrowRight />
                <span>{flight.arrTime}</span>
              </div>

              {selectedFlight === idx && (
                <div className="mt-3 text-green-600 flex items-center gap-1">
                  <FiCheckCircle />
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}