import React from 'react';

export const HeaderLogo: React.FC<{ className?: string }> = ({ className = 'w-9 h-9 sm:w-10 sm:h-10' }) => {
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      {/* Background Rounded Shield Container */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Outer Outline */}
        <path
          d="M50 4L16 18V46C16 67.5 30.5 87.5 50 96C69.5 87.5 84 67.5 84 46V18L50 4Z"
          fill="url(#shield_gradient)"
          stroke="#F59E0B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Subtle Glow */}
        <path
          d="M50 10L22 22V46C22 64.5 34 81.5 50 89C66 81.5 78 64.5 78 46V22L50 10Z"
          fill="#004D21"
          opacity="0.9"
        />

        {/* Modern Fuel Pump Dispenser Silhouette */}
        {/* Pump Body */}
        <rect
          x="33"
          y="32"
          width="24"
          height="42"
          rx="4"
          fill="#FFFFFF"
        />

        {/* Pump Digital Display */}
        <rect
          x="38"
          y="37"
          width="14"
          height="10"
          rx="2"
          fill="#064E3B"
        />
        {/* Mini 9771 text inside screen */}
        <text
          x="45"
          y="44.5"
          fill="#F59E0B"
          fontSize="5.5"
          fontWeight="900"
          fontFamily="monospace"
          textAnchor="middle"
        >
          9771
        </text>

        {/* Pump Nozzle Hose curve */}
        <path
          d="M57 44H63C65.5 44 67 46 67 48.5V64C67 66 65 67 63 67V61"
          stroke="#FCD34D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Nozzle Handle */}
        <path
          d="M63 56L67 52L65 48"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Relief Leaf / Drop Emblem at bottom of pump */}
        <path
          d="M45 54C42 58 42 63 45 66C48 63 48 58 45 54Z"
          fill="#10B981"
        />

        {/* Gold Star at Shield Top */}
        <path
          d="M50 14L51.5 18H55.5L52.3 20.3L53.5 24.3L50 22L46.5 24.3L47.7 20.3L44.5 18H48.5L50 14Z"
          fill="#F59E0B"
        />

        <defs>
          <linearGradient id="shield_gradient" x1="50" y1="4" x2="50" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#006633" />
            <stop offset="1" stopColor="#003D1A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
