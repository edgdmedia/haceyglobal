"use client";

import React, { useState } from "react";
import Link from "next/link";

const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Practice Areas", "/practice-areas"],
  ["Impact", "/impact"],
];
const MAILTO = "mailto:isaiahowolabi@hacey.org";

interface NavProps {
  active: string;
}

export function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-5 md:py-3 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center" aria-label="HACEY home">
          <img src="/assets/hacey-logo.png" alt="HACEY" className="h-[34px] w-auto" />
        </Link>
        <button
          className="md:hidden block bg-none border-0 cursor-pointer p-2 space-y-1.5"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-6 h-[2px] bg-hacey-navy transition-transform duration-250 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-[2px] bg-hacey-navy transition-opacity duration-250 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-hacey-navy transition-transform duration-250 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        <nav
          className={`flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-7 ml-auto absolute md:static top-[75px] md:top-[59px] inset-x-0 bg-white md:bg-transparent px-4 md:px-0 pb-4 md:pb-0 border-b md:border-b-0 border-gray-100 shadow-raised md:shadow-none transition-transform duration-300 md:translate-y-0 ${
            open ? "flex translate-y-0" : "hidden md:flex -translate-y-[120%]"
          }`}
        >
          {NAV.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`font-display font-semibold text-[15px] py-3.5 md:py-1 px-2 md:px-0 border-b md:border-b-0 border-gray-100 relative transition-colors duration-150 ${
                label === active
                  ? "text-hacey-navy md:after:content-[''] md:after:absolute md:after:left-0 md:after:right-0 md:after:bottom-[-2px] md:after:height-[2px] md:after:bg-hacey-lime md:after:rounded-sm"
                  : "text-gray-900 hover:text-hacey-teal-dark"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={MAILTO}
            className="font-display font-bold text-[15px] bg-hacey-navy text-white px-[22px] py-2.5 rounded-pill ml-0 md:ml-1.5 mt-3 md:mt-0 text-center hover:bg-hacey-navy-dark transition-colors duration-150"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Nav;
