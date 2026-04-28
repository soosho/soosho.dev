'use client';

import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hyperspeed from './Hyperspeed';

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.05, 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] as const 
    }
  })
};

const title1 = "Full-Stack";
const title2 = "Architect.";

import LaunchButton from './LaunchButton';

export default function Hero() {
  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    totalLightsCnt: 80,
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    carWidth: 1,
    carHeight: 0.5,
    carSpacing: 12,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131313,
      brokenLines: 0x131313,
      leftCars: [0xa855f7, 0x7e22ce, 0x6b21a8],
      rightCars: [0xffffff, 0xd1d5db, 0x9ca3af],
      sticks: 0xa855f7
    }
  }), []);

  return (
    <section style={{ 
      height: '100vh', 
      width: '100%',
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#000'
    }}>
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
        {/* Vignette Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '1000px' }}>
          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(4rem, 12vw, 8rem)', 
            fontWeight: 900, 
            lineHeight: 0.85, 
            letterSpacing: '-0.04em',
            margin: 0,
            textTransform: 'uppercase'
          }}>
            {/* Title Line 1 */}
            <div style={{ overflow: 'hidden', display: 'flex' }}>
              {title1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={charVariants}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Title Line 2 */}
            <div style={{ 
              overflow: 'hidden', 
              display: 'flex', 
              marginTop: '0.5rem',
              color: 'var(--accent)'
            }}>
              {title2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 10}
                  initial="hidden"
                  variants={charVariants}
                  className={i < title2.length - 1 ? "text-accent" : ""}
                  style={{ 
                    display: 'inline-block', 
                    color: i < title2.length - 1 ? 'var(--accent)' : 'inherit'
                  }}
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Mission Statement */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              maxWidth: '650px', 
              marginTop: '1.5rem', // Reduced gap as requested
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            I specialize in crafting powerful digital systems—from responsive frontend interfaces to robust backend infrastructure—delivering secure, efficient, and visually refined solutions built for growth.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <LaunchButton text="Start a Project" href="#contact" />
            
            <motion.a 
              href="#work"
              whileHover={{ x: 10 }}
              style={{ 
                color: '#fff', 
                fontWeight: 600,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              View Showcase
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
