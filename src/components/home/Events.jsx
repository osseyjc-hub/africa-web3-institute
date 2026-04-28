import React from "react";
import { Button } from "@/components/ui/button";
import { Video, Users, Code } from "lucide-react";

const EVENTS = [
  {
    icon: Video,
    title: "Webinars",
    description:
      "Monthly expert-led sessions on policy developments, technology trends, and Web3 use cases across Africa.",
  },
  {
    icon: Users,
    title: "Workshops",
    description:
      "Hands-on capacity building workshops for regulators, institutional stakeholders, and ecosystem participants.",
  },
  {
    icon: Code,
    title: "Hackathons",
    description:
      "Pan-African hackathons that bring together developers, designers, and policy minds to build solutions for real challenges.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Events
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
            Engage with us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                <event.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8"
          >
            View Events
          </Button>
        </div>
      </div>
    </section>
  );
}