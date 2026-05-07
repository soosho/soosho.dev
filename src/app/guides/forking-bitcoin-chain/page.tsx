import React from 'react';

export const metadata = {
  title: 'Forking a Bitcoin-based Chain: The Metal-Up Guide | Soosho',
  description: 'Step-by-step instructions on cloning Bitcoin source code, modifying consensus parameters, generating a custom genesis block, and compiling your own secure network.',
};

export default function ForkingBitcoinGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Consensus Engineering
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• 25 min read</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Forking a Bitcoin-based Chain: The Metal-Up Guide.
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
            Creating a custom cryptocurrency is not just about changing the name in a few C++ files. True protocol engineering requires modifying the consensus rules, forging a new genesis block, and bootstrapping a custom DNS seeder to keep the peer-to-peer network alive.
          </p>
        </div>

        <div className="blog-content">
          <h2>1. Preparing the Source Tree</h2>
          <p>
            The Bitcoin codebase (and its derivatives like Litecoin, Dash, or Raptoreum) is a massive C++ repository. You need a dedicated build environment. Ubuntu 22.04 LTS is the most stable choice for compilation.
          </p>
          <pre><code>
sudo apt-get update
sudo apt-get install build-essential libtool autotools-dev automake pkg-config bsdmainutils python3
sudo apt-get install libssl-dev libevent-dev libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-test-dev libboost-thread-dev
          </code></pre>
          <p>
            Clone the repository of the coin you want to fork. If you want a basic SHA256 chain, clone Bitcoin Core. If you want Scrypt, clone Litecoin. // We'll use a generic approach here, assuming a standard Bitcoin-like codebase.
          </p>

          <h2>2. Naming and Branding (The Search and Replace)</h2>
          <p>
            The tedious part. You need to rename "Bitcoin" to "YourCoin" across the entire source tree. Use `sed` or `find` carefully. Avoid replacing cryptographic constants by accident.
          </p>
          <ul>
            <li><code>src/chainparams.cpp</code> - Where network names are defined.</li>
            <li><code>src/clientversion.h</code> - Where the version string is defined.</li>
            <li><code>configure.ac</code> - Where the build system defines the package name.</li>
          </ul>

          <h2>3. Modifying Consensus Parameters</h2>
          <p>
            This is where the actual engineering happens. Open <code>src/chainparams.cpp</code>. You need to define the fundamental physics of your blockchain.
          </p>
          <pre><code>
consensus.nSubsidyHalvingInterval = 210000; // Halving every X blocks
consensus.BIP16Exception = uint256();
consensus.BIP34Height = 1;
consensus.powLimit = uint256S("00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
consensus.nPowTargetTimespan = 14 * 24 * 60 * 60; // 2 weeks
consensus.nPowTargetSpacing = 10 * 60; // 10 minutes
          </code></pre>
          <p>
            If you want a faster chain, change <code>nPowTargetSpacing</code> to <code>2.5 * 60</code> (2.5 minutes, like Litecoin) and adjust the timespan accordingly. // Failing to adjust the timespan relative to the spacing will severely break your difficulty retargeting algorithm.
          </p>

          <h2>4. The Genesis Block</h2>
          <p>
            You cannot use the original Bitcoin genesis block hash. You must mine your own. The genesis block is defined in <code>chainparams.cpp</code> inside the <code>CreateGenesisBlock</code> function.
          </p>
          <p>
            You need a custom timestamp, a custom message (the "newspaper headline"), and you must brute-force the <code>nonce</code> until the resulting hash satisfies your initial <code>powLimit</code>.
          </p>
          <pre><code>
const char* pszTimestamp = "NY Times 05/May/2026 Architecting custom chains";
CMutableTransaction txNew;
txNew.vin.resize(1);
txNew.vout.resize(1);
// ... setup txNew ...
genesis = CreateGenesisBlock(1714900000, 0, 0x1d00ffff, 1, 50 * COIN);
          </code></pre>
          <p>
            Write a small python script or modify the C++ code to loop through nonces (<code>genesis.nNonce++</code>) and print the block hash when <code>genesis.GetHash() &lt;= consensus.powLimit</code>. Once found, hardcode the nonce and hash into <code>chainparams.cpp</code>.
          </p>

          <h2>5. Network Magic Bytes and Ports</h2>
          <p>
            Nodes identify each other using "Magic Bytes". If your magic bytes match another network, your nodes will try to connect to them and get banned.
          </p>
          <pre><code>
pchMessageStart[0] = 0xf9; // Change these 4 bytes!
pchMessageStart[1] = 0xbe;
pchMessageStart[2] = 0xb4;
pchMessageStart[3] = 0xd9;
vAlertPubKey = ParseHex("04..."); // Generate a new alert keypair
nDefaultPort = 8333; // Change your P2P port
nPruneAfterHeight = 100000;
          </code></pre>

          <h2>6. Bootstrapping: The DNS Seeder</h2>
          <p>
            When a node boots up, how does it find other peers? It queries a DNS Seeder. You must host a DNS server that returns the IP addresses of known active nodes.
          </p>
          <p>
            Bitcoin uses <code>bitcoin-seeder</code>. You need to fork it, configure it with your new magic bytes, host it on a VPS, and hardcode the domain (e.g., <code>seed.yourcoin.com</code>) into <code>vSeeds.emplace_back()</code> in <code>chainparams.cpp</code>. // Without a functional seeder, your wallet users will have to manually `addnode` via the console, which is a terrible UX.
          </p>

          <h2>7. Compiling and the First Node</h2>
          <p>
            With all consensus parameters set, compile the daemon.
          </p>
          <pre><code>
./autogen.sh
./configure --disable-tests --disable-bench --without-gui
make -j$(nproc)
          </code></pre>
          <p>
            Start <code>yourcoind</code> on a VPS. This is your seed node. Start a second node on your local machine. They should connect, and you can begin mining the first blocks (block 1, 2, 3...) using the <code>generatetoaddress</code> RPC command.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Forking a blockchain requires extreme attention to detail. A single missed cryptographic constant or mismatched port will fragment your network before it even launches. Always test thoroughly on RegTest and Testnet networks before releasing mainnet binaries.
          </p>
        </div>
        
      </div>
    </div>
  );
}
