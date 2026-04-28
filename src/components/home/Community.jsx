import React from "react";
import { UserPlus, Award, Handshake } from "lucide-react";

const PATHS = [
  {
    icon: UserPlus,
    title: "Join as Member",
    description:
      "Access research, events, and a growing network of Web3 practitioners, policymakers, and thought leaders across Africa.",
  },
  {
    icon: Award,
    title: "Apply as Fellow",
    description:
      "Join a selective cohort of researchers, builders, and policy professionals contributing to Africa's Web3 future.",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Collaborate with the Institute on research, programs, and initiatives that advance Web3 adoption and governance.",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Community
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
            Be part of the movement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className="border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <path.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {path.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}