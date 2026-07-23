import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  inverse = false,
  className = "",
  style,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-[720px] mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
      style={style}
    >
      {eyebrow && (
        <div
          className={`font-display font-semibold text-xs tracking-widest uppercase mb-3 ${
            inverse ? "text-hacey-lime" : "text-hacey-teal-dark"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-[28px] md:text-3xl font-semibold leading-tight ${
          inverse ? "text-white" : "text-hacey-navy"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-3.5 mb-0 text-lg leading-relaxed ${
            inverse ? "text-white/85" : "text-gray-500"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
