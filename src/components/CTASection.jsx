// CTASection.jsx

import React from 'react';

const CTASection = () => {
    return (
        <section className="py-16 md:py-24 bg-yellow-50 relative overflow-hidden">
            {/* Dotted path illustration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="absolute w-2/3 max-w-3xl left-0 opacity-10" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200,100 C350,150 450,250 500,400 C550,550 650,650 800,700" stroke="#333" strokeWidth="2" strokeDasharray="10,10" />
                </svg>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-24 left-24 w-32 h-32 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-10">
                <div className="w-16 h-16 relative">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#333333" strokeWidth="1.5">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                        <path d="M12 7L12 12L15 15" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-full h-full absolute top-0 left-0 rotate-45" fill="none" stroke="#333333" strokeWidth="1.5">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                        <path d="M12 7L12 12L15 15" />
                    </svg>
                </div>
            </div>
            
            <div className="absolute top-1/3 right-24 w-24 h-24 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
            </div>
            
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 xl:px-0 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Text */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                            Think your telecalling team is good?
                            <span className="block mt-2">It could be great.</span>
                        </h2>
                        
                        <p className="text-xl text-gray-700 mb-8">
                            Increase telecalling efficiency by up to 
                            <span className="text-2xl font-bold text-yellow-600 ml-2">93%!</span>
                        </p>
                        
                        <div className="flex flex-wrap gap-6 mt-10">
                            <div className="flex items-center">
                                <svg className="w-8 h-8 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-700">Higher conversion rates</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-700">Better lead management</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-8 h-8 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-700">Improved team productivity</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Form */}
                    <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request a Demo</h3>
                        
                        <form className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                                    required
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                                    required
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                                    required
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                                    required
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Company Name" 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                                    required
                                />
                            </div>
                            
                            <div>
                                <select 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-500"
                                    required
                                >
                                    <option value="">Number of Users (Telecallers)</option>
                                    <option value="1-5">1-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="11-25">11-25</option>
                                    <option value="26-50">26-50</option>
                                    <option value="50+">50+</option>
                                </select>
                            </div>
                            
                            <div className="mt-2">
                                <label className="flex items-start text-sm text-gray-500">
                                    <input type="checkbox" className="mt-1 mr-3" required />
                                    <span>
                                        By submitting this form, I give my consent to receive message/email/whatsapp and updates to my number or email address
                                    </span>
                                </label>
                            </div>
                            
                            {/* reCAPTCHA placeholder */}
                            <div className="bg-gray-100 border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                                <svg className="w-6 h-6 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-500">reCAPTCHA verification</span>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                            >
                                REQUEST DEMO
                            </button>
                        </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CTASection;
