"use client";

import Image from "next/image";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection"; 
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import ClientSection from "@/components/ClientSection";
import WhyChoose from "@/components/WhyChoose";
import DemoCta from "@/components/DemoCta";
import Footer from "@/components/Footer";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import Testimonial from "@/components/Testimonial"; 
import CTASection from "@/components/CTASection";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import FloatingStickyCTAButton from "@/components/FloatingStickyCTAButton";
import FloatingCTAForm from "@/components/FloatingCTAForm";
import MobileHeroSection from "@/components/MobileHeroSection";
export default function Home() {
  // Animation setup
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      if (scrollProgressBar) {
        scrollProgressBar.style.width = scrollPercentage + '%';
      }
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-800 w-0" id="scrollProgressBar"></div>
      </div>
      
      {/* Top Header Banner - NEW */}
      <TopHeader />
      
      {/* Main Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection/>

      {/* Mobile Hero Section */}
      {/* <MobileHeroSection/> */}

      {/* Request Demo CTA - matches image style */}
      {/* <DemoCta /> */}
      
      {/* Clients Section */}
      <ClientSection />
      
      {/* Why Choose Us Section */}
      <WhyChoose />
      
      {/* Feature Highlights */}
      <FeaturesHighlight />
      
      {/* Testimonials Section */}
      <Testimonial /> 
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Floating Sticky CTA Button */}
      <FloatingStickyCTAButton />

      {/* Floating CTA Form */}
      <FloatingCTAForm />

      {/* Back to top button with animation */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 z-50 animate-bounce-slow"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </a>
    </div>
  );
} 