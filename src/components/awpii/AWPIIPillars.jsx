import React from "react";
import { motion } from "framer-motion";
import { Scale, TrendingUp, Users, Wifi } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Policy & Regulation",
    icon: Scale,
    description:
      "Legislative clarity, licensing requirements for Virtual Asset Service Providers (VASPs), tax treatment of digital assets, and consumer protection protocols.",
    metrics: ["VASP Licensing", "Tax Framework", "Consumer Protection", "Legislative Clarity"],
    color: "border-t-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    number: "02",
    title: "Market Adoption",
    icon: TrendingUp,
    description:
      "On-chain transaction volumes, stablecoin utilisation for merchant trade, remittance flows, and retail user density.",
    metrics: ["On-chain Volume", "Stablecoin Usage", "Remittance Flows", "Retail Density"],
    color: "border-t-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    number: "03",
    title: "Ecosystem Density",
    icon: Users,
    description:
      "Concentration of active developers, local startups, technology hubs, and corporate partnerships utilising distributed ledger technology.",
    metrics: ["Developer Activity", "Startup Count", "Tech Hubs", "DLT Partnerships"],
    color: "border-t-accent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    number: "04",
    title: "Infrastructure & Connectivity",
    icon: Wifi,
    description:
      "Internet penetration, mobile money interoperability, fiat-to-crypto on-ramps and off-ramps, power grid reliability, and digital public infrastructure.",
    metrics: ["Internet Penetration", "Mobile Money", "On/Off Ramps", "Grid Reliability"],
    color: "border-t-secondary/60",
    iconBg: "bg-secondary/5",
    iconColor: "text-secondary/70",
  },
];

export default function AWPIIPillars() {
  return (
    <section className="py-28 lg:py-36 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">
            Methodology
          </p>
          <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-5">
            The Four Assessment Pillars
          </h2>
          <p className="text-[1rem] text-muted-foreground leading-[1.85]">
            Every country is evaluated through a weighted framework across four core dimensions:
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`border border-border border-t-4 ${p.color} p-8 lg:p-10 bg-white`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[0.6875rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                      Pillar {p.number}
                    </span>
                    <h3 className="text-[1.25rem] font-bold text-secondary mt-1 leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-sm ${p.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                </div>

                <p className="text-[0.9375rem] text-muted-foreground leading-[1.8] mb-7">
                  {p.description}
                </p>

                {/* Key metrics */}
                <div className="pt-5 border-t border-border">
                  <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-3">
                    Key Metrics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[0.75rem] font-medium px-3 py-1 bg-muted text-foreground border border-border"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual placeholder — weighted score bar */}
        <div className="border border-border p-8 lg:p-10 bg-muted">
          <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-6">
            Composite Index Weighting · Illustrative Model
          </p>
          <div className="flex h-10 rounded-sm overflow-hidden gap-px">
            <div className="bg-secondary flex items-center justify-center text-white text-[0.75rem] font-bold" style={{ width: "30%" }}>
              Policy 30%
            </div>
            <div className="bg-primary flex items-center justify-center text-white text-[0.75rem] font-bold" style={{ width: "25%" }}>
              Market 25%
            </div>
            <div className="bg-accent flex items-center justify-center text-white text-[0.75rem] font-bold" style={{ width: "25%" }}>
              Ecosystem 25%
            </div>
            <div className="bg-secondary/50 flex items-center justify-center text-white text-[0.75rem] font-bold" style={{ width: "20%" }}>
              Infra 20%
            </div>
          </div>
          <p className="text-[0.6875rem] text-muted-foreground mt-4 italic">
            Final weightings are calibrated annually. Full methodology published in the AWPII Technical Annex.
          </p>
        </div>

      </div>
    </section>
  );
}