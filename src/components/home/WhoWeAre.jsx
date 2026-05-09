import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function WhoWeAre() {
  const { lang } = useLang();
  const T = t[lang].whoWeAre;

  return (
    <section id="who-we-are" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <SectionHeader eyebrow={T.eyebrow} heading={T.heading} />
          <div className="space-y-5">
            <p className="text-[1rem] text-muted-foreground leading-[1.8]">{T.p1}</p>
            <p className="text-[1rem] text-muted-foreground leading-[1.8]">{T.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}