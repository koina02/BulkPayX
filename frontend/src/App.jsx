// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-lightBg">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
