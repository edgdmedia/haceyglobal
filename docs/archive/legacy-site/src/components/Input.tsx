"use client";

import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  multiline?: boolean;
  required?: boolean;
}

export function Input({
  label,
  type = "text",
  placeholder,
  required,
  multiline = false,
  className = "",
  style,
  ...rest
}: InputProps) {
  const [focus, setFocus] = useState(false);

  const baseCls = `w-full box-border px-4 py-3 font-body text-[15px] text-gray-900 bg-white rounded-sm border outline-none transition-all duration-150 ease-in-out ${
    focus
      ? "border-hacey-teal shadow-[0_0_0_3px_rgba(75,166,153,0.15)]"
      : "border-gray-300"
  }`;

  return (
    <label className={`block ${className}`} style={style}>
      {label && (
        <span className="block font-display font-medium text-[14px] text-gray-900 mb-1.5">
          {label}
          {required && <span className="text-hacey-teal-dark ml-0.5">*</span>}
        </span>
      )}
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className={baseCls}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          required={required}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={baseCls}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          required={required}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}
