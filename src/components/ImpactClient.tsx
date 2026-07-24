"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CountUp } from "@/components/CountUp";
import { Badge } from "@/components/Badge";

const CATS = ["All", "Health", "Rights & Advocacy", "Economic", "Environment"];

const stories = [
  [
    "/assets/img/practice-environment.jpg",
    "Environment",
    "Zero Carbon Leadership",
    'Championed the "Zero Carbon Africa" initiative across 6 African countries, leading the charge toward a sustainable and carbon-neutral future.',
  ],
  [
    "/assets/img/impact-women-youth.jpg",
    "Rights & Advocacy",
    "Women & Youth Empowerment",
    "Empowered women and young people with financial inclusion, economic empowerment and digital access interventions.",
  ],
  [
    "/assets/img/impact-health-workers.jpg",
    "Health",
    "Health Worker Training",
    "Enhanced healthcare delivery in underserved areas by training health workers and equipping them with digital tools, including tablets and mobile phones.",
  ],
  [
    "/assets/img/practice-health.jpg",
    "Health",
    "Malaria Prevention",
    "Donated over 100,000 doses of IPTp-SP and 10,000 malaria rapid diagnostic test kits toward malaria prevention efforts in Oyo State.",
  ],
  [
    "/assets/img/impact-business.jpg",
    "Economic",
    "Business Support",
    "Empowered more than 20 businesses to implement sustainability-focused interventions, enabling lasting impact on the environment and society.",
  ],
  [
    "/assets/img/impact-media.jpg",
    "Rights & Advocacy",
    "Media Empowerment",
    "Equipped 96 media personnel, 322 community leaders and 69 EndFGM Alliance participants to address FGM, sexual and reproductive health, and youth unemployment.",
  ],
];

const stats: [number, string, string][] = [
  [17, "+", "Years of impact"],
  [40, "+", "Programs delivered"],
  [100000, "+", "IPTp-SP doses donated"],
  [6, "", "African countries"],
];

export function ImpactClient() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? stories : stories.filter((s) => s[1] === cat);

  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="Transforming lives and communities, one story at a time."
        lead="For over 17 years we have transformed lives across Africa and beyond — from empowering women and youth to advancing environmental sustainability, rooted in measurable outcomes and lasting change."
        image="/assets/img/impact-women-youth.jpg"
      />

      {/* Stats Band */}
      <section className="bg-hacey-navy-dark py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(([n, s, l], i) => (
            <div key={l} className={`reveal d${(i % 4) + 1} text-center`}>
              <div className="font-display font-black text-4xl md:text-5xl text-hacey-lime leading-none">
                <CountUp end={n} suffix={s} />
              </div>
              <div className="text-white/75 text-sm mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories with Filter */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal mb-8">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              Success stories
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy">
              Impact you can measure.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 mb-9">
            {CATS.map((c) => {
              const on = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`cursor-pointer font-display font-semibold text-sm px-4.5 py-2.5 rounded-pill border transition-all duration-180 ease-in-out ${
                    on
                      ? "bg-hacey-navy border-hacey-navy text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map(([img, tag, t, d], i) => (
              <article
                key={t}
                className={`reveal d${(i % 3) + 1} bg-white rounded-md overflow-hidden shadow-card flex flex-col`}
              >
                <img src={img} alt={t} className="block w-full h-[200px] object-cover" />
                <div className="p-6 flex flex-col gap-2.5">
                  <div>
                    <Badge tone="teal">{tag}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-hacey-navy font-display">{t}</h3>
                  <p className="margin-0 text-[15px] text-gray-700 leading-relaxed">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
