import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Ultimate Technical Guides | Soosho',
  description: 'Massive, comprehensive deployment and architecture guides for high-performance blockchain ecosystems.',
};

const GUIDES = [
  {
    title: 'The Complete Miningcore 2026 Production Deployment Guide',
    slug: 'miningcore-deployment',
    excerpt: 'A comprehensive 3,000+ word deep dive into setting up a production-grade cryptocurrency mining pool. Covers Linux server preparation, PostgreSQL tuning, Nginx reverse proxy configuration, stratum security, and node synchronization.',
    readTime: '15 min read',
    difficulty: 'Advanced'
  },
  {
    title: 'Forking a Bitcoin-based Chain: The Metal-Up Guide',
    slug: 'forking-bitcoin-chain',
    excerpt: 'Step-by-step instructions on cloning Bitcoin source code, modifying consensus parameters, generating a custom genesis block, and compiling your own secure network.',
    readTime: '25 min read',
    difficulty: 'Expert'
  },
  {
    title: 'Idempotent Indexing: Building Reorg-Safe Data Pipelines',
    slug: 'reorg-safe-indexing',
    excerpt: 'Architectural breakdown of how to ingest raw blockchain data into PostgreSQL using Go, guaranteeing zero data corruption during deep chain reorganizations.',
    readTime: '18 min read',
    difficulty: 'Advanced'
  },
  {
    title: 'Architecting High-Scale SaaS Crypto Faucets',
    slug: 'saas-revenue-sharing',
    excerpt: 'The database schemas, queue systems, and cron jobs required to build a profitable ad-arbitrage revenue-sharing platform handling 10,000+ micro-transactions per day.',
    readTime: '20 min read',
    difficulty: 'Intermediate'
  },
  {
    title: 'Linux VPS Hardening for Blockchain Nodes',
    slug: 'linux-vps-hardening',
    excerpt: 'A zero-trust DevOps guide for securing exposed VPS instances running critical RPC nodes. Covers fail2ban, iptables drop configurations, and SSH key enforcement.',
    readTime: '12 min read',
    difficulty: 'Intermediate'
  }
];

export default function GuidesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Ultimate <span style={{ color: 'var(--accent)' }}>Guides.</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '5rem', maxWidth: '700px', lineHeight: 1.6 }}>
          Definitive, step-by-step architectural documentation for deploying complex blockchain infrastructure. 
        </p>
        
        <div style={{ display: 'grid', gap: '3rem' }}>
          {GUIDES.map((guide, idx) => (
            <Link 
              href={guide.slug === '#' ? '#' : `/guides/${guide.slug}`} 
              key={idx}
              style={{ textDecoration: 'none', pointerEvents: guide.slug === '#' ? 'none' : 'auto' }}
            >
              <div 
                className={guide.slug === '#' ? "glass" : "glass interactive-card"}
                style={{ 
                  padding: '3rem', 
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: guide.slug === '#' ? 'default' : 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: guide.slug === '#' ? 0.6 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    color: 'var(--accent)', 
                    fontSize: '0.8rem', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em',
                    background: 'rgba(168, 85, 247, 0.1)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px'
                  }}>
                    {guide.difficulty}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    {guide.readTime}
                  </span>
                </div>
                
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  {guide.title}
                </h2>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {guide.excerpt}
                </p>
                
                <div style={{ color: guide.slug === '#' ? 'rgba(255,255,255,0.2)' : 'var(--accent)', fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {guide.slug === '#' ? 'Drafting in Progress...' : 'Read Full Guide →'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
