import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  tone?: "lime" | "teal" | "navy" | "white";
  className?: string;
  style?: React.CSSProperties;
}

export function StatCard({
  value,
  label,
  tone = "lime",
  className = "",
  style,
}: StatCardProps) {
  const colors = {
    lime: "text-hacey-lime",
    teal: "text-hacey-teal",
    navy: "text-hacey-navy",
    white: "text-white",
  };

  return (
    <div className={`text-center p-5 ${className}`} style={style}>
      <div className={`font-display font-bold text-4xl md:text-5xl leading-none ${colors[tone]}`}>
        {value}
      </div>
      <div
        className={`mt-2.5 text-[15px] leading-relaxed ${
          tone === "white" ? "text-white/85" : "text-gray-700"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
