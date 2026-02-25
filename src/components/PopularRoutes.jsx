const routes = [
  { from: "Lagos", to: "London", price: "$450" },
  { from: "Abuja", to: "Dubai", price: "$400" },
  { from: "Lagos", to: "New York", price: "$550" },
];

export default function PopularRoutes() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-sky-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Popular Routes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {routes.map((route, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white shadow hover:shadow-lg transition cursor-pointer text-center"
          >
            <p className="font-bold">{route.from} → {route.to}</p>
            <p className="text-orange-600 font-semibold">{route.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}