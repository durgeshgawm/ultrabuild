import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Management Construction Firm
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              ULTRABUILD began as a civil and mechanical works contractor in 2014. Over the years, the company has undertaken many challenging projects and accumulated skills, know-how, and experience in design and build solutions, project management services, and other related engineering works.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Our objective is to provide our clients with an &quot;I am assured&quot; experience when we are chosen to execute their projects. Our emphasis on clear communication and follow-through procedures ensures that clients&apos; objectives are top priority in the planning and execution of all our processes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Our project management and execution philosophy is:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <li>Create detailed schedule and resource plan to meet clients’ project objectives.</li>
              <li>Communicate clearly with all project stakeholders.</li>
              <li>Track project progress and fine-tune deviations.</li>
              <li>Supervise closely on quality of work done.</li>
              <li>Complete and commission the project on time.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We take pride in our delivery, thus our clients can always be assured that only the most experienced and qualified people are serving them all the time.
            </p>
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
