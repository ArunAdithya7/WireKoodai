import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-brand-charcoal px-4 py-2 rounded-lg shadow-lg mb-3 relative flex items-center animate-bounce">
          <span className="text-sm font-medium">Chat for Custom Colors & Bulk Orders</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-brand-brown hover:text-brand-charcoal"
          >
            <X size={14} />
          </button>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918838378398"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
