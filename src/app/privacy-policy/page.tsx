import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Soosho',
  description: 'Privacy Policy for soosho.dev, outlining how we handle your data and our use of third-party services like Google AdSense.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Privacy <span style={{ color: 'var(--accent)' }}>Policy.</span></h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p>
              Welcome to soosho.dev. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of data about you, including:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Google AdSense & Cookies</h2>
            <p>
              We use Google AdSense to display ads on this site. Google, as a third-party vendor, uses cookies to serve ads on our site.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Ads Settings</a>.</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>www.aboutads.info</a>.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Analytics</h2>
            <p>
              We may use third-party analytics services (such as Vercel Analytics) to monitor and analyze the use of our service. These services collect technical and usage data to help us improve user experience.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us via our social channels or through the contact forms provided on the site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
