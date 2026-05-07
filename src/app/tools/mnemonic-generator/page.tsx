'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

// A subset of the BIP39 English wordlist for testing tool purposes
const WORDLIST = [
  "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", 
  "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", 
  "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", 
  "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", 
  "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", 
  "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", 
  "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", 
  "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", 
  "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", 
  "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", 
  "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", 
  "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", 
  "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", 
  "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", 
  "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blank", "blast", "bleak", 
  "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", 
  "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", 
  "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", 
  "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", 
  "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus"
];

export default function MnemonicGeneratorPage() {
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState<12 | 24>(12);

  const generateMnemonic = () => {
    // Generate secure random values
    const array = new Uint32Array(wordCount);
    crypto.getRandomValues(array);
    
    const words = [];
    for (let i = 0; i < wordCount; i++) {
      // Map the random value to our wordlist index
      const index = array[i] % WORDLIST.length;
      words.push(WORDLIST[index]);
    }
    setMnemonic(words);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Developer Tools</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Testing Mnemonic <span style={{ color: 'var(--accent)' }}>Generator.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Generate random 12 or 24-word phrases for testing Web3 wallet integrations. Uses the Web Crypto API for secure randomness. // Note: This uses a subset of the BIP39 dictionary for frontend speed.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={() => setWordCount(12)}
              style={{ 
                background: wordCount === 12 ? 'var(--accent)' : 'rgba(255,255,255,0.05)', 
                color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 600,
                border: '1px solid', borderColor: wordCount === 12 ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              12 Words
            </button>
            <button 
              onClick={() => setWordCount(24)}
              style={{ 
                background: wordCount === 24 ? 'var(--accent)' : 'rgba(255,255,255,0.05)', 
                color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 600,
                border: '1px solid', borderColor: wordCount === 24 ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              24 Words
            </button>
            
            <button 
              onClick={generateMnemonic}
              style={{ 
                background: '#fff', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto'
              }}
            >
              <Terminal size={18} /> Generate Phrase
            </button>
          </div>

          {mnemonic.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
              {mnemonic.map((word, index) => (
                <div key={index} style={{ 
                  background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '12px', 
                  border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', width: '20px' }}>{index + 1}.</span>
                  <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{word}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '12px' }}>
              Click Generate to create a new phrase.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
