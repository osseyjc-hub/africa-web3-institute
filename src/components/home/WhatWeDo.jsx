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
    <section className="py-28 lg:py-36 bg-[#F7F8FA] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={T.eyebrow} heading={T.heading} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {T.pillars.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <div key={pillar.title} className="bg-white p-8 flex flex-col">
                <Icon className="w-5 h-5 text-secondary mb-6 shrink-0" />
                <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">{pillar.title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}