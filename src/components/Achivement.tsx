import React from "react";
import { FaPhone, FaEnvelope, FaUsers } from "react-icons/fa";

const Achivement = () => {
  return (
    <section id="achievement" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            COMPANY PROFILE
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be a respectable firm delivering beyond expectation always.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To procure projects at competitive pricing, provide safe working conditions, and deliver quality work within a reasonable time frame.
            </p>
          </div>
        </div>

        {/* Company Profile Box */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">ULTRABUILD</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Registration No.:</strong> 05/26/01/00099/14</li>
            <li><strong>GSTIN:</strong> 23AAEFU0292Q1ZT</li>
            <li><strong>Incorporation Date:</strong> 23 Sep 2014</li>
            <li><strong>Registered Address:</strong> Shop No.8 Near Sai Temple, Dhawari, Satna (MP)</li>
          </ul>

          <div className="mt-6 space-y-2">
            <p className="flex items-center gap-2">
              <FaPhone className="text-indigo-600 dark:text-indigo-400" /> 9131998505, 9425173403
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400" /> ultrabuildsatna@gmail.com
            </p>
          </div>

          <p className="mt-6 text-gray-700 dark:text-gray-300">
            <strong>Principal Activities:</strong> General Civil and Mechanical works mainly in Cement and Power Plants, Indian Railway specialized in Bridge construction, P-way, Erection and Fabrication of Girders, Supply items, Earthwork, and other allied works.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            <strong>Partners:</strong> SMT Shubhrata Singh, SH Rajiv Pratap Singh (BE Civil)
          </p>

          <p className="mt-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaUsers className="text-indigo-600 dark:text-indigo-400" /> <strong>Total Staff Strength:</strong> 34
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
