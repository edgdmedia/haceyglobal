"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CardProps {
  image?: string;
  imageAlt?: string;
  badge?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  href?: string;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({
  image,
  imageAlt = "",
  badge,
  title,
  children,
  href,
  footer,
  className = "",
  style,
}: CardProps) {
  const [hover, setHover] = useState(false);

  const containerCls = `block no-underline bg-white rounded-md overflow-hidden transition-all duration-220 ease-in-out ${
    hover ? "shadow-raised -translate-y-[3px]" : "shadow-card"
  } ${className}`;

  const content = (
    <>
      {image && (
        <div
          className="h-[180px] bg-center bg-cover bg-hacey-navy-tint"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={imageAlt}
        />
      )}
      <div className="p-5">
        {badge && <div className="mb-2.5">{badge}</div>}
        {title && (
          <h3 className={`text-lg font-semibold text-hacey-navy ${children ? "mb-2" : "mb-0"}`}>
            {title}
          </h3>
        )}
        {children && (
          <div className="text-[15px] text-gray-700 leading-relaxed">
            {children}
          </div>
        )}
        {footer && (
          <div className="mt-3.5 text-[13px] text-gray-500">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={containerCls}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={containerCls}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </div>
  );
}
