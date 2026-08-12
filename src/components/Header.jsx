import React from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-brand-cream border-b border-brand-beige sticky top-[36px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button type="button" className="text-brand-charcoal hover:text-brand-terracotta">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:relative left-0 pointer-events-none md:pointer-events-auto">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal pointer-events-auto">
              WireKoodai
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#collection" className="text-brand-charcoal hover:text-brand-terracotta transition-colors font-medium">Shop Collection</a>
            <a href="#about" className="text-brand-charcoal hover:text-brand-terracotta transition-colors font-medium">Why Wire Koodai?</a>
            <a href="#custom" className="text-brand-charcoal hover:text-brand-terracotta transition-colors font-medium">Custom/Bulk Orders</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-charcoal hover:text-brand-terracotta transition-colors">
              <Search size={20} />
            </button>
            <button className="text-brand-charcoal hover:text-brand-terracotta transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-terracotta text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
