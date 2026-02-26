import { useState, useEffect } from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const methods = [
  { name: "Visa", icon: <FaCcVisa size={32} /> },
  { name: "Mastercard", icon: <FaCcMastercard size={32} /> },
  { name: "PayPal", icon: <FaPaypal size={32} /> },
];

export default function Payment({ booking, setBooking }) {
  const [selected, setSelected] = useState(booking.payment || "");
  const [details, setDetails] = useState(booking.paymentDetails || {});

  // Update booking when method or details change
  useEffect(() => {
    setBooking({ ...booking, payment: selected, paymentDetails: details });
  }, [selected, details]);

  function handleDetailChange(field, value) {
    setDetails({ ...details, [field]: value });
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-blue-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Payment Options</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {methods.map((method, i) => (
          <label
            key={i}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl shadow hover:shadow-lg cursor-pointer flex-1 transition
              ${selected === method.name ? "border-2 border-orange-600" : ""}
            `}
          >
            {method.icon}
            <span className="font-medium">{method.name}</span>
            <input
              type="radio"
              name="payment"
              className="mt-2 w-5 h-5 accent-orange-600"
              checked={selected === method.name}
              onChange={() => setSelected(method.name)}
            />
          </label>
        ))}
      </div>

      {/* Dynamic Payment Form */}
      {selected && (
        <div className="bg-white p-4 rounded-2xl shadow space-y-4">
          {selected === "PayPal" ? (
            <div className="flex flex-col gap-2">
              <label className="font-medium">PayPal Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="border rounded-lg px-2 py-2 outline-none"
                value={details.email || ""}
                onChange={(e) => handleDetailChange("email", e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border rounded-lg px-2 py-2 outline-none"
                  value={details.name || ""}
                  onChange={(e) => handleDetailChange("name", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="border rounded-lg px-2 py-2 outline-none"
                  value={details.cardNumber || ""}
                  onChange={(e) => handleDetailChange("cardNumber", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border rounded-lg px-2 py-2 outline-none"
                    value={details.expiry || ""}
                    onChange={(e) => handleDetailChange("expiry", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="border rounded-lg px-2 py-2 outline-none"
                    value={details.cvv || ""}
                    onChange={(e) => handleDetailChange("cvv", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}