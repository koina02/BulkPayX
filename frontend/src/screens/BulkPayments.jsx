import React, { useState } from 'react';

const BulkPayments = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState([{ name: '', phone: '', amount: '' }]);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (index, e) => {
    const updated = [...formData];
    updated[index][e.target.name] = e.target.value;
    setFormData(updated);
  };

  const addRow = () => {
    setFormData([...formData, { name: '', phone: '', amount: '' }]);
  };

  const handleSubmit = () => {
    // Logic to process file or formData
    alert('Payments submitted ✅');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Bulk Payments</h2>

      {/* Upload CSV */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <label className="block mb-2 font-medium">Upload CSV File</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* OR Manual Entry */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Manual Entry</h3>
        {formData.map((entry, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-3">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={entry.name}
              onChange={(e) => handleInputChange(index, e)}
              className="border p-2 rounded"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={entry.phone}
              onChange={(e) => handleInputChange(index, e)}
              className="border p-2 rounded"
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              value={entry.amount}
              onChange={(e) => handleInputChange(index, e)}
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button
          onClick={addRow}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          + Add Another Row
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="primary-btn"
        >
          Submit Payments
        </button>
      </div>
    </div>
  );
};

export default BulkPayments;
