export default function ReviewConfirmation({ booking }) {
  if (!booking) return null;

  // Dynamic booking reference
  const bookingRef = `PA${Math.floor(10000000 + Math.random() * 90000000)}`;

  // Determine number of travellers safely
  const numTravellers = Array.isArray(booking.travellers)
    ? booking.travellers.length
    : booking.travellers || 1;

  // Flight price (ensure it's a number)
  const flightPrice = booking.flight?.price ? Number(booking.flight.price) : 0;

  // Extras total
  const extrasPrice =
    booking.extras?.reduce((sum, e) => sum + Number(e.price || 0), 0) || 0;

  // Total = flight price × travellers + extras
  const totalPrice = flightPrice * numTravellers + extrasPrice;

  function handleConfirm() {
    if (!booking.flight) return alert("Please select a flight.");
    if (!numTravellers || numTravellers === 0)
      return alert("Please enter passenger details.");
    if (!booking.payment) return alert("Please select a payment method.");

    // Payment validation
    const method = booking.payment;
    const details = booking.paymentDetails || {};
    if (method === "PayPal") {
      if (!details.email) return alert("Enter PayPal email.");
    } else {
      if (!details.name || !details.cardNumber || !details.expiry || !details.cvv)
        return alert("Complete card details.");
    }

    alert(
      `Payment successful!\nBooking Reference: ${bookingRef}\nTotal: $${totalPrice}`
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-orange-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">
        Review & Confirmation
      </h2>

      <div className="bg-white p-4 rounded-2xl shadow space-y-4">
        <p>
          Booking Reference:{" "}
          <span className="font-bold text-orange-600">{bookingRef}</span>
        </p>

        <p>
          Flight:{" "}
          <span className="font-semibold">
            {booking.from || "—"} → {booking.to || "—"}
          </span>
        </p>

        <p>
          Departure Date: <span className="font-semibold">{booking.departure || "—"}</span>
        </p>

        <p>
          Arrival Date: <span className="font-semibold">{booking.arrival || "—"}</span>
        </p>

        {/* Travellers */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-1">Passengers:</h3>
          {Array.isArray(booking.travellers)
            ? booking.travellers.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1 p-2 bg-gray-50 rounded-lg"
                >
                  <span>
                    {t.name || `Passenger ${i + 1}`} ({t.class})
                  </span>
                  <span className="text-gray-500 text-sm">{t.email || "—"}</span>
                </div>
              ))
            : <div className="p-2 bg-gray-50 rounded-lg">{numTravellers} Passenger(s)</div>
          }
        </div>

        {/* Extras */}
        {booking.extras?.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Extras:</h3>
            <ul className="list-disc list-inside">
              {booking.extras.map((e, i) => (
                <li key={i}>
                  {e.name} (${Number(e.price).toFixed(2)})
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Payment */}
        {booking.payment && (
          <p>
            Payment Method: <span className="font-semibold">{booking.payment}</span>
          </p>
        )}

        {/* Total Price */}
        <p className="mt-2 font-semibold">
          Total Price:{" "}
          <span className="font-bold text-orange-600">${totalPrice}</span>
        </p>

        {/* Confirm & Pay */}
        <button
          onClick={handleConfirm}
          className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}