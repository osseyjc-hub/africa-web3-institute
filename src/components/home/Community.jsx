import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Community() {
  const { lang } = useLang();
  const T = t[lang].community;

  return (
    <section id="community" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={T.eyebrow} heading={T.heading} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {T.paths.map((path) => (
            <div key={path.label} className="bg-white p-8 flex flex-col">
              <span className="text-[0.6875rem] font-semibold tracking-[0.15em] text-muted-foreground/50 mb-5">
                {path.label}
              </span>
              <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">{path.title}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">{path.description}</p>
              <button className="mt-7 self-start text-[0.8125rem] font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                {path.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}