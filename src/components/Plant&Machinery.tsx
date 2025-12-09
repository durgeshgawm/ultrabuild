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
        "CONCRETE BATCHING PLANT",
        "CRUSHER PLANT"
      ]
    },
    {
      title: "Excavation & Earthmoving",
      icon: <FaTruck className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "Excavators Tata 220 Zaxis – 2 Nos.",
        "Tractor Leveler & Dozer – 1 No.",
        "R210 HYDRAULIC EXCAVATOR",
      ]
    },
    {
      title: "Transportation & Mixing",
      icon: <FaHammer className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "Self Loading Mixture (2 cum capacity) – 1 No.",
        "Tippers Tata LPK 2518 – 8 Nos.",
        "Tanker (10000 ltr) – 1 No.",
        "RM 800 Mixture – 1 No.",

      ]
    },
    {
      title: "Specialized Equipment",
      icon: <FaIndustry className="text-indigo-600 dark:text-indigo-400 text-xl" />,
      items: [
        "Rolling and Bending Machine – 1 No.",
        "MS Pipe and Scaffoldings",
        "Hydra 14 MT – 2 Nos.",
        "DG – 4 Nos.",
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
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            PLANT & MACHINERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Unified Machinery Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 group relative overflow-hidden staggered-fade-in">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12 opacity-10"></div>
          <div className="relative z-10 p-8">
            {machineryCategories.map((category, index) => (
              <div key={index} className={index !== 0 ? "mt-10 pt-10 border-t border-gray-200 dark:border-gray-700" : ""}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg leading-relaxed text-justify-better">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BoardoffDirectore;