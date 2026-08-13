import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import SustainabilityFeatures from './components/SustainabilityFeatures';
import CustomOrdersBanner from './components/CustomOrdersBanner';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FallingKoodais from './components/FallingKoodais';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans relative overflow-x-hidden">
      <FallingKoodais />
      <AnnouncementBar />
      <Header />
      
      <main>
        <HeroSection />
        <ProductGrid />
        <SustainabilityFeatures />
        <CustomOrdersBanner />
      </main>
      
      <footer className="bg-brand-charcoal text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">WireKoodai</h3>
              <p className="text-gray-400 max-w-sm">
                Authentic, handwoven plastic wire bags directly from the artisans of South India. 
                Sustainable, durable, and stylish.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#collection" className="hover:text-brand-terracotta transition-colors">Shop Collection</a></li>
                <li><a href="#about" className="hover:text-brand-terracotta transition-colors">Why Wire Koodai?</a></li>
                <li><a href="#custom" className="hover:text-brand-terracotta transition-colors">Bulk Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tirunelveli, Tamil Nadu</li>
                <li>mailtorani777@gmail.com</li>
                <li>+91 88383 78398</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} WireKoodai by Muthulakshmi Wire Bags. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
