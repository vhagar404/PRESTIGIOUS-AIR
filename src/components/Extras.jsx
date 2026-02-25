import { FaBaggageClaim, FaUtensils, FaCouch, FaShieldAlt } from "react-icons/fa";

const extras = [
  { name: "Extra Baggage", icon: <FaBaggageClaim />, price: "$50" },
  { name: "Meal", icon: <FaUtensils />, price: "$20" },
  { name: "Lounge Access", icon: <FaCouch />, price: "$30" },
  { name: "Travel Insurance", icon: <FaShieldAlt />, price: "$15" },
];

export default function Extras() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-green-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Add-ons & Extras</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {extras.map((extra, i) => (
          <label
            key={i}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer"
          >
            <div className="text-orange-600 text-3xl">{extra.icon}</div>
            <div className="font-medium">{extra.name}</div>
            <div className="text-gray-500">{extra.price}</div>
            <input type="checkbox" className="mt-2 w-5 h-5 accent-orange-600" />
          </label>
        ))}
      </div>
    </div>
  );
}