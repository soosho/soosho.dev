'use client';

import { motion } from 'framer-motion';
import { PiLayout, PiShareNetwork, PiTerminalWindow, PiStrategy, PiSealCheck, PiTarget } from 'react-icons/pi';

const PILLARS = [
  {
    number: '01',
    title: 'Modern Web Development',
    tag: 'Frontend / Backend',
    icon: <PiLayout size={26} />,
    text: 'Architecting high-performance digital interfaces and robust full-stack services using Next.js, React, Laravel, and WordPress. I focus on delivering polished, conversion-optimized UI/UX backed by efficient, scalable code and modern API architectures.'
  },
  {
    number: '02',
    title: 'Blockchain Infrastructure',
    tag: 'Web3 / Ecosystems',
    icon: <PiShareNetwork size={26} />,
    text: 'Designing resilient decentralized systems, ranging from low-latency mining pool backends and real-time block explorers to comprehensive blockchain-based ecosystems and custom high-availability node infrastructure for global networks.'
  },
  {
    number: '03',
    title: 'Server & Cloud Architecture',
    tag: 'DevOps / Linux',
    icon: <PiTerminalWindow size={26} />,
    text: 'Managing the critical backbone of digital products through expert-level Linux administration, VPS orchestration, and automated deployment pipelines. I implement secure, hardened environments with high-precision monitoring and auto-scaling capabilities.'
  },
  {
    number: '04',
    title: 'Technical Strategy',
    tag: 'Product Engineering',
    icon: <PiStrategy size={26} />,
    text: 'Transforming complex business objectives into production-ready digital ecosystems. I bridge the gap between design, engineering, and infrastructure to build scalable roadmaps and high-impact systems that drive sustainable technological growth.'
  },
  {
    number: '05',
    title: 'Consensus Engineering',
    tag: 'Protocol & Core Forks',
    icon: <PiSealCheck size={26} />,
    text: 'Specializing in the development and forking of major blockchain protocols including Bitcoin, Ethereum, and Raptoreum. I implement custom features at the consensus level and architect secure, decentralized network foundations from the metal up.'
  },
  {
    number: '06',
    title: 'Growth & Mobility',
    tag: 'Apps / SEO',
    icon: <PiTarget size={26} />,
    text: 'Engineering cross-platform mobile applications and implementing aggressive technical SEO and marketing strategies. I leverage data-driven insights to ensure your products reach, engage, and retain their audience in competitive digital markets.'
  }
];

export default function About() {
  return (
    <section id="about" className="section-container" style={{ padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '10rem', alignItems: 'start' }}>
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ 
                color: 'var(--accent)', 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                letterSpacing: '0.4em', 
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              Full-Spectrum Developer
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 5rem)', 
                fontWeight: 900, 
                lineHeight: 0.9, 
                letterSpacing: '-0.04em',
                textTransform: 'uppercase'
              }}
            >
              Digital <br/>
              <span className="text-gradient">Architecting.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#fff', 
              lineHeight: 1.5,
              fontWeight: 500,
              letterSpacing: '-0.01em'
            }}>
              I’m an independent full-spectrum developer specializing in modern web development, 
              blockchain infrastructure, server architecture, and scalable digital product engineering.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.8,
              borderLeft: '2px solid rgba(168, 85, 247, 0.3)',
              paddingLeft: '1.5rem'
            }}>
              My experience spans building complete systems from the ground up—including frontend interfaces, 
              backend services, deployment pipelines, VPS management, mining pools, and decentralized infrastructure. 
              I develop robust digital solutions that prioritize performance, scalability, and long-term maintainability.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderLeft: '1px solid rgba(255,255,255,0.1)'
        }}>
          {PILLARS.map((pillar, index) => (
            <motion.div 
              key={index}
              whileHover="hover"
              initial="initial"
              style={{ 
                padding: '4rem 3rem',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                cursor: 'default',
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.2)'
              }}
            >
              {/* Hover Effect */}
              <motion.div 
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 0.05 }
                }}
                style={{ 
                  position: 'absolute', top: '-50%', right: '-50%', width: '200%', height: '200%', 
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                  <div style={{ 
                    width: '48px', height: '48px', borderRadius: '12px', 
                    background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}>
                    {pillar.icon}
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent)', opacity: 0.5 }}>{pillar.number}</span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.2em', 
                    color: 'var(--accent)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    {pillar.tag}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{pillar.title}</h3>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {pillar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Bio Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: '10rem', 
            padding: '6rem', 
            borderRadius: '40px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            <h4 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', letterSpacing: '-0.03em' }}>
              The <span style={{ color: 'var(--accent)' }}>Unified Skill Set.</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1.1rem' }}>
                I operate beyond traditional development roles by combining software engineering, infrastructure deployment, 
                UI/UX execution, and technical strategy into a unified skill set. Whether architecting complex backend systems, 
                optimizing server performance, or creating polished user-facing experiences, I focus on systems that are 
                both technically advanced and commercially practical.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1.1rem' }}>
                My approach is rooted in solving real-world technical challenges through versatile, end-to-end development—bridging 
                design, code, infrastructure, and innovation to build powerful digital ecosystems that perform reliably at scale.
              </p>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '6rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '3rem', 
            opacity: 0.3,
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase'
          }}>
            <span>Golang</span>
            <span>Python</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>Docker</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>C / C++</span>
            <span>C#</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Blockchain</span>
            <span>Linux Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
