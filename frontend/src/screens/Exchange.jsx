import React, { useState } from 'react';

const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KES');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const dummyRates = {
    USD: 142.53,
    EUR: 154.78,
    GBP: 177.45,
  };

  const handleConvert = () => {
    const rate = dummyRates[fromCurrency] || 1;
    const conversionRate = (dummyRates[toCurrency] || 1) / rate;
    setConvertedAmount((amount * conversionRate).toFixed(2));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Currency Exchange</h2>
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">From</label>
            <select
              className="border p-2 rounded w-full"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">To</label>
            <select
              className="border p-2 rounded w-full"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="KES">KES</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={handleConvert}
          className="primary-btn w-full"
        >
          Convert
        </button>

        {convertedAmount && (
          <div className="mt-4 text-center">
            <span className="text-xl font-bold text-green-600">
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exchange;
