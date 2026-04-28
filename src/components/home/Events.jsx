import React from "react";
import { Video, Users, Code } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

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
      "Pan-African hackathons that bring together developers, designers, and policy minds to solve real challenges.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-28 lg:py-36 bg-[#F7F8FA] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <SectionHeader eyebrow="Events" heading="Engage with us" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="bg-white p-8 flex flex-col"
            >
              <event.icon className="w-5 h-5 text-secondary mb-6 shrink-0" />
              <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">
                {event.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="text-sm font-semibold px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
            View All Events
          </button>
        </div>

      </div>
    </section>
  );
}