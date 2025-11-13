"use client";
import React from "react";
import Image from 'next/image';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: "/image1.png"
    },
    {
      id: 2,
      image: "/image2.png"
    },
    {
      id: 3,
      image: "/image3.png"
    },
    {
      id: 4,
      image: "/image4.png"
    },
    {
      id: 5,
      image: "/image5.png"
    },
    {
      id: 6,
      image: "/image6.png"
    },
    {
      id: 7,
      image: "/image7.png"
      },
    {
      id: 8,
      image: "/image8.png"
    },
  ];

  const clientImages = [
    {
      id: 1,
      image: "/clintimage1.jpg"
    },
    {
      id: 2,
      image: "/clintimage2.jpg"
    },
    {
      id: 3,
      image: "/clintimage3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Our Clients Section */}
        <div className="mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-10"></div>
          
          <div className="flex justify-center space-x-8 mb-16">
            {clientImages.map((client) => (
              <div 
                key={client.id}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={client.image}
                  alt={`Client ${client.id}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
           Project Photo
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 staggered-fade-in">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover-lift transition-all duration-300 aspect-square"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;