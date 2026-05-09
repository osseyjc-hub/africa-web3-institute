import React from "react";
import { Scale, BookOpen, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const ICONS = [Scale, BookOpen, Lightbulb];

export default function Programs() {
  const { lang } = useLang();
  const T = t[lang].programs;

  return (
    <section id="programs" className="py-28 lg:py-36 bg-[#F7F8FA] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={T.eyebrow} heading={T.heading} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {T.items.map((program, i) => {
            const Icon = ICONS[i];
            return (
              <div key={program.title} className="bg-white p-8 flex flex-col">
                <Icon className="w-5 h-5 text-primary mb-6 shrink-0" />
                <h3 className="text-[0.9375rem] font-semibold text-secondary mb-3">{program.title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75] flex-1">{program.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <button className="text-sm font-semibold px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
            {T.cta}
          </button>
        </div>
      </div>
    </section>
  );
}