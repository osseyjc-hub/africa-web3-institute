import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, label, suffix = "", started }) {
  const num = useCountUp(parseInt(value), 1800, started);
  return (
    <div className="text-center px-6 py-8 border-r last:border-r-0" style={{ borderColor: "rgba(212,160,23,0.2)" }}>
      <p className="font-display text-[2rem] font-bold leading-none mb-2" style={{ color: "#D4A017" }}>
        {num}{suffix}
      </p>
      <p className="text-[0.75rem] font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
        {label}
      </p>
    </div>
  );
}

const STATS = [
  { value: 54, label: "Countries Covered", suffix: "" },
  { value: 200, label: "Policy Reports", suffix: "+" },
  { value: 3000, label: "Members", suffix: "+" },
  { value: 12, label: "Partner Governments", suffix: "" },
];

export default function HeroSection() {
  const { lang } = useLang();
  const T = t[lang].hero;
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#0B1437" }} className="relative overflow-hidden">
      {/* Dotted Africa map overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #D4A017 1px, transparent 0)",
          backgroundSize: "28px 28px"
        }}
      />
      {/* Gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #D4A017, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[0.6875rem] font-bold tracking-[0.2em] uppercase"
            style={{ border: "1px solid rgba(212,160,23,0.35)", color: "#D4A017", backgroundColor: "rgba(212,160,23,0.08)" }}>
            Pan-African Think Tank · Est. 2024
          </div>

          <h1 className="font-display text-[2.75rem] lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-white mb-8">
            {T.h1}
          </h1>

          <p className="text-[1.125rem] lg:text-[1.25rem] leading-[1.75] mb-12 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            {T.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#publications")}
              className="inline-flex items-center justify-center gap-2 text-[0.875rem] font-semibold px-8 py-4 transition-all"
              style={{ backgroundColor: "#D4A017", color: "#0B1437" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
            >
              {T.cta1} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#community")}
              className="inline-flex items-center justify-center gap-2 text-[0.875rem] font-semibold px-8 py-4 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.9)" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              {T.cta2}
            </button>
          </div>

          <button
            onClick={() => scrollTo("#who-we-are")}
            className="mt-16 flex items-center gap-2 mx-auto text-[0.75rem] font-medium tracking-wider uppercase animate-bounce"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} style={{ backgroundColor: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(212,160,23,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} suffix={s.suffix} started={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}