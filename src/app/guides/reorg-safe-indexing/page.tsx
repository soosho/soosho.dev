import React from 'react';

export const metadata = {
  title: 'Idempotent Indexing: Building Reorg-Safe Data Pipelines | Soosho',
  description: 'Architectural breakdown of how to ingest raw blockchain data into PostgreSQL using Go, guaranteeing zero data corruption during deep chain reorganizations.',
};

export default function ReorgSafeIndexingGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Data Architecture
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• 18 min read</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Idempotent Indexing: Building Reorg-Safe Data Pipelines.
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
            When parsing blockchain data at scale, your biggest enemy isn't performance—it's mutability. Blockchains reorganize. If your ingestion pipeline assumes the chain only moves forward, your database will inevitably become corrupted.
          </p>
        </div>

        <div className="blog-content">
          <h2>1. The Reality of Reorganizations</h2>
          <p>
            A chain reorganization (reorg) occurs when two miners find a block at the same time, splitting the network. Eventually, one chain becomes longer, and nodes on the shorter chain must discard their recent blocks and adopt the longer one.
          </p>
          <p>
            If your block explorer backend has already saved the transactions from the discarded (orphaned) block, you now have fake balances, fake transactions, and broken foreign keys. You must design your system to roll back flawlessly.
          </p>

          <h2>2. The Idempotent Schema Design</h2>
          <p>
            "Idempotence" means that applying the same operation multiple times yields the same result as applying it once. When your Go worker parses a block and inserts it into PostgreSQL, it should never crash if the data is already there. 
          </p>
          <p>
            // We use standard UPSERT mechanics in Postgres to achieve this.
          </p>
          <pre><code>
INSERT INTO transactions (txid, block_hash, amount, time)
VALUES ($1, $2, $3, $4)
ON CONFLICT (txid) DO UPDATE 
SET block_hash = EXCLUDED.block_hash, time = EXCLUDED.time;
          </code></pre>
          <p>
            Notice that we UPDATE the `block_hash` on conflict. Why? Because during a reorg, a transaction might be removed from an orphaned block and immediately included in the next valid block. Its `txid` stays the same, but its `block_hash` changes. Idempotent upserts handle this shift automatically.
          </p>

          <h2>3. The Ingestion Loop Architecture in Go</h2>
          <p>
            A naive ingestion loop just requests `getBlock(height+1)`. A robust ingestion loop verifies the cryptographic link between blocks.
          </p>
          <pre><code>
// Go pseudo-code for the master synchronization loop
func syncNextBlock(db *Database, rpc *RPCClient) error &#123;
    latestSavedBlock := db.GetHighestBlock()
    
    // Fetch the block at height + 1
    nextBlockData := rpc.GetBlockByHeight(latestSavedBlock.Height + 1)
    
    // THE CRITICAL CHECK
    if nextBlockData.PreviousHash != latestSavedBlock.Hash &#123;
        // A reorg has occurred! The chain split happened at or before latestSavedBlock.
        log.Warn("Reorg detected at height", latestSavedBlock.Height)
        return handleReorg(db, rpc, latestSavedBlock)
    &#125;
    
    // Safe to process
    return processBlock(db, nextBlockData)
&#125;
          </code></pre>

          <h2>4. Executing the Rollback</h2>
          <p>
            When `handleReorg` is triggered, you must prune the database backwards until you find the common ancestor between your database and the node's current reality.
          </p>
          <ol>
            <li>Delete all UTXOs (Unspent Transaction Outputs) created by the orphaned block.</li>
            <li>Restore any UTXOs that were "spent" by the orphaned block (flip their status back to unspent).</li>
            <li>Delete the transactions associated with the orphaned block.</li>
            <li>Delete the orphaned block record itself.</li>
          </ol>
          <p>
            // This MUST be wrapped in a single SQL Transaction. If the rollback fails halfway, your database is permanently out of sync.
          </p>
          <pre><code>
BEGIN;
  DELETE FROM utxos WHERE block_hash = 'orphan_hash';
  UPDATE utxos SET spent = false WHERE spent_in_block = 'orphan_hash';
  DELETE FROM transactions WHERE block_hash = 'orphan_hash';
  DELETE FROM blocks WHERE hash = 'orphan_hash';
COMMIT;
          </code></pre>

          <h2>5. Satoshi-Precision and Type Safety</h2>
          <p>
            Never use `float64` or `DECIMAL` types for crypto amounts in Go. You will encounter floating-point inaccuracies that cause balances to be off by fractions of a satoshi.
          </p>
          <p>
            Always process amounts using Go's `uint64` (for Bitcoin-like chains) or the `math/big.Int` package (for Ethereum-like chains). In PostgreSQL, store these values as `BIGINT` or `NUMERIC(78, 0)`.
          </p>

          <h2>6. Conclusion</h2>
          <p>
            Reorg-safe indexing is the foundation of enterprise-grade blockchain infrastructure. By combining UPSERT logic, cryptographic parent-child verification, and atomic SQL rollbacks, your data pipeline will survive deep chain reorganizations and maintain 100% data integrity without human intervention.
          </p>
        </div>
        
      </div>
    </div>
  );
}
