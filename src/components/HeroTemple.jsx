import React from 'react';

/**
 * HeroTemple Component
 * Highly detailed, transparent architectural illustration of the sacred Tirumala Temple & Dravidian Rajagopuram.
 * Scalable to any resolution without cropping or background clipping.
 */
export default function HeroTemple({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Subtle divine golden glow aura behind temple */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-soft/20 via-gold-soft/10 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

      <svg
        viewBox="0 0 800 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[580px] drop-shadow-[0_20px_40px_rgba(180,154,106,0.18)] transition-transform duration-300"
        role="img"
        aria-label="Majestic Tirumala Temple and Sacred Dravidian Gopuram"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="goldKalasam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#D4A853" />
            <stop offset="100%" stopColor="#8E6A26" />
          </linearGradient>

          <linearGradient id="stoneGopuram" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#968979" />
            <stop offset="30%" stopColor="#C4B7A6" />
            <stop offset="70%" stopColor="#A89A89" />
            <stop offset="100%" stopColor="#7E7263" />
          </linearGradient>

          <linearGradient id="anandaNilayam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="35%" stopColor="#E5B94E" />
            <stop offset="80%" stopColor="#B38520" />
            <stop offset="100%" stopColor="#7A560E" />
          </linearGradient>

          <linearGradient id="templeBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C8BCAB" />
            <stop offset="100%" stopColor="#968875" />
          </linearGradient>
        </defs>

        {/* 1. Base / Adhisthana (Temple Stone Platform) */}
        <g id="Temple-Plinth">
          <path d="M120 640 L680 640 L660 675 L140 675 Z" fill="url(#templeBase)" stroke="#5A4E3E" strokeWidth="2" />
          {/* Base molding grooves */}
          <rect x="140" y="650" width="520" height="6" fill="#847665" />
          <rect x="160" y="660" width="480" height="4" fill="#6E6150" />
          {/* Decorative elephant/plinth frieze placeholders */}
          {[180, 240, 300, 360, 420, 480, 540, 600].map((x, i) => (
            <circle key={i} cx={x} cy="653" r="3" fill="#D2BE91" />
          ))}
        </g>

        {/* 2. Main Sanctum & Pillared Mandapam */}
        <g id="Pillared-Mandapam">
          {/* Main wall background */}
          <rect x="160" y="520" width="480" height="120" fill="#B3A594" stroke="#5A4E3E" strokeWidth="2" />
          
          {/* Sanctum Entrance (Mahadwaram) */}
          <path d="M350 640 L350 540 Q400 520 450 540 L450 640 Z" fill="#302C28" stroke="#D2BE91" strokeWidth="2" />
          {/* Sanctum inner golden glow */}
          <path d="M365 640 L365 550 Q400 535 435 550 L435 640 Z" fill="url(#anandaNilayam)" opacity="0.4" />

          {/* Dravidian Stone Pillars */}
          {[180, 220, 265, 310, 490, 535, 580, 620].map((x, i) => (
            <g key={i}>
              {/* Pillar Capital & Base */}
              <rect x={x - 12} y="520" width="24" height="8" fill="#847665" stroke="#5A4E3E" strokeWidth="1" />
              <rect x={x - 8} y="528" width="16" height="104" fill="#D2BE91" stroke="#5A4E3E" strokeWidth="1" />
              <rect x={x - 12} y="632" width="24" height="8" fill="#847665" stroke="#5A4E3E" strokeWidth="1" />
              {/* Yali / Pillar bracket */}
              <path d={`M${x - 14} 528 Q${x} 540 ${x + 14} 528 Z`} fill="#B49A6A" />
            </g>
          ))}
          
          {/* Chhajja / Eaves cornices */}
          <path d="M140 520 L660 520 L640 505 L160 505 Z" fill="url(#stoneGopuram)" stroke="#5A4E3E" strokeWidth="2" />
        </g>

        {/* 3. Golden Ananda Nilayam Vimanam (Tirumala Tower) */}
        <g id="Ananda-Nilayam-Vimanam">
          {/* Tier 1 (Lowest Vimana Tier) */}
          <path d="M220 505 L580 505 L550 440 L250 440 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
          {/* Niches / Kudu arches */}
          {[270, 320, 370, 400, 430, 480, 530].map((x, i) => (
            <path key={i} d={`M${x - 12} 495 Q${x} 460 ${x + 12} 495 Z`} fill="#FFF2D6" stroke="#9E7519" strokeWidth="1" />
          ))}

          {/* Tier 2 */}
          <path d="M250 440 L550 440 L520 375 L280 375 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
          {[300, 350, 400, 450, 500].map((x, i) => (
            <path key={i} d={`M${x - 14} 430 Q${x} 395 ${x + 14} 430 Z`} fill="#FFF2D6" stroke="#9E7519" strokeWidth="1.5" />
          ))}

          {/* Tier 3 */}
          <path d="M280 375 L520 375 L490 310 L310 310 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
          {[330, 375, 400, 425, 470].map((x, i) => (
            <path key={i} d={`M${x - 12} 365 Q${x} 330 ${x + 12} 365 Z`} fill="#FFF2D6" stroke="#9E7519" strokeWidth="1" />
          ))}

          {/* Tier 4 */}
          <path d="M310 310 L490 310 L465 245 L335 245 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
          {[355, 400, 445].map((x, i) => (
            <path key={i} d={`M${x - 14} 300 Q${x} 265 ${x + 14} 300 Z`} fill="#FFF2D6" stroke="#9E7519" strokeWidth="1" />
          ))}

          {/* Tier 5 (Top Vimana Shikhara Base) */}
          <path d="M335 245 L465 245 L445 185 L355 185 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
          {/* Shikhara Dome */}
          <path d="M355 185 Q400 130 445 185 Z" fill="url(#anandaNilayam)" stroke="#7A560E" strokeWidth="2" />
        </g>

        {/* 4. Sacred Golden Kalasams (Finials at the Peak) */}
        <g id="Sacred-Kalasams">
          {/* Central Main Golden Kalasam */}
          <path d="M394 135 L406 135 L404 90 Q400 70 396 90 Z" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1.5" />
          <circle cx="400" cy="115" r="9" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1.5" />
          <circle cx="400" cy="95" r="6" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
          <polygon points="400,65 403,78 397,78" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />

          {/* Left Flanking Kalasam */}
          <path d="M375 145 L385 145 L383 110 Q380 95 377 110 Z" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
          <circle cx="380" cy="128" r="6" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
          <polygon points="380,88 382,98 378,98" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />

          {/* Right Flanking Kalasam */}
          <path d="M415 145 L425 145 L423 110 Q420 95 417 110 Z" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
          <circle cx="420" cy="128" r="6" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
          <polygon points="420,88 422,98 418,98" fill="url(#goldKalasam)" stroke="#7A560E" strokeWidth="1" />
        </g>

        {/* 5. Intricate Gopuram Sculptural Details */}
        <g id="Ornamentation-Highlights" opacity="0.9">
          {/* Subtle horizontal gold string-courses */}
          {[440, 375, 310, 245, 185].map((y, i) => (
            <line key={i} x1="200" y1={y} x2="600" y2={y} stroke="#FFF2D6" strokeWidth="2" opacity="0.6" />
          ))}
          {/* Temple bells along eave edges */}
          {[235, 275, 315, 355, 395, 435, 475, 515, 555].map((x, i) => (
            <circle key={i} cx={x} cy="508" r="3" fill="#FFF4D0" stroke="#7A560E" strokeWidth="0.8" />
          ))}
        </g>
      </svg>
    </div>
  );
}
