import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
            <ul className="space-y-4">
              <li>
                <h5 className="font-semibold text-white mb-2">Corporate Office:</h5>
                <div className="flex items-start">
                  <MapPin size={20} className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                  <span>9 Industrial Estate, Rewa Road, Satna - 485001 (MP)</span>
                </div>
                <div className="flex items-center mt-2">
                  <Phone size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                  <span>Tel: 07672 - 250370, 251629, Fax: 07672 - 250368</span>
                </div>
                <div className="flex items-center mt-2">
                  <Mail size={20} className="text-indigo-400 mr-3 flex-shrink-0" />
                  <span>E-mail: mbplsatna@yahoo.com, info@mehrotrabuildcon.com</span>
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