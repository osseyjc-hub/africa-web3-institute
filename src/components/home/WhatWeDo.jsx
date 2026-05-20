import React from "react";
import { Landmark, GraduationCap, FileText, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const ICONS = [Landmark, GraduationCap, FileText, Rocket];

export default function WhatWeDo() {
  const { lang } = useLang();
  const T = t[lang].whatWeDo;

  return (
    <section className="py-24 lg:py-36 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#D4A017" }}>
            {T.eyebrow}
          </p>
          <h2 className="font-display text-[2rem] lg:text-[2.5rem] font-bold text-secondary leading-snug">
            {T.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {T.pillars.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <div key={pillar.title} className="bg-white p-8 flex flex-col group hover:shadow-md transition-shadow">
                <div className="w-10 h-10 flex items-center justify-center mb-7" style={{ backgroundColor: "rgba(11,20,55,0.06)", border: "1px solid rgba(11,20,55,0.08)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#0B1437" }} />
                </div>
                <h3 className="font-display text-[1rem] font-bold text-secondary mb-3">{pillar.title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}