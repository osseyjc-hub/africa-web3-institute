import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <SectionHeader
            eyebrow="Who We Are"
            heading="At the intersection of technology, policy, and society"
          />

          <div className="space-y-5">
            <p className="text-[1rem] text-muted-foreground leading-[1.8]">
              Africa Web3 Institute sits at the intersection of technology,
              policy, and society. It translates complex emerging technologies
              into clear policy insights, practical education, and actionable
              frameworks for Africa's digital economy.
            </p>
            <p className="text-[1rem] text-muted-foreground leading-[1.8]">
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