import { FaPlane, FaSuitcase } from "react-icons/fa";

// Example distances (in km) for some known city pairs; unknown pairs get random distance
const distances = {
  "Lagos-London": 5100,
  "Lagos-New York": 9300,
  "Abuja-Dubai": 4800,
  "Paris-Tokyo": 9700,
  "London-Dubai": 5500,
  "New York-London": 5600,
  "Dubai-Mumbai": 2000,
  "Berlin-Paris": 1050,
  // Add more if desired
};

// Simple function to compute flight price based on distance
function computePrice(distance) {
  return Math.round(distance / 10); // $1 per 10km
}

export default function FlightResults({ booking, setBooking }) {
  if (!booking.fromCity || !booking.toCity) return null;

  const routeKey = `${booking.fromCity}-${booking.toCity}`;
  const distance =
    distances[routeKey] || Math.floor(4000 + Math.random() * 6000); // default if unknown

  const flight = {
    airline: "Prestigious Air",
    from: booking.fromCity,
    to: booking.toCity,
    depart: "08:00",
    arrive: "14:00",
    duration: `${Math.ceil(distance / 800)}h`, // avg speed ~800 km/h
    stops: distance > 6000 ? "1 stop" : "Non-stop",
    price: computePrice(distance),
  };

  function selectFlight(f) {
    setBooking({ ...booking, flight: f });
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Available Flights</h2>

      <div
        onClick={() => selectFlight(flight)}
        className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-2xl bg-white shadow hover:shadow-lg transition cursor-pointer ${
          booking.flight?.from === flight.from &&
          booking.flight?.to === flight.to
            ? "border-2 border-orange-600"
            : ""
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-700">
            <FaPlane className="text-orange-600" /> {flight.airline}
          </div>
          <div className="text-gray-600">
            {flight.from} → {flight.to} ({flight.stops})
          </div>
          <div className="text-gray-500">{flight.duration}</div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaSuitcase /> Baggage included
          </div>
        </div>
        <div className="text-orange-600 font-bold text-lg">${flight.price}</div>
      </div>
    </div>
  );
}