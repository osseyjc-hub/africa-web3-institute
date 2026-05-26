import React from "react";
import { Download, BarChart2 } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const COPY = {
  en: {
    eyebrow: "New Report",
    title: "State of Web3 Africa 2026",
    desc: "A comprehensive review of blockchain adoption, policy developments, and ecosystem growth across 18+ African nations.",
    cta: "Download Q1 Report",
  },
  fr: {
    eyebrow: "Nouveau Rapport",
    title: "État du Web3 en Afrique 2026",
    desc: "Une revue complète de l'adoption de la blockchain, des évolutions réglementaires et de la croissance de l'écosystème dans 18+ nations africaines.",
    cta: "Télécharger le Rapport T1",
  },
};

const PDF_URL = "https://media.base44.com/files/public/69f0c79c7957f32b49dcc978/2b831ee5d_Q1Report.pdf";

export default function FeaturedReport() {
  const { lang } = useLang();
  const C = COPY[lang];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-b border-border bg-white">
      <div className="rounded-xl border-2 p-6 flex items-center justify-between gap-5 flex-wrap"
        style={{ borderColor: "#D4A017" }}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-[60px] rounded-md flex flex-col items-center justify-center gap-1 flex-shrink-0"
            style={{ backgroundColor: "#0B1437" }}>
            <BarChart2 className="w-5 h-5" style={{ color: "#D4A017" }} />
            <span className="text-[9px] font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>Q1 2026</span>
          </div>
          <div>
            <p className="text-[0.6875rem] font-semibold tracking-wider uppercase mb-1" style={{ color: "#D4A017" }}>{C.eyebrow}</p>
            <p className="text-[0.9375rem] font-medium" style={{ color: "#111827" }}>{C.title}</p>
            <p className="text-[0.75rem] mt-1" style={{ color: "#6B7280" }}>{C.desc}</p>
          </div>
        </div>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-5 py-2.5 rounded-lg flex-shrink-0 transition-all"
          style={{ backgroundColor: "#D4A017", color: "#fff" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
        >
          <Download className="w-3.5 h-3.5" /> {C.cta}
        </a>
      </div>
    </div>
  );
}