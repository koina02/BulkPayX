// Utility function to format currency values
export const formatCurrency = (value, currency = 'KES') => {
    // You can expand this for different currencies or use libraries like `Intl.NumberFormat`
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };
  
  // Utility function to convert currency from one to another
  export const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2); // Returns the converted amount
  };
  
  // Example of currency conversion using a dynamic exchange rate
  export const getConvertedAmount = (amount, fromRate, toRate) => {
    // Calculate the conversion based on the exchange rates
    const convertedAmount = (amount * toRate) / fromRate;
    return convertedAmount.toFixed(2);
  };
  
  // Example of getting the exchange rate from one currency to another (using stored rates)
  export const getExchangeRate = (currency1, currency2, exchangeRates) => {
    // `exchangeRates` would be an object like { "USD": 1, "KES": 142.53, "EUR": 154.78, etc. }
    if (exchangeRates[currency1] && exchangeRates[currency2]) {
      return exchangeRates[currency2] / exchangeRates[currency1];
    } else {
      console.error('Invalid currencies or rates missing.');
      return null;
    }
  };
  