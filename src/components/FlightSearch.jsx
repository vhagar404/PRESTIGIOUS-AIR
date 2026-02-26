import { useState } from "react";
import { FiSend, FiMapPin, FiCalendar } from "react-icons/fi";

// Countries and cities (expandable)
const countries = [
  { name: "Nigeria", cities: ["Lagos", "Abuja", "Port Harcourt"] },
  { name: "United States", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "United Kingdom", cities: ["London", "Manchester", "Birmingham"] },
  { name: "UAE", cities: ["Dubai", "Abu Dhabi", "Sharjah"] },
  { name: "India", cities: ["Mumbai", "Delhi", "Bangalore"] },
  { name: "Germany", cities: ["Berlin", "Munich", "Frankfurt"] },
  // Add more countries/cities as needed
];

export default function FlightSearch({ booking, setBooking }) {
  const [tripType, setTripType] = useState("round-trip");
  const [travellersCount, setTravellersCount] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  function handleSearch() {
    // Initialize travellers array
    const travellers = Array.from({ length: travellersCount }, (_, i) => ({
      name: "",
      email: "",
      class: travelClass,
    }));

    setBooking({
      ...booking,
      travellers,
      class: travelClass,
      // From/To country & city already stored in booking
    });

    // FlightResults component will now generate dynamic flight
  }

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-6 mt-10">
      {/* Trip Type Tabs */}
      <div className="flex space-x-4 mb-4">
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

      {/* Country & City Selection */}
      <div className="grid md:grid-cols-4 gap-4 mb-4">
        {/* From Country */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">From Country</label>
          <select
            value={booking.fromCountry || ""}
            onChange={(e) =>
              setBooking({
                ...booking,
                fromCountry: e.target.value,
                fromCity: "",
              })
            }
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <label className="text-sm font-medium mb-1 mt-2">From City</label>
          <select
            value={booking.fromCity || ""}
            onChange={(e) =>
              setBooking({ ...booking, fromCity: e.target.value })
            }
            disabled={!booking.fromCountry}
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            <option value="">Select City</option>
            {countries
              .find((c) => c.name === booking.fromCountry)
              ?.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        {/* To Country */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">To Country</label>
          <select
            value={booking.toCountry || ""}
            onChange={(e) =>
              setBooking({
                ...booking,
                toCountry: e.target.value,
                toCity: "",
              })
            }
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <label className="text-sm font-medium mb-1 mt-2">To City</label>
          <select
            value={booking.toCity || ""}
            onChange={(e) =>
              setBooking({ ...booking, toCity: e.target.value })
            }
            disabled={!booking.toCountry}
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            <option value="">Select City</option>
            {countries
              .find((c) => c.name === booking.toCountry)
              ?.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        {/* Departure */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Departure</label>
          <input
            type="date"
            value={booking.departure || ""}
            onChange={(e) =>
              setBooking({ ...booking, departure: e.target.value })
            }
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          />
        </div>

        {/* Return */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Return</label>
          <input
            type="date"
            value={booking.arrival || ""}
            onChange={(e) =>
              setBooking({ ...booking, arrival: e.target.value })
            }
            disabled={tripType === "one-way"}
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          />
        </div>
      </div>

      {/* Travellers & Class */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 border rounded-lg px-3 py-2">
        <div className="flex-1">
          <label className="font-medium text-gray-700 mb-1 block">Travellers</label>
          <select
            value={travellersCount}
            onChange={(e) => setTravellersCount(Number(e.target.value))}
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} {i === 0 ? "Traveller" : "Travellers"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="font-medium text-gray-700 mb-1 block">Class</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
        </div>
      </div>

      {/* Search Flights Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-orange-700 transition"
      >
        <FiSend size={20} /> Search Flights
      </button>
    </div>
  );
}