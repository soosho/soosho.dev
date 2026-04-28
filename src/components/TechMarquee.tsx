'use client';

import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiGo, SiPython, SiPhp, SiLaravel, SiDocker, 
  SiPostgresql, SiMysql, SiLinux, SiNginx, 
  SiJavascript, SiSolidity, SiFramer, SiOpenzeppelin
} from 'react-icons/si';

const TECH_LOGOS = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiGo />, title: "Golang" },
  { node: <SiPython />, title: "Python" },
  { node: <SiPhp />, title: "PHP" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiLinux />, title: "Linux" },
  { node: <SiNginx />, title: "Nginx" },
  { node: <SiSolidity />, title: "Solidity" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiOpenzeppelin />, title: "OpenZeppelin" },
];

export default function TechMarquee() {
  return (
    <div style={{ 
      background: '#000', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '2.5rem 0'
    }}>
      <LogoLoop
        logos={TECH_LOGOS}
        speed={60}
        direction="left"
        logoHeight={32}
        gap={60}
        hoverSpeed={20}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
      />
    </div>
  );
}
