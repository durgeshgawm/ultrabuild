"use client";
import React from "react";
import Image from 'next/image';

const Gallery = () => {
  const projects = [
    { id: 1, image: "/image1.png", title: "Site Inspection" },
    { id: 2, image: "/image2.png", title: "Heavy Operations" },
    { id: 3, image: "/image3.png", title: "Structural Work" },
    { id: 4, image: "/image4.png", title: "Project Overview" },
    { id: 5, image: "/image5.png", title: "Machinery Fleet" },
    { id: 6, image: "/image6.png", title: "Foundation Laying" },
    { id: 7, image: "/image7.png", title: "Infrastructure" },
    { id: 8, image: "/image8.png", title: "Project Handover" },
  ];

  const clientImages = [
    { id: 1, image: "/clintimage1.jpg", name: "Client 1" },
    { id: 2, image: "/clintimage2.jpg", name: "Client 2" },
    { id: 3, image: "/clintimage3.jpg", name: "Client 3" },
    { id: 4, image: "/favicoun-logo.jpg", name: "UltraBuild" }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Clients Section */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {clientImages.map((client) => (
              <div
                key={client.id}
                className="relative w-24 h-16 md:w-40 md:h-24 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Our Work In Action</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Project Experience
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400} // Approximate Aspect Ratio, Masonry will handle height naturally if images differ
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
                <div className="w-12 h-1 bg-accent mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Start Your Project With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;