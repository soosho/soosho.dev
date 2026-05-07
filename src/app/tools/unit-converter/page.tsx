'use client';

import React, { useState, useEffect } from 'react';

export default function UnitConverterPage() {
  const [wei, setWei] = useState<string>('1000000000000000000');
  const [gwei, setGwei] = useState<string>('1000000000');
  const [ether, setEther] = useState<string>('1');

  const handleWeiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setWei(val);
    if (!val || isNaN(Number(val))) {
      setGwei('');
      setEther('');
      return;
    }
    const num = Number(val);
    setGwei((num / 1e9).toString());
    setEther((num / 1e18).toString());
  };

  const handleGweiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setGwei(val);
    if (!val || isNaN(Number(val))) {
      setWei('');
      setEther('');
      return;
    }
    const num = Number(val);
    setWei((num * 1e9).toLocaleString('fullwide', {useGrouping:false}));
    setEther((num / 1e9).toString());
  };

  const handleEtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEther(val);
    if (!val || isNaN(Number(val))) {
      setWei('');
      setGwei('');
      return;
    }
    const num = Number(val);
    setWei((num * 1e18).toLocaleString('fullwide', {useGrouping:false}));
    setGwei((num * 1e9).toString());
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            EVM Unit <span style={{ color: 'var(--accent)' }}>Converter.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Quickly convert between Wei, Gwei, and Ether. Essential for calculating precise transaction fees and gas limits in Solidity smart contracts.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
              <span>Ether (ETH)</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10^18 Wei</span>
            </label>
            <input 
              type="text" 
              value={ether}
              onChange={handleEtherChange}
              style={{ 
                width: '100%', padding: '1.25rem', background: 'rgba(0,0,0,0.5)', 
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                color: '#fff', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'monospace'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
              <span>Gwei</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10^9 Wei</span>
            </label>
            <input 
              type="text" 
              value={gwei}
              onChange={handleGweiChange}
              style={{ 
                width: '100%', padding: '1.25rem', background: 'rgba(0,0,0,0.5)', 
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                color: '#fff', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'monospace'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
              <span>Wei</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Base Unit</span>
            </label>
            <input 
              type="text" 
              value={wei}
              onChange={handleWeiChange}
              style={{ 
                width: '100%', padding: '1.25rem', background: 'rgba(0,0,0,0.5)', 
                border: '1px solid var(--accent)', borderRadius: '12px',
                color: 'var(--accent)', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'monospace'
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
