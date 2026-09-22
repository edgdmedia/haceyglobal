import React from "react";

interface BadgeProps {
  tone?: "navy" | "teal" | "lime" | "solid";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Badge({ tone = "navy", children, className = "", style }: BadgeProps) {
  const tones = {
    navy: "bg-hacey-navy-tint text-hacey-navy",
    teal: "bg-hacey-teal-tint text-hacey-teal-dark",
    lime: "bg-hacey-lime-tint text-hacey-lime-dark",
    solid: "bg-hacey-navy text-white",
  };

  return (
    <span
      className={`inline-block px-3.5 py-1 rounded-pill font-display font-semibold text-xs tracking-wider uppercase ${tones[tone]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
