import React from "react";
import { FaChartLine, FaRupeeSign } from "react-icons/fa";

const FinancialData = () => {
  const financialData = [
    { year: "2020-21", turnover: 332.58 },
    { year: "2021-22", turnover: 191.98 },
    { year: "2022-23", turnover: 204.76 },
    { year: "2023-24", turnover: 533.09 },
    { year: "2024-25", turnover: 606.42 },
  ];

  // Find the highest turnover for highlighting
  const maxTurnover = Math.max(...financialData.map(data => data.turnover));

  return (
    <section id="financial" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <FaChartLine className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            FINANCIAL DATA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-justify-better">
            With constant increase in its turnover, Ultra Build has set its pace for regular upward growth in the years to come. The proof of UB&apos;s constant commitment to progress is as below:
          </p>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 staggered-fade-in">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              ₹{financialData[financialData.length - 1].turnover}L
            </div>
            <div className="text-gray-600 dark:text-gray-400">Latest Year Turnover</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {financialData.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Financial Years</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              ₹{maxTurnover}L
            </div>
            <div className="text-gray-600 dark:text-gray-400">Highest Turnover</div>
          </div>
        </div>

        {/* Financial Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg hover-lift transition-all duration-300 fade-in">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-2xl">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Financial Year</th>
                <th className="py-4 px-6 text-left font-semibold">Annual Turnover</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {financialData.map((data, index) => {
                const isHighest = data.turnover === maxTurnover;
                
                return (
                  <tr 
                    key={index} 
                    className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      isHighest ? 'bg-indigo-50 dark:bg-indigo-900/20 font-medium' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-gray-800 dark:text-gray-200">{data.year}</td>
                    <td className="py-4 px-6 text-gray-800 dark:text-gray-200">
                      <div className="flex items-center">
                        <FaRupeeSign className="text-gray-500 dark:text-gray-400 mr-1 text-sm" />
                        <span>{data.turnover} Lakhs</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FinancialData;