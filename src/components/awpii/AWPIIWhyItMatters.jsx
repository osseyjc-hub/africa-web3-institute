import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const questions = [
  "Which jurisdictions have legally enforceable frameworks for digital asset service providers?",
  "Where is policy actively reducing friction for cross-border settlement and stablecoin integration?",
  "How do infrastructure realities impact actual market viability from one country to the next?",
];

export default function AWPIIWhyItMatters() {
  return (
    <section className="py-28 lg:py-36 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">Why It Matters</p>
            <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-8">
              Navigating Africa's fragmented regulatory landscape
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-6">
              While digital asset adoption continues to rise across Africa, regulatory approaches remain highly fragmented.
            </p>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-6">
              Some nations are actively codifying clear legal structures to attract capital, while others rely on restrictive measures or maintaining ambiguous enforcement positions.
            </p>
            <p className="text-[1rem] text-foreground font-semibold leading-[1.85]">
              In a market that operates continuously and across borders, regulatory opacity creates substantial friction.
            </p>

            {/* Visual divider */}
            <div className="mt-10 pt-10 border-t border-border">
              <div className="flex items-start gap-4 p-5 bg-white border border-border">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-[0.9375rem] text-foreground leading-[1.75]">
                  <span className="font-semibold">The AWPII eliminates this information asymmetry</span> by addressing core structural questions about policy, infrastructure, and market viability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — questions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-[0.8125rem] font-semibold tracking-wider uppercase text-muted-foreground mb-6">
              Core structural questions addressed
            </p>
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-border p-6">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-[0.9375rem] text-foreground leading-[1.75] font-medium">{q}</p>
              </div>
            ))}

            {/* Placeholder data visual */}
            <div className="bg-white border border-border p-6 mt-6">
              <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-4">
                Regulatory Clarity Spectrum · Africa 2026
              </p>
              <div className="space-y-3">
                {[
                  { country: "South Africa", score: 82, color: "bg-primary" },
                  { country: "Nigeria", score: 74, color: "bg-primary" },
                  { country: "Kenya", score: 69, color: "bg-accent" },
                  { country: "Ghana", score: 63, color: "bg-accent" },
                  { country: "Tanzania", score: 51, color: "bg-secondary/40" },
                ].map((item) => (
                  <div key={item.country}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[0.8125rem] font-medium text-foreground">{item.country}</span>
                      <span className="text-[0.8125rem] font-bold text-secondary">{item.score}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[0.6875rem] text-muted-foreground mt-4 italic">
                Illustrative preview — full dataset available in the 2026 Annual Report
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}