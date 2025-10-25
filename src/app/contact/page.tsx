import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our team for any inquiries or project discussions.
          </p>
        </div>

        {/* Offices Section */}
        <div className="flex justify-center">
          <div className="w-full lg:w-11/12 xl:w-10/12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Offices
            </h2>

            {/* Office cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Corporate Office */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Corporate Office
                </h3>
                <div className="space-y-5 text-lg">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      9 Industrial Estate, Rewa Road, Satna - 485001 (MP)
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Tel: 07672 - 250370, 251629 &nbsp; | &nbsp; Fax: 07672 - 250368
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      mbplsatna@yahoo.com, info@mehrotrabuildcon.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Office */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Regional Office
                </h3>
                <div className="space-y-5 text-lg">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Unit 1009, 10th Floor, World Trade Tower, Sector 16, Noida - 201301 (UP)
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Tel: 0120 - 256451-52
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={22} />
                    <p className="text-gray-600 dark:text-gray-400">
                      mbpldelhi@yahoo.co.in, mbpldelhi@mehrotrabuildcon.com
                    </p>
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
