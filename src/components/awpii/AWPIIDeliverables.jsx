import React from "react";
import { motion } from "framer-motion";
import { FileText, Zap, MapPin, Lightbulb } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Annual Rankings & Scorecards",
    description:
      "Comprehensive matrix comparing national performance across all four pillars.",
    badge: "Annual",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: Zap,
    title: "Policy Snapshots",
    description:
      "Rapid-response briefings issued immediately following major legislative shifts, central bank directives, or market events.",
    badge: "Real-time",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Granular Country Profiles",
    description:
      "Independent assessments highlighting specific jurisdictional risks, structural advantages, and legislative directions.",
    badge: "On-demand",
    badgeColor: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    title: "Strategic Directives",
    description:
      "Evidence-based policy recommendations formulated to support balanced regulation and sustainable innovation.",
    badge: "Advisory",
    badgeColor: "bg-muted text-muted-foreground",
  },
];

export default function AWPIIDeliverables() {
  return (
    <section className="py-28 lg:py-36 bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">
            What We Produce
          </p>
          <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-white leading-snug tracking-tight">
            Deliverables & Insights
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {deliverables.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary p-8 lg:p-10 border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-[0.6875rem] font-semibold tracking-wider uppercase px-2.5 py-1 ${d.badgeColor}`}>
                    {d.badge}
                  </span>
                </div>
                <h3 className="text-[1.0625rem] font-bold text-white mb-3">{d.title}</h3>
                <p className="text-[0.9375rem] text-white/60 leading-[1.8]">{d.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}