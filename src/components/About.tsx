import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              OUR MISSION
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Ever-since inception, MBPL never looked back and today we have what we are.
              This has resulted due to close interaction (management) between management and each
              employee even at the lowest level involved and developed a corporate culture where each and
              every employee feels like they are working for their own organization.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              the coming decade, we look forward to being one of the upcoming premier infrastructure
              companies with projects in all vital sectors of our Country. We hope to take forward not only our
              organization but also to contribute to the growth of our Nation alongwith it as we truly believe that
              infrastructure is the backbone of the Nation that we plan to build.
              We believe that the future holds great opportunities for us in the domestic markets. With our
              foresightedness, excellent strategic management and future prospects we shall be able to
              transform opportunities to constructive outcomes.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Best Wishes</h4>
                <p className="text-gray-600 dark:text-gray-400">ATUL MEHROTRA
                  (Managing Director)</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl w-full h-96 md:h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Construction site with modern building"
                width={1100}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;