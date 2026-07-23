import React from "react";
import Link from "next/link";

const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Practice Areas", "/practice-areas"],
  ["Impact", "/impact"],
];
const MAILTO = "mailto:isaiahowolabi@hacey.org";

export function Footer() {
  return (
    <footer className="bg-hacey-navy-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="bg-white rounded-md px-4 py-2.5 inline-block">
            <img src="/assets/hacey-logo.png" alt="HACEY" className="h-8 w-auto block" />
          </span>
          <p className="text-white/72 text-sm leading-relaxed mt-4 max-w-[360px]">
            HACEY LLC is a social impact consultancy with over 17 years of experience transforming complex challenges into impactful solutions.
          </p>
        </div>
        <div>
          <div className="font-display font-bold text-[15px] text-white mb-3.5">Contact</div>
          <div className="text-white/72 text-sm leading-relaxed">Austin, Texas</div>
          <div className="text-white/72 text-sm leading-relaxed">(346) 438-9082</div>
          <div className="text-white/72 text-sm leading-relaxed">
            <a href={MAILTO} className="text-hacey-lime hover:underline">
              isaiah@haceyglobal.com
            </a>
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-[15px] text-white mb-3.5">Quick Links</div>
          <div className="grid gap-2">
            {NAV.map(([l, h]) => (
              <Link key={l} href={h} className="text-white/72 text-sm leading-relaxed no-underline hover:text-hacey-lime transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/14 text-center py-[18px] px-6 text-[13px] text-white/55">
        &copy; {new Date().getFullYear()} HACEY LLC. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
