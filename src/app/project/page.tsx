"use client";
import React from "react";

export default function ProjectPage() {
  const currentProjects = [
    { title: "Construction of Minor Bridge and other allied works at West-Central Railway division", },
    { title: "Main Civil works for FGD Package at NTPC Korba under BHEL", },
    { title: "Fabrication and Erection of Open Web Girders at West-Central Railway Division in Lalitpur-Singrauli Railway Line", },
    { title: "Testing of 760mm and 600 mm dia test pile at FGD Package at NTPC Korba under BHEL",},
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
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            CURRENT & COMPLETED PROJECTS
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Current Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}