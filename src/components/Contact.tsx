import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, FileText } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9425173403";
    const message = `Hello, I'm interested in your services. My name is ${formData.name || 'visitor'}. ${formData.message ? 'Message: ' + formData.message : ''}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "ultrabuildsatna@gmail.com";
    const subject = "Inquiry from Website";
    const body = `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nMessage: ${formData.message || 'No message provided'}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
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
                  <FileText className="h-5 w-5 mr-2" />
                  Download GST Certificate
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center staggered-fade-in">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Get in touch with us for tenders, collaborations, or any construction inquiries
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              id="downloadbtn"
              href="/downloadbtnc4.zip"
              download="Company_Details.zip"
              className="inline-flex items-center justify-center px-4 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <FileText className="mr-2" size={20} />
              Download Our Details
            </a>
            <a 
              href="https://wa.me/9425173403" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              Request for Tender
            </a>
            <a 
              href="https://wa.me/9425173403" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <Send className="mr-2" size={20} />
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;