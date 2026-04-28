'use client';

import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Core Languages',
    skills: ['Golang', 'Python', 'PHP', 'C / C++', 'C#', 'JavaScript', 'TypeScript', 'Solidity']
  },
  {
    category: 'Frameworks & Tools',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'Framer Motion', 'WordPress']
  },
  {
    category: 'Infrastructure & Ops',
    skills: ['Docker', 'Linux Architecture', 'VPS Management', 'Nginx', 'CI/CD Pipelines']
  },
  {
    category: 'Database & Systems',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Blockchain Protocols', 'API Design']
  },
  {
    category: 'Digital Strategy',
    skills: ['Tokenomics', 'Technical Strategy', 'SEO Optimization', 'Product Engineering']
  }
];

export default function Skills() {
  return (
    <section className="section-container" id="skills">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem' }}
          >
            Technical Arsenal
          </motion.span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginTop: '1.5rem', letterSpacing: '-0.02em' }}>
            Expertise & <span style={{ color: 'var(--accent)' }}>Technologies.</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem' 
        }}>
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 style={{ 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: 'var(--accent)', 
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
              }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05, color: '#fff', backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                    style={{ 
                      padding: '0.5rem 1.25rem', 
                      borderRadius: '8px', 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
