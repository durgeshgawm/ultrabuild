import React from "react";

const Clintimage = () => {
  const financialData = [
    { year: "2014-15", turnover: 198 },
    { year: "2015-16", turnover: 442 },
    { year: "2016-17", turnover: 447 },
    { year: "2017-18", turnover: 457 },
    { year: "2018-19", turnover: 389 },
    { year: "2019-20", turnover: 525 },
    { year: "2020-21", turnover: 332.58 },
    { year: "2021-22", turnover: 191.98 },
    { year: "2022-23", turnover: 204.76 },
    { year: "2023-24", turnover: 533.09 },
    { year: "2024-25", turnover: 606.42 },
  ];

  return (
    <section id="financial" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            FINANCIAL DATA
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            With constant increase in its turnover, Ultra Build has set its pace for regular upward growth in the years to come. The proof of UB’s constant commitment to progress is as below:
          </p>
        </div>

        {/* Financial Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Financial Year</th>
                <th className="py-3 px-6 text-left">Annual Turnover (in Lakhs)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-800 dark:text-gray-300">
              {financialData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-6">{data.year}</td>
                  <td className="py-3 px-6">{data.turnover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Clintimage;
