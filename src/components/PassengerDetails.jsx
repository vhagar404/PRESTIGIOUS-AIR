import { FaUser } from "react-icons/fa";

export default function PassengerDetails({ booking, setBooking }) {
  if (!booking.travellers) return null;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-purple-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">
        Passenger Details
      </h2>

      <div className="space-y-4">
        {booking.travellers.map((p, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white rounded-2xl shadow"
          >
            <FaUser className="text-orange-600 text-2xl" />
            <input
              type="text"
              placeholder={`Passenger ${i + 1} Name`}
              value={p.name}
              onChange={(e) => {
                const updated = [...booking.travellers];
                updated[i].name = e.target.value;
                setBooking({ ...booking, travellers: updated });
              }}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={p.email}
              onChange={(e) => {
                const updated = [...booking.travellers];
                updated[i].email = e.target.value;
                setBooking({ ...booking, travellers: updated });
              }}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />
            <select
              value={p.class}
              onChange={(e) => {
                const updated = [...booking.travellers];
                updated[i].class = e.target.value;
                setBooking({ ...booking, travellers: updated });
              }}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}