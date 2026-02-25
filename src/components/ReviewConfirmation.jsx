export default function ReviewConfirmation() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-orange-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Review & Confirmation</h2>
      <div className="bg-white p-4 rounded-2xl shadow space-y-2">
        <p>Booking Reference: <span className="font-bold text-orange-600">PA12345678</span></p>
        <p>Flight: Lagos → London</p>
        <p>Passengers: 2 Adults</p>
        <p>Total Price: <span className="font-bold text-orange-600">$500</span></p>
        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition">
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}