import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our team for any inquiries or project discussions.
          </p>
        </div>

        {/* Office Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registered Office */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Registered Office
            </h4>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <span>SHOP NO-8, NEAR DHAWARI STADIUM<br />
                SATNA (M.P)</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <span>Email: ultrabuildsatna@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span>CONTACT PERSON: RAJIV SINGH</span><br />
                  <span>Phone no: 8226008228, 9425173403</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Branch Office
            </h4>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <span>HIG-20 SADA COLONY, NTPC DARRI,<br />
                KORBA (C.G)</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span>CONTACT PERSON: rajiv pratap singh</span><br/>
                  <span>Phone no: 9425173403</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;