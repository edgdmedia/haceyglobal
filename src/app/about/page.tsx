"use client";

import React from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { CountUp } from "@/components/CountUp";
import { IconFeature } from "@/components/IconFeature";
import { useReveal } from "@/hooks/useReveal";

const principles = [
  ["/assets/img/systems-strengthening.png", "Expertise & Experience", "A team of adept professionals across diverse fields, bringing a wealth of knowledge to unravel intricate challenges and forge tailor-made solutions."],
  ["/assets/img/digital-solutions.png", "Client-Centered Approach", "We prioritize the distinct needs of businesses, nonprofits, governments and donors, so our strategies resonate with their objectives and resources."],
  ["/assets/img/research.png", "Ethical & Transparent", "Transparency and ethics are the bedrock of our operations — honest, fair and respectful interactions with every stakeholder."],
  ["/assets/img/hr-management.png", "Sustainable Impact", "Our solutions transcend immediate challenges, nurturing enduring resilience and positive transformation in the communities we serve."],
  ["/assets/img/project-design.png", "Results-Oriented", "Meticulous monitoring and evaluation drive continuous, data-driven adaptation for optimal effectiveness and tangible outcomes."],
];

export default function About() {
  useReveal();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav active="About" />
      <PageHero
        eyebrow="About HACEY LLC"
        title="Pioneering social development solutions across borders."
        lead="A social impact consultancy with over 17 years of experience partnering with organizations worldwide to catalyze meaningful, evidence-based change."
        image="/assets/img/about-4.jpg"
      />

      {/* Intro section */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="reveal rounded-lg overflow-hidden">
            <img
              src="/assets/img/about-1.jpg"
              alt="The HACEY global team"
              className="block w-full h-[400px] object-cover"
            />
          </div>
          <div className="reveal d1">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3.5">
              Who we are
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy mb-5 leading-snug">
              17+ years of transformative impact across Africa &amp; beyond.
            </h2>
            <p className="text-lg mb-4 leading-relaxed text-gray-700">
              HACEY is a social impact consultancy with over 17 years of experience. We partner with organizations across the globe to catalyze meaningful change through innovative solutions and evidence-based practices.
            </p>
            <p className="leading-relaxed text-gray-700">
              Our work demonstrates that transformative development isn&rsquo;t just high-level strategy or ground-level execution — it&rsquo;s connecting both to create systems that work for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            [
              "Our Vision",
              "&ldquo;Pioneering Social Development Solutions Across Borders with Innovation and Collaboration.&rdquo;",
              "To become a preeminent catalyst for social development through strategic partnerships, innovative digital solutions and evidence-based practices — fostering global collaboration and sustainability.",
              "bg-hacey-navy",
            ],
            [
              "Our Mission",
              "&ldquo;Catalyzing Impact, Empowering Change.&rdquo;",
              "We ignite social transformation through evidence-based solutions, digital innovation and strategic collaborations, building sustainable futures for communities and partners.",
              "bg-hacey-teal",
            ],
          ].map(([k, h, d, bgClass], i) => (
            <div
              key={k}
              className={`reveal d${i + 1} ${bgClass} text-white rounded-lg p-10`}
            >
              <div className="font-display font-bold text-xs tracking-widest uppercase text-white/80 mb-4">
                {k}
              </div>
              <h3
                className="text-white text-2xl font-semibold leading-snug mb-4"
                dangerouslySetInnerHTML={{ __html: h }}
              ></h3>
              <p className="text-white/90 m-0 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal max-w-[680px] mb-11">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              How we work
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy mb-3.5">
              Our Core Principles
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The values that shape every engagement and keep our impact measurable and lasting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(([ic, t, d], i) => (
              <div key={t} className={`reveal d${(i % 3) + 1}`}>
                <IconFeature icon={ic} title={t}>
                  {d}
                </IconFeature>
              </div>
            ))}
          </div>
        </div>
      </section>



      <CtaBand />
      <Footer />
    </div>
  );
}
