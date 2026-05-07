'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: '#000', 
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '8rem 1.5rem 4rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
              <motion.img 
                src="/logo.png" 
                alt="Soosho Logo" 
                style={{ height: '2rem', width: 'auto' }} 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <span style={{ fontWeight: 700, fontSize: '2rem', fontFamily: 'var(--font-logo)', display: 'flex', alignItems: 'center' }}>
                <ShinyText 
                  text="SOOSHO" 
                  speed={3} 
                  color="#ffffff" 
                  shineColor="rgba(255, 255, 255, 0.3)" 
                  delay={3}
                />
                <span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '400px' }}>
              Full-spectrum developer architecting high-performance digital systems, 
              blockchain ecosystems, and scalable web infrastructure.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Work', 'About', 'Shop', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`/${item.toLowerCase() === 'work' ? '#work' : item.toLowerCase()}`} 
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Developer Tools', path: '/tools' },
                { name: 'Ultimate Guides', path: '/guides' },
                { name: 'Technical Blog', path: '/blog' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.path} 
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.path} 
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/soosho" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}>
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/soosho_dev" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}>
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '4rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem'
        }}>
          <p>© 2026 SOOSHO. Built with Next.js & Framer Motion.</p>
          
          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.1)', 
              color: '#fff', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
