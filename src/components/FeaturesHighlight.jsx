// FeaturesHighlight.jsx

import React from 'react';

const FeaturesHighlight = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Features
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        All You Need for Smarter Telecalling
                    </p>
                </div>
                
                {/* Feature 1: Dialer */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div className="order-2 md:order-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-indigo-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Dialer+Dashboard" 
                                alt="Dialer Interface" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Dialer</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Increase call attempts by up to 200% with an automated outbound calling process. Be it status-wise calling, click-to-dial, or campaign-based calling, choose your preferred calling option from our auto dialer.
                        </p>
                        <a 
                            href="#dialer-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
                
                {/* Feature 2: Integrations */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Integrations</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Benefit from a real-time, no code integration process. Get custom integrations and effortlessly connect your ServeQ account with your preferred platform or service provider.
                        </p>
                        <a 
                            href="#integration-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-indigo-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Integrations" 
                                alt="Integrations Dashboard" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Feature 3: Customer Engagement */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div className="order-2 md:order-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-yellow-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Customer+Engagement" 
                                alt="Customer Engagement Interface" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Customer Engagement</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Make the most of multichannel engagement. Build pre-defined templates and customizable scripts. Get SMS and WhatsApp automation and send instant messages – all without saving any contact information!
                        </p>
                        <a 
                            href="#engagement-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
                
                {/* Feature 4: Team Management */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Team Management</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Know what and how your telecallers are doing through real-time reporting. Get call analytics and break notifications – drive higher levels of productivity and optimize your work day.
                        </p>
                        <a 
                            href="#team-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-yellow-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Team+Management" 
                                alt="Team Management Dashboard" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Feature 5: Lead Management */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div className="order-2 md:order-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Lead+Management" 
                                alt="Lead Management Interface" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Lead Management</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            From lead allocation to setting lead priority to accessing lead history, ensure 360-degree lead management. Stay in control of your leads by tracking and managing them all on a single platform.
                        </p>
                        <a 
                            href="#lead-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
                
                {/* Feature 6: Reporting */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Reporting</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            ServeQ makes it easy for you to dive deep into your team and leads' status effortlessly with intuitive dashboards and categorized reports – all in real-time.
                        </p>
                        <a 
                            href="#reporting-details" 
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow"
                        >
                            READ MORE
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-100 rounded-full opacity-70"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-indigo-100 rounded-full opacity-70"></div>
                            <img 
                                src="https://placehold.co/600x400/e2e8f0/4f46e5?text=Reporting+Dashboard" 
                                alt="Reporting Dashboard" 
                                className="relative z-10 rounded-xl shadow-lg border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Additional Features CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-gray-50 rounded-2xl p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Discover More Powerful Features</h3>
                        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                            ServeQ offers many more features designed to streamline your telecalling operations 
                            and boost your team's efficiency.
                        </p>
                        <a 
                            href="#all-features" 
                            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                        >
                            VIEW ALL FEATURES
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesHighlight;

