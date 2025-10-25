"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "commercial",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Green Valley Homes",
      category: "residential",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Metro Expressway",
      category: "infrastructure",
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      title: "Tech Park Complex",
      category: "commercial",
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      title: "Solar Energy Plant",
      category: "industrial",
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      title: "Heritage Hotel",
      category: "hospitality",
      image: "/placeholder.jpg"
    },
    {
      id: 7,
      title: "Smart City Plaza",
      category: "urban",
      image: "/placeholder.jpg"
    },
    {
      id: 8,
      title: "Eco-Friendly Factory",
      category: "industrial",
      image: "/placeholder.jpg"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "urban", name: "Urban Development" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Project Gallery
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various sectors.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-64 flex items-center justify-center text-gray-500">
                Project Image
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-indigo-200 capitalize">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                By The Numbers
              </h3>
              <p className="text-indigo-100 text-xl max-w-2xl mx-auto">
                Our achievements speak volumes about our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-indigo-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <div className="text-indigo-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
                <div className="text-indigo-100">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-indigo-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;