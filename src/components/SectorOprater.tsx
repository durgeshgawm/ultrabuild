import React from "react";

const SectorOprater = () => {
  const sectors = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Building homes that combine comfort, style, and durability for families.",
      projects: "150+ Projects",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Commercial Buildings",
      description: "Creating modern office spaces and commercial complexes that inspire productivity.",
      projects: "85+ Projects",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Industrial Facilities",
      description: "Developing specialized industrial infrastructure for manufacturing and production.",
      projects: "60+ Projects",
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      title: "Infrastructure Development",
      description: "Building roads, bridges, and public facilities that connect communities.",
      projects: "45+ Projects",
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      title: "Renewable Energy",
      description: "Constructing solar and wind energy facilities for sustainable power generation.",
      projects: "30+ Projects",
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      title: "Urban Development",
      description: "Designing and building smart city solutions for modern urban living.",
      projects: "25+ Projects",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sector Operations
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diverse expertise across multiple construction sectors delivering specialized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div 
              key={sector.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                Sector Image
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {sector.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                    {sector.projects}
                  </span>
                  <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive Approach
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our integrated services cover every aspect of construction projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pre-Construction</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Feasibility Studies</h5>
                      <p className="text-gray-600 dark:text-gray-400">Comprehensive analysis of project viability and constraints</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Design Development</h5>
                      <p className="text-gray-600 dark:text-gray-400">Collaborative design process with architects and engineers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Permit Acquisition</h5>
                      <p className="text-gray-600 dark:text-gray-400">Navigating regulatory requirements and securing permits</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Construction & Beyond</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      4
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Project Execution</h5>
                      <p className="text-gray-600 dark:text-gray-400">Precision construction with quality assurance protocols</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      5
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Quality Control</h5>
                      <p className="text-gray-600 dark:text-gray-400">Rigorous inspections and testing throughout the process</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-2 mr-4">
                      6
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white">Post-Completion Support</h5>
                      <p className="text-gray-600 dark:text-gray-400">Warranty services and maintenance support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorOprater;