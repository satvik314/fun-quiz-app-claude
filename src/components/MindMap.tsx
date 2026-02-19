"use client";

import { concepts, centralTheme } from "@/data/lateralThinking";

interface MindMapProps {
  activeNode: string | null;
  onNodeClick: (id: string | null) => void;
}

export default function MindMap({ activeNode, onNodeClick }: MindMapProps) {
  const cx = 500;
  const cy = 400;
  const radius = 260;

  const nodePositions = concepts.map((concept, i) => {
    const angle = (i / concepts.length) * 2 * Math.PI - Math.PI / 2;
    return {
      ...concept,
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <svg
        viewBox="0 0 1000 800"
        className="w-full max-w-4xl h-auto"
        style={{ minHeight: "500px" }}
      >
        <defs>
          {/* Glow filter for active nodes */}
          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#00d4ff" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-red">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="#ef0038" floodOpacity="0.4" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated dash pattern */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Connection lines from center to each node */}
        {nodePositions.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke={activeNode === node.id ? "#00d4ff" : "#00d4ff"}
            strokeOpacity={activeNode === node.id ? 0.6 : 0.15}
            strokeWidth={activeNode === node.id ? 2 : 1}
            strokeDasharray={activeNode === node.id ? "none" : "6 4"}
            className="transition-all duration-500"
          />
        ))}

        {/* Decorative orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#00d4ff"
          strokeOpacity="0.06"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Central node */}
        <g
          className="cursor-pointer"
          onClick={() => onNodeClick(null)}
        >
          {/* Outer pulse ring */}
          <circle
            cx={cx}
            cy={cy}
            r={68}
            fill="none"
            stroke="#ef0038"
            strokeOpacity="0.3"
            strokeWidth="1"
          >
            <animate
              attributeName="r"
              values="68;78;68"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.3;0.05;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main circle */}
          <circle
            cx={cx}
            cy={cy}
            r={65}
            fill="#0a0e1a"
            stroke="#ef0038"
            strokeWidth="2"
            filter="url(#glow-red)"
          />

          {/* Central text */}
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fill="#00d4ff"
            fontSize="14"
            fontWeight="800"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="1"
          >
            LATERAL
          </text>
          <text
            x={cx}
            y={cy + 8}
            textAnchor="middle"
            fill="#00d4ff"
            fontSize="14"
            fontWeight="800"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="1"
          >
            THINKING
          </text>
          <text
            x={cx}
            y={cy + 26}
            textAnchor="middle"
            fill="#ef0038"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
            opacity="0.7"
          >
            de Bono
          </text>
        </g>

        {/* Concept nodes */}
        {nodePositions.map((node) => {
          const isActive = activeNode === node.id;
          const nodeRadius = isActive ? 50 : 44;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => onNodeClick(node.id)}
            >
              {/* Active pulse */}
              {isActive && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeRadius + 8}
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="r"
                    values={`${nodeRadius + 8};${nodeRadius + 16};${nodeRadius + 8}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.4;0.05;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill={isActive ? "#111827" : "#0a0e1a"}
                stroke={isActive ? "#00d4ff" : "#00d4ff"}
                strokeOpacity={isActive ? 1 : 0.3}
                strokeWidth={isActive ? 2 : 1}
                filter={isActive ? "url(#glow-blue)" : undefined}
                className="transition-all duration-300"
              />

              {/* Icon */}
              <text
                x={node.x}
                y={node.y - 4}
                textAnchor="middle"
                fontSize="22"
                dominantBaseline="central"
              >
                {node.icon}
              </text>

              {/* Label */}
              <text
                x={node.x}
                y={node.y + 22}
                textAnchor="middle"
                fill={isActive ? "#00d4ff" : "#e0e7ff"}
                fontSize="9"
                fontWeight="700"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.5"
                className="transition-colors duration-300"
              >
                {node.name.length > 12
                  ? node.name.slice(0, 12) + "…"
                  : node.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
