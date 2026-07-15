"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  borderColor?: string;
}

export function SpotlightCard({
  children,
  className,
  glowColor = "var(--primary-glow)",
  borderColor = "var(--primary-border-glow)",
  ...props
}: SpotlightCardProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300",
        className
      )}
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Dynamic Radial glow background */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Dynamic Radial glow border overlay using standard CSS masking */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl border border-transparent transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), ${borderColor}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          padding: "1px",
          mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
