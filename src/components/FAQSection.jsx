// FAQSection.jsx

import React, { useState } from 'react';

const FAQSection = () => {
    // State to track which FAQ is currently expanded
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for expanding/collapsing FAQs
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FAQ data
    const faqs = [
        {
            question: "How long does it take to set up ServeQ?",
            answer: "Most customers are up and running within a day. Our onboarding team will help you set up your account, import your data, and train your team so you can start using ServeQ right away."
        },
        {
            question: "Can I integrate ServeQ with my existing tools?",
            answer: "Yes, ServeQ integrates with popular business tools including QuickBooks, Xero, Stripe, Zoom, Google Calendar, and many more. We also offer an API for custom integrations."
        },
        {
            question: "Is there a contract or can I cancel anytime?",
            answer: "There are no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time without penalties."
        },
        {
            question: "Do you offer support for new users?",
            answer: "Absolutely! We offer comprehensive support including a knowledge base, video tutorials, webinars, and direct support via chat, email, or phone depending on your plan."
        },
        {
            question: "Is my data secure with ServeQ?",
            answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and maintain SOC 2 compliance. Your data is backed up regularly, and we provide options for data export and portability."
        },
        {
            question: "What kind of businesses use ServeQ?",
            answer: "ServeQ is used by a wide range of service businesses, from small local companies to enterprise organizations. This includes HVAC, plumbing, electrical, cleaning, landscaping, pest control, IT services, and many other field service industries."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-50 rounded-full opacity-60 blur-3xl"></div>
            
            {/* Decorative dots pattern */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute -top-24 -right-24 w-96 h-96">
                    <div className="w-full h-full opacity-10" style={{
                        backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96">
                    <div className="w-full h-full opacity-10" style={{
                        backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
                        FREQUENTLY ASKED QUESTIONS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Got questions? We've got answers.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about ServeQ to get started
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    {/* Filter Categories */}
                    <div className="flex flex-wrap justify-center mb-10 gap-2">
                        {['All Questions', 'Getting Started', 'Pricing', 'Features', 'Support'].map((category, idx) => (
                            <button 
                                key={idx}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                    idx === 0 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    {/* Search Box */}
                    <div className="relative mb-10">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full px-5 py-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    
                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                                    activeIndex === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full px-6 py-5 text-left"
                                    aria-expanded={activeIndex === index}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                    <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 transition-transform duration-300 ${
                                        activeIndex === index ? 'rotate-180' : ''
                                    }`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}>
                                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                                        <p>{faq.answer}</p>
                                        
                                        {/* Additional helpful links */}
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Was this helpful?</p>
                                            <div className="flex space-x-2">
                                                <button className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors">
                                                    Yes
                                                </button>
                                                <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                                    No
                                                </button>
                                            </div>
                                            
                                            {/* Related articles */}
                                            <div className="mt-4">
                                                <p className="text-sm font-medium text-gray-700 mb-2">Related articles:</p>
                                                <ul className="text-sm text-indigo-600">
                                                    <li className="mb-1">
                                                        <a href="#" className="hover:underline flex items-center">
                                                            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                            </svg>
                                                            Getting started guide
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="hover:underline flex items-center">
                                                            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                            </svg>
                                                            Video tutorial
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Still have questions prompt */}
                    <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Still have questions?</h3>
                        <p className="text-gray-600 mb-6">
                            Our team is ready to help you with any other questions you might have.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#" className="flex items-center bg-white px-5 py-3 rounded-lg text-indigo-600 font-medium shadow-sm hover:shadow-md transition-shadow">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                </svg>
                                Contact Support
                            </a>
                            <a href="#" className="flex items-center bg-white px-5 py-3 rounded-lg text-indigo-600 font-medium shadow-sm hover:shadow-md transition-shadow">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Browse Knowledge Base
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
