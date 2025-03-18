// ClientSection.jsx

import React, { useEffect, useRef } from 'react';

const ClientSection = () => {
    // Company logos with their respective industries
    const clients = [
        { name: 'Microsoft', industry: 'Technology', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Microsoft' },
        { name: 'Google', industry: 'Technology', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Google' },
        { name: 'Slack', industry: 'Communication', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Slack' },
        { name: 'Amazon', industry: 'E-Commerce', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Amazon' },
        { name: 'IBM', industry: 'Enterprise', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=IBM' },
        { name: 'Shopify', industry: 'E-Commerce', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Shopify' },
        { name: 'Adobe', industry: 'Creative', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Adobe' },
        { name: 'PayPal', industry: 'Finance', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=PayPal' },
        { name: 'Salesforce', industry: 'CRM', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Salesforce' },
        { name: 'Spotify', industry: 'Media', logo: 'https://placehold.co/180x60/e2e8f0/4f46e5?text=Spotify' }
    ];

    // Clone clients for seamless infinite scrolling
    const allClients = [...clients, ...clients];
    
    // Reference for scroll pause on hover
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        
        if (!slider) return;
        
        // Pause animation on hover
        const handleMouseEnter = () => {
            slider.style.animationPlayState = 'paused';
        };
        
        const handleMouseLeave = () => {
            slider.style.animationPlayState = 'running';
        };
        
        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            if (slider) {
                slider.removeEventListener('mouseenter', handleMouseEnter);
                slider.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <section className="py-20 bg-white border-t border-b border-gray-100">
            <div className="container mx-auto px-4 max-w-6xl mb-12">
                {/* Section header */}
                <div className="text-center mb-10">
                    <p className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full uppercase tracking-wider mb-3">Our Clients</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Trusted by Industry-Leading Companies
                    </h2>
                    <div className="mx-auto max-w-2xl">
                        <p className="text-gray-600">
                            Join <span className="font-semibold text-indigo-700">500+</span> organizations that use ServeQ to revolutionize their service management
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
                
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>
                
                {/* Sliding logos container */}
                <div className="overflow-hidden relative">
                    <div 
                        ref={sliderRef}
                        className="infinite-scroll-x py-6"
                    >
                        <div className="flex space-x-16 items-center">
                            {allClients.map((client, index) => (
                                <div 
                                    key={index} 
                                    className="flex-shrink-0 group relative"
                                >
                                    <img 
                                        src={client.logo} 
                                        alt={`${client.name} logo`} 
                                        className="h-12 md:h-14 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                                    />
                                    
                                    {/* Tooltip */}
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none">
                                        <div className="bg-indigo-700 text-white text-xs font-medium py-1 px-2 rounded shadow-lg relative">
                                            {client.name}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-indigo-700"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                .infinite-scroll-x {
                    animation: scroll-x 40s linear infinite;
                }
                
                @keyframes scroll-x {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 2rem));
                    }
                }
            `}</style>
        </section>
    );
};

export default ClientSection;
