// FloatingCTAForm.jsx
import React, { useState, useEffect } from 'react';

const FloatingCTAForm = () => {
    // State to manage visibility
    const [isVisible, setIsVisible] = useState(false);
    const [isFormExpanded, setIsFormExpanded] = useState(false);
    const [formVariant, setFormVariant] = useState(1); // 1 or 2 for different messages
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: ''
    });

    // Handle scroll position
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            
            // Check if user has already dismissed or submitted the form
            if (hasBeenDismissed || hasSubmitted) return;
            
            // Show at 30% with variant 1
            if (scrollPercentage >= 5 && scrollPercentage < 10) {
                setFormVariant(1);
                setIsVisible(true);
            } 
            // Show at 60% with variant 2
            else if (scrollPercentage >= 10) {
                setFormVariant(2);
                setIsVisible(true);
            } 
            // Hide otherwise
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasBeenDismissed, hasSubmitted]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setHasSubmitted(true);
        setTimeout(() => {
            setIsVisible(false);
            // Reset form after hiding
            setTimeout(() => {
                setFormData({ name: '', phone: '', service: '' });
                setIsFormExpanded(false);
            }, 500);
        }, 2000);
    };

    // Handle dismissal
    const handleDismiss = () => {
        setIsVisible(false);
        setHasBeenDismissed(true);
    };

    // New function to handle video modal
    const [showVideoModal, setShowVideoModal] = useState(false);

    const handleWatchVideo = () => {
        // You would replace this URL with your actual video URL
        setShowVideoModal(true);
        // Optional: track analytics for video views
        console.log('Video watch requested');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay with backdrop blur */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={handleDismiss}
            />
            
            {/* Centered form container */}
            <div className="relative max-w-sm w-[90%] sm:w-[400px] mx-auto transform transition-all duration-500 ease-in-out z-10">
                {/* Animation for entrance */}
                <div className={`transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    {/* Main container */}
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-indigo-50">
                        {/* Header - varies based on variant */}
                        <div className={`p-4 ${formVariant === 1 ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-yellow-500 to-amber-500'}`}>
                            <div className="flex justify-between items-center">
                                <h3 className="text-white font-bold text-lg">
                                    {formVariant === 1 ? "See How It Works" : "Special Offer Inside!"}
                                </h3>
                                <button 
                                    onClick={handleDismiss}
                                    className="text-white/80 hover:text-white transition-colors p-1"
                                    aria-label="Close form"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-white/90 text-sm mt-1">
                                {formVariant === 1 
                                    ? "Choose how you'd like to learn more about our platform" 
                                    : "Book a demo today and get 20% off your first month!"}
                            </p>
                        </div>

                        {/* Conditional rendering based on submission state */}
                        {hasSubmitted ? (
                            <div className="p-6 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                                <p className="text-gray-600">Our team will contact you shortly to schedule your demo.</p>
                            </div>
                        ) : showVideoModal ? (
                            <div className="p-4">
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                                    {/* This is a placeholder for the actual video embed */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 text-indigo-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            <p className="text-gray-500">Video placeholder</p>
                                            <p className="text-gray-400 text-sm">Replace with your actual video embed</p>
                                        </div>
                                    </div>
                                    {/* You would replace this with your actual video iframe */}
                                    {/* <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                </div>
                                <div className="flex gap-3">
                                    <button 
                                        type="button"
                                        onClick={() => setShowVideoModal(false)}
                                        className="flex-1 py-2.5 px-4 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
                                    >
                                        Back to Options
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => {
                                            setShowVideoModal(false);
                                            setIsFormExpanded(true);
                                        }}
                                        className="py-2.5 px-4 rounded-lg font-medium text-indigo-700 border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                                    >
                                        Book Demo
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="p-5">
                                    {/* Two-option selection */}
                                    <div className="space-y-3">
                                        <button 
                                            onClick={handleWatchVideo}
                                            className="w-full py-3 px-4 rounded-lg flex items-center justify-between border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
                                        >
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-purple-600 group-hover:bg-purple-200 transition-colors">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="font-medium text-gray-800">Watch Video</h4>
                                                    <p className="text-xs text-gray-500">See our platform in action (2 min)</p>
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        
                                        <button 
                                            onClick={() => setIsFormExpanded(true)}
                                            className="w-full py-3 px-4 rounded-lg flex items-center justify-between border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
                                        >
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 group-hover:bg-green-200 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="font-medium text-gray-800">Book Live Demo</h4>
                                                    <p className="text-xs text-gray-500">Schedule a personalized walkthrough</p>
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded booking form */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFormExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 pt-0">
                                        <div className="w-full h-px bg-gray-200 mb-4"></div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    id="phone" 
                                                    name="phone" 
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="mb-4">
                                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                                                <select 
                                                    id="service" 
                                                    name="service" 
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                                    required
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="electrical">Electrical Services</option>
                                                    <option value="plumbing">Plumbing</option>
                                                    <option value="cleaning">Home Cleaning</option>
                                                    <option value="repairs">Repairs & Maintenance</option>
                                                    <option value="solar">Solar Installation</option>
                                                    <option value="ac">AC Services</option>
                                                </select>
                                            </div>
                                            
                                            <div className="flex gap-3">
                                                <button 
                                                    type="submit" 
                                                    className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                                                        formVariant === 1 
                                                            ? 'bg-indigo-600 hover:bg-indigo-700' 
                                                            : 'bg-amber-500 hover:bg-amber-600'
                                                    } shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                                                >
                                                    Book My Demo
                                                </button>
                                                
                                                <button 
                                                    type="button" 
                                                    onClick={() => setIsFormExpanded(false)}
                                                    className="py-2.5 px-4 rounded-lg font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                                                >
                                                    Back
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Trust badge at bottom */}
                        <div className="py-2 px-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
                            <div className="flex items-center text-gray-600 text-xs">
                                <svg className="w-4 h-4 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Trusted by 10,000+ customers</span>
                            </div>
                        </div>
                    </div>

                    {/* Glow effect behind the form */}
                    <div className="absolute -inset-1 rounded-xl bg-indigo-500/20 -z-10 animate-pulse-slow opacity-75 blur-sm" />
                </div>
            </div>
            
            {/* Custom animation for pulsing effect */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.03); }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default FloatingCTAForm;
