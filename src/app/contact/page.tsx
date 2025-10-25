import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our team for any inquiries or project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Offices
            </h2>
            {/* Office cards in a responsive grid with increased width */}
            <div className="grid grid-cols-1 gap-8">
              {/* Registered Office */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Registered Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      SHOP NO-8, NEAR DHAWARI STADIUM<br />
                      SATNA (M.P)
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Email: ultrabuildsatna@gmail.com
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>CONTACT PERSON: RAJIV SINGH</p>
                      <p>Phone no: 9131998505, 9425173403</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Branch Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      HIG-20 SADA COLONY, NTPC DARRI,<br />
                      KORBA (C.G)
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>CONTACT PERSON: ABHISHEK SINGH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}