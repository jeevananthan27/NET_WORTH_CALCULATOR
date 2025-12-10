import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import NetWorth from './pages/NetWorth';
import SIPCalculatorPage from './pages/SIPCalculatorPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/sip-calculator" element={<SIPCalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;