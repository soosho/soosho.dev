'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import LaunchButton from './LaunchButton';

export default function ContactCTA() {
  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '8rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          position: 'relative', 
          padding: '4rem 5rem', 
          borderRadius: '32px', 
          background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.1) 0%, rgba(0,0,0,0.6) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Glow */}
        <div style={{ 
          position: 'absolute', top: '50%', left: '0', width: '30%', height: '100%', 
          background: 'radial-gradient(circle at center left, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'left', flex: '1 1 500px' }}>
          <motion.span 
            style={{ 
              color: 'var(--accent)', 
              fontWeight: 700, 
              letterSpacing: '0.4em', 
              textTransform: 'uppercase', 
              fontSize: '0.75rem',
              display: 'block',
              marginBottom: '1rem'
            }}
          >
            Project Inquiry
          </motion.span>

          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
            fontWeight: 900, 
            lineHeight: 1.1, 
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem'
          }}>
            Have a Project <span style={{ color: 'var(--accent)' }}>in Mind?</span>
          </h2>

          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.05rem', 
            maxWidth: '550px', 
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            I'm passionate about helping both solo entrepreneurs launch their vision and corporations scale their infrastructure. From high-impact <span style={{ color: '#fff' }}>landing pages and MVP launches ($50+)</span> to full-scale <span style={{ color: '#fff' }}>ecosystems architected from scratch ($10k+)</span>, I provide the same level of architectural precision.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>
              Solo-Founder Friendly
            </span>
            <span style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              Flexible Project Scale
            </span>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="https://github.com/soosho" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.2)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
            <FaGithub size={32} />
          </a>

          <LaunchButton text="Start a Conversation" href="mailto:hello@soosho.dev" />
        </div>
      </motion.div>
    </section>
  );
}
