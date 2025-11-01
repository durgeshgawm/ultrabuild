import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1 order-2 staggered-slide-right">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Project Management Construction Firm
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed text-justify-better">
              ULTRABUILD began as a civil and mechanical works contractor in 2014. Over the years, the company has undertaken many challenging projects and accumulated skills, know-how, and experience in design and build solutions, project management services, and other related engineering works.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed text-justify-better">
              Our objective is to provide our clients with an &quot;I am assured&quot; experience when we are chosen to execute their projects. Our emphasis on clear communication and follow-through procedures ensures that clients&apos; objectives are top priority in the planning and execution of all our processes.
            </p>

            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Our Project Management Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed text-justify-better">
                Our project management and execution philosophy is:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Create detailed schedule and resource plan to meet clients&apos; project objectives.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Communicate clearly with all project stakeholders.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Track project progress and fine-tune deviations.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Supervise closely on quality of work done.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Complete and commission the project on time.</span>
                </li>
              </ul>
            </div>

            
          </div>
          <div className="lg:order-2 order-1 relative hover-scale staggered-slide-left">
            <div className="rounded-2xl w-full h-96 md:h-[500px] overflow-hidden shadow-lg">
              <Image
                src="/mainimg.png"
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