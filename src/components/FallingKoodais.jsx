import React, { useEffect, useState } from 'react';

const bagImages = [
  { src: '/Bag 1.png', rotate: '-rotate-90' },
  { src: '/Bag 2.png', rotate: '-rotate-90' },
  { src: '/Bag 3.png', rotate: '-rotate-90' },
  { src: '/Cust.png', rotate: '' },
];

const FallingKoodais = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 12 + Math.random() * 20; 
      const size = 40 + Math.random() * 60; 
      const bag = bagImages[Math.floor(Math.random() * bagImages.length)];
      const rotateStart = Math.random() * 360; 
      const rotateEnd = rotateStart + (Math.random() > 0.5 ? 360 : -360); 

      return {
        id: i,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        image: bag.src,
        baseRotationClass: bag.rotate,
        rotateStart,
        rotateEnd,
      };
    });
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute top-[-150px] opacity-40"
          style={{
            left: el.left,
            width: el.width,
            animation: `fall-${el.id} ${el.animationDuration} linear ${el.animationDelay} infinite`,
          }}
        >
          <img
            src={el.image}
            alt=""
            className={`w-full h-full object-contain mix-blend-multiply ${el.baseRotationClass}`}
          />
          <style>
            {`
              @keyframes fall-${el.id} {
                0% { transform: translateY(-10vh) rotate(${el.rotateStart}deg) scale(0.8); opacity: 0; }
                10% { opacity: 0.6; scale: 1; }
                90% { opacity: 0.6; scale: 1; }
                100% { transform: translateY(110vh) rotate(${el.rotateEnd}deg) scale(0.8); opacity: 0; }
              }
            `}
          </style>
        </div>
      ))}
    </div>
  );
};

export default FallingKoodais;
