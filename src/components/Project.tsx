import React from "react";
import { ArrowUpRight, Clock, CheckCircle } from "lucide-react";

const Project: React.FC = () => {
  const currentProjects = [
    {
      title: "West-Central Railway Residential Complex",
      location: "Karhi Village, Satna",
      client: "West-Central Railway",
      desc: "Construction of Residential Quarters at Karhi Village, District Satna."
    },
    {
      title: "Ballast Aggregates Supply Chain",
      location: "Vedanta Balco Site, Chhattisgarh",
      client: "Railway Works",
      desc: "Procurement, staffing, and transportation of ballast aggregates from crusher to site."
    },
    {
      title: "Civil Structural Works @ BHEL-NTPC",
      location: "Korba, Chhattisgarh",
      client: "BHEL – NTPC",
      desc: "Shuttering, steel bending, binding, concrete pouring, and manpower supply."
    },
  ];

  const completedProjects = [
    { title: "Structural Fabrication & Erection", location: "Maihar, Satna", client: "Reliance Cement Pvt Ltd", desc: "Construction of small structures and allied works." },
    { title: "Box Culvert Construction", location: "Singrauli, MP", client: "BGR Group (Northern Coalfield Ltd)", desc: "Construction of Box Culvert at Gorbi Mines." },
    { title: "Railway Gauge Conversion Works", location: "Shikara Station, Seoni", client: "SECR (Nagpur Division)", desc: "Bridges, box culverts, and drains for narrow to broad gauge conversion." },
    { title: "S&T Building Construction", location: "Singrauli, MP", client: "M/s MBPL (RITES/NTPC)", desc: "Construction of S&T building at Nigahi and Dudhichua." },
    { title: "Railway Formation & Bridges", location: "Gorbi Mines", client: "M/s MBPL (RITES)", desc: "Earthwork in formation, bridges, P-way and other allied works." },
    { title: "Track Ballast Supply", location: "Amlohri & Nigahi Mines", client: "Kalpataru Transmission Ltd", desc: "Supply of 2000 cum Track Ballast." },
  ];

  return (
    <section id="project" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Current & Completed Projects
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
            delivering excellence across residential, industrial, and infrastructure sectors.
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row items-center mb-8 md:mb-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 md:mb-0 md:mr-6">
              In Progress
            </h3>
            <div className="w-full md:flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-premium border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-wide">
                    <Clock className="w-3 h-3 mr-1" /> Ongoing
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                  {project.client} • {project.location}
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-2/3 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <div className="flex flex-col md:flex-row items-center mb-8 md:mb-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 md:mb-0 md:mr-6">
              Completed
            </h3>
            <div className="w-full md:flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 group"
              >
                <div className="w-1.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-green-500 transition-colors duration-300"></div>

                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                        {project.client}
                      </p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-slate-300 group-hover:text-green-500 transition-colors" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex items-center text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Successfully Delivered
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
