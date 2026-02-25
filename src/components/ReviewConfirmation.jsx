import React, { useState } from "react";
import { FiTag, FiCheckCircle, FiPrinter, FiShare2 } from "react-icons/fi";

export default function ReviewConfirmation() {
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);

  // Example flight + extras data (normally from state or API)
  const flight = { from: "Lagos", to: "London", price: 250000 };
  const extras = [
    { name: "Extra Baggage", price: 20000 },
    { name: "Meal", price: 5000 },
  ];

  const subtotal = flight.price + extras.reduce((sum, e) => sum + e.price, 0);
  const discount = appliedPromo ? 0.1 * subtotal : 0; // 10% promo
  const total = subtotal - discount;

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Review & Confirmation</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Flight & Extras Details */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Flight</h3>
            <p>{flight.from} → {flight.to}</p>
            <p className="font-bold text-orange-600">₦{flight.price.toLocaleString()}</p>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Extras</h3>
            {extras.map((e, idx) => (
              <div key={idx} className="flex justify-between mb-2">
                <p>{e.name}</p>
                <p className="text-orange-600">₦{e.price.toLocaleString()}</p>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex items-center gap-3">
            <FiTag className="text-gray-400" />
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 outline-none px-2 py-1 border border-gray-200 rounded-lg"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              disabled={appliedPromo}
            />
            <button
              className={`bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition`}
              onClick={() => setAppliedPromo(true)}
              disabled={appliedPromo || promo.trim() === ""}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Price Summary & Confirm */}
        <div className="md:w-1/3 bg-white border border-gray-200 shadow-sm rounded-2xl p-6 sticky top-6 h-fit">
          <h3 className="font-semibold mb-3">Price Summary</h3>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>₦{subtotal.toLocaleString()}</p>
          </div>
          {appliedPromo && (
            <div className="flex justify-between mb-2 text-green-600">
              <p>Promo Discount</p>
              <p>-₦{discount.toLocaleString()}</p>
            </div>
          )}
          <div className="flex justify-between font-bold text-orange-600 mb-4">
            <p>Total</p>
            <p>₦{total.toLocaleString()}</p>
          </div>

          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition mb-2">
            Confirm Booking
          </button>

          <div className="flex justify-between text-gray-500 mt-2">
            <button className="flex items-center gap-1 hover:text-gray-700 transition">
              <FiPrinter /> Print
            </button>
            <button className="flex items-center gap-1 hover:text-gray-700 transition">
              <FiShare2 /> Share
            </button>
          </div>

          {appliedPromo && (
            <div className="flex items-center gap-2 mt-4 text-green-600">
              <FiCheckCircle /> Promo Applied Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}