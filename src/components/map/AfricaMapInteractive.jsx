import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import AfricaMapSVG from "./AfricaMapSVG";
import { COUNTRY_DATA, STATUS_COLORS, STATUS, STATUS_LABELS } from "./africaCountryData";
import { useLang } from "@/lib/LanguageContext";

function ScoreBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[0.75rem] font-medium text-muted-foreground">{label}</span>
        <span className="text-[0.75rem] font-bold" style={{ color: "#0B1437" }}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, backgroundColor: "#D4A017" }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status, lang }) {
  const labels = STATUS_LABELS[lang];
  return (
    <span
      className="inline-flex items-center text-[0.75rem] font-semibold px-2.5 py-1 rounded-full text-white"
      style={{ backgroundColor: STATUS_COLORS[status] }}
    >
      {labels[status]}
    </span>
  );
}

function CountryModal({ name, onClose, lang }) {
  const data = COUNTRY_DATA[name];

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const scrollToNewsletter = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full sm:max-w-lg bg-white overflow-hidden rounded-t-2xl sm:rounded-xl"
        style={{ maxHeight: "85vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="px-7 py-5 flex items-start justify-between" style={{ borderBottom: "1px solid hsl(var(--border))" }}>
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              {data?.flag && <span className="text-[1.5rem]">{data.flag}</span>}
              <h3 className="text-[1.25rem] font-bold" style={{ color: "#0B1437" }}>{name}</h3>
            </div>
            {data ? (
              <StatusBadge status={data.status} lang={lang} />
            ) : (
              <StatusBadge status={STATUS.NO_DATA} lang={lang} />
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-muted transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {data ? (
            <>
              {/* Summary */}
              <p className="text-[0.9375rem] text-muted-foreground leading-[1.75] mb-6">{data.summary}</p>

              {/* Scores */}
              <div className="space-y-4 mb-6">
                <ScoreBar label={lang === "fr" ? "Score Politique" : "Policy Score"} value={data.policy} />
                <ScoreBar label={lang === "fr" ? "Score Innovation" : "Innovation Score"} value={data.innovation} />
                <ScoreBar label={lang === "fr" ? "Score Adoption" : "Adoption Score"} value={data.adoption} />
              </div>

              {/* Focus areas */}
              <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: "hsl(220 14% 97%)" }}>
                <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  {lang === "fr" ? "Domaines Clés" : "Key Focus Areas"}
                </p>
                <p className="text-[0.875rem] text-foreground">{data.focus}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  onClick={onClose}
                  className="flex-1 text-center text-[0.8125rem] font-semibold px-5 py-2.5 transition-colors"
                  style={{ backgroundColor: "#D4A017", color: "#fff" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
                >
                  {lang === "fr" ? "Voir le Rapport Complet" : "View Full Report"}
                </a>
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => document.querySelector("#rankings")?.scrollIntoView({ behavior: "smooth" }), 200);
                  }}
                  className="flex-1 text-[0.8125rem] font-semibold px-5 py-2.5 border transition-colors"
                  style={{ borderColor: "#0B1437", color: "#0B1437" }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#0B1437"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#0B1437"; }}
                >
                  {lang === "fr" ? "Voir les Classements" : "See Rankings"}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-[0.9375rem] text-muted-foreground leading-[1.75] mb-6">
                {lang === "fr"
                  ? `AWI mène actuellement des recherches sur ${name}. Les données complètes de politique seront disponibles dans le rapport AWPII 2026.`
                  : `AWI is actively researching ${name}. Full policy data will be available in the 2026 AWPII report.`}
              </p>
              <button
                onClick={scrollToNewsletter}
                className="w-full text-[0.875rem] font-semibold px-5 py-2.5 transition-colors"
                style={{ backgroundColor: "#D4A017", color: "#fff" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
              >
                {lang === "fr" ? "Être Notifié" : "Get Notified"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

const LEGEND_ITEMS = [STATUS.LEADER, STATUS.DEVELOPING, STATUS.RESTRICTIVE, STATUS.NO_DATA];

export default function AfricaMapInteractive() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { lang } = useLang();
  const labels = STATUS_LABELS[lang];

  return (
    <section id="map" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>
            {lang === "fr" ? "Carte Politique" : "Policy Map"}
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold leading-snug mb-4" style={{ color: "#0B1437" }}>
            {lang === "fr" ? "Carte Politique Interactive" : "Interactive Policy Map"}
          </h2>
          <p className="text-[1rem] text-muted-foreground max-w-xl mx-auto leading-[1.8]">
            {lang === "fr"
              ? "Cliquez sur un pays pour voir son statut réglementaire Web3 et un résumé de sa politique"
              : "Click any country to view its Web3 regulatory status and policy summary"}
          </p>
        </div>

        {/* Map */}
        <div className="max-w-[700px] mx-auto relative">
          <AfricaMapSVG
            interactive={true}
            onCountryClick={(name) => setSelectedCountry(name)}
          />
          {selectedCountry && (
            <div className="absolute inset-0 z-10" />
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {LEGEND_ITEMS.map((status) => (
            <div key={status} className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: STATUS_COLORS[status], opacity: 0.82 }}
              />
              <span className="text-[0.8125rem] font-medium text-muted-foreground">
                {labels[status]}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[0.75rem] text-muted-foreground/60 mt-3">
          {lang === "fr"
            ? "Basé sur les recherches AWI de mai 2026. Mis à jour annuellement."
            : "Based on AWI research as of May 2026. Updated annually."}
        </p>
      </div>

      {/* Modal */}
      {selectedCountry && (
        <CountryModal
          name={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          lang={lang}
        />
      )}
    </section>
  );
}