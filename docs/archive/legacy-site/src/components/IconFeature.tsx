"use client";

import React, { useState } from "react";

interface IconFeatureProps {
  icon?: string;
  iconAlt?: string;
  title?: string;
  children?: React.ReactNode;
  layout?: "card" | "tile";
  className?: string;
  style?: React.CSSProperties;
}

export function IconFeature({
  icon,
  iconAlt = "",
  title,
  children,
  layout = "card",
  className = "",
  style,
}: IconFeatureProps) {
  const isTile = layout === "tile";
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`bg-white rounded-md transition-all duration-220 ease-in-out ${
        isTile ? "px-5 py-7 text-center" : "p-5 text-left"
      } ${hover ? "shadow-raised -translate-y-[3px]" : "shadow-card"} ${className}`}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`bg-hacey-navy-tint grid place-items-center ${
          isTile ? "w-[72px] h-[72px] rounded-full mx-auto mb-4" : "w-[58px] h-[58px] rounded-sm mb-4"
        }`}
      >
        {icon && (
          <img
            src={icon}
            alt={iconAlt}
            className={isTile ? "w-[38px] h-[38px]" : "w-[32px] h-[32px]"}
          />
        )}
      </div>
      {title && (
        <h3 className={`font-semibold text-hacey-navy ${isTile ? "text-lg" : "text-xl"} ${children ? "mb-2" : "mb-0"}`}>
          {title}
        </h3>
      )}
      {children && (
        <p className="m-0 text-[15px] text-gray-700 leading-relaxed">
          {children}
        </p>
      )}
    </div>
  );
}
