'use client';

import React from 'react';
import './LaunchButton.css';

const LaunchButton = ({ text = "Launch Project", onClick, href }: { text?: string; onClick?: () => void; href?: string }) => {
  const content = (
    <>
      <span className="launch-button__icon-wrapper">
        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="launch-button__icon-svg" width={12}>
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 14 15" fill="none" width={12} xmlns="http://www.w3.org/2000/svg" className="launch-button__icon-svg launch-button__icon-svg--copy">
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
        </svg>
      </span>
      {text}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="launch-button" 
        style={{ '--clr': '#a855f7' } as React.CSSProperties}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className="launch-button" 
      onClick={onClick}
      style={{ '--clr': '#a855f7' } as React.CSSProperties}
    >
      {content}
    </button>
  );
}

export default LaunchButton;
