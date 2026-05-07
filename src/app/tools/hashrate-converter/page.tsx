'use client';

import React, { useState, useEffect } from 'react';

export default function HashrateConverterPage() {
  const [hashrate, setHashrate] = useState<string>('100');
  const [unit, setUnit] = useState<number>(1000000); // 1 MH/s in H/s
  const [rewardPerTH, setRewardPerTH] = useState<string>('0.00000250');
  const [cryptoPrice, setCryptoPrice] = useState<string>('65000');
  const [profitUSD, setProfitUSD] = useState<string>('0.00');

  useEffect(() => {
    // Calculate raw hashes
    const rawHashes = parseFloat(hashrate || '0') * unit;
    const ths = rawHashes / 1000000000000;
    
    const dailyCrypto = ths * parseFloat(rewardPerTH || '0');
    const dailyUSD = dailyCrypto * parseFloat(cryptoPrice || '0');
    
    setProfitUSD(dailyUSD.toFixed(4));
  }, [hashrate, unit, rewardPerTH, cryptoPrice]);

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Hashrate & Fiat <span style={{ color: 'var(--accent)' }}>Converter.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Quickly calculate daily mining profitability by converting raw hashrate to expected USD returns based on network difficulty and live prices.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Your Hashrate</label>
              <input 
                type="number" 
                value={hashrate}
                onChange={(e) => setHashrate(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1.25rem', fontWeight: 700
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Unit</label>
              <select 
                value={unit}
                onChange={(e) => setUnit(Number(e.target.value))}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1.1rem', cursor: 'pointer'
                }}
              >
                <option value={1}>H/s</option>
                <option value={1000}>KH/s</option>
                <option value={1000000}>MH/s</option>
                <option value={1000000000}>GH/s</option>
                <option value={1000000000000}>TH/s</option>
                <option value={1000000000000000}>PH/s</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Network Reward per TH/s (Daily)</label>
              <input 
                type="number" 
                value={rewardPerTH}
                onChange={(e) => setRewardPerTH(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Crypto Price (USD)</label>
              <input 
                type="number" 
                value={cryptoPrice}
                onChange={(e) => setCryptoPrice(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem'
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Estimated Daily Profit
            </span>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent)' }}>
              ${profitUSD}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
