import React from "react";
import { Phone, Mail, Users, Target, Eye, Building2, FileText, MapPin } from "lucide-react";

const Achivement = () => {
  return (
    <section id="achievement" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Who We Are</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Corporate Profile
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-premium transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-110"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                To Be A Leading Construction Firm Recognized For Excellence, Innovation, And Integrity — Building A Better Tomorrow Through Sustainable And High-Quality Infrastructure.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-premium transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-110"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Ensuring Quality Workmanship And Timely Completion.",
                  "Maintaining The Highest Standards Of Safety And Professionalism.",
                  "Continuously Improving Through Modern Technology.",
                  "Building Long-Term Relationships Through Trust."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center shadow-lg mr-6">
                <span className="text-white dark:text-slate-900 font-bold text-2xl font-serif">UB</span>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">ULTRABUILD</h3>
                <p className="text-slate-500 uppercase tracking-widest text-sm font-medium mt-1">Construction & Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Team Strength</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">34+ Experts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Offices */}
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <MapPin className="w-5 h-5 text-accent mr-2" /> Head Office (Satna)
                </h4>
                <div className="pl-7 space-y-3">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-500 uppercase font-bold mb-1">Registration No.</p>
                    <p className="text-slate-900 dark:text-white font-mono">05/26/01/00099/14</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-500 uppercase font-bold mb-1">GSTIN</p>
                    <p className="text-slate-900 dark:text-white font-mono">23AAEFU0292Q1ZT</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Om Tower, Bandhan Bank Building, Second Floor, Krishna Nagar Satna M.P
                  </p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <MapPin className="w-5 h-5 text-accent mr-2" /> Regional Office (Korba)
                </h4>
                <div className="pl-7 space-y-3">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-500 uppercase font-bold mb-1">GSTIN</p>
                    <p className="text-slate-900 dark:text-white font-mono">22AAEFU0292Q1ZV</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    HIG-20 SADA COLONY, NTPC DARRI, KORBA (C.G)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <Building2 className="w-5 h-5 text-accent mr-2" /> Core Activities
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                  General Civil Works Mainly In Cement And Power Plants, Indian Railway Specialized In Bridge Construction, P-way, Erection And Fabrication Of Girders, Supply Items, Earthwork, And Other Allied Works.
                </p>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <Users className="w-5 h-5 text-accent mr-2" /> Leadership
                </h4>
                <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-slate-900 dark:text-white">SMT Shubhrata Singh</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Partner</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-slate-900 dark:text-white">SH Rajiv Pratap Singh</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Partner (BE Civil)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <Phone className="w-5 h-5 text-accent mr-2" /> Contact
                </h4>
                <div className="pl-7 space-y-2">
                  <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span>9425173403, 9109497077</span>
                  </p>
                  <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Mail className="w-4 h-4" /> ultrabuildsatna@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                  <Users className="w-5 h-5 text-accent mr-2" /> Key Personnel
                </h4>
                <div className="pl-7 space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-slate-900 dark:text-white">Peetam Bajaj</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Accountant</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Mobile: 9109497077</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Email: pritambajaj996@gmail.com</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-slate-900 dark:text-white">Shivkumar Vishwakarma</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Accountant</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Mobile: 8817851101</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Email: shivkumarvishwakarma1974@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;