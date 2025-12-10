import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalculatorIcon, 
  CurrencyRupeeIcon, 
  ChartBarIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      title: "Net Worth Calculator",
      description: "Track all your assets and liabilities in Indian Rupees to calculate your current net worth.",
      icon: CurrencyRupeeIcon,
      link: "/net-worth",
      color: "from-blue-500 to-cyan-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "SIP Calculator",
      description: "Plan your Systematic Investment Plan with detailed projections and growth analysis.",
      icon: CalculatorIcon,
      link: "/sip-calculator",
      color: "from-green-500 to-emerald-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Financial Insights",
      description: "Get personalized tips and insights to improve your financial health and wealth.",
      icon: ChartBarIcon,
      link: "#",
      color: "from-purple-500 to-violet-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Future: Notes & Tasks",
      description: "Coming soon! A notepad feature to track your financial goals and daily routines.",
      icon: DocumentTextIcon,
      link: "#",
      color: "from-amber-500 to-orange-500",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master Your Finances in
              <span className="block text-yellow-300">Indian Rupees</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Take control of your financial future with our comprehensive suite of calculators 
              designed specifically for Indian investors and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/net-worth"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Calculate Net Worth
              </Link>
              <Link
                to="/sip-calculator"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-900 bg-white hover:bg-gray-100 rounded-lg transition duration-300"
              >
                Start SIP Planning
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Financial Tools
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to manage your finances effectively, built with Indian users in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-10 mb-4`}>
                    <Icon className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-white font-medium ${feature.buttonColor} transition duration-300`}
                  >
                    {feature.title.includes("Future") ? "Coming Soon" : "Get Started"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹ 0</div>
              <div className="text-gray-700">Start Your Financial Journey</div>
              <div className="text-sm text-gray-500">Your net worth begins here</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12-15%</div>
              <div className="text-gray-700">Average SIP Returns</div>
              <div className="text-sm text-gray-500">Historical equity market returns in India</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700">Financial Clarity</div>
              <div className="text-sm text-gray-500">Know exactly where you stand financially</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Input Your Details</h3>
              <p className="text-gray-600">
                Enter your assets, liabilities, or investment details in Indian Rupees
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Instant Calculations</h3>
              <p className="text-gray-600">
                Our calculators provide real-time results and projections
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Your Future</h3>
              <p className="text-gray-600">
                Make informed financial decisions based on accurate calculations
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Start your journey to financial freedom today with our easy-to-use calculators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/net-worth"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-900 bg-white hover:bg-gray-100 rounded-lg transition duration-300"
            >
              Calculate Net Worth Now
            </Link>
            <Link
              to="/sip-calculator"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
            >
              Start SIP Planning
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500">
          <p className="mb-2">Made specifically for Indian users • All calculations in Indian Rupees (₹)</p>
          <p className="text-sm">Future updates will include note-taking features, investment tracking, and more!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;