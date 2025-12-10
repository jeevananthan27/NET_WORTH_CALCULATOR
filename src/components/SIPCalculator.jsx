import React, { useState, useEffect } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [wealthGained, setWealthGained] = useState(0);

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const months = timePeriod * 12;
    
    // SIP Future Value Formula: FV = P × [ (1 + r)^n - 1 ] / r × (1 + r)
    const futureVal = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    
    const totalInv = monthlyInvestment * months;
    const gained = futureVal - totalInv;
    
    setFutureValue(futureVal);
    setTotalInvestment(totalInv);
    setWealthGained(gained);
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, annualReturn, timePeriod]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleMonthlyInvestmentChange = (value) => {
    const val = Math.min(Math.max(500, value), 1000000);
    setMonthlyInvestment(val);
  };

  const handleAnnualReturnChange = (value) => {
    const val = Math.min(Math.max(1, value), 30);
    setAnnualReturn(val);
  };

  const handleTimePeriodChange = (value) => {
    const val = Math.min(Math.max(1, value), 40);
    setTimePeriod(val);
  };

  const resetCalculator = () => {
    setMonthlyInvestment(5000);
    setAnnualReturn(12);
    setTimePeriod(10);
  };

  const presetValues = [
    { monthly: 5000, years: 5, return: 12 },
    { monthly: 10000, years: 10, return: 12 },
    { monthly: 20000, years: 15, return: 12 },
    { monthly: 50000, years: 20, return: 12 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SIP Investment Calculator</h1>
        <p className="text-gray-600">Calculate the future value of your Systematic Investment Plan in Indian Rupees (₹)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Investment Parameters</h2>
          
          <div className="space-y-6">
            {/* Monthly Investment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium">Monthly Investment (₹)</label>
                <span className="text-lg font-bold text-primary">{formatCurrency(monthlyInvestment)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => handleMonthlyInvestmentChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[1000, 5000, 10000, 25000, 50000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleMonthlyInvestmentChange(amount)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      monthlyInvestment === amount
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {formatCurrency(amount)}
                  </button>
                ))}
              </div>
            </div>

            {/* Expected Annual Return */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium">Expected Annual Return (%)</label>
                <span className="text-lg font-bold text-primary">{annualReturn}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={annualReturn}
                onChange={(e) => handleAnnualReturnChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[8, 10, 12, 15, 18].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handleAnnualReturnChange(rate)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      annualReturn === rate
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>

            {/* Time Period */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium">Time Period (Years)</label>
                <span className="text-lg font-bold text-primary">{timePeriod} years</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={timePeriod}
                onChange={(e) => handleTimePeriodChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1 year</span>
                <span>40 years</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[5, 10, 15, 20, 30].map((years) => (
                  <button
                    key={years}
                    onClick={() => handleTimePeriodChange(years)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      timePeriod === years
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {years} years
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={resetCalculator}
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
            >
              Reset Calculator
            </button>
          </div>

          {/* Quick Presets */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Presets</h3>
            <div className="grid grid-cols-2 gap-3">
              {presetValues.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleMonthlyInvestmentChange(preset.monthly);
                    handleTimePeriodChange(preset.years);
                    handleAnnualReturnChange(preset.return);
                  }}
                  className="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:border-primary transition duration-300"
                >
                  <div className="text-sm font-medium text-gray-700">
                    {formatCurrency(preset.monthly)}/month
                  </div>
                  <div className="text-xs text-gray-500">
                    {preset.years} years • {preset.return}% return
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Investment</h3>
              <p className="text-2xl font-bold">{formatCurrency(totalInvestment)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Wealth Gained</h3>
              <p className="text-2xl font-bold">{formatCurrency(wealthGained)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Future Value</h3>
              <p className="text-2xl font-bold">{formatCurrency(futureValue)}</p>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Investment Breakdown</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Monthly Investment</span>
                <span className="font-semibold">{formatCurrency(monthlyInvestment)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Annual Rate of Return</span>
                <span className="font-semibold">{annualReturn}%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Investment Period</span>
                <span className="font-semibold">{timePeriod} years ({(timePeriod * 12).toLocaleString()} months)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Total Amount Invested</span>
                <span className="font-semibold text-blue-600">{formatCurrency(totalInvestment)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Estimated Returns</span>
                <span className="font-semibold text-green-600">{formatCurrency(wealthGained)}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <span className="text-gray-800 font-bold text-lg">Total Future Value</span>
                <span className="text-2xl font-bold text-primary">{formatCurrency(futureValue)}</span>
              </div>
            </div>
          </div>

          {/* Growth Visualization */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Growth Over Time</h2>
            <div className="space-y-4">
              {[5, 10, 15, 20].map((year) => {
                if (year > timePeriod) return null;
                const months = year * 12;
                const monthlyRate = annualReturn / 100 / 12;
                const futureVal = monthlyInvestment * 
                  ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
                  (1 + monthlyRate);
                const totalInv = monthlyInvestment * months;
                const percentage = Math.round((futureVal - totalInv) / totalInv * 100);
                
                return (
                  <div key={year} className="flex items-center">
                    <div className="w-16 text-gray-600">Year {year}</div>
                    <div className="flex-1 ml-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Investment: {formatCurrency(totalInv)}</span>
                        <span className="text-sm font-semibold text-primary">
                          Future Value: {formatCurrency(futureVal)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" 
                          style={{ width: `${Math.min(percentage * 2, 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Returns: {formatCurrency(futureVal - totalInv)} ({percentage}%)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SIP Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border border-green-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">💡 SIP Investment Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-medium">Power of Compounding:</span> Your returns generate more returns over time
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-medium">Rupee Cost Averaging:</span> Buy more units when prices are low
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-medium">Disciplined Investing:</span> Regular investments build wealth consistently
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;