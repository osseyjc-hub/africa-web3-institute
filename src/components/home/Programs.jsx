import React from "react";
import { Scale, BookOpen, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const PROGRAMS = [
  {
    icon: Scale,
    title: "Policy & Regulation",
    description:
      "Shaping regulatory frameworks through technical advisory, stakeholder convenings, and model policy drafting with governments across Africa.",
  },
  {
    icon: BookOpen,
    title: "Education & Capacity Building",
    description:
      "Delivering structured training programs, executive workshops, and certification pathways for policymakers, developers, and institutional leaders.",
  },
  {
    icon: Lightbulb,
    title: "Startup Incubation",
    description:
      "Providing early-stage Web3 ventures with mentorship, regulatory guidance, funding pathways, and access to the pan-African ecosystem.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 lg:py-36 bg-[#F7F8FA] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <SectionHeader eyebrow="Programs" heading="Our core programs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="bg-white p-8 flex flex-col"
            >
              <program.icon className="w-5 h-5 text-primary mb-6 shrink-0" />
              <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">
                {program.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="text-sm font-semibold px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
            Explore Programs
          </button>
        </div>

      </div>
    </section>
  );
}