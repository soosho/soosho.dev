import React from 'react';
import About from '@/components/About';

export const metadata = {
  title: 'About | Soosho',
  description: 'Learn more about Soosho, a full-spectrum developer architecting high-performance digital systems.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '4rem' }}>
      <About />
    </div>
  );
}
