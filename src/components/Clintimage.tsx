import React from "react";
import Image from "next/image";

const Clintimage = () => {
  // Using actual client logos from the public folder
  const clients = [
    { id: 1, name: "Abuja Cement", image: "/Abujacement.png" },
    { id: 2, name: "NTPC", image: "/NTPC.jpg" },
    { id: 3, name: "Coal India", image: "/coalindia.png" },
    { id: 4, name: "JP Cement", image: "/jpcement.png" },
    { id: 5, name: "MCOD", image: "/mcod.jpeg" },
    { id: 6, name: "NHAI", image: "/nhai.png" },
    { id: 7, name: "Railway", image: "/railway.png" },
    { id: 8, name: "Ultratech", image: "/ultratech.png" }
  ];

  return (
    <section id="clintimage" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and organizations across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-16 w-full">
                <Image 
                  src={client.image} 
                  alt={`${client.name} logo`}
                  width={100}
                  height={64}
                  className="object-contain h-16 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Clintimage;