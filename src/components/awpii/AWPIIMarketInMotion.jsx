import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Bell, CalendarClock, Handshake } from "lucide-react";

const scrollToContact = () => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ctaItems = [
  { label: "Access the Index Dashboard", icon: LayoutDashboard, variant: "primary" },
  { label: "Subscribe to Snapshot Alerts", icon: Bell, variant: "outline" },
  { label: "Schedule an Institutional Briefing", icon: CalendarClock, variant: "outline" },
  { label: "Explore Partnership Opportunities", icon: Handshake, variant: "outline" },
];

export default function AWPIIMarketInMotion() {
  return (
    <section className="py-28 lg:py-36 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              A Market in Motion
            </p>
            <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-8">
              Standing still is not an option for regional economies.
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-6">
              African cross-border trade, commodity tokenisation, and daily commerce are moving toward decentralised infrastructure out of economic necessity.
            </p>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">
              The data shows a widening gap between proactive regulators and reactive markets. The AWPII provides the baseline data needed to understand who is successfully capturing this economic shift.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {ctaItems.map((cta) => {
                const Icon = cta.icon;
                return cta.variant === "primary" ? (
                  <button
                    key={cta.label}
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-secondary text-white font-semibold text-[0.875rem] hover:bg-secondary/90 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    key={cta.label}
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground font-medium text-[0.875rem] hover:border-secondary hover:text-secondary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {cta.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right — data visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Mock "gap" chart */}
            <div className="border border-border p-6 bg-muted">
              <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-5">
                Regulatory Readiness vs. Market Activity · Africa 2026
              </p>
              <div className="space-y-4">
                {[
                  { label: "Proactive Regulators", value: 78, change: "+12%", up: true },
                  { label: "Reactive Markets", value: 44, change: "+3%", up: true },
                  { label: "Policy Gap Index", value: 34, change: "Widening", up: false },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="w-40 flex-shrink-0">
                      <p className="text-[0.8125rem] font-medium text-foreground">{row.label}</p>
                    </div>
                    <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                    <span className={`text-[0.75rem] font-semibold w-20 text-right ${row.up ? "text-primary" : "text-accent"}`}>
                      {row.change}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[0.6875rem] text-muted-foreground mt-5 italic">
                Illustrative data — full dataset in the 2026 Annual Report
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "54", label: "African Nations Tracked" },
                { value: "4", label: "Assessment Pillars" },
                { value: "2x/yr", label: "Full Index Editions" },
                { value: "Live", label: "Snapshot Updates" },
              ].map((stat) => (
                <div key={stat.label} className="border border-border p-5 bg-white text-center">
                  <p className="text-[1.75rem] font-bold text-secondary leading-none mb-2">{stat.value}</p>
                  <p className="text-[0.75rem] text-muted-foreground font-medium leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}