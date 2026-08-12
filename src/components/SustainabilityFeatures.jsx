import React from 'react';
import { Recycle, Droplets, HeartHandshake } from 'lucide-react';

const SustainabilityFeatures = () => {
  const features = [
    {
      icon: <Recycle className="w-10 h-10 text-brand-terracotta mb-4" />,
      title: "100% Recyclable Material",
      description: "Made from durable, high-density recyclable plastic wire that replaces hundreds of single-use plastic bags."
    },
    {
      icon: <Droplets className="w-10 h-10 text-brand-terracotta mb-4" />,
      title: "Washable & Heavy Duty",
      description: "Water-resistant and easy to clean. Reinforced bottom knot structure handles high weight capacity effortlessly."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-brand-terracotta mb-4" />,
      title: "Handcrafted Heritage",
      description: "Supporting local weavers and keeping the traditional Tamil Nadu wire knot craft alive with every purchase."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Crafted for You, Kind to the Earth</h2>
          <p className="text-brand-brown">
            Our Koodais are more than just bags. They represent a commitment to sustainable living and the preservation of authentic Indian craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-brand-beige p-4 rounded-full mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-brand-brown">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFeatures;
