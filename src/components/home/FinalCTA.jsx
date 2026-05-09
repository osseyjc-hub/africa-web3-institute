import React from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function FinalCTA() {
  const { lang } = useLang();
  const T = t[lang].finalCTA;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 lg:py-36 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white leading-snug tracking-tight whitespace-pre-line">
            {T.heading}
          </h2>
          <p className="mt-6 text-[1rem] text-white/65 leading-[1.8] max-w-lg">{T.body}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo("#community")}
              className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              {T.cta1}
            </button>
            <button className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors">
              {T.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}