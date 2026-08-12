import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [size, setSize] = useState('Medium');
  const [hasBase, setHasBase] = useState(true);
  const [price, setPrice] = useState(350);

  // Pricing Logic
  useEffect(() => {
    let basePrice = 350;
    if (size === 'Small') basePrice = 250;
    if (size === 'Large') basePrice = 450;
    
    const finalPrice = basePrice - (hasBase ? 0 : 50);
    setPrice(finalPrice);
  }, [size, hasBase]);

  if (!isOpen || !product) return null;

  const generateWhatsAppMessage = () => {
    const text = `Hello WireKoodai! I'd like to order:\n\n*Product:* ${product.name}\n*Size:* ${size}\n*Cardboard Base:* ${hasBase ? 'Yes' : 'No'}\n*Price:* ₹${price}\n\nPlease let me know the payment details.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row z-10 animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-brand-beige rounded-full hover:bg-brand-cream text-brand-charcoal z-20"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-brand-beige min-h-[300px] flex items-center justify-center p-8">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-auto object-contain max-h-[400px] drop-shadow-xl ${product.id === 'custom-design' ? '' : '-rotate-90'}`}
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-brand-beige text-brand-terracotta text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              {product.tag}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{product.name}</h2>
          <p className="text-brand-brown mb-6">{product.description}</p>
          
          <div className="bg-brand-beige/50 p-4 rounded-lg mb-6 flex justify-between items-center border border-brand-beige">
            <span className="font-medium text-brand-charcoal">Total Price</span>
            <span className="text-3xl font-bold text-brand-terracotta">₹{price}</span>
          </div>

          <div className="space-y-6 flex-grow">
            {/* Step 1: Size */}
            <div>
              <h3 className="text-sm font-bold text-brand-charcoal uppercase tracking-wider mb-3">1. Choose Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {['Small', 'Medium', 'Large'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 px-2 rounded-md border text-center transition-all ${
                      size === s 
                        ? 'border-brand-terracotta bg-brand-terracotta/5 text-brand-terracotta font-semibold' 
                        : 'border-brand-beige text-brand-brown hover:border-brand-charcoal/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-xs text-brand-brown mt-2">
                {size === 'Small' && 'Ideal for Lunch Box & Small Essentials'}
                {size === 'Medium' && 'Ideal for Everyday Shopping & Grocery'}
                {size === 'Large' && 'Ideal for Heavy Duty Storage & Multi-roll Capacity'}
              </p>
            </div>

            {/* Step 2: Base */}
            <div>
              <h3 className="text-sm font-bold text-brand-charcoal uppercase tracking-wider mb-3">2. Base Option</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-brand-beige/30 transition-colors">
                  <input 
                    type="radio" 
                    name="baseOption" 
                    checked={hasBase} 
                    onChange={() => setHasBase(true)}
                    className="w-5 h-5 text-brand-terracotta accent-brand-terracotta"
                  />
                  <span className="ml-3 font-medium flex-1">Include Hard Cardboard Base</span>
                  <span className="text-brand-brown text-sm">Default</span>
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-brand-beige/30 transition-colors">
                  <input 
                    type="radio" 
                    name="baseOption" 
                    checked={!hasBase} 
                    onChange={() => setHasBase(false)}
                    className="w-5 h-5 text-brand-terracotta accent-brand-terracotta"
                  />
                  <span className="ml-3 font-medium flex-1">No Hard Cardboard Base</span>
                  <span className="text-brand-terracotta font-medium">-₹50</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-brand-beige space-y-3">
            <a 
              href={`https://wa.me/918838378398?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-4 bg-[#25D366] text-white font-bold rounded-md hover:bg-[#128C7E] transition-colors shadow-sm"
            >
              Order via WhatsApp
            </a>
            <button className="w-full flex items-center justify-center py-4 bg-brand-charcoal text-white font-bold rounded-md hover:bg-black transition-colors shadow-sm">
              Add to Shopping Bag
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
