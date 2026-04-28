'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Hyperspeed from '@/components/Hyperspeed';

export default function StoryPage() {
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
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative' }}>
      {/* 3D Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, #000 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingTop: '12rem', paddingBottom: '10rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              color: 'var(--accent)', 
              fontWeight: 700, 
              letterSpacing: '0.4em', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '1.5rem'
            }}
          >
            The Narrative
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 5rem)', 
              fontWeight: 900, 
              lineHeight: 1, 
              letterSpacing: '-0.04em',
              marginBottom: '4rem'
            }}
          >
            Architecting <span style={{ color: 'var(--accent)' }}>Impact.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.9, 
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              textAlign: 'justify',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <p>
              My journey into technology began in 2005, when I was first introduced to a laptop through my sister-in-law. What started as simple curiosity—playing video games—quickly evolved into something much deeper. I became fascinated not only with the machine itself but with the keyboard, the act of typing, and the endless possibilities hidden behind the screen. Even at a young age, technology felt less like entertainment and more like a gateway to an entirely new world.
            </p>

            <p>
              Because access to computers was limited, I became determined to find my own way. I would save my daily school allowance, secretly walking kilometers after school to internet cafés just to spend more time online. Those early experiences shaped my discipline, independence, and relentless curiosity. While many visits began with gaming, they soon transformed into opportunities for exploration—learning English, discovering websites, studying online business models, and gradually understanding the foundations of the internet.
            </p>

            <p>
              By 2009, I had already immersed myself in the world of websites, online monetization, and digital entrepreneurship. While much of what I encountered was filled with scams and misleading opportunities, every mistake became part of my education. In 2011, I encountered Bitcoin for the first time—a concept far ahead of its time for me—but without financial resources or proper access, I could only observe from the sidelines.
            </p>

            <p>
              My real entry into cryptocurrency came in 2015 through FaucetHub, then one of the largest micro-wallet ecosystems. There, I discovered the mechanics behind faucet ownership, ad monetization, and passive digital income. Driven by curiosity, I built and operated my own faucet website, marking my first true online business venture. Over the next several years, this project became both a learning platform and revenue stream, allowing me to accumulate significant digital assets long before crypto reached mainstream valuations.
            </p>

            <p>
              Between 2015 and 2019, my technical growth accelerated. I expanded beyond faucet sites into broader web development, community building, and infrastructure management. I built forums, managed active online communities, collaborated with highly skilled individuals, and deepened my involvement in blockchain ecosystems. This eventually led me to cryptocurrency development itself—creating and launching multiple blockchain projects, experimenting across various algorithms, infrastructures, and deployment models.
            </p>

            <p>
              Over time, I evolved from a self-taught enthusiast into a versatile developer capable of building websites, managing servers, launching mining pools, creating custom cryptocurrencies, deploying blockchain explorers, developing web wallets, and solving complex technical challenges for clients worldwide. My career has been built not through traditional pathways, but through relentless experimentation, self-education, and hands-on execution across web systems, infrastructure, and blockchain innovation.
            </p>

            <p>
              Today, I continue to build, develop, and refine my own projects while helping others bring their technical visions to life. My background reflects more than just technical knowledge—it represents years of persistence, adaptation, and deep-rooted passion for technology that began with a single keyboard and evolved into a full-spectrum digital engineering career.
            </p>
            
            <p style={{ fontStyle: 'italic', borderLeft: '2px solid var(--accent)', paddingLeft: '2rem', marginTop: '2rem', color: '#fff' }}>
              "Engineering is not just about writing code; it's about architecting the systems that define how we interact with the digital world."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
