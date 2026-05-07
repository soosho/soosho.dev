import React from 'react';

export const metadata = {
  title: 'The Complete Miningcore 2026 Production Deployment Guide | Soosho',
  description: 'A comprehensive deep dive into setting up a production-grade cryptocurrency mining pool using Miningcore.',
};

export default function MiningcoreGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Infrastructure Guide
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• 15 min read</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            The Complete Miningcore 2026 Production Deployment Guide.
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
            Setting up a crypto mining pool isn't just about compiling some C# code. It's about hardening a Linux server, tuning PostgreSQL for high-frequency writes, and architecting an Nginx reverse proxy that won't buckle under DDoS attacks.
          </p>
        </div>

        {/* Content */}
        <div className="blog-content">
          <h2>1. Introduction & Server Prerequisites</h2>
          <p>
            Miningcore remains the industry standard for custom pool operations, but its default configuration is meant for local testing. If you put a default config on a public IP, your API will crash within hours, and your stratum ports will be flooded.
          </p>
          <p>
            For a production deployment supporting 1,000+ workers, you need bare minimum hardware:
          </p>
          <ul>
            <li><strong>CPU:</strong> 8-Core AMD EPYC or Intel Xeon</li>
            <li><strong>RAM:</strong> 32GB+ ECC (PostgreSQL loves RAM)</li>
            <li><strong>Storage:</strong> 1TB+ NVMe SSD (Avoid SATA SSDs due to IOPS bottlenecks)</li>
            <li><strong>OS:</strong> Ubuntu 24.04 LTS</li>
          </ul>

          <h2>2. Server Hardening</h2>
          <p>
            Before installing any dependencies, lock down your machine. Never run Miningcore as the <code>root</code> user. // Using a dedicated user prevents total system compromise if the stratum daemon gets exploited.
          </p>
          <pre><code>
sudo adduser pooladmin
sudo usermod -aG sudo pooladmin
su - pooladmin
          </code></pre>
          <p>
            Configure UFW (Uncomplicated Firewall) immediately. Only open the ports you strictly need. If you're using Cloudflare for the frontend, only allow Cloudflare IPs to hit your API port.
          </p>
          <pre><code>
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3032:3040/tcp # Stratum ports
sudo ufw enable
          </code></pre>

          <h2>3. PostgreSQL Tuning for High IOPS</h2>
          <p>
            Miningcore generates massive amounts of data. Every share submitted by every worker is an INSERT query. Default PostgreSQL settings will choke on this.
          </p>
          <p>
            After installing Postgres 16+, edit <code>/etc/postgresql/16/main/postgresql.conf</code>:
          </p>
          <ul>
            <li><code>shared_buffers = 8GB</code> (Set to ~25% of total RAM)</li>
            <li><code>work_mem = 64MB</code></li>
            <li><code>maintenance_work_mem = 512MB</code></li>
            <li><code>effective_cache_size = 24GB</code> (Set to ~75% of total RAM)</li>
            <li><code>synchronous_commit = off</code> // Hacky fix for IO lag, slightly increases data loss risk on power failure, but massive TPS boost.</li>
          </ul>
          <p>
            Restart PostgreSQL and run the Miningcore <code>createdb.sql</code> scripts.
          </p>

          <h2>4. Compiling Miningcore</h2>
          <p>
            Don't use pre-compiled binaries for production. Compile it yourself using the latest .NET 8 SDK to benefit from compiler-level optimizations specific to your CPU architecture.
          </p>
          <pre><code>
git clone https://github.com/oliverw/miningcore.git
cd miningcore/src/Miningcore
dotnet publish -c Release --framework net8.0 -o ../../build
          </code></pre>

          <h2>5. The Configuration File (config.json)</h2>
          <p>
            This is where most people fail. A poorly structured <code>config.json</code> leads to orphaned blocks and payout failures.
          </p>
          <h3>Payment Processing</h3>
          <p>
            Set your payout interval to something reasonable. // Doing payouts every 5 minutes will drain your wallet in network fees. Set it to every 2-4 hours.
          </p>
          <pre><code>
"paymentProcessing": &#123;
  "enabled": true,
  "interval": 120, // 2 hours
  "shareRecoveryFile": "recovered-shares.txt"
&#125;
          </code></pre>

          <h3>Banning Malicious Peers</h3>
          <p>
            Enable the banning engine. Botnets will scan your open ports and submit invalid shares.
          </p>
          <pre><code>
"banning": &#123;
  "manager": "Integrated",
  "banOnJunkReceive": true,
  "banOnInvalidShares": true
&#125;
          </code></pre>

          <h2>6. Systemd Integration</h2>
          <p>
            Miningcore must be run as a service so it auto-restarts on failure. Create <code>/etc/systemd/system/miningcore.service</code>.
          </p>
          <pre><code>
[Unit]
Description=Miningcore Pool
After=network.target postgresql.service

[Service]
Type=simple
User=pooladmin
WorkingDirectory=/home/pooladmin/miningcore/build
ExecStart=/usr/bin/dotnet /home/pooladmin/miningcore/build/Miningcore.dll -c /home/pooladmin/miningcore/build/config.json
Restart=always
RestartSec=10
LimitNOFILE=100000

[Install]
WantedBy=multi-user.target
          </code></pre>

          <h2>7. Nginx Reverse Proxy & API Security</h2>
          <p>
            Never expose the Miningcore API directly. Use Nginx to proxy requests and cache responses. The API endpoint <code>/api/pools</code> gets hammered by frontend dashboards. Caching it for just 5 seconds drastically reduces CPU load.
          </p>
          <pre><code>
proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=api_cache:10m max_size=1g inactive=60m use_temp_path=off;

server &#123;
    listen 443 ssl;
    server_name api.yourpool.com;

    location /api/ &#123;
        proxy_pass http://127.0.0.1:4000;
        proxy_cache api_cache;
        proxy_cache_valid 200 5s;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    &#125;
&#125;
          </code></pre>

          <h2>8. Conclusion</h2>
          <p>
            A production Miningcore deployment requires a holistic understanding of Linux system administration, database tuning, and network security. By following this guide, you bypass the common pitfalls that cause 90% of new pools to shut down within their first month.
          </p>
        </div>
        
      </div>
    </div>
  );
}
