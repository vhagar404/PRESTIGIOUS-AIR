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
    <>
      <Navbar />
      <main className="p-6 md:p-10">
        <FlightSearch />
        <Promotions />
        <PopularRoutes />
        <FlightResults />
        <PassengerDetails />
        <Extras />
        <Payment />
        <ReviewConfirmation />
      </main>
      <Footer />
    </>
  );
}

export default App;
