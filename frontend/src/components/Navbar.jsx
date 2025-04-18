// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">BulkPayX</h1>
      <div className="flex gap-4 items-center">
        <button className="text-sm text-gray-600 hover:text-blue-700">Dashboard</button>
        <button className="text-sm text-gray-600 hover:text-blue-700">Payments</button>
        <button className="text-sm text-gray-600 hover:text-blue-700">Exchange</button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
