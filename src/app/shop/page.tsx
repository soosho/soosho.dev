'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Hyperspeed from '@/components/Hyperspeed';
import { ShoppingCart, Code2, ShieldCheck, Zap } from 'lucide-react';
import LaunchButton from '@/components/LaunchButton';

const ASSETS = [
  {
    title: 'Miningcore UI Pro',
    price: '$300',
    category: 'Dashboard',
    tech: ['Next.js 16', 'Tailwind 4'],
    description: 'High-performance frontend for Miningcore pools with real-time stats, worker tracking, and dark-mode optimization.',
    link: 'https://github.com/soosho/miningcore.ui',
    cta: 'Acquire License'
  },
  {
    title: 'Revenue Sharing Models',
    price: '$450',
    category: 'SaaS Platform',
    tech: ['Next.js', 'PostgreSQL'],
    description: 'The Pro-Crypto Faucet & Rewards Platform. A full-spectrum SaaS engine for automated ad-arbitrage and user rewards.',
    link: 'https://github.com/soosho/Pro-Crypto-Faucet-Rewards-Platform-SaaS-Source-Code',
    cta: 'Acquire License'
  },
  {
    title: 'Multi Block Explorer',
    price: '$300',
    category: 'Infrastructure',
    tech: ['Golang', 'RPC'],
    description: 'Scalable multi-coin explorer backend with reorg-safe indexing and satoshi-precision tracking across various chains.',
    cta: 'Acquire License'
  },
  {
    title: 'Single Block Explorer',
    price: '$100',
    category: 'Infrastructure',
    tech: ['Next.js', 'RPC'],
    description: 'Lightweight, focused block explorer for single-chain deployments with instant transaction lookups.',
    cta: 'Acquire License'
  },
  {
    title: 'Miningpool Setup',
    price: '$250',
    category: 'Service',
    tech: ['Linux', 'Miningcore'],
    description: 'Full end-to-end deployment of a production-grade mining pool for 1 coin, including node synchronization and stratum setup.',
    cta: 'Hire for Setup'
  },
  {
    title: 'Cryptocurrency Forking',
    price: '$500+',
    category: 'Blockchain Dev',
    tech: ['C++', 'Go', 'Rust'],
    description: 'Custom blockchain creation through strategic protocol forking. Pricing varies ($500-$3000) based on complexity and consensus requirements.',
    cta: 'Hire for Forking'
  }
];

export default function ShopPage() {
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
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, #000 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingTop: '12rem', paddingBottom: '10rem', maxWidth: '1400px' }}>
        <div style={{ margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
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
              Ready-Made Assets
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
                marginBottom: '1.5rem'
              }}
            >
              Digital <span style={{ color: 'var(--accent)' }}>Marketplace.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}
            >
              Production-grade source code, infrastructure blueprints, and architectural modules available for immediate deployment.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {ASSETS.map((asset, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    {asset.category}
                  </span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>
                    {asset.price}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>{asset.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{asset.description}</p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {asset.tech.map((t, j) => (
                    <span key={j} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <LaunchButton text={asset.cta} href="https://t.me/Sooxu_O" />
                  {asset.link && (
                    <a 
                      href={asset.link} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ 
                        padding: '0.8rem 1.2rem', 
                        borderRadius: '12px', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      Read More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              marginTop: '6rem', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '4rem', 
              flexWrap: 'wrap',
              opacity: 0.5
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Code2 size={20} /> Clean Code</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><ShieldCheck size={20} /> Secure License</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Zap size={20} /> Instant Access</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
