import React from "react";
import { TrendingUp, Calendar, AlertCircle } from "lucide-react";

const FinancialData = () => {
  const financialData = [
    { year: "2020-21", turnover: 332.58 },
    { year: "2021-22", turnover: 191.98 },
    { year: "2022-23", turnover: 204.76 },
    { year: "2023-24", turnover: 533.09 },
    { year: "2024-25", turnover: 606.42 },
  ];

  const maxTurnover = Math.max(...financialData.map(data => data.turnover));

  return (
    <section id="financial" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Stability & Growth</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Financial Performance
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
            Consistent growth trajectory reflecting our commitment to operational excellence.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
              ₹{financialData[financialData.length - 1].turnover}L
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Latest Turnover</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
              5
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Reported</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
              ₹{maxTurnover}L
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Record High</span>
          </div>
        </div>

        {/* Clean Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-premium overflow-hidden border border-slate-100 dark:border-slate-800 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="py-5 px-8 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider">Financial Year</th>
                <th className="py-5 px-8 text-right text-sm font-semibold text-slate-500 uppercase tracking-wider">Turnover (INR Lakhs)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {financialData.map((row, idx) => (
                <tr key={idx} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-5 px-8 text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-accent transition-colors">
                    {row.year}
                  </td>
                  <td className="py-5 px-8 text-right">
                    <span className="inline-block font-mono text-lg text-slate-900 dark:text-white font-bold">
                      ₹ {row.turnover.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-slate-400 mr-2" />
            <span className="text-xs text-slate-500 font-medium">Audited financial statements available upon request.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialData;