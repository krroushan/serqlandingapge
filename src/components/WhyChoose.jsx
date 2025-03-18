// WhyChoose.jsx

import React from 'react';

const WhyChoose = () => {
    return (
        <section id="why-us" className="py-24 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/3 -left-24 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>
                
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{ 
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundPosition: "center"
                    }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-white/10 text-yellow-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
                        WHY SERVEQ?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
                        Everything a service provider needs
                        <span className="block text-yellow-300">— all at their fingertips</span>
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
                        Your complete service management solution with powerful tools to streamline operations,
                        delight customers, and grow your business.
                    </p>
                </div>
                
                {/* Video Section */}
                <div className="relative mb-20 mx-auto max-w-4xl">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm relative">
                        {/* Video Embed - Replace with your actual video embed code */}
                        <div className="aspect-video bg-indigo-950/60">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/your-video-id" 
                                title="ServeQ - Smarter Service Management, Better Results" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                        
                        {/* Fallback if iframe doesn't load or for preview */}
                        <div className="absolute inset-0 flex items-center justify-center bg-indigo-950/60 pointer-events-none">
                            <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                                <svg className="w-10 h-10 text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                            </div>
                            <span className="absolute bottom-8 left-8 text-xl font-medium text-white">
                                ServeQ - Smarter Service Management, Better Results
                            </span>
                        </div>
                    </div>
                    
                    {/* Floating elements around video */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 px-4 py-2 rounded-full text-indigo-900 font-bold shadow-lg">
                        See it in action
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-full text-indigo-900 font-medium shadow-lg flex items-center">
                        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        3-minute overview
                    </div>
                </div>
                
                {/* CTA Button */}
                <div className="text-center mb-24">
                    <a 
                        href="#request-demo" 
                        className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-indigo-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        REQUEST DEMO
                    </a>
                </div>
                
                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: "100% Customer Support",
                            description: "Our team will be by your side every step of the way, giving you our 200% support.",
                            icon: (
                                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                            )
                        },
                        {
                            title: "1000+ Easy Integrations",
                            description: "Integrations will never be a hassle for you, we've got you covered.",
                            icon: (
                                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                                </svg>
                            )
                        },
                        {
                            title: "40,000+ Users",
                            description: "Users across multiple industries increased their conversions by up to 72% using ServeQ.",
                            icon: (
                                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            )
                        }
                    ].map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="w-16 h-16 bg-indigo-700/40 rounded-xl flex items-center justify-center mb-6">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{stat.title}</h3>
                            <p className="text-indigo-100">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
