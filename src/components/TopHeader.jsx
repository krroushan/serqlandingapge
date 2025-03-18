// TopHeader.jsx

import React from 'react';

const TopHeader = () => {
    return (
        <div className="bg-indigo-700 text-white py-2 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-2 sm:mb-0">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.498 11.697c-.453-.453-1.134-.453-1.587 0l-5.08 5.081-2.55-2.551c-.453-.453-1.134-.453-1.587 0-.452.452-.452 1.134 0 1.587l3.344 3.344c.453.453 1.187.453 1.64 0l5.874-5.874c.452-.453.452-1.134 0-1.587zm3.001-7.743v15.092c0 2.747-2.251 4.998-4.997 4.998h-12.005c-2.747 0-4.997-2.251-4.997-4.998v-15.092c0-2.747 2.251-4.998 4.997-4.998h12.005c2.746 0 4.997 2.251 4.997 4.998zm-1.999 0c0-1.657-1.342-3-2.998-3h-12.005c-1.657 0-2.998 1.343-2.998 3v15.092c0 1.657 1.342 3 2.998 3h12.005c1.657 0 2.998-1.343 2.998-3v-15.092z"/>
            </svg>
            <span className="text-sm">Join our WhatsApp Channel for the latest updates.</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
            </svg>
            <span className="text-sm font-medium">+91 95096 24545 (Support Number)</span>
          </div>
        </div>
      </div>
    );
}


export default TopHeader;
