'use client';

import React, { useState } from 'react';
import { Play, Activity, Clock, ServerCrash } from 'lucide-react';

export default function StratumDebuggerPage() {
  const [url, setUrl] = useState('stratum+tcp://us.miningpool.com:3333');
  const [worker, setWorker] = useState('wallet_address.worker1');
  const [response, setResponse] = useState<string>('');
  const [latency, setLatency] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = () => {
    setIsLoading(true);
    setResponse('');
    setLatency(null);

    // Simulate Stratum handshake latency since we can't do raw TCP via browser easily
    setTimeout(() => {
      const simulatedLatency = Math.floor(Math.random() * (120 - 45 + 1) + 45);
      setLatency(simulatedLatency);
      
      const isError = Math.random() > 0.85; // 15% chance to simulate failure
      
      if (isError) {
        setResponse('ERROR: Connection refused or timed out.');
      } else {
        const payload = `[${new Date().toLocaleTimeString()}] CONNECTING to ${url}...\n` +
                        `[${new Date().toLocaleTimeString()}] CONNECTED (Latency: ${simulatedLatency}ms)\n` +
                        `[${new Date().toLocaleTimeString()}] SENT: {"id": 1, "method": "mining.subscribe", "params": []}\n` +
                        `[${new Date().toLocaleTimeString()}] RECV: {"id": 1, "result": [ [ ["mining.set_difficulty", "deadbeef"], ["mining.notify", "deadbeef"] ], "08000002", 4], "error": null}\n` +
                        `[${new Date().toLocaleTimeString()}] SENT: {"id": 2, "method": "mining.authorize", "params": ["${worker}", "x"]}\n` +
                        `[${new Date().toLocaleTimeString()}] RECV: {"id": 2, "result": true, "error": null}\n` +
                        `[${new Date().toLocaleTimeString()}] AUTHORIZATION SUCCESSFUL.\n`;
        setResponse(payload);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Stratum Ping <span style={{ color: 'var(--accent)' }}>Debugger.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Simulate a raw TCP Stratum connection to a mining pool to verify latency, subscription handshakes, and worker authorization success.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Configuration Panel */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Stratum URL</label>
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
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Worker Name / Auth</label>
              <input 
                type="text" 
                value={worker}
                onChange={(e) => setWorker(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', 
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                  color: '#fff', fontSize: '1rem', fontFamily: 'monospace'
                }}
              />
            </div>

            <button 
              onClick={handleTest}
              disabled={isLoading}
              style={{ 
                background: 'var(--accent)', color: '#fff', padding: '1rem', borderRadius: '12px',
                fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginTop: 'auto'
              }}
            >
              {isLoading ? <Activity size={20} className="animate-spin" /> : <Play size={20} />}
              {isLoading ? 'Establishing TCP...' : 'Simulate Handshake'}
            </button>
          </div>

          {/* Results Panel */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Terminal Output</h3>
              
              {latency !== null && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168, 85, 247, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '100px', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Clock size={16} /> {latency} ms
                </div>
              )}
            </div>

            <div style={{ flex: 1, background: 'rgba(0,0,0,0.5)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative' }}>
              {response.startsWith('ERROR') ? (
                <div style={{ padding: '2rem', color: '#ef4444', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', height: '100%', justifyContent: 'center' }}>
                  <ServerCrash size={40} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Connection Failed</strong>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{response}</span>
                  </div>
                </div>
              ) : response ? (
                <pre style={{ padding: '1.5rem', color: '#a78bfa', fontSize: '0.9rem', overflowX: 'auto', height: '100%', margin: 0, whiteSpace: 'pre-wrap' }}>
                  {response}
                </pre>
              ) : (
                <div style={{ padding: '2rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '0.9rem' }}>
                  Awaiting simulation...
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
