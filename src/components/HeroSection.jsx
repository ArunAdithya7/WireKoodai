import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-brand-beige py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Timeless South Indian Craft, Reimagined for Daily Living.
          </h1>
          <p className="text-lg sm:text-xl text-brand-brown mb-8 font-light">
            Handwoven, water-resistant, ultra-durable plastic wire bags crafted by local artisans. Built to last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#collection" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-charcoal hover:bg-black transition-colors shadow-sm"
            >
              Shop Collection
            </a>
            <a 
              href="#custom" 
              className="inline-flex justify-center items-center px-8 py-4 border border-brand-charcoal text-base font-medium rounded-md text-brand-charcoal bg-transparent hover:bg-brand-cream transition-colors"
            >
              Order Custom Colors on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-terracotta opacity-10 blur-3xl transform translate-x-1/2 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
