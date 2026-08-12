import React from 'react';
import { Gift } from 'lucide-react';

const CustomOrdersBanner = () => {
  return (
    <section id="custom" className="py-16 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-white/20 backdrop-blur-sm">
          
          <div className="md:w-2/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Gift className="w-8 h-8 mr-3 text-brand-terracotta" />
              <h2 className="text-3xl font-serif font-bold">Thamboolam & Custom Return Gifts</h2>
            </div>
            <p className="text-lg text-brand-beige/90 mb-6">
              Perfect for weddings, poojas, and special occasions. Request custom color combinations and unlock exclusive bulk tier pricing for large orders.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><span className="text-brand-terracotta mr-2">✓</span> Pick your own color schemes</li>
              <li className="flex items-center"><span className="text-brand-terracotta mr-2">✓</span> Personalized tag attachments</li>
              <li className="flex items-center"><span className="text-brand-terracotta mr-2">✓</span> Discounted pricing on 20+ pieces</li>
            </ul>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a 
              href="https://wa.me/918838378398?text=Hello%20WireKoodai!%20I'm%20interested%20in%20bulk%20orders%20for%20a%20function." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-brand-green font-bold rounded-md hover:bg-brand-beige transition-colors shadow-lg"
            >
              Enquire on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomOrdersBanner;
