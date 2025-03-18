// src/components/HeroSection.jsx

const MobileHeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
            <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Mobile-first layout structure */}
                <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
                    
                    {/* Content Column - Feature badge appears at top in both mobile and desktop */}
                    <div className="w-full lg:w-1/2 lg:pr-10 z-10">
                        {/* Feature badge - positioned at top */}
                        <div className="inline-flex items-center mb-4 md:mb-6 px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full shadow-sm">
                            <div className="flex items-center">
                                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mr-2">
                                    <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 uppercase">Enterprise-Grade Solution</span>
                            </div>
                        </div>
                        
                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                            <span className="block">Transform Your Service</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Management Experience</span>
                        </h1>
                        
                        {/* Enhanced subheading */}
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            A full-featured Dialer and Telecalling CRM to <span className="font-semibold text-indigo-700">upgrade productivity</span> and <span className="font-semibold text-indigo-700">supercharge sales</span> with advanced analytics.
                        </p>

                        {/* Enhanced CTA buttons */}
                        <div className="mb-10 flex flex-col sm:flex-row gap-4">
                            <a href="#request-demo" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg shadow-xl hover:shadow-yellow-300/30 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"></span>
                                <span className="relative flex items-center">
                  REQUEST DEMO
                                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </span>
                            </a>
                            <a href="#watch-video" className="group inline-flex items-center justify-center px-6 py-4 bg-white border border-gray-200 text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="mr-2 relative">
                                    <span className="absolute inset-0 rounded-full animate-ping bg-indigo-100 opacity-75"></span>
                                    <div className="relative bg-indigo-100 text-indigo-600 p-1 rounded-full">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span className="font-medium">Watch Demo</span>
                </a>
              </div>
              
                        {/* Enhanced feature cards */}
                        {/* <div className="mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { text: "Dedicated customer support", badge: "24/7" },
                                    { text: "1000+ Integrations", badge: "API" },
                                    { text: "40000+ Happy users", badge: "Global" },
                                    { text: "99.9% uptime guarantee", badge: "SLA" }
                ].map((item, index) => (
                                    <div key={index} className="group flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
                                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full p-1.5 mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                                        <div className="flex-1">
                                            <span className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors duration-200">{item.text}</span>
                                        </div>
                                        {item.badge && (
                                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full group-hover:bg-indigo-200 transition-colors duration-200">{item.badge}</span>
                                        )}
                  </div>
                ))}
              </div>
                        </div>
                        
                        {/* Setup badge */}
                        {/* <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-3 rounded-lg border border-indigo-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                            <svg className="w-6 h-6 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700 font-medium">
                                Setup in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-0.5 rounded text-sm font-bold">minutes</span>. Scale as you grow.
                            </p>
                        </div> */}

                        {/* Trust indicator */}
                        {/* <div className="mt-10 flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm max-w-md">
                            <div className="flex -space-x-3 mr-4">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                                        alt={`User ${i}`}
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover ring-2 ring-indigo-50"
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-800">+450</div>
                            </div>
                            <div>
                                <div className="flex text-yellow-400 mb-1">
                                    {"★★★★★".split('').map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Trusted by <span className="font-bold">500+</span> businesses worldwide
                                </p>
                            </div>
                        </div> */}
                    </div>
                    
                    {/* Image/Visuals Column */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                        {/* Main dashboard with premium styling */}
                        <div className="relative group transform perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-white p-2 rounded-xl shadow-2xl border border-indigo-100 transform transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.01]">
                                {/* Dashboard notification badge */}
                                <div className="absolute -right-3 -top-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg transform rotate-3 animate-pulse">
                                    LIVE PREVIEW
                                </div>

                                {/* Dashboard UI */}
                                <div className="bg-indigo-900/90 rounded-lg overflow-hidden">
                                    {/* Dashboard header */}
                                    <div className="bg-indigo-800 p-3 flex justify-between items-center border-b border-indigo-700/50">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-700/60 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-indigo-700/60 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                                </svg>
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-white/20 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dashboard content */}
                                    <div className="p-4">
                                        <img
                                            src="https://placehold.co/800x400/4338ca/ffffff?text=ServeQ+Dashboard"
                                            alt="ServeQ Dashboard"
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Analytics Card */}
                            <div className="absolute -left-12 top-1/3 bg-white rounded-lg shadow-xl p-3 w-44 transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-indigo-100">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-sm font-semibold text-gray-800">Call Analytics</div>
                                    <div className="bg-indigo-100 rounded-full p-1">
                                        <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-indigo-700">86%</div>
                                <div className="flex items-center text-green-600 text-xs font-medium">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>+12.5% increase</span>
                                </div>
                                <div className="mt-2 grid grid-cols-5 gap-1">
                                    {[30, 45, 25, 60, 75].map((height, i) => (
                                        <div key={i} className="bg-indigo-100 rounded-sm" style={{ height: `${height}px` }}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating notification */}
                            <div className="absolute top-3/4 -right-8 bg-white rounded-lg shadow-xl p-2 max-w-[200px] transform translate-y-0 hover:-translate-y-1 transition-transform duration-300 border border-indigo-100 z-20">
                                <div className="flex items-start space-x-2">
                                    <div className="bg-green-500 rounded-full p-1 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-gray-800">New lead converted!</div>
                                        <div className="text-xs text-gray-500">John D. just scheduled a demo</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Mobile App preview */}
                            <div className="absolute -top-12 -right-6 md:-right-12 w-32 md:w-36 transform hover:-translate-y-2 transition-all duration-300 rotate-3 hover:rotate-6 z-10">
                                <div className="bg-black rounded-3xl overflow-hidden p-2 shadow-2xl border-4 border-indigo-900/20">
                                    <div className="bg-indigo-900 rounded-2xl overflow-hidden relative">
                                        <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-2xl flex justify-center items-end pb-1">
                                            <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                                        </div>
                                        <img
                                            src="https://placehold.co/300x600/4338ca/ffffff?text=ServeQ+Mobile"
                  alt="ServeQ Mobile App" 
                                            className="w-full h-auto pt-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Analytics Dashboard */}
                            <div className="absolute -bottom-16 -left-8 md:-left-16 w-48 md:w-56 transform hover:translate-y-2 transition-all duration-300 -rotate-6 hover:-rotate-3 z-10">
                                <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-indigo-100">
                                    <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                                        <div className="text-xs font-semibold uppercase tracking-wider">Performance Report</div>
                                    </div>
                                    <div className="p-3">
                                        <img
                                            src="https://placehold.co/400x250/e2e8f0/4f46e5?text=Analytics"
                  alt="ServeQ Analytics" 
                                            className="w-full h-auto rounded"
                />
                                    </div>
                                </div>
                            </div>
              </div>
              
                        {/* Character with chat bubble */}
                        {/* <div className="absolute -bottom-8 right-0 flex items-end z-20">
                            <div className="bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 mb-3 mr-3 shadow-lg max-w-[150px] transform hover:-translate-y-1 transition-transform duration-300 border border-indigo-100">
                                <p className="text-sm text-gray-700 font-medium">Need help setting up your account?</p>
                                <div className="mt-2 flex justify-end">
                                    <span className="text-xs text-indigo-600 font-medium cursor-pointer hover:underline">Chat with us →</span>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://placehold.co/200x250/e2e8f0/4f46e5?text=Support"
                alt="Customer Service Agent" 
                                    className="w-28 md:w-32 h-auto rounded-lg shadow-lg"
              />
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                        </div> */}
              
              {/* Decorative elements */}
                        <div className="absolute -z-10 -top-12 -right-8 w-16 h-16 border-4 border-indigo-200 rounded-full opacity-30 animate-spin-slow"></div>
                        <div className="absolute -z-10 bottom-1/3 -left-8 w-12 h-12 bg-yellow-200 rounded-lg opacity-40 transform rotate-12"></div>
                        <div className="absolute -z-10 bottom-0 right-1/3 w-8 h-24 bg-pink-200 rounded-full opacity-30 transform -rotate-12"></div>
                    </div>
                </div>
            </div>

            {/* Trust badges - logos */}
            {/* <div className="container mx-auto max-w-5xl mt-16 px-4">
                <div className="text-center">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gradient-to-r from-white via-white to-white px-4 text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by global brands</span>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-x-12">
                        {['Google', 'Microsoft', 'Slack', 'Amazon', 'IBM'].map((brand, index) => (
                            <div key={index} className="group flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <div className="h-6 md:h-10">
                                    <img src={`https://placehold.co/120x40/4f46e5/ffffff?text=${brand}`} alt={brand} className="h-full" />
                                </div>
                            </div>
                        ))}
          </div>
        </div>
            </div> */}

            {/* Custom animations for the hero section */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 25s linear infinite;
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
      </section>
    );
}

export default MobileHeroSection;

