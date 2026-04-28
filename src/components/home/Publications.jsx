import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const PUBLICATIONS = [
  {
    tag: "Annual Report",
    title: "State of Web3 Africa 2026",
    description:
      "A comprehensive review of blockchain adoption, policy developments, and ecosystem growth across 54 African nations.",
    year: "2026",
  },
  {
    tag: "Index",
    title: "Africa Web3 Policy Index",
    description:
      "Ranking African countries by regulatory readiness, institutional capacity, and Web3 policy maturity.",
    year: "2025",
  },
  {
    tag: "Policy Brief",
    title: "Regulatory Frameworks for Digital Assets",
    description:
      "Emerging regulatory approaches to digital assets and decentralised finance across the continent.",
    year: "2025",
  },
];

export default function Publications() {
  const [active, setActive] = useState(null);

  return (
    <section id="publications" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <SectionHeader eyebrow="Publications" heading="Research & insights" />
        </div>

        <div className="divide-y divide-border">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.title}>
              <div
                onClick={() => setActive(active === pub.title ? null : pub.title)}
                className="py-8 grid grid-cols-1 md:grid-cols-[10rem_1fr_2rem] gap-4 md:gap-10 items-start group cursor-pointer"
              >
                {/* Meta */}
                <div className="flex md:flex-col gap-3">
                  <span
                    className="text-[0.6875rem] font-semibold tracking-wider uppercase px-2.5 py-1 border self-start"
                    style={{ color: "#C9961A", borderColor: "#C9961A" }}
                  >
                    {pub.tag}
                  </span>
                  <span className="text-sm text-muted-foreground">{pub.year}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[1rem] font-semibold text-secondary group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] text-muted-foreground leading-[1.75]">
                    {pub.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary mt-1 hidden md:block transition-colors" />
              </div>

              {/* Inline placeholder */}
              {active === pub.title && (
                <div className="pb-8 pl-0 md:pl-[calc(10rem+2.5rem)]">
                  <p className="text-[0.8125rem] font-medium text-muted-foreground border-l-2 pl-4" style={{ borderColor: "#C9961A" }}>
                    Full report coming soon.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}