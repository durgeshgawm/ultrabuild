import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-900/50 -skew-x-12 transform origin-top translate-x-1/4 -z-10 bg-opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text Content */}
          <div className="lg:order-1 order-2">
            <div className="mb-8 animate-fade-in text-center lg:text-left">
              <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm md:text-base">Since 2014</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Building the <span className="text-gradient-gold">Future</span> of Infrastructure
              </h1>
              <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mb-8 mx-auto lg:mx-0"></div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed text-justify-better">
                <span className="font-semibold text-slate-800 dark:text-slate-100">ULTRABUILD</span> began its journey as a premier civil and mechanical contractor.
                Over the last decade, we have mastered the art of executing complex engineering challenges, delivering excellence in design-build solutions and project management.
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed text-justify-better">
                Our core philosophy is simple: Provide clients with an <em className="text-slate-800 dark:text-slate-100 font-serif">"I am assured"</em> experience.
                We prioritize clear communication, rigorous follow-through, and unwavering quality standards.
              </p>
            </div>

            <div className="mb-8 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-premium border border-slate-100 dark:border-slate-700 animate-slide-up delay-200">
              <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-600 pb-4">
                Project Management Excellence
              </h4>
              <ul className="space-y-4">
                {[
                  "Detailed resource planning aligned with objectives",
                  "Transparent & continuous stakeholder communication",
                  "Proactive progress tracking & deviation management",
                  "Rigorous quality supervision & safety compliance",
                  "Timely completion & commissioning assurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                Partner With Us
              </a>
              <a href="#project" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center">
                View Portfolio
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:order-2 order-1 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-1">
              <Image
                src="/mainimg.png"
                alt="UltraBuild Construction Excellence"
                width={1100}
                height={800} // Increased height for better hero aspect
                className="w-full h-[600px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Glass overlay card */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl animate-slide-up delay-500 hidden md:block">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Experience</p>
                    <p className="text-3xl font-bold text-slate-900">10+ Years</p>
                  </div>
                  <div className="h-10 w-px bg-slate-300"></div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Projects</p>
                    <p className="text-3xl font-bold text-slate-900">50+</p>
                  </div>
                  <div className="h-10 w-px bg-slate-300"></div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">Satisfaction</p>
                    <p className="text-3xl font-bold text-slate-900">100%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-900/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;