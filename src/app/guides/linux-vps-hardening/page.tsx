import React from 'react';

export const metadata = {
  title: 'Linux VPS Hardening for Blockchain Nodes | Soosho',
  description: 'A zero-trust DevOps guide for securing exposed VPS instances running critical RPC nodes.',
};

export default function LinuxVPSHardeningGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              DevOps & Security
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• 12 min read</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Linux VPS Hardening for Blockchain Nodes.
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
            When you deploy a cryptocurrency node to a public VPS, it is scanned by automated botnets within 5 minutes. If your SSH port is open with password authentication, or your RPC port is unauthenticated, your server will be compromised.
          </p>
        </div>

        <div className="blog-content">
          <h2>1. The Reality of Public Infrastructure</h2>
          <p>
            Blockchain nodes (Bitcoin, Ethereum, Miningcore pools) are high-value targets. Attackers look for exposed wallets to drain, or idle CPU power to hijack for mining Monero. Hardening your server is not optional; it is the first step of deployment.
          </p>

          <h2>2. Securing SSH (The Front Door)</h2>
          <p>
            Password authentication is inherently vulnerable to brute-force attacks. You must disable it and use ED25519 SSH keys.
          </p>
          <p>
            Edit your SSH daemon configuration: <code>sudo nano /etc/ssh/sshd_config</code>
          </p>
          <pre><code>
# Force SSH Key Authentication
PasswordAuthentication no
PubkeyAuthentication yes

# Disable Root Login
PermitRootLogin no

# Optional: Change default SSH port to avoid automated scanners
Port 2222 
          </code></pre>
          <p>
            // Note: If you change the port, make sure to update your firewall rules before restarting the SSH service, or you will lock yourself out permanently.
          </p>
          <pre><code>sudo systemctl restart sshd</code></pre>

          <h2>3. Implementing the UFW Firewall</h2>
          <p>
            The Uncomplicated Firewall (UFW) is a frontend for iptables. A zero-trust policy dictates that all incoming traffic is blocked by default, and you only open the specific ports required by your node.
          </p>
          <pre><code>
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow your custom SSH port
sudo ufw allow 2222/tcp 

# Allow P2P port for Bitcoin (so other nodes can connect to you)
sudo ufw allow 8333/tcp 

# DO NOT OPEN THE RPC PORT (8332) TO THE PUBLIC!
# If you need remote RPC access, whitelist your specific IP:
sudo ufw allow from 192.168.1.100 to any port 8332

sudo ufw enable
          </code></pre>

          <h2>4. Defeating Brute Force with Fail2Ban</h2>
          <p>
            Even with password auth disabled, bots will spam your SSH port attempting to connect. This consumes bandwidth and fills up your authentication logs. Fail2Ban monitors your logs and automatically blocks IPs at the firewall level if they fail too many times.
          </p>
          <pre><code>
sudo apt-get install fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
          </code></pre>
          <p>
            Edit <code>jail.local</code> to configure the SSH jail:
          </p>
          <pre><code>
[sshd]
enabled = true
port = 2222
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 86400 # Ban for 24 hours
          </code></pre>

          <h2>5. Securing the Node's RPC Interface</h2>
          <p>
            A node's RPC (Remote Procedure Call) interface allows complete control over the wallet and node operations. It should **never** be bound to <code>0.0.0.0</code> (all interfaces) unless heavily protected.
          </p>
          <p>
            In your `bitcoin.conf` or equivalent config file:
          </p>
          <pre><code>
# Bind RPC only to localhost
rpcbind=127.0.0.1
rpcallowip=127.0.0.1

# Generate a strong rpcauth string using the python script provided in the bitcoin source
rpcauth=pooladmin:1234567890abcdef...
          </code></pre>
          <p>
            If your frontend web server needs to access this RPC from a different physical machine, do not open the port on UFW. Instead, set up an <strong>SSH Tunnel</strong> or a <strong>WireGuard VPN</strong> between the two servers. This encrypts the RPC traffic (which is plain-text HTTP by default) and completely hides the port from the public internet.
          </p>

          <h2>6. Conclusion</h2>
          <p>
            Server hardening is a continuous process. Keep your packages updated (`unattended-upgrades`), monitor your disk space (blockchain databases grow rapidly and will crash the server if they hit 100%), and never take shortcuts with private keys. A secure foundation allows you to focus on building features rather than fighting off intrusions.
          </p>
        </div>
        
      </div>
    </div>
  );
}
