import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-24 w-auto" }) => {
  return (
    <div className={`flex items-center justify-center p-1 ${className}`}>
      <img 
        src="https://static.wixstatic.com/media/12c382_55e4f61678294a20b3b8989d1fcfe865~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SHG%20Airshow%202026%20Logo.png" 
        alt="SHG Airshow 2026 Logo" 
        className="max-h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;