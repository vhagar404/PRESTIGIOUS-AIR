import { useState } from "react";
import { FiSend, FiMapPin, FiCalendar, FiUser } from "react-icons/fi";

export default function FlightSearch({ booking, setBooking }) {
  const [tripType, setTripType] = useState("round-trip");
  const [form, setForm] = useState({
    from: booking.from || "",
    to: booking.to || "",
    departure: booking.departure || "",
    arrival: booking.arrival || "",
    travellers: booking.travellers?.length || 1,
    travelClass: "Economy",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSearch() {
    // Save flight search data to booking
    setBooking({
      ...booking,
      from: form.from,
      to: form.to,
      departure: form.departure,
      arrival: form.arrival,
      travellers: Array.from({ length: form.travellers }, (_, i) => ({
        name: "",
        email: "",
        class: form.travelClass,
      })),
      flight: null, // will be set after selecting a flight from FlightResults
    });
  }

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

      {/* Inputs */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiMapPin className="mr-2 text-gray-400" />
          <input
            type="text"
            name="from"
            placeholder="From"
            className="w-full outline-none"
            value={form.from}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiMapPin className="mr-2 text-gray-400" />
          <input
            type="text"
            name="to"
            placeholder="To"
            className="w-full outline-none"
            value={form.to}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiCalendar className="mr-2 text-gray-400" />
          <input
            type="date"
            name="departure"
            className="w-full outline-none"
            value={form.departure}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FiCalendar className="mr-2 text-gray-400" />
          <input
            type="date"
            name="arrival"
            className="w-full outline-none"
            value={form.arrival}
            onChange={handleChange}
            disabled={tripType === "one-way"}
          />
        </div>
      </div>

      {/* Travellers & Class */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 border rounded-lg px-3 py-2">
        <FiUser className="text-gray-400" />
        <input
          type="number"
          name="travellers"
          min={1}
          max={10}
          className="w-full sm:w-1/2 outline-none p-2 border rounded-lg"
          value={form.travellers}
          onChange={handleChange}
        />
        <select
          name="travelClass"
          className="w-full sm:w-1/2 outline-none p-2 border rounded-lg"
          value={form.travelClass}
          onChange={handleChange}
        >
          <option>Economy</option>
          <option>Business</option>
        </select>
      </div>

      {/* Search Flights Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-orange-700 transition"
      >
        <FiSend size={20} />
        Search Flights
      </button>
    </div>
  );
}