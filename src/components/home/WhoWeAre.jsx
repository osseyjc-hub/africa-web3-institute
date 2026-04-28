import React from "react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary leading-tight">
              At the intersection of technology, policy, and society
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Africa Web3 Institute sits at the intersection of technology,
              policy, and society. It translates complex emerging technologies
              into clear policy insights, practical education, and actionable
              frameworks for Africa's digital economy.
            </p>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Our work bridges the gap between innovators, regulators, and
              communities — ensuring that Africa's digital transformation is
              inclusive, informed, and sovereign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}