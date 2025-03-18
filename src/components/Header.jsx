// Header.jsx

import React from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-indigo-900">Serve</span>
              <span className="text-pink-500">Q</span>
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                Product
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
                <a href="#product-features" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Features</a>
                <a href="#integrations" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Integrations</a>
                <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Solutions</a>
              </div>
            </div>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 py-2">Pricing</a>
            <div className="relative group">
              <a href="#resources" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
                <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Blog</a>
                <a href="#guides" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Guides</a>
                <a href="#documentation" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Documentation</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#company" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
                <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">About Us</a>
                <a href="#careers" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Careers</a>
                <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
              </div>
            </div>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex space-x-3">
            <a href="/login" className="px-5 py-2 text-indigo-700 border border-indigo-100 rounded font-medium hover:bg-indigo-50 transition-all duration-300">
              LOGIN
            </a>
            <a href="#request-demo" className="px-5 py-2 bg-indigo-700 text-white rounded font-medium hover:bg-indigo-800 transition-all duration-300">
              REQUEST DEMO
            </a>
          </div>
        </div>
      </header>
    );
}

export default Header;
