import React from "react";
import { FaPhone, FaEnvelope, FaUsers, FaChartLine, FaAward, FaBuilding } from "react-icons/fa";

const Achivement = () => {
  return (
    <section id="achievement" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">

      
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            COMPANY PROFILE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-justify-better">
            Discover our journey, values, and commitment to excellence in construction
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 staggered-fade-in">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                  <FaAward className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">🌟 Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify-better">
                To be a leading construction firm recognized for excellence, innovation, and integrity — building a better tomorrow through sustainable and high-quality infrastructure.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                  <FaChartLine className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">🎯 Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify-better">
                To deliver superior construction services by:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2 ml-4">
                <li className="text-justify-better mb-2">Ensuring quality workmanship and timely completion.</li>
                <li className="text-justify-better mb-2">Maintaining the highest standards of safety and professionalism.</li>
                <li className="text-justify-better mb-2">Continuously improving through modern technology and skilled workforce.</li>
                <li className="text-justify-better mb-2">Building long-term relationships with clients through trust and transparency.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Profile Box */}
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 fade-in">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-6">
              <FaBuilding className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">ULTRABUILD</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Company Information Satna (M.P) </h4>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Registration No.:</span>
                  <span>05/26/01/00099/14</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">GSTIN:</span>
                  <span>23AAEFU0292Q1ZT SATNA (M.P) </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Incorporation Date:</span>
                  <span>23 Sep 2014</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Registered Address:</span>
                  <span>Shop No.8 Near Sai Temple, Dhawari, Satna (MP)</span>
                </li>
              </ul>
              <br></br>
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Company Information KORBA (C.G)</h4>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Registration No.:</span>
                  <span></span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">GSTIN:</span>
                  <span></span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Incorporation Date:</span>
                  <span></span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-48 text-gray-900 dark:text-white">Registered Address:</span>
                  <span>HIG-20 SADA COLONY, NTPC DARRI, KORBA (C.G)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Contact & Team</h4>
              <div className="space-y-4 mb-4">
                <p className="flex items-center gap-3 text-justify-better">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <FaPhone className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span>8226008228, 9425173403</span>
                </p>
                <p className="flex items-center gap-3 text-justify-better">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span>ultrabuildsatna@gmail.com</span>
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify-better">
                <span className="font-semibold text-gray-900 dark:text-white">Principal Activities:</span> General Civil and Mechanical works mainly in Cement and Power Plants, Indian Railway specialized in Bridge construction, P-way, Erection and Fabrication of Girders, Supply items, Earthwork, and other allied works.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify-better">
                <span className="font-semibold text-gray-900 dark:text-white">Partners:</span> SMT Shubhrata Singh, SH Rajiv Pratap Singh (BE Civil)
              </p>
              
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-justify-better">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <FaUsers className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <span><span className="font-semibold text-gray-900 dark:text-white">Total Staff Strength:</span> 34</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;