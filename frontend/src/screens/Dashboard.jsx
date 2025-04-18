// src/screens/Dashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CurrencyCard from '../components/CurrencyCard';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CurrencyCard currency="USD" rate="KES 142.53" icon="https://flagcdn.com/us.svg" />
          <CurrencyCard currency="EUR" rate="KES 154.78" icon="https://flagcdn.com/eu.svg" />
          <CurrencyCard currency="GBP" rate="KES 177.45" icon="https://flagcdn.com/gb.svg" />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
