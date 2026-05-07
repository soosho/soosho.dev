import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Technical Blog | Soosho',
  description: 'Deep dives into modern web development, blockchain infrastructure, and system architecture.',
};

export default function BlogIndexPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>
          Technical <span style={{ color: 'var(--accent)' }}>Insights.</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px' }}>
          Detailed articles on architecting high-performance blockchain ecosystems, scalable web systems, and revenue sharing models.
        </p>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              style={{ textDecoration: 'none' }}
            >
              <div 
                className="glass interactive-card"
                style={{ 
                  padding: '2rem', 
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {post.date}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  {post.title}
                </h2>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {post.excerpt}
                </p>
                
                <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, marginTop: '0.5rem' }}>
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
