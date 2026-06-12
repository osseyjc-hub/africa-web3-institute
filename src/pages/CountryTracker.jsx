import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import awpiiData from "@/data/awpiiData";
import { COUNTRY_DATA } from "@/data/countryData";

function inferCategory(title, desc = "") {
  const text = (title + " " + desc).toLowerCase();
  if (text.includes("cbdc") || text.includes("digital currency") || text.includes("e-cedi") || text.includes("e-dinar") || text.includes("digital dinar") || text.includes("digital shilling") || text.includes("digital franc") || text.includes("digital birr")) return "CBDC";
  if (text.includes("aml") || text.includes("cft") || text.includes("fatf") || text.includes("travel rule")) return "AML/CFT";
  if (text.includes("tax")) return "Taxation";
  if (text.includes("sandbox") || text.includes("licens")) return "Licensing";
  if (text.includes("stablecoin")) return "Stablecoin Policy";
  if (text.includes("securities") || text.includes("tokenized")) return "Securities Regulation";
  if (text.includes("payment")) return "Digital Payments";
  if (text.includes("banking") || text.includes("custody")) return "Banking Guidance";
  return "VASP Regulation";
}

function inferStatus(severity, title = "") {
  const tl = title.toLowerCase();
  if (severity === "Restrictive") {
    return (tl.includes("ban") || tl.includes("prohibit")) ? "Ban" : "Enforcement Action";
  }
  if (severity === "Neutral") return "Consultation";
  if (tl.includes("draft") || tl.includes("consultation") || tl.includes("opens") || tl.includes("discussion paper") || tl.includes("feasibility")) return "Consultation";
  if (tl.includes("guidelines") || tl.includes("guidance") || tl.includes("advisory") || tl.includes("roadmap") || tl.includes("circular")) return "Guidance";
  return "Active";
}

// REGULATORY_UPDATES is now built inside the component (useMemo) to support bilingual content

const STATUS_COLORS = {
  Draft:              { bg: "#dbeafe", text: "#1e40af", dot: "#2563eb" },
  Proposed:           { bg: "#ede9fe", text: "#5b21b6", dot: "#7c3aed" },
  Active:             { bg: "#dcfce7", text: "#166534", dot: "#16a34a" },
  Consultation:       { bg: "#fef9c3", text: "#854d0e", dot: "#D4A017" },
  Licensing:          { bg: "#e0f2fe", text: "#0369a1", dot: "#0284c7" },
  "Enforcement Action": { bg: "#fee2e2", text: "#991b1b", dot: "#dc2626" },
  Guidance:           { bg: "#f0fdf4", text: "#14532d", dot: "#22c55e" },
  "Policy Update":    { bg: "#fef3c7", text: "#92400e", dot: "#f59e0b" },
  Ban:                { bg: "#fce7f3", text: "#9d174d", dot: "#ec4899" },
};

const CATEGORY_COLORS = {
  "VASP Regulation":     { bg: "#dbeafe", text: "#1e40af" },
  "Stablecoin Policy":   { bg: "#ede9fe", text: "#5b21b6" },
  "CBDC":                { bg: "#e0f2fe", text: "#0369a1" },
  "Taxation":            { bg: "#fef3c7", text: "#92400e" },
  "Licensing":           { bg: "#dcfce7", text: "#166534" },
  "AML/CFT":             { bg: "#fee2e2", text: "#991b1b" },
  "Banking Guidance":    { bg: "#f3f4f6", text: "#374151" },
  "Securities Regulation": { bg: "#e8e8f0", text: "#1e3a5f" },
  "Digital Payments":    { bg: "#d1fae5", text: "#065f46" },
};

function StatusPill({ status, label }) {
  const c = STATUS_COLORS[status] || { bg: "#f3f4f6", text: "#374151", dot: "#9ca3af" };
  return (
    <span className="inline-flex items-center text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ backgroundColor: c.bg, color: c.text }}>
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0" style={{ backgroundColor: c.dot }} />
      {label || status}
    </span>
  );
}

function CategoryBadge({ category, label }) {
  const c = CATEGORY_COLORS[category] || { bg: "#f3f4f6", text: "#374151" };
  return (
    <span className="inline-flex text-[0.6875rem] font-medium px-2 py-0.5 rounded whitespace-nowrap"
      style={{ backgroundColor: c.bg, color: c.text }}>
      {label || category}
    </span>
  );
}

const REGIONS = ["All Regions", "West Africa", "East Africa", "North Africa", "Central Africa", "Southern Africa"];
const CATEGORIES = ["All Categories", "VASP Regulation", "Stablecoin Policy", "CBDC", "Taxation", "Licensing", "AML/CFT", "Banking Guidance", "Securities Regulation", "Digital Payments"];
const STATUSES_LIST = ["All Statuses", "Draft", "Proposed", "Active", "Consultation", "Licensing", "Enforcement Action", "Guidance", "Policy Update", "Ban"];

export default function CountryTracker() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [category, setCategory] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [methodOpen, setMethodOpen] = useState(false);
  const { lang } = useLang();
  const T = t[lang].tracker;

  const REGULATORY_UPDATES = useMemo(() => {
    return awpiiData.flatMap((country) => {
      const details = COUNTRY_DATA[country.key];
      const region = details?.region || "Africa";
      const c = country.content[lang] || country.content.en;
      const timeline = details?.timeline || [{
        date: "2026",
        title: c.key_update,
        desc: `${c.name}: ${c.key_update}`,
        severity: "Positive",
      }];
      return timeline.map((event, idx) => ({
        id: `${country.id}-${idx}`,
        country: c.name,
        flag: country.flag,
        region,
        title: event.content?.[lang]?.title || event.title,
        date: event.date,
        category: inferCategory(event.title, event.desc),
        status: inferStatus(event.severity, event.title),
        summary: event.content?.[lang]?.desc || event.desc,
        awpii_rank: country.rank,
        countryKey: country.key,
      }));
    });
  }, [lang]);


  const filtered = useMemo(() => {
    return REGULATORY_UPDATES.filter(u => {
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!u.title.toLowerCase().includes(q) && !u.country.toLowerCase().includes(q) && !u.summary.toLowerCase().includes(q) && !u.category.toLowerCase().includes(q)) return false;
      }
      if (region !== "All Regions" && u.region !== region) return false;
      if (category !== "All Categories" && u.category !== category) return false;
      if (statusFilter !== "All Statuses" && u.status !== statusFilter) return false;
      return true;
    });
  }, [search, region, category, statusFilter]);

  const resetFilters = () => {
    setSearch(""); setRegion("All Regions"); setCategory("All Categories"); setStatusFilter("All Statuses");
  };

  return (
    <div className="bg-background text-foreground" style={{ animation: "fadeIn 0.4s ease" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <title>Regulatory Tracker | Africa Web3 Institute</title>

      {/* Hero */}
      <section style={{ backgroundColor: "#0B1437" }} className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Africa Web3 Institute</p>
          <h1 className="text-[2rem] lg:text-[2.75rem] font-bold text-white leading-tight mb-3">
            {T.pageTitle}
          </h1>
          <p className="text-[1rem] max-w-2xl mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {T.pageSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(22,163,74,0.15)", color: "#4ade80", border: "1px solid rgba(22,163,74,0.3)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> {T.lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(212,160,23,0.15)", color: "#D4A017", border: "1px solid rgba(212,160,23,0.3)" }}>
              📊 {T.countriesTracked}
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[3.75rem] z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative flex-1 min-w-[180px] max-w-[240px]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder={T.filterSearch}
                className="w-full pl-8 pr-3 py-2 text-[0.8125rem] border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
            <select value={region} onChange={e => setRegion(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent">
              {REGIONS.map(r => <option key={r} value={r}>{T.regions?.[r] || r}</option>)}
            </select>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent">
              {CATEGORIES.map(c => <option key={c} value={c}>{T.categories?.[c] || c}</option>)}
            </select>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent">
              {STATUSES_LIST.map(s => <option key={s} value={s}>{T.statuses?.[s] || s}</option>)}
            </select>
            <button onClick={resetFilters}
              className="text-[0.8125rem] font-semibold ml-auto transition-colors"
              style={{ color: "#D4A017" }}
              onMouseEnter={e => e.currentTarget.style.color = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.color = "#D4A017"}>
              {T.resetFilters}
            </button>
          </div>
          <p className="text-[0.75rem] text-muted-foreground mt-2">
            {T.showing} <strong className="text-foreground">{filtered.length}</strong> {T.of} {REGULATORY_UPDATES.length} {T.updates} · {awpiiData.length} AWPII countries
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: "960px" }}>
              <thead>
                <tr className="border-b border-border" style={{ backgroundColor: "#F9FAFB" }}>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground whitespace-nowrap" style={{ position: "sticky", left: 0, backgroundColor: "#F9FAFB", zIndex: 10 }}>{T.colCountry}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground">{T.colTitle}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground whitespace-nowrap">{T.colDate}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground whitespace-nowrap">{T.colCategory}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground whitespace-nowrap">{T.colStatus}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground">{T.colSummary}</th>
                  <th className="text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground">{T.colSource}</th>
                  <th className="px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground text-right whitespace-nowrap">{T.colProfile}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-16 text-center text-muted-foreground text-[0.9375rem]">
                      {T.noResults}
                    </td>
                  </tr>
                ) : (
                  filtered.map((u, i) => (
                    <tr key={u.id}
                      className="border-b border-border/50 transition-colors"
                      style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F9FAFB" }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(13,44,125,0.04)"}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fff" : "#F9FAFB"}>
                      <td className="px-4 py-4" style={{ position: "sticky", left: 0, backgroundColor: "inherit", zIndex: 1 }}>
                        <div className="flex items-center gap-2">
                          <span className="text-[1.125rem] flex-shrink-0">{u.flag}</span>
                          <div>
                            <p className="font-semibold text-secondary text-[0.875rem] whitespace-nowrap">{u.country}</p>
                            <p className="text-[0.6875rem] text-muted-foreground">{T.regions?.[u.region] || u.region}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4" style={{ maxWidth: "200px" }}>
                        <p className="text-[0.875rem] font-semibold text-secondary leading-snug">{u.title}</p>
                      </td>
                      <td className="px-4 py-4 text-[0.8125rem] text-muted-foreground whitespace-nowrap">{u.date}</td>
                      <td className="px-4 py-4"><CategoryBadge category={u.category} label={T.categories?.[u.category] || u.category} /></td>
                      <td className="px-4 py-4"><StatusPill status={u.status} label={T.statuses?.[u.status] || u.status} /></td>
                      <td className="px-4 py-4" style={{ maxWidth: "260px" }}>
                        <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{u.summary}</p>
                      </td>
                      <td className="px-4 py-4" style={{ maxWidth: "140px" }}>
                        <p className="text-[0.75rem] text-muted-foreground/70 leading-snug">{u.source}</p>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Link
                          to={`/country-tracker/${u.countryKey}`}
                          className="text-[0.8125rem] font-semibold transition-colors whitespace-nowrap"
                          style={{ color: "#D4A017" }}
                          onMouseEnter={e => e.currentTarget.style.color = "#b8891a"}
                          onMouseLeave={e => e.currentTarget.style.color = "#D4A017"}>
                          {T.viewProfile}
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-8 border border-border rounded-lg overflow-hidden">
          <button onClick={() => setMethodOpen(o => !o)}
            className="w-full flex items-center justify-between px-6 py-4 text-[0.875rem] font-semibold text-secondary hover:bg-muted/30 transition-colors">
            <span>{T.methodologyToggle}</span>
            <span className="text-muted-foreground text-[1rem]">{methodOpen ? "−" : "+"}</span>
          </button>
          {methodOpen && (
            <div className="px-6 pb-5 text-[0.875rem] text-muted-foreground leading-[1.85] border-t border-border pt-4">
              {T.methodologyText}
            </div>
          )}
        </div>
      </div>

      {/* CTA Strip */}
      <section className="mt-8" style={{ backgroundColor: "#0B1437" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[1.125rem] font-semibold text-white">{T.ctaTitle}</p>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/awpii" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 transition-colors"
              style={{ backgroundColor: "#D4A017", color: "#fff" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}>
              {T.ctaButton}
            </Link>
            <a href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}>
              {T.ctaSubscribe}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}