import Navbar from "./layout/Navbar";
import FlightSearch from "./components/FlightSearch";
import Promotions from "./components/Promotions";
import PopularRoutes from "./components/PopularRoutes";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-6 md:p-10">
        <FlightSearch />
        <Promotions />
        <PopularRoutes />
      </main>
    </>
  );
}

export default App;
