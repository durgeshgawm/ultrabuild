import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const FinancialData = () => {
  const financialData = [
    {
      id: 1,
      year: "2023",
      revenue: "₹1,250 Cr",
      growth: "+15%",
      projects: "125",
      profit: "₹185 Cr",
      trend: "up"
    },
    {
      id: 2,
      year: "2022",
      revenue: "₹1,085 Cr",
      growth: "+12%",
      projects: "110",
      profit: "₹162 Cr",
      trend: "up"
    },
    {
      id: 3,
      year: "2021",
      revenue: "₹965 Cr",
      growth: "+8%",
      projects: "95",
      profit: "₹142 Cr",
      trend: "up"
    },
    {
      id: 4,
      year: "2020",
      revenue: "₹895 Cr",
      growth: "+5%",
      projects: "87",
      profit: "₹128 Cr",
      trend: "up"
    }
  ];

  const keyMetrics = [
    {
      id: 1,
      title: "Market Cap",
      value: "₹2,850 Cr",
      change: "+18%",
      icon: "📈"
    },
    {
      id: 2,
      title: "EPS",
      value: "₹12.50",
      change: "+15%",
      icon: "💰"
    },
    {
      id: 3,
      title: "Dividend Yield",
      value: "2.25%",
      change: "+0.25%",
      icon: "📊"
    },
    {
      id: 4,
      title: "Debt/Equity",
      value: "0.45",
      change: "-0.05",
      icon: "💼"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Overview
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strong financial performance reflecting our commitment to sustainable growth and value creation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric) => (
            <div 
              key={metric.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                </div>
                <div className="text-2xl">{metric.icon}</div>
              </div>
              <div className="flex items-center mt-3">
                {metric.change.startsWith('+') || metric.change.startsWith('-') ? (
                  <>
                    {metric.change.startsWith('+') ? (
                      <TrendingUp className="text-green-500 mr-1" size={16} />
                    ) : (
                      <TrendingDown className="text-red-500 mr-1" size={16} />
                    )}
                    <span className={metric.change.startsWith('+') ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
                      {metric.change}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-500 text-sm">{metric.change}</span>
                )}
                <span className="text-gray-500 text-sm ml-1">vs last year</span>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Data Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 mb-16">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Growth</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Profit</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {financialData.map((data) => (
                  <tr key={data.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{data.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{data.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="flex items-center text-green-600 dark:text-green-400">
                        <TrendingUp size={16} className="mr-1" />
                        {data.growth}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{data.projects}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{data.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Highlights */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Financial Highlights
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Consistent revenue growth for 8 consecutive years</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Strong balance sheet with low debt-to-equity ratio</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Dividend payments increased by 12% annually</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Investment in sustainable technologies and practices</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">Investor Information</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-indigo-100 text-sm">Stock Symbol</p>
                    <p className="text-xl font-bold">ULTRABUILD</p>
                  </div>
                  <div>
                    <p className="text-indigo-100 text-sm">Exchange</p>
                    <p className="text-xl font-bold">NSE/BSE</p>
                  </div>
                  <div>
                    <p className="text-indigo-100 text-sm">Next Earnings Report</p>
                    <p className="text-xl font-bold">March 15, 2024</p>
                  </div>
                </div>
                <button className="mt-8 w-full bg-white text-indigo-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Download Annual Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialData;