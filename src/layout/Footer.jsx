import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-700">
            <li>About</li>
            <li>Careers</li>
            <li>Fleet</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1 text-gray-700">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Baggage</li>
            <li>Check-in</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold mb-2">Connect</h3>
          <div className="flex items-center space-x-4 text-gray-700 mb-2">
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
          </div>
          <p className="text-gray-700">Download App (iOS / Android)</p>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        © 2026 Prestigious Air. All rights reserved.
      </div>
    </footer>
  );
}