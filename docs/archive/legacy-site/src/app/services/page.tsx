import React from "react";
import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { IconFeature } from "@/components/IconFeature";
import { Button } from "@/components/Button";
import { ClientReveal } from "@/components/ClientReveal";

export const metadata: Metadata = {
  title: "Services | HACEY LLC",
  description: "Explore our comprehensive suite of social impact solutions, including systems strengthening, fund management, and digital health initiatives.",
};

const services = [
  ["/assets/img/systems-strengthening.png", "Systems Strengthening", "Partnering with organizations to design robust systems that empower communities and improve service delivery — connecting strategy with the realities of implementation."],
  ["/assets/img/digital-solutions.png", "Digital Solutions", "From mobile health applications to data analytics, our solutions leverage cutting-edge technologies to address complex social challenges at scale."],
  ["/assets/img/fund-management.png", "Fund Management", "We manage grants and funding programs end to end, ensuring efficient resource allocation, compliance and measurable outcomes for funders."],
  ["/assets/img/project-design.png", "Project Design & Implementation", "Expertly designing projects that align with your goals and implementing them to drive sustainable, lasting change on the ground."],
  ["/assets/img/research.png", "Research & Development", "Conducting in-depth, evidence-based research to inform policies and strategies for maximum impact and smarter decision-making."],
  ["/assets/img/hr-management.png", "Human Resources Management", "Building capable teams by recruiting and managing experts across fields — from data scientists to program managers — to support social initiatives."],
];

export default function Services() {
  return (
    <ClientReveal>
      <div className="flex flex-col min-h-screen">
      <Nav active="Services" />
      <PageHero
        eyebrow="What we do"
        title="Transforming complex challenges into impactful solutions."
        lead="Through diverse expertise, digital innovation and global partnerships, we deliver the full spectrum of social impact consultancy services."
        image="/assets/img/home-1.jpg"
      />

      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(([ic, t, d], i) => (
              <div key={t} className={`reveal d${(i % 3) + 1}`}>
                <IconFeature icon={ic} title={t}>
                  {d}
                </IconFeature>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal max-w-[680px] mb-11">
            <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-teal-dark mb-3">
              How we deliver
            </div>
            <h2 className="text-[28px] md:text-3xl font-semibold text-hacey-navy">
              A partnership approach, from first insight to lasting impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["01", "Understand", "We start with your objectives, context and the communities you serve."],
              ["02", "Design", "Evidence-based project and system design tailored to your resources."],
              ["03", "Implement", "Expert teams execute, with digital tools that scale the intervention."],
              ["04", "Measure", "Rigorous monitoring and evaluation turn activity into measurable outcomes."],
            ].map(([n, t, d], i) => (
              <div
                key={n}
                className={`reveal d${(i % 4) + 1} bg-white rounded-md p-7 shadow-card`}
              >
                <div className="font-display font-black text-3xl text-hacey-lime-dark leading-none mb-3">
                  {n}
                </div>
                <h3 className="text-lg font-semibold text-hacey-navy mb-2">{t}</h3>
                <p className="margin-0 text-sm text-gray-700 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-11">
            <Button variant="primary" size="lg" href="mailto:isaiahowolabi@hacey.org">
              Get Started with Us
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
    </ClientReveal>
  );
}
