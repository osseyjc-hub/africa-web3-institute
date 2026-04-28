import React from "react";
import { Button } from "@/components/ui/button";
import { Scale, BookOpen, Lightbulb } from "lucide-react";

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
    <section id="programs" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Programs
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
            Our core programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <program.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  );
}