// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-blue-700 text-white w-64 h-screen hidden md:flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-200">Dashboard</a>
        <a href="#" className="hover:text-blue-200">Bulk Payments</a>
        <a href="#" className="hover:text-blue-200">Currency Exchange</a>
        <a href="#" className="hover:text-blue-200">Reports</a>
        <a href="#" className="hover:text-blue-200">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
