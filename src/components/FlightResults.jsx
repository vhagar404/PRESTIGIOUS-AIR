import { FaPlane, FaSuitcase } from "react-icons/fa";

const flights = [
  { airline: "Prestigious Air", from: "Lagos", to: "London", depart: "08:00", arrive: "14:00", duration: "6h", stops: "Non-stop", price: 450 },
  { airline: "Prestigious Air", from: "Abuja", to: "Dubai", depart: "09:30", arrive: "15:30", duration: "6h", stops: "1 stop", price: 400 },
  { airline: "Prestigious Air", from: "Lagos", to: "New York", depart: "12:00", arrive: "20:00", duration: "8h", stops: "Non-stop", price: 550 },
];

export default function FlightResults({ booking, setBooking }) {
  if (!booking.from || !booking.to) return null;

  // Filter flights based on search input
  const availableFlights = flights.filter(
    (f) =>
      f.from.toLowerCase() === booking.from.toLowerCase() &&
      f.to.toLowerCase() === booking.to.toLowerCase()
  );

  function selectFlight(flight) {
    setBooking({ ...booking, flight, from: flight.from, to: flight.to });
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Available Flights</h2>

      {availableFlights.length === 0 && <p className="text-gray-500">No flights found. Try another route.</p>}

      <div className="space-y-4">
        {availableFlights.map((flight, i) => (
          <div
            key={i}
            onClick={() => selectFlight(flight)}
            className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-2xl bg-white shadow hover:shadow-lg transition cursor-pointer ${
              booking.flight?.from === flight.from && booking.flight?.to === flight.to
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
        ))}
      </div>
    </div>
  );
}