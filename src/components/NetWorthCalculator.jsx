import React, { useState, useEffect } from 'react';

const NetWorthCalculator = () => {
  const [assets, setAssets] = useState({
    // Personal Assets
    home: 0,
    cars: 0,
    artCollectables: 0,
    furnishings: 0,
    jewelry: 0,
    electronics: 0,
    otherPersonal: 0,
    
    // Cash & Cash Equivalents
    checking: 0,
    savings: 0,
    certificatesOfDeposit: 0,
    lifeInsuranceCashValue: 0,
    moneyMarketAccount: 0,
    otherCash: 0,
    
    // Investments
    mutualFunds: 0,
    stocks: 0,
    bonds: 0,
    treasuryBills: 0,
    pensionValueToday: 0,
    taxDeferredAccounts: 0,
    otherInvestments: 0,
  });

  const [liabilities, setLiabilities] = useState({
    // Loan Balances
    outstandingMortgageLoan: 0,
    homeEquityLoanBalance: 0,
    carLoans: 0,
    studentLoans: 0,
    loansAgainst401k: 0,
    otherLoans: 0,
    
    // Other Outstanding Debt
    creditCardBalance: 0,
    otherDebt: 0,
  });

  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [netWorth, setNetWorth] = useState(0);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const calculateTotals = () => {
    // Calculate total assets
    const assetsTotal = Object.values(assets).reduce((sum, val) => sum + parseFloat(val || 0), 0);
    
    // Calculate total liabilities
    const liabilitiesTotal = Object.values(liabilities).reduce((sum, val) => sum + parseFloat(val || 0), 0);
    
    setTotalAssets(assetsTotal);
    setTotalLiabilities(liabilitiesTotal);
    setNetWorth(assetsTotal - liabilitiesTotal);
  };

  useEffect(() => {
    calculateTotals();
  }, [assets, liabilities]);

  const handleAssetChange = (field, value) => {
    const numValue = parseFloat(value) || 0;
    setAssets(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const handleLiabilityChange = (field, value) => {
    const numValue = parseFloat(value) || 0;
    setLiabilities(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const resetCalculator = () => {
    setAssets({
      home: 0,
      cars: 0,
      artCollectables: 0,
      furnishings: 0,
      jewelry: 0,
      electronics: 0,
      otherPersonal: 0,
      checking: 0,
      savings: 0,
      certificatesOfDeposit: 0,
      lifeInsuranceCashValue: 0,
      moneyMarketAccount: 0,
      otherCash: 0,
      mutualFunds: 0,
      stocks: 0,
      bonds: 0,
      treasuryBills: 0,
      pensionValueToday: 0,
      taxDeferredAccounts: 0,
      otherInvestments: 0,
    });
    setLiabilities({
      outstandingMortgageLoan: 0,
      homeEquityLoanBalance: 0,
      carLoans: 0,
      studentLoans: 0,
      loansAgainst401k: 0,
      otherLoans: 0,
      creditCardBalance: 0,
      otherDebt: 0,
    });
  };

  const assetCategories = [
    {
      title: "Personal Assets",
      fields: [
        { id: 'home', label: 'Home', placeholder: '250000' },
        { id: 'cars', label: 'Cars', placeholder: '20000' },
        { id: 'artCollectables', label: 'Art and Collectables', placeholder: '2000' },
        { id: 'furnishings', label: 'Furnishings', placeholder: '25000' },
        { id: 'jewelry', label: 'Jewelry', placeholder: '10000' },
        { id: 'electronics', label: 'Electronics', placeholder: '3000' },
        { id: 'otherPersonal', label: 'Other Personal Assets', placeholder: '5000' },
      ]
    },
    {
      title: "Cash & Cash Equivalents",
      fields: [
        { id: 'checking', label: 'Checking Account', placeholder: '2500' },
        { id: 'savings', label: 'Savings Account', placeholder: '10000' },
        { id: 'certificatesOfDeposit', label: 'Certificates of Deposit', placeholder: '25000' },
        { id: 'lifeInsuranceCashValue', label: 'Life Insurance Cash Value', placeholder: '20000' },
        { id: 'moneyMarketAccount', label: 'Money Market Account', placeholder: '0' },
        { id: 'otherCash', label: 'Other Cash Assets', placeholder: '0' },
      ]
    },
    {
      title: "Investments",
      fields: [
        { id: 'mutualFunds', label: 'Mutual Funds', placeholder: '25000' },
        { id: 'stocks', label: 'Stocks', placeholder: '20000' },
        { id: 'bonds', label: 'Bonds', placeholder: '25000' },
        { id: 'treasuryBills', label: 'Treasury Bills', placeholder: '15000' },
        { id: 'pensionValueToday', label: 'Pension Value Today', placeholder: '0' },
        { id: 'taxDeferredAccounts', label: 'Tax-Deferred Accounts', placeholder: '0' },
        { id: 'otherInvestments', label: 'Other Investments', placeholder: '5000' },
      ]
    }
  ];

  const liabilityCategories = [
    {
      title: "Loan Balances",
      fields: [
        { id: 'outstandingMortgageLoan', label: 'Outstanding Mortgage Loan', placeholder: '150000' },
        { id: 'homeEquityLoanBalance', label: 'Home Equity Loan Balance', placeholder: '0' },
        { id: 'carLoans', label: 'Car Loans', placeholder: '15000' },
        { id: 'studentLoans', label: 'Student Loans', placeholder: '30000' },
        { id: 'loansAgainst401k', label: 'Loans against 401k Balance', placeholder: '0' },
        { id: 'otherLoans', label: 'Other Loans', placeholder: '0' },
      ]
    },
    {
      title: "Other Outstanding Debt",
      fields: [
        { id: 'creditCardBalance', label: 'Credit Card Balance', placeholder: '5000' },
        { id: 'otherDebt', label: 'Other Debt', placeholder: '0' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Net Worth Calculator</h1>
        <p className="text-gray-600">Track your financial health in Indian Rupees (₹)</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Assets</h3>
          <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalAssets)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Liabilities</h3>
          <p className="text-3xl font-bold text-red-600">{formatCurrency(totalLiabilities)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Net Worth</h3>
          <p className={`text-3xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(netWorth)}
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={resetCalculator}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Reset All Values
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Assets Column */}
        <div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-blue-800">Assets (What You Own)</h2>
            </div>
            <div className="p-6">
              {assetCategories.map((category, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.fields.map((field) => (
                      <div key={field.id} className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium w-2/5">
                          {field.label}
                        </label>
                        <div className="relative w-3/5">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            ₹
                          </span>
                          <input
                            type="number"
                            value={assets[field.id] || ''}
                            onChange={(e) => handleAssetChange(field.id, e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 currency-input"
                            placeholder={field.placeholder}
                            min="0"
                            step="1000"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Liabilities Column */}
        <div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-50 px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-red-800">Liabilities (What You Owe)</h2>
            </div>
            <div className="p-6">
              {liabilityCategories.map((category, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.fields.map((field) => (
                      <div key={field.id} className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium w-2/5">
                          {field.label}
                        </label>
                        <div className="relative w-3/5">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            ₹
                          </span>
                          <input
                            type="number"
                            value={liabilities[field.id] || ''}
                            onChange={(e) => handleLiabilityChange(field.id, e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 currency-input"
                            placeholder={field.placeholder}
                            min="0"
                            step="1000"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Financial Tips */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border border-green-200">
        <h3 className="text-lg font-bold text-gray-800 mb-3">💰 Financial Health Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Aim for a positive net worth by increasing assets and reducing liabilities
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Emergency fund should be 3-6 months of expenses in cash/savings
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Keep debt-to-asset ratio below 50% for good financial health
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NetWorthCalculator;