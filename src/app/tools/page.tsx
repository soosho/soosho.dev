import React from 'react';
import Link from 'next/link';
import { Terminal, Activity, Calculator } from 'lucide-react';

export const metadata = {
  title: 'Free Developer Tools | Soosho',
  description: 'A suite of free, high-performance developer tools for blockchain engineers and web3 developers.',
};

const TOOLS = [
  {
    name: 'Multi-Chain RPC Tester',
    description: 'Ping public RPC endpoints for EVM and UTXO chains. Test JSON-RPC commands directly from your browser to verify node latency and health.',
    icon: <Terminal size={24} />,
    path: '/tools/rpc-tester',
    status: 'Live'
  },
  {
    name: 'Stratum Ping Debugger',
    description: 'A simulator for testing latency and connection stability to cryptocurrency mining pool stratum URLs.',
    icon: <Activity size={24} />,
    path: '/tools/stratum-debugger',
    status: 'Live'
  },
  {
    name: 'Hashrate & Fiat Converter',
    description: 'Real-time mining profitability calculator supporting raw hashrate to fiat conversions across multiple algorithms.',
    icon: <Calculator size={24} />,
    path: '/tools/hashrate-converter',
    status: 'Live'
  },
  {
    name: 'EVM Unit Converter',
    description: 'Quickly convert between Wei, Gwei, and Ether for precise smart contract and transaction fee calculations.',
    icon: <Calculator size={24} />,
    path: '/tools/unit-converter',
    status: 'Live'
  },
  {
    name: 'BIP39 Mnemonic Generator',
    description: 'Generate secure 12 or 24-word recovery phrases client-side for testing cryptocurrency wallet integrations.',
    icon: <Terminal size={24} />,
    path: '/tools/mnemonic-generator',
    status: 'Live'
  },
  {
    name: 'SHA-256 Hash Calculator',
    description: 'Instantly calculate SHA-256 hashes using the Web Crypto API for data integrity and Bitcoin block header analysis.',
    icon: <Activity size={24} />,
    path: '/tools/sha256',
    status: 'Live'
  }
];

export default function ToolsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Developer <span style={{ color: 'var(--accent)' }}>Tools.</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '5rem', maxWidth: '700px', lineHeight: 1.6 }}>
          A curated suite of high-performance utilities designed for blockchain engineers, server administrators, and Web3 developers. Free to use, built with Next.js 16.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {TOOLS.map((tool) => (
            <Link 
              href={tool.path} 
              key={tool.name}
              style={{ textDecoration: 'none', pointerEvents: tool.status === 'Live' ? 'auto' : 'none' }}
            >
              <div 
                className={tool.status === 'Live' ? "glass interactive-card" : "glass"}
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: tool.status === 'Live' ? 'pointer' : 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '50px', height: '50px', borderRadius: '12px', 
                    background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}>
                    {tool.icon}
                  </div>
                  
                  <span style={{ 
                    background: tool.status === 'Live' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.05)', 
                    color: tool.status === 'Live' ? 'var(--accent)' : 'rgba(255,255,255,0.4)', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '100px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {tool.status}
                  </span>
                </div>
                
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
                    {tool.name}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {tool.description}
                  </p>
                </div>

                {tool.status === 'Live' && (
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Launch Tool <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
