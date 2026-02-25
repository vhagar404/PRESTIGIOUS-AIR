export default function Promotions() {
  const promos = [
    "20% off Lagos → London",
    "Flash Sale: Abuja → Dubai",
    "Spring Special: Lagos → New York",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-orange-50 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Promotions</h2>
      <div className="flex overflow-x-auto gap-4">
        {promos.map((promo, i) => (
          <div
            key={i}
            className="flex-none bg-orange-100 text-orange-700 px-6 py-4 rounded-2xl font-medium shadow hover:bg-orange-200 transition"
          >
            {promo}
          </div>
        ))}
      </div>
    </div>
  );
}