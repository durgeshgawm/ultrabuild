import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const ManagingDirector = () => {
    return (
        <section
            id="director-message"
            className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <span className="text-accent font-semibold tracking-wider uppercase mb-2 block text-sm">
                        Leadership
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                        Message from Managing Director
                    </h2>
                    <div className="w-16 md:w-24 h-1.5 bg-accent rounded-full mx-auto mb-6 md:mb-8"></div>
                </div>

                {/* Content Card */}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        {/* Director Image */}
                        <div className="flex-shrink-0">
                            <div className="relative group">
                                <div className="w-56 h-106 md:w-64 md:h-104 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-700 transform transition-transform duration-500 group-hover:rotate-1">
                                    <Image
                                        src="/Ultrabuild_director_ima.jpeg"
                                        alt="Managing Director - Ultra Build"
                                        width={256}
                                        height={226}
                                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Decorative accent behind image */}
                                <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <Quote className="w-10 h-10 text-accent/40 mb-4 mx-auto lg:mx-0 rotate-180" />
                            <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
                                Ultra Build is committed to quality workmanship, timely
                                execution, and customer satisfaction. We take pride in our
                                skilled team and transparent work culture. Every project we
                                undertake reflects our dedication to excellence and trust.
                            </p>
                            <div className="w-12 h-0.5 bg-accent rounded-full mb-4 mx-auto lg:mx-0"></div>
                            <p className="text-slate-900 dark:text-white font-bold text-lg font-serif">
                                Managing Director
                            </p>
                            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                                Rajiv Pratap Singh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagingDirector;
