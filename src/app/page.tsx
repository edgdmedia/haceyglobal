"use client";

import React from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { TrustStrip } from "@/components/TrustStrip";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/Button";
import { IconFeature } from "@/components/IconFeature";
import { Badge } from "@/components/Badge";
import { useReveal } from "@/hooks/useReveal";

const services = [
  ["/assets/img/systems-strengthening.png", "Systems Strengthening", "Partnering with organizations to design robust systems that empower communities and improve service delivery."],
  ["/assets/img/digital-solutions.png", "Digital Solutions", "From mobile health applications to data analytics, our solutions leverage cutting-edge technologies to address social challenges."],
  ["/assets/img/fund-management.png", "Fund Management", "We manage grants and funding programs, ensuring efficient resource allocation and measurable outcomes."],
  ["/assets/img/project-design.png", "Project Design & Implementation", "Expertly designing projects that align with goals and implementing them to drive sustainable change."],
  ["/assets/img/research.png", "Research & Development", "Conducting in-depth research to inform policies and strategies for maximum impact."],
  ["/assets/img/hr-management.png", "Human Resources Management", "Building capable teams by recruiting and managing experts across fields to support social initiatives."],
];

const practice = [
  ["/assets/img/practice-health.jpg", "Health & Wellbeing", "Ensuring that individuals and communities have access to basic physical, mental, and social well-being services."],
  ["/assets/img/practice-economic.jpg", "Economic Inclusion", "Designing and supporting systems that give low-income and marginalized people opportunities to participate in and benefit from economic activities."],
  ["/assets/img/practice-rights.jpg", "Rights & Advocacy", "Strengthening individuals, communities, organizations, and movements to demand and access their rights."],
  ["/assets/img/practice-environment.jpg", "Environmental Sustainability", "Protecting natural resources and ecosystems to ensure they can support current and future generations."],
];

const stats: [number, string, string][] = [
  [40, "+", "Social impact programs"],
  [200, "+", "Verified experts"],
  [100000, "+", "Doses of IPTp-SP donated"],
  [5, "", "States reached with SRHR"],
];

const stories = [
  ["/assets/img/home-2.jpg", "Talent", "Talent Acquisition", "Recruited data scientists, program managers and researchers for over 40 social impact programs, building a skilled workforce for meaningful change."],
  ["/assets/img/practice-health.jpg", "Health", "Malaria Prevention", "Donated over 100,000 doses of IPTp-SP and 10,000 rapid diagnostic test kits toward malaria prevention in Oyo State."],
  ["/assets/img/impact-media.jpg", "Advocacy", "Media Empowerment", "Equipped 96 media personnel, 322 community leaders and 69 EndFGM Alliance participants to address critical social issues."],
];

const testimonials = [
  ["HACEY connected high-level strategy to ground-level execution — the systems they designed keep delivering long after the engagement ended.", "Programme Director", "Global Health Funder"],
  ["Their evidence-based approach and network of experts let us scale a complex intervention across multiple states with confidence.", "Country Lead", "Development Partner"],
];

export default function Home() {
  useReveal();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav active="Home" />

      {/* Hero Section */}
      <section className="hero relative bg-hacey-navy text-white overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-[-30%] right-[-10%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(75,166,153,0.45),transparent_62%)] pointer-events-none" />
        <div className="absolute bottom-[-40%] left-[-12%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,206,57,0.28),transparent_62%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff2c_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none" />

        <div className="hero-inner max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative z-1">
          <div className="reveal in">
            <div className="chip inline-flex items-center gap-2 bg-white/8 border border-white/16 rounded-pill px-4 py-2 text-sm text-white mb-[22px]">
              <span className="w-2 h-2 rounded-full bg-hacey-lime"></span>
              17+ Years of Impact across Africa &amp; beyond
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.04] tracking-tight">
              Solutions for a Sustainable Future
            </h1>
            <p className="text-lg text-white/85 mt-6 mb-8 max-w-[560px] leading-relaxed">
              Transformative development isn&rsquo;t just high-level strategy or ground-level execution — it&rsquo;s connecting both to create systems that work for everyone.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Button variant="accent" size="lg" href="mailto:isaiahowolabi@hacey.org">
                Get in Touch
              </Button>
              <Button variant="outline-inverse" size="lg" href="/impact">
                See Our Impact
              </Button>
            </div>
          </div>
          <div className="reveal in d2 relative block">
            <div className="rounded-lg overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/assets/img/hero-1.jpg"
                alt="HACEY consultants in discussion"
                className="block w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute left-[-18px] bottom-[-22px] bg-white rounded-md p-[18px_22px] shadow-raised flex items-center gap-3.5">
              <div className="font-display font-black text-4xl text-hacey-navy leading-none">17+</div>
              <div className="text-[13px] text-gray-500 leading-snug font-semibold">
                Years transforming
                <br />
                complex challenges
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TrustStrip */}
      <div className="bg-gray-50 border-b border-gray-100">
        <TrustStrip />
      </div>

      {/* About Intro */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="reveal rounded-lg overflow-hidden">
            <img
              src="/assets/img/about-1.jpg"
              alt="The HACEY global team"
              className="block w-full h-[380px] object-cover"
            />
          </div>
          <div className="reveal d1">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3.5">
              About HACEY LLC
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy mb-5 leading-snug">
              A social impact consultancy built on evidence and outcomes.
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We are a social impact consultancy with over 17 years of experience transforming complex challenges into impactful solutions — partnering with organizations across the globe to catalyze meaningful change.
            </p>
            <p className="text-gray-700 mb-7 leading-relaxed">
              From systems strengthening to digital innovation, we connect strategy with execution so impact is measurable and lasting.
            </p>
            <Button variant="outline" href="/about">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal max-w-[720px] mb-11">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              What we do
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy mb-3.5">Our Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transforming complex challenges into impactful solutions through diverse expertise, digital innovation and global partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(([ic, t, d], i) => (
              <div key={t} className={`reveal d${(i % 3) + 1}`}>
                <IconFeature icon={ic} title={t}>
                  {d}
                </IconFeature>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-11">
            <Button variant="primary" size="lg" href="/services">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal max-w-[720px] mb-11">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              Where we work
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy mb-3.5">
              Our Practice Areas
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Driving sustainable change through comprehensive solutions across key development sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practice.map(([img, t, d], i) => (
              <Link
                key={t}
                href="/practice-areas"
                className={`reveal d${(i % 4) + 1} block rounded-md overflow-hidden relative shadow-card group hover:shadow-raised hover:-translate-y-[3px] transition-all duration-220`}
              >
                <img src={img} alt={t} className="block w-full h-[260px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-hacey-navy-dark/92 via-hacey-navy-dark/0 to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <h3 className="text-white text-lg font-semibold mb-1 font-display">{t}</h3>
                  <p className="text-white/85 text-[13px] m-0 leading-relaxed">{d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Band */}
      <section className="bg-hacey-navy-dark py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal text-center max-w-[680px] mx-auto mb-12">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-lime mb-3">
              Our impact in numbers
            </div>
            <h2 className="text-white text-[28px] md:text-3xl font-semibold">
              Measurable, sustainable impact across every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(([n, s, l], i) => (
              <div
                key={l}
                className={`reveal d${(i % 4) + 1} text-center bg-white/6 border border-white/10 rounded-md p-8`}
              >
                <div className="font-display font-black text-4xl md:text-5xl text-hacey-lime leading-none">
                  <CountUp end={n} suffix={s} />
                </div>
                <div className="text-white/75 text-sm mt-2.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal flex justify-between items-end flex-wrap gap-5 mb-11">
            <div className="max-w-[620px]">
              <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
                Our impact stories
              </div>
              <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy">
                Transforming lives and communities
              </h2>
            </div>
            <Button variant="ghost" href="/impact">
              See More Success Stories &rarr;
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map(([img, tag, t, d], i) => (
              <article
                key={t}
                className={`reveal d${(i % 3) + 1} bg-white rounded-md overflow-hidden shadow-card flex flex-col`}
              >
                <img src={img} alt={t} className="block w-full h-[200px] object-cover" />
                <div className="p-6 flex flex-col gap-2.5">
                  <div>
                    <Badge tone="teal">{tag}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-hacey-navy">{t}</h3>
                  <p className="m-0 text-[15px] text-gray-700 leading-relaxed">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal max-w-[620px] mb-11">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              What partners say
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy">
              Trusted to deliver measurable outcomes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(([q, name, org], i) => (
              <figure
                key={name}
                className={`reveal d${i + 1} margin-0 bg-hacey-navy-tint rounded-lg p-9 border-l-4 border-hacey-teal`}
              >
                <blockquote className="margin-0 font-display font-bold text-xl text-hacey-navy leading-normal">
                  &ldquo;{q}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[14px] text-gray-700">
                  <strong className="text-hacey-navy">{name}</strong> — {org}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
