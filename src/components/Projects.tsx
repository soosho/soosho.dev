'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import ProjectImageSlider from './ProjectImageSlider';

const PROJECTS = [
  {
    title: 'Bitmern Mining Pool',
    category: 'Infrastructure',
    images: [
      '/img/mining-pool/1.png', 
      '/img/mining-pool/2.png', 
      '/img/mining-pool/3.png'
    ],
    description: 'High-performance cryptocurrency mining pool infrastructure with real-time hash tracking and automated payout systems.',
    tech: ['Golang', 'Docker', 'Redis', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Multi-Chain Block Explorer',
    category: 'Blockchain Infrastructure',
    images: [
      '/img/explorer/1.png', 
      '/img/explorer/2.png', 
      '/img/explorer/3.png', 
      '/img/explorer/4.png', 
      '/img/explorer/5.png', 
      '/img/explorer/6.png', 
      '/img/explorer/7.png', 
      '/img/explorer/8.png', 
      '/img/explorer/9.png'
    ],
    description: 'A multi-coin block explorer with dynamic network management, reorg-safe scanning, and satoshi-precision UTXO tracking. Features idempotent indexing and a concurrent worker pool for high-performance blockchain analysis.',
    tech: ['Go 1.25', 'Gin', 'GORM', 'PostgreSQL', 'Next.js 16', 'React 19', 'Tailwind CSS 4'],
    link: 'https://heroichashers.com'
  },
  {
    title: 'Miningcore.UI',
    category: 'Ecosystem Interface',
    images: [
      '/img/miningcore-ui/1.png', 
      '/img/miningcore-ui/2.png', 
      '/img/miningcore-ui/3.png', 
      '/img/miningcore-ui/4.png'
    ],
    description: 'A modern, production-ready Miningcore UI rebuilt with Next.js 16, featuring a real-time WebSocket engine and multi-coin detection for high-scale pool operations.',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'WebSockets', 'PostgreSQL'],
    link: 'https://github.com/soosho/miningcore.ui'
  },
  {
    title: 'Miningcore Community Edition (MCCE)',
    category: 'Protocol & Core Fork',
    images: [
      '/img/miningcore/logo.png',
    ],
    description: 'A modernized, actively maintained revival of Miningcore — abandoned since 2022. Upgraded to .NET 8 and Ubuntu 24.04 with config hot-reload for zero-downtime pool management, a built-in admin dashboard, stratum connection hardening against DDoS, Newtonsoft JSON fallback for non-standard miners, and merged mining support. The only actively maintained Miningcore fork.',
    tech: ['.NET 8', 'C#', 'PostgreSQL', 'Docker', 'Ubuntu 24.04'],
    link: 'https://github.com/soosho/miningcore'
  },
  {
    title: 'Revenue Sharing Models',
    category: 'SaaS Architecture',
    images: [
      '/img/Saas/1.png', 
      '/img/Saas/2.png', 
      '/img/Saas/3.png', 
      '/img/Saas/4.png', 
      '/img/Saas/5.png', 
      '/img/Saas/6.png', 
      '/img/Saas/7.png', 
      '/img/Saas/8.png', 
      '/img/Saas/9.png'
    ],
    description: 'A production-ready GPT and Faucet ecosystem featuring advertising arbitrage, virtual mining simulations, and multi-currency payout engines. Engineered for high-retention and automated revenue generation.',
    tech: ['Next.js 16', 'Drizzle ORM', 'PostgreSQL', 'Socket.io', 'Node.js'],
    link: 'https://github.com/soosho/Pro-Crypto-Faucet-Rewards-Platform-SaaS-Source-Code'
  }
];

export default function Projects() {
  return (
    <section id="work" className="section-container" style={{ padding: '10rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}
            >
              Selected Showcase
            </motion.span>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em' }}>
              Proven Technical <br/><span style={{ color: 'var(--accent)' }}>Architecture.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>
            A selection of production-ready systems and high-scale technical solutions engineered for reliability.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8rem' }}>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '4rem',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Image Column */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', aspectRatio: '16/10' }}>
                <ProjectImageSlider images={project.images} />
              </div>

              {/* Content Column */}
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    background: 'rgba(168, 85, 247, 0.1)', 
                    color: 'var(--accent)', 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    padding: '0.4rem 1rem', 
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.85rem', color: '#fff', opacity: 0.4, fontWeight: 500 }}>
                      {t} {i < project.tech.length - 1 && '•'}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 10 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    fontSize: '1rem',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  View Case Study <ArrowUpRight size={18} />
                </motion.a>
              </div>

              {/* Number Background */}
              <div style={{ 
                position: 'absolute', 
                top: '-2rem', 
                right: '0', 
                fontSize: '10rem', 
                fontWeight: 900, 
                color: 'rgba(255,255,255,0.02)', 
                zIndex: -1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legacy Archive Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: '8rem', 
            textAlign: 'center',
            padding: '3rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative'
          }}
        >
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.1rem', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            <span style={{ color: '#fff', display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>Legacy & Confidential Archive</span>
            Plus an extensive portfolio of technical systems, private infrastructures, and high-scale architectures engineered and deployed since 2015.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
