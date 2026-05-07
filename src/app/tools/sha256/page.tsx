'use client';

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function SHA256CalculatorPage() {
  const [input, setInput] = useState<string>('Hello, World!');
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const calculateHash = async () => {
      try {
        const msgUint8 = new TextEncoder().encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setHash(hashHex);
      } catch (e) {
        setHash('Error calculating hash');
      }
    };
    
    calculateHash();
  }, [input]);

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            SHA-256 <span style={{ color: 'var(--accent)' }}>Calculator.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Instantly compute the SHA-256 hash of any string. This uses the native Web Crypto API, meaning your data never leaves your browser.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Input String</label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={5}
              style={{ 
                width: '100%', padding: '1.5rem', background: 'rgba(0,0,0,0.5)', 
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                color: '#fff', fontSize: '1.1rem', resize: 'vertical'
              }}
              placeholder="Enter text to hash..."
            />
          </div>

          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
              <span>SHA-256 Output (Hex)</span>
              <Activity size={16} color="var(--accent)" />
            </label>
            <div 
              style={{ 
                width: '100%', padding: '1.5rem', background: 'rgba(168, 85, 247, 0.05)', 
                border: '1px solid var(--accent)', borderRadius: '12px',
                color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'monospace',
                wordBreak: 'break-all', minHeight: '80px', display: 'flex', alignItems: 'center'
              }}
            >
              {hash}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
