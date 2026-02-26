import { FaUser } from "react-icons/fa";

export default function PassengerDetails({ booking, setBooking }) {
  const travellers = booking.travellers || [];

  function handleChange(index, field, value) {
    const updated = [...travellers];
    if (!updated[index]) updated[index] = { name: "", email: "", class: "Economy" };
    updated[index][field] = value;
    setBooking({ ...booking, travellers: updated });
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-purple-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Passenger Details</h2>

      <div className="space-y-4">
        {travellers.map((trav, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-2xl shadow"
          >
            <FaUser className="text-orange-600 text-2xl" />

            <input
              type="text"
              placeholder={`Passenger ${i + 1} Name`}
              value={trav.name || ""}
              onChange={(e) => handleChange(i, "name", e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={trav.email || ""}
              onChange={(e) => handleChange(i, "email", e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />

            <select
              value={trav.class || "Economy"}
              onChange={(e) => handleChange(i, "class", e.target.value)}
              className="w-full md:w-auto border rounded-lg px-2 py-1"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}