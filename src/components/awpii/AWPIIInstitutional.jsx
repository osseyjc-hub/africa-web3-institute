import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const scrollToContact = () => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const collaborators = [
  "Central Banks",
  "Ministries of Finance",
  "Continental Bodies",
  "Financial Institutions",
  "International Development Agencies",
];

export default function AWPIIInstitutional() {
  return (
    <section className="py-28 lg:py-36 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              Institutional Collaboration
            </p>
            <h2 className="text-[1.875rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-7">
              An active platform for institutional progress
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-6">
              The AWPII functions as an active platform for institutional progress. We collaborate with central banks, ministries of finance, continental bodies, financial institutions, and international development agencies to design frameworks that safeguard financial stability while encouraging technological growth.
            </p>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">
              To explore data integration, customised country assessments, or capacity-building workshops:
            </p>

            {/* Contact */}
            <div className="flex items-center gap-3 p-5 bg-white border border-border mb-8">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="mailto:info@africaweb3institute.org"
                className="text-[0.9375rem] font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4"
              >
                info@africaweb3institute.org
              </a>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-secondary text-white font-semibold text-[0.9375rem] hover:bg-secondary/90 transition-colors"
            >
              Schedule an Institutional Briefing
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right — collaborators list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-6">
              We work with
            </p>
            <div className="space-y-px">
              {collaborators.map((c, i) => (
                <div key={c} className="flex items-center gap-4 bg-white border border-border px-6 py-5">
                  <span className="text-[0.75rem] font-bold text-accent w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] font-semibold text-secondary">{c}</span>
                </div>
              ))}
            </div>

            {/* Final CTA block */}
            <div className="mt-8 border border-secondary/20 bg-secondary/5 p-7">
              <p className="text-[0.9375rem] font-bold text-secondary mb-3">
                Ready to access the full AWPII dataset?
              </p>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] mb-5">
                Institutional licenses, API access, and custom briefings available for qualifying organisations.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                Explore Partnership Opportunities →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}