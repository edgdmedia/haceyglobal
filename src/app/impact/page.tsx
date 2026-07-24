import React from "react";
import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { ImpactClient } from "@/components/ImpactClient";
import { ClientReveal } from "@/components/ClientReveal";

export const metadata: Metadata = {
  title: "Our Impact | HACEY LLC",
  description: "Discover how we have transformed lives and communities across Africa through evidence-based interventions in health, human rights, and inclusion.",
};

export default function Impact() {
  return (
    <ClientReveal>
      <div className="flex flex-col min-h-screen">
        <Nav active="Impact" />
        <ImpactClient />
        <CtaBand />
        <Footer />
      </div>
    </ClientReveal>
  );
}
