import React, { useState } from "react";
import { FiBox, FiCoffee, FiShield } from "react-icons/fi";

export default function Extras() {
  const extrasList = [
    { name: "Extra Baggage", icon: <FiBox /> },
    { name: "Meal", icon: <FiCoffee /> },
    { name: "Travel Insurance", icon: <FiShield /> },
  ];

  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (name) => {
    if (selectedExtras.includes(name)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== name));
    } else {
      setSelectedExtras([...selectedExtras, name]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Extras / Add-ons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {extrasList.map((extra, idx) => (
          <div
            key={idx}
            onClick={() => toggleExtra(extra.name)}
            className={`border rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition ${
              selectedExtras.includes(extra.name)
                ? "border-orange-600 bg-orange-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="text-3xl mb-2">{extra.icon}</div>
            <p className="font-semibold">{extra.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}