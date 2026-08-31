import React from 'react';

/**
 * Subtle journey route map illustration for Hero background.
 * Highlights the branch connecting Tirupati to the selected destination.
 */
export default function HeroRouteMap({ activeDestination = "" }) {
  // Destination node positions on a normalized 800x500 canvas
  const tirupatiPos = { x: 400, y: 260 };

  const routes = [
    { id: "Tirumala", label: "TIRUMALA", x: 400, y: 100, category: "hill" },
    { id: "Srikalahasti", label: "SRIKALAHASTI", x: 620, y: 150, category: "east" },
    { id: "Chennai", label: "CHENNAI", x: 700, y: 270, category: "drop" },
    { id: "Tiruttani", label: "TIRUTTANI", x: 600, y: 390, category: "south-east" },
    { id: "Kanchipuram", label: "KANCHIPURAM", x: 500, y: 440, category: "south" },
    { id: "Arunachalam", label: "ARUNACHALAM", x: 300, y: 450, category: "south-west" },
    { id: "Golden Temple", label: "VELLORE", x: 200, y: 380, category: "west" },
    { id: "Kanipakam", label: "KANIPAKAM", x: 160, y: 280, category: "west" },
    { id: "Bangalore", label: "BANGALORE", x: 110, y: 180, category: "drop" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40 lg:opacity-60">
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-5xl"
      >
        <defs>
          {/* Subtle line gradient */}
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B49A6A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D2BE91" stopOpacity="0.7" />
          </linearGradient>

          <filter id="subtleGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer subtle orbital rings */}
        <circle cx={tirupatiPos.x} cy={tirupatiPos.y} r="160" stroke="#DED4C5" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        <circle cx={tirupatiPos.x} cy={tirupatiPos.y} r="280" stroke="#DED4C5" strokeWidth="1" strokeDasharray="3 8" opacity="0.4" />

        {/* Route branch lines connecting Tirupati to each hub */}
        {routes.map((node) => {
          const isActive = activeDestination && (
            activeDestination.toLowerCase().includes(node.id.toLowerCase()) ||
            node.label.toLowerCase().includes(activeDestination.toLowerCase())
          );

          // Quadratic bezier curve path for natural travel trail
          const midX = (tirupatiPos.x + node.x) / 2 + (node.y > tirupatiPos.y ? 20 : -20);
          const midY = (tirupatiPos.y + node.y) / 2 + (node.x > tirupatiPos.x ? -15 : 15);

          return (
            <g key={node.id}>
              {/* Path Line */}
              <path
                d={`M ${tirupatiPos.x} ${tirupatiPos.y} Q ${midX} ${midY} ${node.x} ${node.y}`}
                fill="none"
                stroke={isActive ? "#702D35" : "#B49A6A"}
                strokeWidth={isActive ? "2.5" : "1.2"}
                strokeDasharray={isActive ? "none" : "3 4"}
                className="transition-all duration-300"
                opacity={isActive ? 1 : 0.45}
              />

              {/* Destination Hub Node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 5.5 : 3.5}
                fill={isActive ? "#702D35" : "#FFFDF8"}
                stroke={isActive ? "#B49A6A" : "#B49A6A"}
                strokeWidth={isActive ? 2.5 : 1.5}
                className="transition-all duration-300"
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + (node.y > tirupatiPos.y ? 15 : -10)}
                textAnchor="middle"
                fill={isActive ? "#702D35" : "#746B61"}
                fontSize={isActive ? "11" : "9"}
                fontFamily="sans-serif"
                fontWeight={isActive ? "700" : "500"}
                letterSpacing="1"
                className="transition-all duration-300"
                opacity={isActive ? 1 : 0.65}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Central Origin Node: TIRUPATI */}
        <g id="Origin-Tirupati">
          <circle cx={tirupatiPos.x} cy={tirupatiPos.y} r="22" fill="#FAF7F2" stroke="#B49A6A" strokeWidth="1.5" opacity="0.8" />
          <circle cx={tirupatiPos.x} cy={tirupatiPos.y} r="8" fill="#702D35" stroke="#FFFDF8" strokeWidth="2" />
          
          <text
            x={tirupatiPos.x}
            y={tirupatiPos.y + 35}
            textAnchor="middle"
            fill="#302C28"
            fontSize="12"
            fontFamily="serif"
            fontWeight="bold"
            letterSpacing="2"
          >
            📍 TIRUPATI
          </text>
        </g>
      </svg>
    </div>
  );
}
