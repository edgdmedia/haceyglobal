"use client";

import React from "react";
import { Button } from "./Button";
import { CountUp } from "./CountUp";

const MAILTO = "mailto:isaiahowolabi@hacey.org";

export function CtaBand() {
  const bullets = [
    "Access to a network of 200+ verified experts",
    "Evidence-based approach with proven results",
    "Innovative digital solutions for social impact",
  ];

  return (
    <section className="bg-hacey-navy text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-1">
        <div className="reveal">
          <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-lime mb-3.5">
            Partner with us
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-[22px] max-w-[520px]">
            Let&rsquo;s build systems that work for everyone.
          </h2>
          <div className="grid gap-3.5 mb-8">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3 items-center">
                <span className="flex-none w-[26px] h-[26px] rounded-full bg-hacey-lime text-hacey-navy-dark grid place-items-center font-bold font-display text-[15px]">
                  ✓
                </span>
                <span className="text-base text-white/90">{b}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3.5 flex-wrap">
            <Button variant="accent" size="lg" href={MAILTO}>
              Work with Us
            </Button>
            <Button variant="outline-inverse" size="lg" href="/services">
              Explore Services
            </Button>
          </div>
        </div>
        <div className="reveal d2 bg-white/6 border border-white/12 rounded-lg p-9">
          <div className="grid grid-cols-2 gap-7">
            {[
              ["17", "+", "Years of impact"],
              ["40", "+", "Programs delivered"],
              ["200", "+", "Verified experts"],
              ["6", "", "African countries"],
            ].map(([n, s, l]) => (
              <div key={l}>
                <div className="font-display font-black text-3xl md:text-4xl text-hacey-lime leading-none">
                  <CountUp end={Number(n)} suffix={s} />
                </div>
                <div className="text-white/72 text-sm mt-1.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaBand;
