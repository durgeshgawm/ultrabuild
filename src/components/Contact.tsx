import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-justify-better">
            Get in touch with our team for any inquiries or project discussions.
          </p>
        </div>

        {/* Office Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 staggered-fade-in">
          {/* Registered Office */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-card hover-lift">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Registered Office
            </h4>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SHOP+NO-8,+NEAR+DHAWARI+STADIUM,+SATNA+(M.P)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  SHOP NO-8, NEAR DHAWARI STADIUM<br />
                  SATNA (M.P)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <a href="mailto:ultrabuildsatna@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  ultrabuildsatna@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span>CONTACT PERSON: Rajiv Singh</span><br />
                  <span>Phone no: 8226008228, 9425173403</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-card hover-lift">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Branch Office
            </h4>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=HIG-20+SADA+COLONY,+NTPC+DARRI,+KORBA+(C.G)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  HIG-20 SADA COLONY, NTPC DARRI,<br />
                  KORBA (C.G)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span>CONTACT PERSON: Rajiv Pratap Singh</span><br />
                  <span>Phone no: 9425173403</span>
                </div>
              </div>

              {/* Download GST Button */}
              <div className="mt-6">
                <a
                  href="/GST CERTIFICATE CG.pdf"
                  download="GST CERTIFICATE CG.pdf"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                  style={{ color: 'white' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download GST Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;