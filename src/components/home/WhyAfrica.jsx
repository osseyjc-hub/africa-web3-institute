import React from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function WhyAfrica() {
  const { lang } = useLang();
  const T = t[lang].whyAfrica;

  return (
    <section className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-8">
            {T.eyebrow}
          </p>
          <blockquote className="border-l-4 pl-8" style={{ borderColor: "#C9961A" }}>
            <p className="text-[1.625rem] lg:text-[2rem] font-bold text-secondary leading-snug tracking-tight">
              {T.quote}
            </p>
          </blockquote>
          <p className="mt-8 text-[1rem] text-muted-foreground leading-[1.8] pl-8 border-l border-border">
            {T.body}
          </p>
        </div>
      </div>
    </section>
  );
}