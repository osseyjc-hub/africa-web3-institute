import React from "react";

export default function WhyAfrica() {
  return (
    <section className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-8">
            Why Africa
          </p>
          <blockquote className="border-l-4 pl-8" style={{ borderColor: "#C9961A" }}>
            <p className="text-[1.625rem] lg:text-[2rem] font-bold text-secondary leading-snug tracking-tight">
              "Africa is not catching up — it is building forward."
            </p>
          </blockquote>
          <p className="mt-8 text-[1rem] text-muted-foreground leading-[1.8] pl-8 border-l border-border">
            Web3 presents a once-in-a-generation opportunity to redesign
            financial systems, governance, and digital ownership on African
            terms. With the youngest population on Earth and the
            fastest-growing digital economy, the continent is uniquely
            positioned to lead — not follow.
          </p>
        </div>
      </div>
    </section>
  );
}