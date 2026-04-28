import React from "react";
import { ArrowRight } from "lucide-react";

const PUBLICATIONS = [
  {
    tag: "Report",
    title: "State of Web3 Africa 2026",
    description:
      "A comprehensive annual review of blockchain adoption, policy developments, and ecosystem growth across 54 African nations.",
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
    tag: "Briefing",
    title: "Regulatory Frameworks for Digital Assets",
    description:
      "A policy briefing on emerging regulatory approaches to digital assets and decentralised finance across the continent.",
    year: "2025",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Publications
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
            Research & insights
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.title}
              className="py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group cursor-pointer"
            >
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <span className="text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded">
                  {pub.tag}
                </span>
                <span className="text-sm text-muted-foreground">{pub.year}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}