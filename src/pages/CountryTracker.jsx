import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown, ChevronsUpDown, Search, X, ChevronDown as ChevronDownIcon } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const COUNTRIES = [
  { name: "Nigeria", flag: "🇳🇬", region: "West Africa", status: "Emerging", score: 74, assets: ["Crypto", "Stablecoins", "P2P"], lastUpdate: "Mar 2026", risk: "Medium" },
  { name: "Rwanda", flag: "🇷🇼", region: "East Africa", status: "Regulated", score: 88, assets: ["Crypto", "DeFi", "CBDCs"], lastUpdate: "Jan 2026", risk: "Low" },
  { name: "South Africa", flag: "🇿🇦", region: "Southern Africa", status: "Regulated", score: 81, assets: ["Crypto", "Stablecoins", "NFTs"], lastUpdate: "Feb 2026", risk: "Low" },
  { name: "Kenya", flag: "🇰🇪", region: "East Africa", status: "Emerging", score: 70, assets: ["Crypto", "CBDCs"], lastUpdate: "Apr 2026", risk: "Medium" },
  { name: "Ghana", flag: "🇬🇭", region: "West Africa", status: "Emerging", score: 65, assets: ["Crypto", "CBDCs"], lastUpdate: "Jan 2026", risk: "Medium" },
  { name: "Egypt", flag: "🇪🇬", region: "North Africa", status: "Restricted", score: 44, assets: [], lastUpdate: "Dec 2025", risk: "High" },
  { name: "Ethiopia", flag: "🇪🇹", region: "East Africa", status: "Emerging", score: 58, assets: ["Crypto"], lastUpdate: "Nov 2025", risk: "Medium" },
  { name: "Senegal", flag: "🇸🇳", region: "West Africa", status: "Emerging", score: 62, assets: ["Crypto", "CBDCs"], lastUpdate: "Feb 2026", risk: "Medium" },
  { name: "Tanzania", flag: "🇹🇿", region: "East Africa", status: "Emerging", score: 55, assets: ["Crypto"], lastUpdate: "Oct 2025", risk: "Medium" },
  { name: "Morocco", flag: "🇲🇦", region: "North Africa", status: "Restricted", score: 46, assets: [], lastUpdate: "Jan 2026", risk: "High" },
  { name: "Cameroon", flag: "🇨🇲", region: "Central Africa", status: "Emerging", score: 60, assets: ["Crypto"], lastUpdate: "Dec 2025", risk: "Medium" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", region: "West Africa", status: "Emerging", score: 58, assets: ["Crypto", "CBDCs"], lastUpdate: "Nov 2025", risk: "Medium" },
  { name: "Zimbabwe", flag: "🇿🇼", region: "Southern Africa", status: "Emerging", score: 56, assets: ["Crypto", "CBDCs"], lastUpdate: "Mar 2026", risk: "Medium" },
  { name: "Zambia", flag: "🇿🇲", region: "Southern Africa", status: "Emerging", score: 54, assets: ["Crypto"], lastUpdate: "Sep 2025", risk: "Medium" },
  { name: "Algeria", flag: "🇩🇿", region: "North Africa", status: "Restricted", score: 38, assets: [], lastUpdate: "Jun 2025", risk: "High" },
  { name: "Uganda", flag: "🇺🇬", region: "East Africa", status: "Emerging", score: 52, assets: ["Crypto"], lastUpdate: "Aug 2025", risk: "Medium" },
  { name: "Tunisia", flag: "🇹🇳", region: "North Africa", status: "Emerging", score: 61, assets: ["Crypto", "Stablecoins"], lastUpdate: "Feb 2026", risk: "Medium" },
  { name: "Botswana", flag: "🇧🇼", region: "Southern Africa", status: "Emerging", score: 63, assets: ["Crypto"], lastUpdate: "Jan 2026", risk: "Medium" },
];

const STATUS_COLORS = {
  Regulated: { bg: "#16a34a", light: "#dcfce7", text: "#166534" },
  Emerging: { bg: "#D4A017", light: "#fef9c3", text: "#854d0e" },
  Restricted: { bg: "#dc2626", light: "#fee2e2", text: "#991b1b" },
  Undefined: { bg: "#9ca3af", light: "#f3f4f6", text: "#374151" },
};

const RISK_COLORS = {
  Low: "#16a34a",
  Medium: "#D4A017",
  High: "#dc2626",
};

const REGIONS = ["All Regions", "West Africa", "East Africa", "North Africa", "Central Africa", "Southern Africa"];
const STATUSES = ["All Statuses", "Regulated", "Emerging", "Restricted", "Undefined"];
const ASSET_TYPES = ["All Assets", "Crypto", "Stablecoins", "DeFi", "NFTs", "CBDCs", "P2P"];

function StatusPill({ status, label }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.Undefined;
  return (
    <span className="inline-flex items-center text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: c.light, color: c.text }}>
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0" style={{ backgroundColor: c.bg }} />
      {label !== undefined ? label : status}
    </span>
  );
}

function ScoreBar({ score }) {
  return (
    <div className="min-w-[80px]">
      <span className="text-[0.9375rem] font-bold text-secondary">{score}</span>
      <div className="h-1 rounded-full bg-border mt-1 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${score}%`, backgroundColor: "#D4A017" }} />
      </div>
    </div>
  );
}

function SortIcon({ col, sortCol, sortDir }) {
  if (sortCol !== col) return <ChevronsUpDown className="w-3 h-3 ml-1 opacity-30 flex-shrink-0" />;
  return sortDir === "asc"
    ? <ChevronUp className="w-3 h-3 ml-1 text-accent flex-shrink-0" />
    : <ChevronDown className="w-3 h-3 ml-1 text-accent flex-shrink-0" />;
}

export default function CountryTracker() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [status, setStatus] = useState("All Statuses");
  const [asset, setAsset] = useState("All Assets");
  const [sortCol, setSortCol] = useState("score");
  const [sortDir, setSortDir] = useState("desc");
  const [methodOpen, setMethodOpen] = useState(false);
  const { lang } = useLang();
  const T = t[lang].tracker;
  const regionLabels = { "All Regions": T.regions.all, "West Africa": T.regions.west, "East Africa": T.regions.east, "North Africa": T.regions.north, "Central Africa": T.regions.central, "Southern Africa": T.regions.southern };
  const statusLabels = { "All Statuses": T.filterStatus, "Regulated": T.statRegulated, "Emerging": T.statEmerging, "Restricted": T.statRestricted, "Undefined": "Undefined" };
  const riskLabels = { Low: T.riskLevels.low, Medium: T.riskLevels.medium, High: T.riskLevels.high };

  const filtered = useMemo(() => {
    let rows = COUNTRIES;
    if (search.trim()) rows = rows.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    if (region !== "All Regions") rows = rows.filter(c => c.region === region);
    if (status !== "All Statuses") rows = rows.filter(c => c.status === status);
    if (asset !== "All Assets") rows = rows.filter(c => c.assets.includes(asset));

    rows = [...rows].sort((a, b) => {
      let av = a[sortCol], bv = b[sortCol];
      if (sortCol === "name" || sortCol === "region" || sortCol === "status" || sortCol === "lastUpdate" || sortCol === "risk") {
        av = String(av).toLowerCase(); bv = String(bv).toLowerCase();
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === "asc" ? av - bv : bv - av;
    });
    return rows;
  }, [search, region, status, asset, sortCol, sortDir]);

  const handleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("asc"); }
  };

  const resetFilters = () => { setSearch(""); setRegion("All Regions"); setStatus("All Statuses"); setAsset("All Assets"); };

  const stats = useMemo(() => {
    const src = filtered;
    return {
      regulated: src.filter(c => c.status === "Regulated").length,
      emerging: src.filter(c => c.status === "Emerging").length,
      restricted: src.filter(c => c.status === "Restricted").length,
      avgScore: src.length ? Math.round(src.reduce((s, c) => s + c.score, 0) / src.length) : 0,
    };
  }, [filtered]);

  const thStyle = "text-left px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground select-none cursor-pointer whitespace-nowrap";

  return (
    <div className="bg-background text-foreground" style={{ animation: "fadeIn 0.4s ease" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <title>Country Tracker | Africa Web3 Institute</title>

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
            {/* Search */}
            <div className="relative flex-1 min-w-[180px] max-w-[240px]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={T.filterSearch}
                className="w-full pl-8 pr-3 py-2 text-[0.8125rem] border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            {/* Region */}
            <select
              value={region}
              onChange={e => setRegion(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {REGIONS.map(r => <option key={r} value={r}>{regionLabels[r] || r}</option>)}
            </select>
            {/* Status */}
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {STATUSES.map(s => <option key={s} value={s}>{statusLabels[s] || s}</option>)}
            </select>
            {/* Asset */}
            <select
              value={asset}
              onChange={e => setAsset(e.target.value)}
              className="text-[0.8125rem] border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {ASSET_TYPES.map(a => <option key={a}>{a}</option>)}
            </select>
            <button
              onClick={resetFilters}
              className="text-[0.8125rem] font-semibold ml-auto transition-colors"
              style={{ color: "#D4A017" }}
              onMouseEnter={e => e.currentTarget.style.color = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.color = "#D4A017"}
            >
              {T.resetFilters}
            </button>
          </div>
          <p className="text-[0.75rem] text-muted-foreground mt-2">
            {T.showing} <strong className="text-foreground">{filtered.length}</strong> {T.of} {COUNTRIES.length} {T.countries}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: T.statRegulated, value: stats.regulated, color: "#16a34a", bg: "#dcfce7" },
            { label: T.statEmerging, value: stats.emerging, color: "#D4A017", bg: "#fef9c3" },
            { label: T.statRestricted, value: stats.restricted, color: "#dc2626", bg: "#fee2e2" },
            { label: T.statAvgScore, value: stats.avgScore, color: "#0B1437", bg: "#f1f5f9" },
          ].map(s => (
            <div key={s.label} className="rounded-lg p-4 border border-border" style={{ backgroundColor: s.bg }}>
              <p className="text-[2rem] font-bold leading-none mb-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[0.75rem] font-medium" style={{ color: s.color }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: "860px" }}>
              <thead>
                <tr className="border-b border-border" style={{ backgroundColor: "#F9FAFB" }}>
                  <th className={thStyle} style={{ position: "sticky", left: 0, backgroundColor: "#F9FAFB", zIndex: 10 }} onClick={() => handleSort("name")}>
                   <span className="flex items-center">{T.colCountry} <SortIcon col="name" sortCol={sortCol} sortDir={sortDir} /></span>
                  </th>
                  <th className={thStyle} onClick={() => handleSort("status")}>
                   <span className="flex items-center">{T.colStatus} <SortIcon col="status" sortCol={sortCol} sortDir={sortDir} /></span>
                  </th>
                  <th className={thStyle} onClick={() => handleSort("score")}>
                   <span className="flex items-center">{T.colScore} <SortIcon col="score" sortCol={sortCol} sortDir={sortDir} /></span>
                  </th>
                  <th className={thStyle}>{T.colAssets}</th>
                  <th className={thStyle} onClick={() => handleSort("lastUpdate")}>
                   <span className="flex items-center">{T.colUpdated} <SortIcon col="lastUpdate" sortCol={sortCol} sortDir={sortDir} /></span>
                  </th>
                  <th className={thStyle} onClick={() => handleSort("risk")}>
                   <span className="flex items-center">{T.colRisk} <SortIcon col="risk" sortCol={sortCol} sortDir={sortDir} /></span>
                  </th>
                  <th className="px-4 py-3 text-[0.6875rem] font-bold tracking-wider uppercase text-muted-foreground text-right">{T.colProfile}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-muted-foreground text-[0.9375rem]">
                      {T.noResults}
                    </td>
                  </tr>
                ) : (
                  filtered.map((c, i) => (
                    <tr
                      key={c.name}
                      className="border-b border-border/50 transition-colors"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#fff" : "#F9FAFB",
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(13,44,125,0.04)"}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fff" : "#F9FAFB"}
                    >
                      <td className="px-4 py-4 font-semibold" style={{ position: "sticky", left: 0, backgroundColor: "inherit", zIndex: 1 }}>
                        <div className="flex items-center gap-2.5">
                          <span className="text-[1.125rem] flex-shrink-0">{c.flag}</span>
                          <div>
                            <p className="font-semibold text-secondary text-[0.9375rem] whitespace-nowrap">{c.name}</p>
                            <p className="text-[0.6875rem] text-muted-foreground">{c.region}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4"><StatusPill status={c.status} label={statusLabels[c.status]} /></td>
                      <td className="px-4 py-4"><ScoreBar score={c.score} /></td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                          {c.assets.length === 0
                            ? <span className="text-[0.75rem] text-muted-foreground italic">None</span>
                            : c.assets.map(a => (
                              <span key={a} className="text-[0.6875rem] font-medium px-2 py-0.5 rounded border border-border text-muted-foreground bg-muted/40">{a}</span>
                            ))
                          }
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[0.875rem] text-muted-foreground whitespace-nowrap">{c.lastUpdate}</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: RISK_COLORS[c.risk] }} />
                          {riskLabels[c.risk] || c.risk}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Link
                          to={`/country-tracker/${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="text-[0.8125rem] font-semibold transition-colors whitespace-nowrap"
                          style={{ color: "#D4A017" }}
                          onMouseEnter={e => e.currentTarget.style.color = "#b8891a"}
                          onMouseLeave={e => e.currentTarget.style.color = "#D4A017"}
                        >
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
          <button
            onClick={() => setMethodOpen(o => !o)}
            className="w-full flex items-center justify-between px-6 py-4 text-[0.875rem] font-semibold text-secondary hover:bg-muted/30 transition-colors"
          >
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
            <Link
              to="/awpii"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 transition-colors"
              style={{ backgroundColor: "#D4A017", color: "#fff" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
            >
              {T.ctaButton}
            </Link>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              {T.ctaSubscribe}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}