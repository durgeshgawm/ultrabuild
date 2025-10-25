import React from "react";

const BoardoffDirectore = () => {
  return (
    <section
      id="boardofdirectore"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            PLANT & MACHINERY
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Machinery List */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>150 TPH Semi Mobile Crusher Plant – 1 No.</li>
            <li>Excavators Tata 220 Zaxis – 2 Nos.</li>
            <li>Tippers Tata LPK 2518 – 8 Nos.</li>
            <li>Self Loading Mixture (2 cum capacity) – 1 No.</li>
            <li>RM 800 Mixture – 1 No.</li>
            <li>Tanker (10000 ltr) – 1 No.</li>
            <li>Tractor Leveler & Dozer – 1 No.</li>
            <li>DG – 4 Nos.</li>
            <li>Hydra 14 MT – 2 Nos.</li>
            <li>Rolling and Bending Machine – 1 No.</li>
            <li>MS Pipe and Scaffoldings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoardoffDirectore;
