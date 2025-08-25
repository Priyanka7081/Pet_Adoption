import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-200 text-black text-2xl py-8 mt-12">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black">🐾 DogShop</h2>
          <p className="mt-3 text-sm font-bold">
            Your trusted place to adopt, shop, and love dogs.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-black">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 font-bold">Home</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">About</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">Services</a></li>
            <li><a href="#" className="hover:text-green-400 font-bold">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-black">Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-black font-bold">FAQs</a></li>
            <li><a href="#" className="text-black font-bold">Help Center</a></li>
            <li><a href="#" className="text-black font-bold">Privacy Policy</a></li>
            <li><a href="#" className="text-black font-bold">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-black">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-green-400">🐦</a>
            <a href="#" className="hover:text-green-400">📘</a>
            <a href="#" className="hover:text-green-400">📸</a>
            <a href="#" className="hover:text-green-400">▶️</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm font-bold text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} DogShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
