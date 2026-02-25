import { FaUser } from "react-icons/fa";

export default function PassengerDetails() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-purple-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Passenger Details</h2>
      <div className="space-y-4">
        {[1,2].map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
            <FaUser className="text-orange-600 text-2xl" />
            <input
              type="text"
              placeholder={`Passenger ${i} Name`}
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-200 rounded-lg outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}