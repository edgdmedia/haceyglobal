import React from "react";
import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ClientReveal } from "@/components/ClientReveal";

export const metadata: Metadata = {
  title: "Practice Areas | HACEY LLC",
  description: "Explore our primary focus areas: Health & Wellbeing, Economic Inclusion, Rights & Advocacy, and Environmental Sustainability.",
};

const areas: [string, string, string, string[]][] = [
  [
    "/assets/img/practice-health.jpg",
    "Health & Wellbeing",
    "We strive to enhance health security and access to quality healthcare and nutrition, combating diseases and promoting healthier behaviors within communities.",
    ["Maternal & reproductive health", "Malaria prevention", "Nutrition & disease response"],
  ],
  [
    "/assets/img/practice-economic.jpg",
    "Economic Inclusion",
    "Our initiatives uplift marginalized individuals by creating sustainable employment, fostering entrepreneurship, increasing access to financial services and improving income.",
    ["Entrepreneurship support", "Financial inclusion", "Youth employment"],
  ],
  [
    "/assets/img/practice-rights.jpg",
    "Rights & Advocacy",
    "We champion human rights through legal and policy change, raise awareness, and empower communities with knowledge to ensure a just and inclusive society.",
    ["SRHR advocacy", "EndFGM Alliance", "Community leadership"],
  ],
  [
    "/assets/img/practice-environment.jpg",
    "Environmental Sustainability",
    "Committed to a greener future, we lead initiatives that reduce carbon footprints, conserve resources and preserve biodiversity.",
    ["Zero Carbon Africa", "Resource conservation", "Business sustainability"],
  ],
];

export default function PracticeAreas() {
  return (
    <ClientReveal>
      <div className="flex flex-col min-h-screen">
        <Nav active="Practice Areas" />
      <PageHero
        eyebrow="Where we work"
        title="Driving sustainable change across key development sectors."
        lead="HACEY harnesses novel approaches and cutting-edge tools to drive impactful social change across four interconnected practice areas."
        image="/assets/img/practice-health.jpg"
      />

      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid gap-16">
          {areas.map(([img, t, d, tags], i) => (
            <article
              key={t}
              className="reveal grid grid-cols-1 md:grid-cols-2 gap-11 items-center"
            >
              <div
                className={`rounded-lg overflow-hidden shadow-card ${
                  i % 2 ? "md:order-2" : "md:order-1"
                }`}
              >
                <img src={img} alt={t} className="block w-full h-[320px] object-cover" />
              </div>
              <div className={i % 2 ? "md:order-1" : "md:order-2"}>
                <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
                  {"0" + (i + 1)} &mdash; Practice Area
                </div>
                <h2 className="text-2xl font-semibold text-hacey-navy mb-4 font-display">
                  {t}
                </h2>
                <p className="text-lg text-gray-700 mb-5 leading-relaxed">{d}</p>
                <div className="flex flex-wrap gap-2.5">
                  {(tags as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 bg-hacey-teal-tint text-hacey-teal-dark font-display font-semibold text-xs px-3.5 py-1.5 rounded-pill"
                    >
                      <span className="text-hacey-lime-dark font-black">✓</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
    </ClientReveal>
  );
}
