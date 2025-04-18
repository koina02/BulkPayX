import { formatCurrency, convertCurrency, getConvertedAmount, getExchangeRate } from './currencyUtils';

// Mock exchange rates for testing
const exchangeRates = {
  USD: 1,
  KES: 142.53,
  EUR: 154.78,
  GBP: 177.45
};

// Test 1: Format Currency
const formattedUSD = formatCurrency(100, 'USD');
console.log('Formatted USD:', formattedUSD);  // Expected output: $100.00 (or other currency format)

// Test 2: Convert Currency
const convertedAmount = convertCurrency(100, 142.53); // 100 USD to KES
console.log('Converted Amount (USD to KES):', convertedAmount); // Expected output: 14253.00

// Test 3: Get Converted Amount from USD to EUR
const convertedToEUR = getConvertedAmount(100, exchangeRates.USD, exchangeRates.EUR);
console.log('Converted Amount (USD to EUR):', convertedToEUR);  // Expected output: (100 * 154.78) / 142.53

// Test 4: Get Exchange Rate between USD and KES
const usdToKesRate = getExchangeRate('USD', 'KES', exchangeRates);
console.log('Exchange Rate (USD to KES):', usdToKesRate);  // Expected output: 142.53
