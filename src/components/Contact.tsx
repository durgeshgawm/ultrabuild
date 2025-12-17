import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Users } from "lucide-react";

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

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 dark:bg-slate-900 -skew-y-3 transform origin-top-left scale-110 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Contact Info Side */}
          <div className="text-white pt-6 md:pt-10 animate-slide-in-left">
            <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 md:mb-8">
              Let's Build Something <br /> <span className="text-accent">Extraordinary</span>
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-md leading-relaxed">
              Whether you have a query about our services, want to request a tender, or just want to say hello, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-accent backdrop-blur-sm flex items-center justify-center mr-6 group-hover:bg-black transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Registier Office</h4>
                  <p className="text-slate-300 leading-relaxed">
                    SHOP NO. 08 DHAWARI STEDIUM,<br />
                    SATNA (M.P) 485001
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-accent backdrop-blur-sm flex items-center justify-center mr-6 group-hover:bg-black transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Regional Office</h4>
                  <p className="text-slate-300 leading-relaxed">
                    HIG-20 SADA Colony, NTPC Darri,<br />
                    Korba (C.G)
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-accent backdrop-blur-sm flex items-center justify-center mr-6 group-hover:bg-black transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-slate-300">
                    +91 94251 73403<br />
                    +91 91094 97077
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl animate-slide-in-right">
            <form onSubmit={handleWhatsAppClick} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                Send via WhatsApp <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>

              <div className="text-center">
                <span className="text-slate-400 text-sm">or</span>
              </div>

              <button
                type="button"
                onClick={handleEmailClick}
                className="w-full py-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send via Email <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Key Personnel Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h4 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-6">
              <Users className="w-5 h-5 text-accent mr-2" /> Key person's
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white">Peetam Bajaj</p>
                <p className="text-xs text-slate-500 uppercase mt-1">Accountant</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Mobile: 9109497077</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Email: pritambajaj996@gmail.com</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white">Shivkumar Vishwakarma</p>
                <p className="text-xs text-slate-500 uppercase mt-1">Accountant</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Mobile: 8817851101</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Email: shivkumarvishwakarma1974@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;