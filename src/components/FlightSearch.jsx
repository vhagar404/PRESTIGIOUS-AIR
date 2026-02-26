import { useState } from "react";
import { FiSend, FiMapPin, FiCalendar, FiUser } from "react-icons/fi";

// Example airports data per country
const airportsByCountry = {
  Nigeria: ["Lagos", "Abuja", "Port Harcourt"],
  UK: ["London", "Manchester", "Edinburgh"],
  USA: ["New York", "Los Angeles", "Chicago"],
  UAE: ["Dubai", "Abu Dhabi"],
  France: ["Paris", "Nice", "Lyon"],
};

export default function FlightSearch({ booking, setBooking }) {
  const [tripType, setTripType] = useState("round-trip");
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");

  const fromCities = fromCountry ? airportsByCountry[fromCountry] : [];
  const toCities = toCountry ? airportsByCountry[toCountry] : [];

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-6 mt-10">
      {/* Trip Type Tabs */}
      <div className="flex space-x-4 mb-6">
        {["one-way", "round-trip", "multi-city"].map((type) => (
          <button
            key={type}
            onClick={() => setTripType(type)}
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              tripType === type
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {type.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Country Selection */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <select
          value={fromCountry}
          onChange={(e) => {
            setFromCountry(e.target.value);
            setBooking({ ...booking, from: "" }); // reset city when country changes
          }}
          className="border rounded-lg px-3 py-2 w-full"
        >
          <option value="">Select Departure Country</option>
          {Object.keys(airportsByCountry).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select
          value={toCountry}
          onChange={(e) => {
            setToCountry(e.target.value);
            setBooking({ ...booking, to: "" }); // reset city when country changes
          }}
          className="border rounded-lg px-3 py-2 w-full"
        >
          <option value="">Select Destination Country</option>
          {Object.keys(airportsByCountry).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* City Selection */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <select
          value={booking.from}
          onChange={(e) => setBooking({ ...booking, from: e.target.value })}
          className="border rounded-lg px-3 py-2 w-full"
          disabled={!fromCountry}
        >
          <option value="">Select Departure City</option>
          {fromCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select
          value={booking.to}
          onChange={(e) => setBooking({ ...booking, to: e.target.value })}
          className="border rounded-lg px-3 py-2 w-full"
          disabled={!toCountry}
        >
          <option value="">Select Destination City</option>
          {toCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Departure & Return */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiCalendar className="mr-2 text-gray-400" />
          <input
            type="date"
            className="w-full outline-none"
            value={booking.departure || ""}
            onChange={(e) =>
              setBooking({ ...booking, departure: e.target.value })
            }
          />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiCalendar className="mr-2 text-gray-400" />
          <input
            type="date"
            className="w-full outline-none"
            value={booking.arrival || ""}
            onChange={(e) =>
              setBooking({ ...booking, arrival: e.target.value })
            }
            disabled={tripType === "one-way"}
          />
        </div>
      </div>

      {/* Passengers & Class */}
      <div className="flex items-center gap-4 mb-6 border rounded-lg px-3 py-2">
        <FiUser className="text-gray-400" />
        <select
          className="w-full outline-none"
          value={booking.travellers?.length || 1}
          onChange={(e) =>
            setBooking({
              ...booking,
              travellers: Array.from({ length: Number(e.target.value) }, (_, i) => ({
                name: "",
                email: "",
                class: "Economy",
              })),
            })
          }
        >
          <option value={1}>1 Adult</option>
          <option value={2}>2 Adults</option>
          <option value={3}>3 Adults</option>
        </select>
      </div>

      {/* Search Flights Button */}
      <button
        onClick={() => {}}
        className="w-full bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-orange-700 transition"
      >
        <FiSend size={20} />
        Search Flights
      </button>
    </div>
  );
}