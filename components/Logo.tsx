
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-24 w-auto" }) => {
  // Kullanıcının verdiği linkteki crop (kırpma) değerleri bazen görüntüyü bozabiliyor.
  // Daha güvenli bir görüntüleme için padding ve object-contain ayarlarıyla koruma sağlıyoruz.
  return (
    <div className={`flex items-center justify-center p-1 ${className}`}>
      <img 
        src="https://static.wixstatic.com/media/12c382_55e4f61678294a20b3b8989d1fcfe865~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SHG%20Airshow%202026%20Logo.png" 
        alt="SHG Airshow 2026 Logo" 
        className="max-h-full w-auto object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.onerror = null; 
          target.src = "https://shgairshow.com/wp-content/uploads/2024/01/shg_airshow_2026_logo.png";
        }}
      />
    </div>
  );
};

export default Logo;
