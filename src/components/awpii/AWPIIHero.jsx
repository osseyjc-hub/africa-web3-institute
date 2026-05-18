import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const scrollToContact = () => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function AWPIIHero() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Accent gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent">
              Africa Web3 Institute · Research Intelligence
            </p>
          </div>

          {/* Title */}
          <h1 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Africa Web3 Policy &amp;{" "}
            <span className="text-accent">Innovation Index</span>
          </h1>
          <p className="text-[1.125rem] sm:text-[1.25rem] font-medium text-white/70 mb-6 tracking-wide">
            (AWPII)
          </p>
          <p className="text-[1.125rem] text-white/60 font-medium mb-10 tracking-wide border-l-2 border-accent pl-5">
            Benchmarking Regulatory Clarity and Market Readiness Across the Continent
          </p>

          {/* Headline statements */}
          <div className="space-y-3 mb-12">
            <p className="text-[1.125rem] lg:text-[1.25rem] font-semibold text-white leading-relaxed">
              Africa is rewriting the rules of exchange, identity, and commerce.
            </p>
            <p className="text-[1.125rem] lg:text-[1.25rem] font-semibold text-accent leading-relaxed">
              Regulatory frameworks will determine which markets scale—and which stall.
            </p>
          </div>

          <p className="text-[1rem] text-white/70 leading-[1.9] max-w-3xl mb-14">
            The Africa Web3 Policy &amp; Innovation Index (AWPII) is the definitive benchmark evaluating how African jurisdictions regulate, restrict, or enable decentralised technologies. Through our rigorous annual analysis and real-time Snapshot updates, we provide clear, data-driven comparisons of continental policy environments.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white font-semibold text-[0.9375rem] hover:bg-accent/90 transition-colors"
            >
              Explore the Interactive Index
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 text-white font-semibold text-[0.9375rem] hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download the 2026 Annual Report
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
}