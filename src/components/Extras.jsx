import { useState, useEffect } from "react";
import { FaSuitcaseRolling, FaUtensils, FaChair, FaShieldAlt } from "react-icons/fa";

const extrasList = [
  { name: "Extra Baggage", icon: <FaSuitcaseRolling />, price: 50 },
  { name: "Meal", icon: <FaUtensils />, price: 20 },
  { name: "Lounge Access", icon: <FaChair />, price: 30 },
  { name: "Travel Insurance", icon: <FaShieldAlt />, price: 15 },
];

export default function Extras({ booking, setBooking }) {
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Update booking when selectedExtras changes
  useEffect(() => {
    setBooking({ ...booking, extras: selectedExtras });
  }, [selectedExtras]);

  function toggleExtra(extra) {
    const exists = selectedExtras.find((e) => e.name === extra.name);
    if (exists) {
      setSelectedExtras(selectedExtras.filter((e) => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-green-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Add-ons & Extras</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {extrasList.map((extra, i) => (
          <label
            key={i}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl shadow hover:shadow-lg cursor-pointer bg-white transition
              ${selectedExtras.find((e) => e.name === extra.name) ? "border-2 border-orange-600" : ""}
            `}
          >
            <div className="text-orange-600 text-3xl">{extra.icon}</div>
            <div className="font-medium">{extra.name}</div>
            <div className="text-gray-500">${extra.price}</div>
            <input
              type="checkbox"
              className="mt-2 w-5 h-5 accent-orange-600"
              checked={!!selectedExtras.find((e) => e.name === extra.name)}
              onChange={() => toggleExtra(extra)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}