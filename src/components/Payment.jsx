import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

export default function Payment() {
  const [method, setMethod] = useState("");

  const paymentMethods = [
    { name: "Visa", icon: <FaCcVisa size={40} /> },
    { name: "Mastercard", icon: <FaCcMastercard size={40} /> },
    { name: "PayPal", icon: <FaPaypal size={40} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Payment Options</h2>
      <div className="flex gap-4">
        {paymentMethods.map((p, idx) => (
          <div
            key={idx}
            onClick={() => setMethod(p.name)}
            className={`border rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition ${
              method === p.name
                ? "border-orange-600 bg-orange-50"
                : "border-gray-200 bg-white"
            }`}
          >
            {p.icon}
            <p className="font-semibold mt-2">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}