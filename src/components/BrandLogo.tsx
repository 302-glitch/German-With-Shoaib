import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 56
  };

  const px = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem SVG */}
      <div 
        className="relative flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ width: px, height: px }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* German Flag Linear Gradients */}
            <linearGradient id="gws-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            
            <linearGradient id="gws-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>

            <linearGradient id="gws-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="shield-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Shield Outer Outline with Gold Rim */}
          <path
            d="M50 5 L88 22 C88 56 68 84 50 95 C32 84 12 56 12 22 Z"
            fill="url(#gws-dark)"
            stroke="url(#shield-rim)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Internal German Flag Chevron Ribbons */}
          {/* Top Stripe: Obsidian / Black */}
          <path
            d="M20 25 L80 25 C80 34 76 43 71 50 L29 50 C24 43 20 34 20 25 Z"
            fill="#090D16"
            opacity="0.95"
          />
          {/* Middle Stripe: Crimson Red */}
          <path
            d="M29 50 L71 50 C65 59 58 67 50 72 C42 67 35 59 29 50 Z"
            fill="url(#gws-red)"
          />
          {/* Bottom V: Vibrant Gold */}
          <path
            d="M37 60 L63 60 C59 66 55 70 50 74 C45 70 41 66 37 60 Z"
            fill="url(#gws-gold)"
          />

          {/* Stylized "G" and "S" Academic Monogram in Center */}
          <g transform="translate(50, 48) scale(0.95)">
            {/* Academic Cap Motif on Top of Emblem */}
            <path
              d="M0 -30 L22 -20 L0 -10 L-22 -20 Z"
              fill="url(#gws-gold)"
            />
            <path
              d="M-15 -17 L-15 -9 C-15 -2 15 -2 15 -9 L15 -17"
              stroke="url(#gws-gold)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tassel */}
            <path
              d="M17 -18 L24 -11 L24 -4"
              stroke="#FDE68A"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Monogram "G" (German) in Crisp Cream White */}
            <text
              x="-8"
              y="12"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="24"
              fontWeight="900"
              fontFamily="Inter, system-ui, sans-serif"
              style={{ letterSpacing: '-1px' }}
            >
              G
            </text>

            {/* Monogram "S" (Shoaib) in Radiant German Gold */}
            <text
              x="9"
              y="14"
              textAnchor="middle"
              fill="url(#gws-gold)"
              fontSize="24"
              fontWeight="900"
              fontFamily="Inter, system-ui, sans-serif"
              style={{ letterSpacing: '-1px' }}
            >
              S
            </text>
          </g>

          {/* Subtle Laurel Star Accent */}
          <circle cx="50" cy="85" r="3" fill="url(#gws-gold)" />
          <polygon points="50,80 52,84 56,85 52,86 50,90 48,86 44,85 48,84" fill="#FDE68A" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
              German With
            </span>
            <span className="font-black text-base sm:text-lg tracking-tight text-amber-500 leading-none">
              Shoaib
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-none">
            A1 Beginner to B2 German with Urdu
          </span>
        </div>
      )}
    </div>
  );
};
