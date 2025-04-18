import axios from 'axios';

// Base URL for the API - replace this with your actual API endpoint
const API_URL = 'https://your-api-url.com/api';

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // This will usually contain the user data and/or a token
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to make bulk payments
export const makeBulkPayments = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/bulk-payments`, paymentData);
    return response.data; // Payment response (could be success/failure or transaction details)
  } catch (error) {
    console.error('Bulk payment error:', error);
    throw error;
  }
};

// Function to get exchange rates (if applicable)
export const getExchangeRates = async () => {
  try {
    const response = await axios.get(`${API_URL}/exchange-rates`);
    return response.data;
  } catch (error) {
    console.error('Exchange rate fetch error:', error);
    throw error;
  }
};
