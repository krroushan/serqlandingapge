// Pricing.jsx

import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-800">One Pricing. One Plan.</span>
                        <span className="text-purple-600"> One CRM.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        Simplify your success with our revolutionary Telecalling CRM plans!
                    </p>
                    
                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6">
                        {[
                            { text: 'Effortless Setup', icon: '✓' },
                            { text: 'Cost-effective', icon: '✓' },
                            { text: 'Prompt Support', icon: '✓' },
                            { text: 'Easy Adoption', icon: '✓' }
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center">
                                <span className="flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full text-white text-xs mr-2">
                                    {benefit.icon}
                                </span>
                                <span className="text-gray-700">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Standard Plan */}
                    <div className="bg-purple-600 text-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="p-8">
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                                    NeoDove
                                </span>
                            </div>
                            
                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <div className="text-white/60 line-through text-lg">Originally - ₹19,999</div>
                                </div>
                                <div className="flex items-baseline">
                                    <div className="text-lg font-medium">Now Only at</div>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold">₹17,499</span>
                                    <span className="text-white/80 ml-2">per year</span>
                                </div>
                                <div className="mt-2 text-white/80 text-sm">
                                    Add up to 20 users (These prices are exclusive to clients in India)
                                </div>
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="text-xl font-medium mb-3">Ideal For:</h3>
                                <p className="text-white/90">
                                    Businesses looking for essential features at a cost-effective price
                                </p>
                            </div>
                            
                            <button className="w-full bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    
                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="p-8">
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                    Enterprise
                                </span>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-gray-800">Custom Plan</h3>
                                <p className="text-gray-600 mt-2">
                                    (Personalized to meet your specific needs, especially for teams with over 20 users.)
                                </p>
                            </div>
                            
                            <div className="mb-8">
                                <div className="text-gray-800 font-medium">Starting from Rs 500 per user per month</div>
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="text-xl font-medium mb-3 text-gray-800">Ideal For:</h3>
                                <p className="text-gray-600">
                                    Businesses seeking custom-built solutions and limitless integrations for scalability.
                                </p>
                            </div>
                            
                            <button className="w-full bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Feature List */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
                        {/* Left Column */}
                        <div>
                            <ul className="space-y-4">
                                {[
                                    'No extra cost for adding up to 20 users',
                                    'Store up to 200,000 Contacts',
                                    'Create up to 5 Pipeline',
                                    'Create up to 10 Workflows'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full text-gray-600 text-xs mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Right Column */}
                        <div>
                            <ul className="space-y-4">
                                {[
                                    'All NeoDove Plus features included',
                                    'Unlimited Contact Storage',
                                    'Unlimited Campaigns without limits',
                                    'Unlimited Pipeline',
                                    'Unlimited Workflows',
                                    '1,000+ Integrations & Custom Automations'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full text-gray-600 text-xs mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="mt-6 inline-flex items-center text-purple-600 font-medium hover:text-purple-800">
                                <span className="flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full text-white text-xs mr-2">
                                    +
                                </span>
                                Show all
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Comparison Section */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Which Plan is Right for You?
                    </h2>
                    
                    <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
                        {/* Plan Comparison */}
                        <div className="grid grid-cols-2">
                            <div className="bg-purple-600 text-white p-4 text-center font-bold text-xl">
                                NeoDove
                            </div>
                            <div className="bg-gray-100 text-gray-800 p-4 text-center font-bold text-xl">
                                Custom Plan
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2">
                            <div className="bg-white p-5 border-r border-gray-200">
                                <p className="text-gray-700">
                                    Crafted for businesses and teams aiming for an affordable solution with essential features and responsive customer support.
                                </p>
                            </div>
                            <div className="bg-white p-5">
                                <p className="text-gray-700">
                                    Ideal for growing businesses that need to scale faster, require extensive integrations, and dedicated support to manage a large number of customers effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Competitive Comparison */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        <span className="text-purple-600">NeoDove</span> <span className="text-gray-500">Vs Manual Calling</span>  
                        <br className="md:hidden" />
                        <span className="hidden md:inline"> </span>
                        <span className="text-gray-500">Vs Traditional CRM</span>
                    </h2>
                    
                    <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-2/5">
                                        Terms
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-medium text-purple-600 uppercase tracking-wider w-1/5">
                                        NeoDove
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider w-1/5">
                                        Manual Calling
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider w-1/5">
                                        Traditional CRM
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Different Calling Methods<br/>(SIM-based, Cloud Telephony, VoIP)
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        One-touch communication<br/>(WhatsApp, Email, SMS)
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-green-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        360-degree Lead Management
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-green-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Integrations with multiple channels
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-green-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Real-time Performance Analytics
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-green-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Follow-up Reminders
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-green-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        User and Admin level reports
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Mobile Access to CRM
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Easy-to-use user interface
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Dedicated Customer Support
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full text-purple-600 mx-auto">
                                            ✓
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full text-red-600 mx-auto">
                                            ✗
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* CTA */}
                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-block bg-purple-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-1">
                        Get Started Today
                    </a>
                    <p className="mt-4 text-gray-600">
                        No credit card required. 14-day free trial available.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
