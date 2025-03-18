// FloatingStickyCTAButton.jsx

import React, { useState, useEffect } from 'react';

const FloatingStickyCTAButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [bounceAnimation, setBounceAnimation] = useState(false);

    useEffect(() => {
        // Set up periodic bounce animation to draw attention
        const initialBounce = setTimeout(() => {
            setBounceAnimation(true);
            setTimeout(() => setBounceAnimation(false), 1000);
        }, 3000);
        
        const bounceInterval = setInterval(() => {
            if (!isExpanded) {
                setBounceAnimation(true);
                setTimeout(() => setBounceAnimation(false), 1000);
            }
        }, 15000);

        return () => {
            clearTimeout(initialBounce);
            clearInterval(bounceInterval);
        };
    }, [isExpanded]);

    const handleClick = () => {
        // For demo purposes - toggle expanded state
        setIsExpanded(!isExpanded);
        
        // In production, you might want to:
        // 1. Scroll to a specific section
        // 2. Open a modal
        // 3. Start a chat
        // 4. Redirect to signup, etc.
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
            {/* Expanded content - only visible when expanded */}
            {isExpanded && (
                <div className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-fade-in-up w-full">
                    <h4 className="font-bold text-gray-800 mb-2">Ready to transform your service business?</h4>
                    <p className="text-gray-600 text-sm mb-3">Get started with ServeQ today and see the difference.</p>
                    <div className="flex gap-2 justify-center">
                        <a href="#signup" className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded transition-colors duration-200 flex-1 text-center">Start Free Trial</a>
                        <a href="#contact" className="text-xs font-semibold bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-600 py-2 px-3 rounded transition-colors duration-200 flex-1 text-center">
                            Talk to Sales
                        </a>
                    </div>
                </div>
            )}
            
            {/* Main CTA button */}
            <button 
                onClick={handleClick}
                className={`group relative flex items-center justify-center transition-all duration-300
                    ${isExpanded 
                        ? 'bg-indigo-700 hover:bg-indigo-800 rounded-full w-12 h-12' 
                        : 'bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 rounded-full shadow-lg hover:shadow-indigo-500/25 w-auto px-6 py-3.5'
                    }
                    ${bounceAnimation ? 'animate-bounce' : ''}
                `}
                aria-label={isExpanded ? "Close options" : "Get Started"}
            >
                {isExpanded ? (
                    <svg className="w-5 h-5 text-white transform transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <div className="flex items-center text-white">
                        <span className="mr-2 font-semibold">Get Started</span>
                        <div className="relative w-6 h-6 overflow-hidden rounded-full bg-white/20 flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                )}
                
                {/* Pulsing backdrop effect */}
                <span className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20"></span>
                
                {/* Hover gradient glow effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{
                        background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.8) 0%, transparent 70%)',
                        filter: 'blur(8px)'
                    }}>
                </span>
            </button>
            
            {/* Custom animations for the CTA */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
                
                @keyframes subtle-float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-4px);
                    }
                }
                
                .animate-subtle-float {
                    animation: subtle-float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default FloatingStickyCTAButton;
