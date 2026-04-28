'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import ShinyText from './ShinyText';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: 'max-content',
        padding: '0.75rem 1.5rem',
        zIndex: 1000,
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap'
      }}
    >
      <Link href="/" style={{ fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-logo)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <motion.img 
          src="/logo.png" 
          alt="Soosho Logo" 
          style={{ height: '1.25rem', width: 'auto' }} 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ShinyText 
            text="SOOSHO" 
            speed={3} 
            color="#ffffff" 
            shineColor="rgba(255, 255, 255, 0.3)" 
            delay={3}
          />
          <span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Link>
      <div className="nav-links">
        <motion.div whileHover={{ color: '#fff' }} transition={{ duration: 0.2 }}>
          <Link href="/#work">Work</Link>
        </motion.div>
        <motion.div className="nav-hide-mobile" whileHover={{ color: '#fff' }} transition={{ duration: 0.2 }}>
          <Link href="/#about">About</Link>
        </motion.div>
        <motion.div whileHover={{ color: '#fff' }} transition={{ duration: 0.2 }}>
          <Link href="/story">Story</Link>
        </motion.div>
        <motion.div whileHover={{ color: '#fff' }} transition={{ duration: 0.2 }}>
          <Link href="/shop">Shop</Link>
        </motion.div>
        <motion.div whileHover={{ color: '#fff' }} transition={{ duration: 0.2 }}>
          <Link href="/#contact">Contact</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
