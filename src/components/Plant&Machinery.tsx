import React from "react";
import { Hammer, Truck, Factory, Settings, ShieldCheck } from "lucide-react";

const BoardoffDirectore = () => {
  const categories = [
    {
      title: "Crushing & Processing",
      icon: <Factory className="w-6 h-6" />,
      items: ["150 TPH Semi Mobile Crusher Plant", "Concrete Batching Plant", "Advanced Crusher Units"]
    },
    {
      title: "Excavation Fleet",
      icon: <Truck className="w-6 h-6" />,
      items: ["Tata 220 Zaxis Excavators (2)", "R210 Hydraulic Excavator", "Tractor Leveler & Dozer", "3DXS5 JCB Machine"]
    },
    {
      title: "Logistics & Mixing",
      icon: <Settings className="w-6 h-6" />,
      items: ["Tata LPK 2518 Tippers (8)", "Self Loading Mixture (2 cu.m)", "RM 800 Mixture"]
    },
    {
      title: "Specialized Machinery",
      icon: <Hammer className="w-6 h-6" />,
      items: ["Hydra 14 MT Cranes (2)", "Rolling & Bending Machines", "Heavy Duty Diesel Generators (4)"]
    }
  ];

  return (
    <section id="boardofdirectore" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-slate-900 dark:bg-slate-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">Our Strength</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Infrastructure & Capabilities
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
            Equipped With State-Of-The-Art Machinery To Deliver Projects With Speed And Precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                  {cat.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">All equipment is regularly inspected and certified for safety.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardoffDirectore;