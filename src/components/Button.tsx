import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "outline-inverse" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  disabled,
  className = "",
  style,
  ...rest
}: ButtonProps) {
  const pad = size === "sm" ? "px-[18px] py-[8px]" : size === "lg" ? "px-[32px] py-[14px]" : "px-[26px] py-[11px]";
  const fs = size === "sm" ? "text-[14px]" : size === "lg" ? "text-[17px]" : "text-[15px]";

  const variants = {
    primary: "bg-hacey-navy text-white border-2 border-hacey-navy hover:bg-hacey-navy-dark hover:border-hacey-navy-dark",
    accent: "bg-hacey-lime text-hacey-navy-dark border-2 border-hacey-lime hover:bg-hacey-lime-dark hover:border-hacey-lime-dark",
    outline: "bg-transparent text-hacey-navy border-2 border-hacey-navy hover:bg-hacey-navy hover:text-white",
    "outline-inverse": "bg-transparent text-white border-2 border-white hover:bg-white/15",
    ghost: "bg-transparent text-hacey-teal-dark border-2 border-transparent hover:text-hacey-navy",
  };

  const baseCls = `inline-flex items-center justify-center gap-2 cursor-pointer font-display font-semibold leading-none rounded-pill transition-all duration-180 ease-in-out text-center no-underline ${
    disabled ? "opacity-[0.45] pointer-events-none" : ""
  } ${pad} ${fs} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseCls} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={baseCls} style={style} {...rest}>
      {children}
    </button>
  );
}
