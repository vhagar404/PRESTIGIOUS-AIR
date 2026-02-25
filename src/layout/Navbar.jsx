export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          Prestigious Air
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li className="cursor-pointer">Book Flights</li>
          <li className="cursor-pointer">My Trips</li>
          <li className="cursor-pointer">Check-in</li>
          <li className="cursor-pointer">Flight Status</li>
          <li className="cursor-pointer">Destinations</li>
          <li className="cursor-pointer">Deals</li>
          <li className="cursor-pointer">Help</li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <select className="border rounded-lg px-2 py-1 text-sm">
            <option>EN</option>
          </select>

          <select className="border rounded-lg px-2 py-1 text-sm">
            <option>NGN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            👤
          </div>
        </div>

      </nav>
    </header>
  );
}