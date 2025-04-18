// src/components/CurrencyCard.jsx
import React from 'react';

const CurrencyCard = ({ currency, rate, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <img src={icon} alt={currency} className="w-10 h-10" />
      <div>
        <h3 className="font-semibold text-lg">{currency}</h3>
        <p className="text-gray-500 text-sm">Rate: {rate}</p>
      </div>
    </div>
  );
};

export default CurrencyCard;
