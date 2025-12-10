import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">💰</span>
                <span className="ml-2 text-xl font-bold text-gray-800">Indian Finance Calculator</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/net-worth"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/net-worth'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Net Worth Calculator
              </Link>
              <Link
                to="/sip-calculator"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/sip-calculator'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                SIP Calculator
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              ₹ INR
            </span>
            <button className="ml-4 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Future: Add Notes
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;