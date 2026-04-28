import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const PATHS = [
  {
    label: "01",
    title: "Join as Member",
    description:
      "Access research, events, and a growing network of Web3 practitioners, policymakers, and thought leaders across Africa.",
    cta: "Apply for Membership (Coming Soon)",
  },
  {
    label: "02",
    title: "Apply as Fellow",
    description:
      "Join a selective cohort of researchers, builders, and policy professionals contributing to Africa's Web3 future.",
    cta: "Apply for Fellowship (Coming Soon)",
  },
  {
    label: "03",
    title: "Become a Partner",
    description:
      "Collaborate with the Institute on research, programs, and initiatives that advance Web3 adoption and governance.",
    cta: "Explore Partnerships (Coming Soon)",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <SectionHeader eyebrow="Community" heading="Be part of the movement" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PATHS.map((path) => (
            <div key={path.title} className="bg-white p-8 flex flex-col">
              <span className="text-[0.6875rem] font-semibold tracking-[0.15em] text-muted-foreground/50 mb-5">
                {path.label}
              </span>
              <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">
                {path.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">
                {path.description}
              </p>
              <button className="mt-7 self-start text-[0.8125rem] font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                {path.cta} →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}