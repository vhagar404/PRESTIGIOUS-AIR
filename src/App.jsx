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
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 text-gray-800">
      <Navbar />
      <main className="p-6 md:p-10 space-y-10">
        {/* Hero / Search */}
        <FlightSearch />

        {/* Promotions and Popular Routes */}
        <Promotions />
        <PopularRoutes />

        {/* Flight booking flow */}
        <FlightResults />
        <PassengerDetails />
        <Extras />
        <Payment />
        <ReviewConfirmation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
