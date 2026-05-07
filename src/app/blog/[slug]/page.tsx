import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} | Soosho Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {post.date}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
            {post.excerpt}
          </p>
        </div>

        {/* Content injected safely. Ensure styling via globals.css for these tags */}
        <div 
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
          style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.8, 
            color: 'rgba(255,255,255,0.85)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} 
        />
        
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Written by <span style={{ color: '#fff', fontWeight: 700 }}>Soosho</span></p>
        </div>
      </div>
    </div>
  );
}
