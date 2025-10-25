import React from "react";
import { CheckCircle } from "lucide-react";

const Strenth = () => {
  const strengths = [
    {
      id: 1,
      title: "Skilled Workforce",
      description: "Over 500 trained professionals with expertise in various construction disciplines.",
      icon: "👷"
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets international standards.",
      icon: "✅"
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Utilization of cutting-edge construction technology and equipment for precision.",
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Sustainable Practices",
      description: "Commitment to eco-friendly construction methods and materials.",
      icon: "🌱"
    },
    {
      id: 5,
      title: "Timely Delivery",
      description: "Proven track record of completing projects on schedule without compromising quality.",
      icon: "⏱️"
    },
    {
      id: 6,
      title: "Safety First",
      description: "Stringent safety protocols resulting in zero major incidents for over 5 years.",
      icon: "🛡️"
    }
  ];

  const certifications = [
    { id: 1, name: "ISO 9001:2015" },
    { id: 2, name: "ISO 14001:2015" },
    { id: 3, name: "OHSAS 18001" },
    { id: 4, name: "LEED Certified" }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Strengths
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key advantages that set us apart in the competitive construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {strengths.map((strength) => (
            <div 
              key={strength.id}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-6">{strength.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {strength.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Commitment to Excellence
                </h3>
                <p className="text-indigo-100 mb-8 text-lg">
                  Our unwavering dedication to quality, safety, and innovation drives everything we do. We continuously invest in our people, technology, and processes to deliver superior results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <span>Continuous training and development programs for all employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <span>Regular equipment maintenance and upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <span>Implementation of latest industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <span>Strong partnerships with reliable suppliers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">Certifications & Standards</h4>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.id}
                      className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors"
                    >
                      <div className="font-semibold">{cert.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-indigo-100">Client Retention Rate</div>
                  <div className="mt-4 w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-white h-2.5 rounded-full" style={{width: "98%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strenth;