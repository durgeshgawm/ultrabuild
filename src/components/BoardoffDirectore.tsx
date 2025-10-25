import React from "react";

const BoardoffDirectore = () => {
  return (
    <section
      id="boardofdirectore"
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            BOARD OF DIRECTORS
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Board of Directors Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-800 dark:text-gray-300">
              <tr>
                <td className="py-3 px-6">Shri Ajay Mehrotra</td>
                <td className="py-3 px-6">Chairman</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Atul Mehrotra</td>
                <td className="py-3 px-6">Managing Director</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Tanuj Mehrotra</td>
                <td className="py-3 px-6">Director</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Anuj Mehrotra</td>
                <td className="py-3 px-6">Executive Director</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Abhinav Seth</td>
                <td className="py-3 px-6">Executive Director</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Yash Mehrotra</td>
                <td className="py-3 px-6">Executive Director</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key Personnel */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            KEY PERSONNEL
          </h3>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-800 dark:text-gray-300">
              <tr>
                <td className="py-3 px-6">Shri Shakil Jafri</td>
                <td className="py-3 px-6">Sr. Vice President</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Satish Nigam</td>
                <td className="py-3 px-6">GM (Finance & Commercial)</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Hemant Chaturvedi</td>
                <td className="py-3 px-6">DGM (Taxation & Purchase)</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Sunil Singh</td>
                <td className="py-3 px-6">Head (Accounts)</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Santosh Giri</td>
                <td className="py-3 px-6">Sr. Manager (Contracts)</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Shri Narendra Talreja</td>
                <td className="py-3 px-6">Sr. Manager (HR & Legal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Staff Profile */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            STAFF PROFILE
          </h3>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Manager & Above</th>
                <th className="py-3 px-6 text-left">Below Manager</th>
                <th className="py-3 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-800 dark:text-gray-300">
              <tr>
                <td className="py-3 px-6">Technical</td>
                <td className="py-3 px-6">37 Nos.</td>
                <td className="py-3 px-6">225 Nos.</td>
                <td className="py-3 px-6">262 Nos.</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Commercial</td>
                <td className="py-3 px-6">21 Nos.</td>
                <td className="py-3 px-6">91 Nos.</td>
                <td className="py-3 px-6">112 Nos.</td>
              </tr>
              <tr className="font-semibold bg-gray-50 dark:bg-gray-700/40">
                <td className="py-3 px-6">Total</td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6">374 Nos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
          In addition to the above, skilled and unskilled field staff are employed on various projects as per muster rolls
          and project requirements.
        </p>
      </div>
    </section>
  );
};

export default BoardoffDirectore;
