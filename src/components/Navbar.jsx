// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">MyQuoteApp</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="hover:text-red-500">About Us</Link>
        <Link to="/login" className="hover:text-gray-400">Login</Link>
        <Link to="/register" className="hover:text-gray-400">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
