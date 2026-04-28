'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface ProjectImageSliderProps {
  images: string[];
}

export default function ProjectImageSlider({ images }: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </AnimatePresence>

        {/* Fullscreen Trigger */}
        <div style={{ 
          position: 'absolute', 
          top: '1.5rem', 
          right: '1.5rem', 
          zIndex: 3,
          opacity: 0,
          transition: 'opacity 0.3s'
        }} className="slider-controls">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsFullscreen(true); }}
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', 
              borderRadius: '12px', 
              padding: '0.5rem',
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <Maximize2 size={20} />
          </button>
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '0 1rem',
            zIndex: 2,
            opacity: 0,
            transition: 'opacity 0.3s'
          }} className="slider-controls">
            <button 
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
              style={{ background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
              style={{ background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div style={{ 
            position: 'absolute', 
            bottom: '1.5rem', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            gap: '0.5rem',
            zIndex: 2 
          }}>
            {images.map((_, i) => (
              <div 
                key={i} 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s'
                }} 
              />
            ))}
          </div>
        )}

        <style jsx>{`
          div:hover .slider-controls {
            opacity: 1 !important;
          }
        `}</style>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.98)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setIsFullscreen(false)}
          >
            {/* Fullscreen Close */}
            <button 
              onClick={() => setIsFullscreen(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10001
              }}
            >
              <X size={32} />
            </button>

            {/* Fullscreen Navigation */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                  style={{ 
                    position: 'absolute', left: '2rem', zIndex: 10001,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                    color: '#fff', borderRadius: '50%', width: '60px', height: '60px', 
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); paginate(1); }}
                  style={{ 
                    position: 'absolute', right: '2rem', zIndex: 10001,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                    color: '#fff', borderRadius: '50%', width: '60px', height: '60px', 
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            
            <div style={{ position: 'relative', width: '90%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  style={{
                    position: 'absolute',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 30px 100px rgba(0,0,0,0.8)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            {/* Fullscreen Pagination */}
            {images.length > 1 && (
              <div style={{ 
                position: 'absolute', 
                bottom: '3rem', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                display: 'flex', 
                gap: '1rem'
              }}>
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                      transition: 'all 0.3s'
                    }} 
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
