import { useState } from "react";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import FlightSearch from "./components/FlightSearch";
import Promotions from "./components/Promotions";
import PopularRoutes from "./components/PopularRoutes";
import FlightResults from "./components/FlightResults";
import PassengerDetails from "./components/PassengerDetails";
import Extras from "./components/Extras";
import Payment from "./components/Payment";
import ReviewConfirmation from "./components/ReviewConfirmation";

function App() {
  const [booking, setBooking] = useState({
    from: "",
    to: "",
    departure: "",
    arrival: "",
    flight: null, // selected flight object
    travellers: [], // array of passenger objects {name, email, class}
    extras: [], // selected extras
    payment: "", // payment method
    paymentDetails: {}, // card or PayPal info
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 text-gray-800">
      <Navbar />

      <main className="p-6 md:p-10 space-y-10">
        {/* Hero / Search */}
        <FlightSearch booking={booking} setBooking={setBooking} />

        {/* Promotions and Popular Routes */}
        <Promotions />
        <PopularRoutes />

        {/* Flight Results */}
        <FlightResults booking={booking} setBooking={setBooking} />

        {/* Passenger Details */}
        <PassengerDetails booking={booking} setBooking={setBooking} />

        {/* Extras */}
        <Extras booking={booking} setBooking={setBooking} />

        {/* Payment */}
        <Payment booking={booking} setBooking={setBooking} />

        {/* Review & Confirmation */}
        <ReviewConfirmation booking={booking} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
