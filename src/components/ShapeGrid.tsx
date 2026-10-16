import React from 'react';
import { motion } from 'motion/react';

interface ShapeProps {
  delay: number;
}

const Circle = ({ delay }: ShapeProps) => (
  <motion.circle
    cx="50"
    cy="50"
    r="5"
    initial={{ scale: 0.8, opacity: 0.3 }}
    animate={{ 
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="fill-brand-orange/60"
  />
);

const Square = ({ delay }: ShapeProps) => (
  <motion.rect
    x="45"
    y="45"
    width="12"
    height="12"
    initial={{ rotate: 0, opacity: 0.3 }}
    animate={{ 
      rotate: [0, 90, 0, -90, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="fill-brand-orange-deep/40"
  />
);

const Triangle = ({ delay }: ShapeProps) => (
  <motion.path
    d="M50 35 L60 55 L40 55 Z"
    initial={{ y: 0, opacity: 0.3 }}
    animate={{ 
      y: [-5, 5, -5],
      opacity: [0.3, 0.8, 0.3],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="fill-charcoal/30"
  />
);

export const ShapeGrid = () => {
  const rows = 10;
  const cols = 15;
  
  const shapes = [Circle, Square, Triangle];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${cols * 100} ${rows * 100}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {Array.from({ length: rows }).map((_, r) => (
          Array.from({ length: cols }).map((_, c) => {
            const index = r * cols + c;
            const ShapeComp = shapes[index % shapes.length];
            const delay = (Math.sin(r) + Math.cos(c)) * 2; // More organic staggered delay
            
            return (
              <g key={`${r}-${c}`} transform={`translate(${c * 100 + (r % 2 === 0 ? 25 : 0)}, ${r * 100})`}>
                <ShapeComp delay={delay} />
              </g>
            );
          })
        ))}
      </svg>
      {/* Overlay gradient to keep text readable and add depth */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0%,var(--color-off-white)_80%)]"></div>
    </div>
  );
};
