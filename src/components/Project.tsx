import React from "react";

const Project: React.FC = () => {
  const currentProjects = [
    { title: "Construction of Residential Quarters at Karhi Village, District Satna for West-Central Railway division" },
    { title: "Supply of Ballast Aggregates for Railway Work. Description: Supply of ballast aggregates as per approved sample, suitable for Railway works. The scope of work included procurement, stacking, transportation, and unloading of material from our crusher to VEDANTA BALCO site, Chhattisgarh" },
    { title: "Shuttering, Steel Bending & Binding Work at BHEL–NTPC, Korba (C.G.) Description: Execution of civil and structural works including steel cutting, bending & binding, shuttering, concrete pouring, bolt fixing, and supply of skilled and unskilled manpower at BHEL–NTPC site, Korba, Chhattisgarh." },
  ];

  const completedProjects = [
    { title: "Construction, Fabrication and Erection of small structures and other allied works at Reliance Cement Pvt Ltd at Maihar Dist Satna (MP)" },
    { title: "Construction of Box Culvert at Gorbi Mines (Northern Coalfield Ltd) for BGR Group at Dist Singrauli (MP)" },
    { title: "Construction of Bridges, Box culverts, Drains and other allied works of SECR in connection with converting narrow gauge to broad gauge at Shikara railway station at Dist Seoni of Nagpur division" },
    { title: "Construction of S&T building at Nigahi and Dudhichua under RITES for M/s MBPL under package IV of NTPC at Dist Singrauli (MP)" },
    { title: "Earthwork in formation, bridges, P-way and other allied works at NCL Gorbi Mines under RITES for M/s MBPL" },
    { title: "Earthwork in formation, bridges, P-way and other allied works at NCL Dudhichua Mines under RITES for M/s MBPL" },
    { title: "Fabrication, Erection and painting with other allied works at UNIT-7 of NTPC Korba under BHEL" },
    { title: "Supply of Track Ballast (2000 cum) at Amlohri and Nigahi mines under RITES for M/s Kalpataru Transmission Ltd" },
  ];

  return (
    <section
      id="project"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            CURRENT & COMPLETED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-justify-better">
            Explore our diverse portfolio of successful projects across various sectors
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-12 fade-in">
          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mr-4">
              Current Projects
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-fade-in">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12 opacity-10"></div>

                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
                    </div>

                    <div>
                      {/* ✅ Updated Title */}
                      <h4 className="text-sm font-normal text-gray-600 dark:text-gray-300 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-justify-better">
                        {project.title}
                      </h4>

                      <div className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-sm">
                        <span>In Progress</span>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full ml-2 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-12 fade-in">
          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mr-4">
              Completed Projects
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-fade-in">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 rounded-full translate-y-12 -translate-x-12 opacity-10"></div>

                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <div>
                      {/* ✅ Updated Title */}
                      <h4 className="text-sm font-normal text-gray-600 dark:text-gray-300 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-justify-better">
                        {project.title}
                      </h4>

                      <div className="inline-flex items-center text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full text-sm">
                        <span>Completed</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
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
