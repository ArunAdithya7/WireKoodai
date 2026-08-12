import React from 'react';
import { Leaf } from 'lucide-react';

const ProductCard = ({ product, onOpenModal }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-brand-beige">
      
      {/* Image Container */}
      <div 
        className="relative h-64 sm:h-72 bg-brand-beige flex items-center justify-center p-6 cursor-pointer overflow-hidden"
        onClick={() => onOpenModal(product)}
      >
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
          {product.tag}
        </span>
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${product.id === 'custom-design' ? '' : '-rotate-90'}`}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-brand-green mb-2 font-medium">
          <Leaf size={12} className="mr-1" />
          <span>Eco-Friendly</span>
        </div>
        
        <h3 
          className="text-xl font-serif font-bold text-brand-charcoal mb-2 cursor-pointer hover:text-brand-terracotta transition-colors line-clamp-2"
          onClick={() => onOpenModal(product)}
        >
          {product.name}
        </h3>
        
        <p className="text-brand-brown text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-beige">
          <div>
            <p className="text-xs text-brand-brown uppercase tracking-wider mb-1">Price Range</p>
            <p className="font-bold text-brand-charcoal">₹300 - ₹700</p>
          </div>
          <button 
            onClick={() => onOpenModal(product)}
            className="px-4 py-2 bg-brand-charcoal text-white text-sm font-medium rounded hover:bg-brand-terracotta transition-colors"
          >
            Customize & Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
