import React from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata = {
  title: "Privacy Policy — HACEY LLC",
  description: "Privacy Policy and terms for HACEY LLC consultancy website.",
};

export default function PrivacyPolicy() {
  const { contentHtml } = getMarkdownContent("privacy-policy.md");

  return (
    <div className="flex flex-col min-h-screen">
      <Nav active="" />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Our commitment to transparency and protecting your information."
      />

      <section className="py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-hacey-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-display
              [&_p]:mb-6
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
              [&_li]:mb-2
              [&_a]:text-hacey-teal-dark [&_a]:underline hover:[&_a]:text-hacey-navy
              [&_hr]:my-10 [&_hr]:border-gray-200"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
