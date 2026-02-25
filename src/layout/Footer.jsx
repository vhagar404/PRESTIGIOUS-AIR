import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-300">
            <li>About</li>
            <li>Careers</li>
            <li>Fleet</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1 text-gray-300">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Baggage</li>
            <li>Check-in</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect</h3>
          <div className="flex gap-4 text-orange-500">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-6">
        © 2026 Prestigious Air. All rights reserved.
      </p>
    </footer>
  );
}