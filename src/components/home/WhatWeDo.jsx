import React from "react";
import { Landmark, GraduationCap, FileText, Rocket } from "lucide-react";

const PILLARS = [
  {
    icon: Landmark,
    title: "Policy",
    description:
      "Advising governments and institutions on digital asset policy, regulation, and governance frameworks across Africa.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Training stakeholders across Africa's Web3 ecosystem — from policymakers and regulators to developers and entrepreneurs.",
  },
  {
    icon: FileText,
    title: "Research",
    description:
      "Publishing rigorous insights that inform regulation, innovation, and investment decisions across the continent.",
  },
  {
    icon: Rocket,
    title: "Incubation",
    description:
      "Supporting African Web3 startups with mentorship, resources, and pathways to scale across local and global markets.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
            Four pillars of impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md hover:border-secondary/20 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}