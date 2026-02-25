// src/components/Promotions.jsx
import React from "react";

export default function Promotions() {
  const promos = [
    { title: "20% off Lagos → London" },
    { title: "15% off Abuja → Dubai" },
    { title: "25% off Lagos → New York" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Latest Promotions</h2>
      <div className="flex gap-4">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className="min-w-[250px] bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex-shrink-0"
          >
            <p className="font-semibold">{promo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}