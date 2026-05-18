import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Repeat, Zap, ShieldCheck, TrendingUp, Globe, Scale, Building2 } from "lucide-react";

const dataPoints = [
  { label: "Objective Data", description: "Replacing anecdotal assumptions with verified structural metrics.", icon: BarChart2 },
  { label: "Comparative Clarity", description: "Evaluating regional progress using standardised repeatable indicators.", icon: Repeat },
  { label: "Operational Intelligence", description: "Serving as an active analytical tool for institutional decision-making.", icon: Zap },
];

const audiences = [
  { label: "Regulators & Central Banks", description: "Designing financial governance and VASP frameworks.", icon: ShieldCheck },
  { label: "Founders & Operators", description: "Assessing jurisdictional risk before deploying capital or setting up regional hubs.", icon: TrendingUp },
  { label: "Institutional Allocators", description: "Managing risk profiles across diverse African markets.", icon: Globe },
  { label: "Legal & Banking Entities", description: "Monitoring compliance, cross-border settlement shifts, and counterparty risks.", icon: Building2 },
];

export default function AWPIIOverview() {
  return (
    <section className="py-28 lg:py-36 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">Overview</p>
          <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-6">
            Systemic readiness for the decentralised economy
          </h2>
          <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-5">
            The AWPII evaluates African nations on their systemic readiness for the decentralised economy.
          </p>
          <p className="text-[1rem] text-muted-foreground leading-[1.85]">
            By pairing exhaustive annual indexing with high-frequency Snapshot editions, the AWPII provides sovereign authorities, market participants, and institutional investors with immediate, actionable intelligence.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-20">
          {dataPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10"
              >
                <div className="w-10 h-10 rounded-sm bg-secondary/5 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-[1rem] font-bold text-secondary mb-3">{item.label}</h3>
                <p className="text-[0.9375rem] text-muted-foreground leading-[1.75]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Built for */}
        <div>
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-8 pb-4 border-b border-border">
            Built specifically for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-7"
                >
                  <div className="w-8 h-8 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="text-[0.9375rem] font-bold text-secondary mb-2">{a.label}</h4>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.7]">{a.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}