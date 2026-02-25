// src/components/PopularRoutes.jsx
import React from "react";

export default function PopularRoutes() {
  const routes = [
    { from: "Lagos", to: "London", price: "₦250,000" },
    { from: "Abuja", to: "Dubai", price: "₦180,000" },
    { from: "Lagos", to: "New York", price: "₦450,000" },
    { from: "Abuja", to: "Johannesburg", price: "₦220,000" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Popular Routes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center"
          >
            <p className="font-semibold">{route.from} → {route.to}</p>
            <p className="text-orange-600 font-bold">{route.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}