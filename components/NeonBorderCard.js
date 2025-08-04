// components/NeonBorderCard.js
'use client';

import './NeonBorderCard.css';

const NeonBorderCard = ({ children, className = '' }) => {
  return (
    <div className={`neon-border-card ${className}`}>
      <div className="neon-border-card-content">
        {children}
      </div>
    </div>
  );
};

export default NeonBorderCard;