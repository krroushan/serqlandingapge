// Testimonial.jsx

import React, { useState, useEffect } from 'react';

const Testimonial = () => {
    // State for testimonial carousel
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 8000);
        
        return () => clearInterval(interval);
    }, []);
    
    // Testimonial data
    const testimonials = [
        {
            quote: "ServeQ has transformed our telecalling operations completely. Our contact rate has improved by 40% and we're closing more deals daily than ever before.",
            author: "Sarah Johnson",
            role: "Operations Director, TechFix Solutions",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            stats: {
                improvement: "40%",
                metric: "increase in contact rate"
            },
            companyLogo: "https://placehold.co/200x80/e2e8f0/4f46e5?text=TechFix"
        },
        {
            quote: "The automated dialer feature has reduced our idle time by 35%. Our team loves the real-time analytics and performance tracking options.",
            author: "Michael Chen",
            role: "CEO, Rapid Sales Services",
            image: "https://randomuser.me/api/portraits/men/46.jpg",
            stats: {
                improvement: "35%",
                metric: "reduction in idle time"
            },
            companyLogo: "https://placehold.co/200x80/e2e8f0/4f46e5?text=RapidSales"
        },
        {
            quote: "Implementation was smooth and the ROI was immediate. ServeQ paid for itself within the first 3 months with increased efficiency and conversion rates alone.",
            author: "Jessica Williams",
            role: "Sales Manager, Elite Business Solutions",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            stats: {
                improvement: "3",
                metric: "month payback period"
            },
            companyLogo: "https://placehold.co/200x80/e2e8f0/4f46e5?text=EliteBiz"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated gradient circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
                <div className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundPosition: "center"
                    }}></div>
                </div>
                
                {/* Quote mark decoration */}
                <div className="absolute -top-10 left-10 text-[200px] leading-none text-indigo-700 opacity-20 font-serif">
                    "
                </div>
                <div className="absolute -bottom-20 right-10 text-[200px] leading-none text-indigo-700 opacity-20 font-serif rotate-180">
                    "
                </div>
            </div>
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-white bg-opacity-10 text-yellow-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                        SUCCESS STORIES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted by telecallers worldwide
                    </h2>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                        See how businesses like yours achieve remarkable results
                    </p>
                </div>
                
                {/* Featured Testimonial */}
                <div className="relative mb-20">
                    {/* Testimonial cards */}
                    <div className="relative h-[500px] md:h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                    activeIndex === index 
                                        ? 'opacity-100 translate-x-0 z-20' 
                                        : index < activeIndex || (activeIndex === 0 && index === testimonials.length - 1)
                                            ? 'opacity-0 -translate-x-full z-10' 
                                            : 'opacity-0 translate-x-full z-10'
                                }`}
                            >
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-full">
                                    <div className="md:grid md:grid-cols-5 h-full">
                                        {/* Left column with image and details */}
                                        <div className="md:col-span-2 bg-indigo-800/30 p-8 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center mb-6">
                                                    <div className="mr-4 relative">
                                                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                                                            <img 
                                                                src={testimonial.image} 
                                                                alt={testimonial.author} 
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center border-2 border-indigo-900">
                                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-xl">{testimonial.author}</h4>
                                                        <p className="text-indigo-200">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-6">
                                                    <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-700/30">
                                                        <div className="text-4xl font-bold text-yellow-300 mb-1">
                                                            {testimonial.stats.improvement}
                                                        </div>
                                                        <div className="text-indigo-200">
                                                            {testimonial.stats.metric}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-auto">
                                                <div className="py-4 px-5 bg-white/10 rounded-lg">
                                                    <img 
                                                        src={testimonial.companyLogo} 
                                                        alt="Company logo" 
                                                        className="h-8 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Right column with testimonial */}
                                        <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                                            <div className="mb-6">
                                                {Array(5).fill(0).map((_, i) => (
                                                    <svg key={i} className="inline-block w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            
                                            <blockquote className="mb-8">
                                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                                                    "{testimonial.quote}"
                                                </p>
                                            </blockquote>
                                            
                                            <div className="mt-auto flex items-center justify-between">
                                                <a href="#case-study" className="text-yellow-300 hover:text-yellow-200 flex items-center font-medium">
                                                    Read full case study
                                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                                
                                                <div className="text-indigo-300 text-sm">
                                                    {index + 1} of {testimonials.length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation arrows */}
                    <button 
                        onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center border border-white/20 focus:outline-none transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center border border-white/20 focus:outline-none transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    {/* Indicator dots */}
                    <div className="flex justify-center mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-3 h-3 mx-1.5 rounded-full focus:outline-none transition-colors duration-300 ${
                                    activeIndex === idx ? 'bg-yellow-300' : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Logos section */}
                <div className="mt-16 text-center">
                    <p className="text-indigo-200 mb-8">Trusted by companies of all sizes</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            "https://placehold.co/160x60/2d3a7b/ffffff?text=TechCorp",
                            "https://placehold.co/160x60/2d3a7b/ffffff?text=BizSales",
                            "https://placehold.co/160x60/2d3a7b/ffffff?text=Enterprise",
                            "https://placehold.co/160x60/2d3a7b/ffffff?text=NextGen",
                            "https://placehold.co/160x60/2d3a7b/ffffff?text=GrowthCo"
                        ].map((logo, index) => (
                            <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <img src={logo} alt={`Logo ${index + 1}`} className="h-8 md:h-10" />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* CTA */}
                <div className="mt-20 text-center">
                    <a 
                        href="#success-stories" 
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-700 font-medium hover:bg-yellow-100 transition-colors duration-300 shadow-lg"
                    >
                        View all success stories
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Custom animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 20s infinite alternate;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}

export default Testimonial;

