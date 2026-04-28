import React from "react";
import { Landmark, GraduationCap, FileText, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

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
    <section className="py-28 lg:py-36 bg-[#F7F8FA] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <SectionHeader eyebrow="What We Do" heading="Four pillars of impact" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-8 flex flex-col"
            >
              <pillar.icon className="w-5 h-5 text-secondary mb-6 shrink-0" />
              <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">
                {pillar.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}