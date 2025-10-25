import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Wilson",
      position: "Chief Executive Officer",
      bio: "20+ years in construction management. Former executive at major construction firms.",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      name: "Jennifer Lee",
      position: "Chief Operations Officer",
      bio: "Expert in project execution and resource optimization. Masters in Construction Management.",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      name: "Robert Kumar",
      position: "Chief Technology Officer",
      bio: "Innovation leader in construction technology. Pioneer in BIM and smart construction solutions.",
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      name: "Amanda Smith",
      position: "Head of Design",
      bio: "Award-winning architect with focus on sustainable design. 15+ years of design experience.",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-72 flex items-center justify-center text-gray-500">
                Team Member Photo
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {member.bio}
                </p>
                <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Culture & Values
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We foster an environment of collaboration, innovation, and continuous learning to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">1</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Embracing new technologies and methods to improve construction processes and outcomes.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">2</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integrity</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintaining the highest ethical standards in all our business relationships and operations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">3</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Striving for perfection in every aspect of our work, from design to execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;