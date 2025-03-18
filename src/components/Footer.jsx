// Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return (
    <footer className="relative bg-white pt-24 pb-0 border-t border-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>

      {/* Floating Objects */}
      <div className="absolute top-24 right-[10%] w-24 h-24 bg-indigo-100 rounded-full opacity-30 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-40 left-[5%] w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-float-slow animation-delay-1000 pointer-events-none"></div>
      <div className="absolute top-1/3 left-[20%] w-12 h-12 bg-pink-100 rounded opacity-20 animate-float-slow animation-delay-2000 pointer-events-none transform rotate-45"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Final Footer - Copyright and Links */}
          <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 flex flex-wrap items-center justify-center md:justify-start">
              <span className="mr-2">© {currentYear} ServeQ. All rights reserved.</span>
              <span className="hidden md:block mx-2">•</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">v2.4.1</span>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Accessibility Statement",
                "Sitemap"
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-indigo-600 transition-colors duration-300 relative group"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-gray-400 mb-8 text-center md:text-left">
            <p>ServeQ and all associated marks are trademarks of ServeQ Inc. or its affiliates. Third-party trademarks mentioned are the property of their respective owners.</p>
            <p className="mt-2">This site is protected by reCAPTCHA and the Google <a href="#privacy-policy" className="text-indigo-500 hover:underline">Privacy Policy</a> and <a href="#terms-of-service" className="text-indigo-500 hover:underline">Terms of Service</a> apply.</p>
          </div>

          {/* Language & Region */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                </svg>
                <select className="bg-transparent border-none text-gray-500 pr-8 cursor-pointer focus:outline-none focus:ring-0">
                  <option value="en-us">English (US)</option>
                  <option value="en-gb">English (UK)</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <select className="bg-transparent border-none text-gray-500 pr-8 cursor-pointer focus:outline-none focus:ring-0">
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="eu">European Union</option>
                </select>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
      <div className="relative overflow-hidden h-20 mt-16 bg-indigo-50/30">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4f46e5" fillOpacity="0.08" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4f46e5" fillOpacity="0.05" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,160C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

      {/* Custom animations */}
      <style jsx>{`
                @keyframes float-slow {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
      </footer>
    );
}

export default Footer;