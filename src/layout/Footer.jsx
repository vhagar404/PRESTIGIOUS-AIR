import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-10 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2 text-white">Company</h3>
          <ul className="space-y-1 text-white">
            <li>About</li>
            <li>Careers</li>
            <li>Fleet</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-white">Help</h3>
          <ul className="space-y-1 text-white">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Baggage</li>
            <li>Check-in</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-white">Legal</h3>
          <ul className="space-y-1 text-white">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-white">Connect</h3>
          <div className="flex items-center space-x-4 text-white mb-2">
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
          </div>
          <p>Download App (iOS / Android)</p>
        </div>
      </div>

      <div className="mt-6 text-center text-white text-sm">
        © 2026 Prestigious Air. All rights reserved.
      </div>
    </footer>
  );
}