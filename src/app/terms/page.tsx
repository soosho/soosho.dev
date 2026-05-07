import React from 'react';

export const metadata = {
  title: 'Terms of Service | Soosho',
  description: 'Terms of Service for using soosho.dev and purchasing our digital assets and services.',
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Terms of <span style={{ color: 'var(--accent)' }}>Service.</span></h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
            <p>
              By accessing our website at soosho.dev, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use License</h2>
            <p>
              When you purchase or acquire a license for digital assets, source code, or infrastructure blueprints from our Shop, you are granted a license according to the specific terms outlined at the time of purchase. 
            </p>
            <p style={{ marginTop: '1rem' }}>
              Generally, unless otherwise specified:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>You may use the code for your own commercial or personal projects.</li>
              <li>You may not resell, redistribute, or sub-license the raw source code without explicit written permission.</li>
              <li>The materials are provided "as is" without warranty of any kind.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Disclaimer</h2>
            <p>
              The materials on soosho.dev's website are provided on an 'as is' basis. soosho.dev makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Limitations</h2>
            <p>
              In no event shall soosho.dev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on soosho.dev's website, even if soosho.dev or a soosho.dev authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Revisions and Errata</h2>
            <p>
              The materials appearing on soosho.dev's website could include technical, typographical, or photographic errors. soosho.dev does not warrant that any of the materials on its website are accurate, complete or current. soosho.dev may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>6. Links</h2>
            <p>
              soosho.dev has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by soosho.dev of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
