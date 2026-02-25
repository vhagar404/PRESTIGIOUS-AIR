import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

export default function Payment() {
  const methods = [
    { name: "Visa", icon: <FaCcVisa size={32} /> },
    { name: "Mastercard", icon: <FaCcMastercard size={32} /> },
    { name: "PayPal", icon: <FaPaypal size={32} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-blue-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Payment Options</h2>
      <div className="flex gap-4">
        {methods.map((method, i) => (
          <label
            key={i}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer flex-1"
          >
            {method.icon}
            <span className="font-medium">{method.name}</span>
            <input type="radio" name="payment" className="mt-2 w-5 h-5 accent-orange-600" />
          </label>
        ))}
      </div>
    </div>
  );
}