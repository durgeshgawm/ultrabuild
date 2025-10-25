import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Achievement", href: "/achievement" },
    { name: "Board of Directors", href: "/boardofdirectore" },
    { name: "Clients", href: "/clintimage" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">UltraBuild Satna</h3>
            <p className="mb-6 leading-relaxed">
              Building the future with innovation, quality, and sustainable practices. Leading the construction industry since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li>
                <h5 className="font-semibold text-white mb-2">Corporate Office:</h5>
                <div className="flex items-start">
                  <MapPin size={20} className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=9+Industrial+Estate,+Rewa+Road,+Satna+-+485001+(MP)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    9 Industrial Estate, Rewa Road, Satna - 485001 (MP)
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <Phone size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                    <a 
                      href="tel:07672250370" 
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Tel: 07672 - 250370
                    </a>
                  </div>
                  <span className="sm:mx-2 hidden sm:block">|</span>
                  <a 
                    href="tel:07672251629" 
                    className="hover:text-indigo-400 transition-colors sm:ml-2"
                  >
                    251629
                  </a>
                  <span className="sm:mx-2 hidden sm:block">|</span>
                  <a 
                    href="fax:07672250368" 
                    className="hover:text-indigo-400 transition-colors sm:ml-2"
                  >
                    Fax: 07672 - 250368
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <Mail size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                    <a 
                      href="mailto:mbplsatna@yahoo.com" 
                      className="hover:text-indigo-400 transition-colors"
                    >
                      mbplsatna@yahoo.com
                    </a>
                  </div>
                  <span className="sm:mx-2 hidden sm:block">,</span>
                  <a 
                    href="mailto:info@mehrotrabuildcon.com" 
                    className="hover:text-indigo-400 transition-colors sm:ml-2"
                  >
                    info@mehrotrabuildcon.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;