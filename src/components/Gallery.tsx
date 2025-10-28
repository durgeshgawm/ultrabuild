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

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={`$project`}
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