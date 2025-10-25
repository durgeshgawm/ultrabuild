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
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Corporate Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      9 Industrial Estate, Rewa Road, Satna - 485001 (MP)
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Tel: 07672 - 250370, 251629, Fax: 07672 - 250368
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      mbplsatna@yahoo.com, info@mehrotrabuildcon.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Regional Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Unit 1009, 10th Floor, World Trade tower, Sector 16, Noida - 201301 (UP)
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      Tel.: 0120 - 256451-52
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600 dark:text-gray-400">
                      mbpldelhi@yahoo.co.in, mbpldelhi@mehrotrabuildcon.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Office location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}