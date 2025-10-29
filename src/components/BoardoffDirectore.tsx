import React from "react";
import { FaCogs, FaTruck, FaHammer, FaIndustry } from "react-icons/fa";

const BoardoffDirectore = () => {
  // Group machinery into categories for better organization
  const machineryCategories = [
    {
      title: "Crushing & Processing Equipment",
      icon: <FaCogs className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "150 TPH Semi Mobile Crusher Plant – 1 No.",
        "CRUSHER PLANT",
        "CONCRETE BATCHING PLANT"
      ]
    },
    {
      title: "Excavation & Earthmoving",
      icon: <FaTruck className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "Excavators Tata 220 Zaxis – 2 Nos.",
        "R210 HYDRAULIC EXCAVATOR",
        "Tractor Leveler & Dozer – 1 No."
      ]
    },
    {
      title: "Transportation & Mixing",
      icon: <FaHammer className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "Tippers Tata LPK 2518 – 8 Nos.",
        "Self Loading Mixture (2 cum capacity) – 1 No.",
        "RM 800 Mixture – 1 No.",
        "Tanker (10000 ltr) – 1 No."
      ]
    },
    {
      title: "Specialized Equipment",
      icon: <FaIndustry className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "DG – 4 Nos.",
        "Hydra 14 MT – 2 Nos.",
        "Rolling and Bending Machine – 1 No.",
        "MS Pipe and Scaffoldings"
      ]
    }
  ];

  return (
    <section
      id="boardofdirectore"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            PLANT & MACHINERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive fleet of modern equipment ensures efficient project execution
          </p>
        </div>

        {/* Machinery Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-fade-in">
          {machineryCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12 opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default BoardoffDirectore;