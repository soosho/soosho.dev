import React from 'react';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Contact | Soosho',
  description: 'Get in touch with Soosho for your next big project or inquiry.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem' }}>
      <div className="section-container" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>
          Contact <span style={{ color: 'var(--accent)' }}>Me.</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          Whether you have a question, want to collaborate on a new project, or just want to say hi, feel free to drop a message.
        </p>
      </div>
      <ContactCTA />
    </div>
  );
}
