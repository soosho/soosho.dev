'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, Clock, ServerCrash } from 'lucide-react';

export default function RPCTesterPage() {
  const [url, setUrl] = useState('https://eth.llamarpc.com');
  const [method, setMethod] = useState('eth_blockNumber');
  const [params, setParams] = useState('[]');
  const [response, setResponse] = useState<string>('');
  const [latency, setLatency] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTest = async () => {
    setIsLoading(true);
    setError(null);
    setResponse('');
    setLatency(null);

    let parsedParams = [];
    try {
      parsedParams = JSON.parse(params);
    } catch (e) {
      setError('Invalid JSON in Params field.');
      setIsLoading(false);
      return;
    }

    const payload = {
      jsonrpc: "2.0",
      method: method,
      params: parsedParams,
      id: 1
    };

    const startTime = performance.now();

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const endTime = performance.now();
      setLatency(Math.round(endTime - startTime));

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || 'Failed to connect to the RPC endpoint.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Multi-Chain <span style={{ color: 'var(--accent)' }}>RPC Tester.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Ping public or private JSON-RPC endpoints to verify node health, latency, and response accuracy across EVM and UTXO networks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Configuration Panel */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>RPC Endpoint URL</label>
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem', fontFamily: 'monospace'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>JSON-RPC Method</label>
              <input 
                type="text" 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem', fontFamily: 'monospace'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Params (Valid JSON Array)</label>
              <textarea 
                value={params}
                onChange={(e) => setParams(e.target.value)}
                rows={4}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem', fontFamily: 'monospace', resize: 'vertical'
                }}
              />
            </div>

            <button 
              onClick={handleTest}
              disabled={isLoading}
              style={{ 
                background: 'var(--accent)', color: '#fff', padding: '1rem', borderRadius: '12px',
                fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s'
              }}
            >
              {isLoading ? <Activity size={20} className="animate-spin" /> : <Play size={20} />}
              {isLoading ? 'Pinging Node...' : 'Execute Request'}
            </button>
          </div>

          {/* Results Panel */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Response payload</h3>
              
              {latency !== null && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168, 85, 247, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Clock size={16} /> {latency} ms
                </div>
              )}
            </div>

            <div style={{ flex: 1, background: 'rgba(0,0,0,0.5)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative' }}>
              {error ? (
                <div style={{ padding: '2rem', color: '#ef4444', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', height: '100%', justifyContent: 'center' }}>
                  <ServerCrash size={40} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Connection Failed</strong>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{error}</span>
                  </div>
                </div>
              ) : response ? (
                <pre style={{ padding: '1.5rem', color: '#a78bfa', fontSize: '0.9rem', overflowX: 'auto', height: '100%', margin: 0 }}>
                  {response}
                </pre>
              ) : (
                <div style={{ padding: '2rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '0.9rem' }}>
                  Awaiting execution...
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
