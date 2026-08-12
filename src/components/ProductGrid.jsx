import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { products } from '../data/products';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 200); // Wait for transition
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="collection" className="py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Signature Collection</h2>
          <p className="text-brand-brown text-lg">
            Discover our range of handcrafted wire koodais. Choose your favorite style, customize the size, and make it yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenModal={handleOpenModal} 
            />
          ))}
        </div>

      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
      
    </section>
  );
};

export default ProductGrid;
