import React from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
}

export function PageHero({ eyebrow, title, lead, image }: PageHeroProps) {
  return (
    <section className="hero relative bg-hacey-navy text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-30%] right-[-10%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(75,166,153,0.45),transparent_62%)] pointer-events-none" />
      <div className="absolute bottom-[-40%] left-[-12%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,206,57,0.28),transparent_62%)] pointer-events-none" />

      <div
        className={`hero-inner max-w-[1200px] mx-auto px-6 py-[72px] grid grid-cols-1 ${
          image ? "md:grid-cols-2" : "grid-cols-1"
        } gap-12 items-center relative z-1`}
      >
        <div className="reveal in">
          <div className="font-display font-bold text-xs tracking-widest uppercase text-hacey-lime mb-3.5">
            {eyebrow}
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.06] tracking-tight max-w-[640px]">
            {title}
          </h1>
          {lead && (
            <p className="text-[18px] text-white/85 mt-[22px] max-w-[620px] leading-relaxed">
              {lead}
            </p>
          )}
        </div>
        {image && (
          <div className="reveal in d2 rounded-lg overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] hidden md:block">
            <img src={image} alt="" className="block w-full h-[340px] object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
export default PageHero;
