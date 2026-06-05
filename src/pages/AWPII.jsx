import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, BarChart3, Globe, Zap, Users, Building2, Mail, ChevronRight } from "lucide-react";
import AfricaMapInteractive from "../components/map/AfricaMapInteractive";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { STATUS_COLORS, STATUS_LABELS, STATUS, getAllCountries } from "@/data/countryData";

const PILLAR_ICONS = [Building2, BarChart3, Users, Globe];

function CTAButton({ children, primary, href, onClick }) {
  const base = "inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 transition-colors";
  const style = primary
    ? `${base} bg-secondary text-white hover:bg-secondary/90`
    : `${base} border border-secondary text-secondary hover:bg-secondary hover:text-white`;
  if (href) return <a href={href} className={style}>{children}</a>;
  return <button onClick={onClick} className={style}>{children}</button>;
}

export default function AWPII() {
  const { lang } = useLang();
  const T = t[lang].awpii;

  const scrollToContact = () => {
    document.querySelector("#awpii-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
  
              {T.heroTitle}
            </h1>
            <p className="text-[1.25rem] lg:text-[1.5rem] font-medium mb-8 leading-snug" style={{ color: "hsl(40 78% 50%)" }}>
              {T.heroSubtitle}
            </p>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="text-[1rem] text-white/80 leading-[1.85] mb-4 max-w-2xl">
              {T.heroPara1}
            </p>
            <p className="text-[1rem] text-white/80 leading-[1.85] mb-4 max-w-2xl font-semibold">
              {T.heroPara2}
            </p>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-10 max-w-2xl">
              {T.heroPara3}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton primary onClick={scrollToContact}>
                {T.heroCtaPrimary} <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton onClick={scrollToContact}>
                <Download className="w-4 h-4" /> {T.heroCtaSecondary}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {T.stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <p className="text-[1.75rem] font-bold text-secondary leading-none mb-2">{s.value}</p>
                <p className="text-[0.75rem] font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AfricaMapInteractive />

      {/* Rankings Table */}
      <section id="rankings" className="py-24 lg:py-32 border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
              {lang === "fr" ? "Classements" : "Rankings"}
            </p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-3">
              {lang === "fr" ? "Classement des Pays" : "Country Rankings"}
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-lg mx-auto">
              {lang === "fr"
                ? "Classés par score global moyen (Politique + Innovation + Adoption)"
                : "Ranked by composite score average (Policy + Innovation + Adoption)"}
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 pr-4 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider w-8">#</th>
                  <th className="text-left pb-3 pr-6 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Pays" : "Country"}</th>
                  <th className="text-left pb-3 pr-6 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Statut" : "Status"}</th>
                  <th className="text-right pb-3 pr-6 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Politique" : "Policy"}</th>
                  <th className="text-right pb-3 pr-6 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Innovation" : "Innovation"}</th>
                  <th className="text-right pb-3 pr-6 text-[0.75mn] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Adoption" : "Adoption"}</th>
                  <th className="text-right pb-3 text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-wider">{lang === "fr" ? "Score Global" : "Overall"}</th>
                </tr>
              </thead>
              <tbody>
                {getAllCountries()
                    .map((d) => ({ ...d, overall: Math.round((d.policy + d.innovation + d.adoption) / 3) }))
                    .sort((a, b) => b.overall - a.overall)
                    .map((c, i) => (
                      <tr key={c.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-4 pr-4 text-muted-foreground font-medium">{i + 1}</td>
                        <td className="py-4 pr-6">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[1.125rem]">{c.flag}</span>
                            <span className="font-semibold text-secondary">{c.name}</span>
                          </div>
                        </td>
                        <td className="py-4 pr-6">
                          <span
                            className="inline-flex items-center text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full text-white"
                            style={{ backgroundColor: STATUS_COLORS[c.status] }}
                          >
                            {STATUS_LABELS[lang][c.status]}
                          </span>
                        </td>
                        <td className="py-4 pr-6 text-right">
                          <span className="font-medium text-foreground">{c.policy}</span>
                        </td>
                        <td className="py-4 pr-6 text-right">
                          <span className="font-medium text-foreground">{c.innovation}</span>
                        </td>
                        <td className="py-4 pr-6 text-right">
                          <span className="font-medium text-foreground">{c.adoption}</span>
                        </td>
                        <td className="py-4 text-right">
                          <span className="font-bold text-[1rem]" style={{ color: STATUS_COLORS[c.status] }}>{c.overall}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {getAllCountries()
              .map((d) => ({ ...d, overall: Math.round((d.policy + d.innovation + d.adoption) / 3) }))
              .sort((a, b) => b.overall - a.overall)
              .map((c, i) => (
                <div key={c.name} className="bg-background border border-border p-4 flex items-center gap-4">
                  <span className="text-muted-foreground font-bold text-[0.75rem] w-5 flex-shrink-0">{i + 1}</span>
                  <span className="text-[1.25rem]">{c.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-secondary text-[0.9375rem]">{c.name}</p>
                    <span
                      className="inline-flex items-center text-[0.625rem] font-semibold px-2 py-0.5 rounded-full text-white mt-1"
                      style={{ backgroundColor: STATUS_COLORS[c.status] }}
                    >
                      {STATUS_LABELS[lang][c.status]}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-[1.125rem]" style={{ color: STATUS_COLORS[c.status] }}>{c.overall}</p>
                    <p className="text-[0.6875rem] text-muted-foreground">{lang === "fr" ? "Score" : "Score"}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.overviewEyebrow}</p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">
                {T.overviewHeading}
              </h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-5">{T.overviewPara1}</p>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">{T.overviewPara2}</p>
              <div className="space-y-5">
                {T.overviewPoints.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-[0.9375rem] text-foreground leading-snug">
                      <span className="font-semibold">{item.label}:</span>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">{T.audienceLabel}</p>
              <div className="space-y-px bg-border">
                {T.audience.map((a) => (
                  <div key={a.title} className="bg-background p-6 flex items-start gap-4">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[0.9375rem] font-semibold text-secondary mb-1">{a.title}</p>
                      <p className="text-[0.875rem] text-muted-foreground leading-snug">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 lg:py-32 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.whyEyebrow}</p>
            <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white leading-snug mb-6">{T.whyHeading}</h2>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-4">{T.whyPara1}</p>
            <p className="text-[1rem] text-white/70 leading-[1.85]">{T.whyPara2}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-white/40 mb-6 text-center">
              {T.whyQuestionsLabel}
            </p>
            <div className="space-y-px bg-white/10">
              {T.questions.map((q, i) => (
                <div key={i} className="bg-secondary px-8 py-5 flex items-start gap-5 border border-white/10">
                  <span className="text-accent font-bold text-[0.75rem] mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[0.9375rem] text-white/80 leading-snug">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.pillarsEyebrow}</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-4">{T.pillarsHeading}</h2>
            <p className="text-[1rem] text-muted-foreground max-w-xl mx-auto">{T.pillarsSubhead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {T.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <div key={pillar.number} className="bg-background p-10 flex flex-col gap-6">
                  <div className="flex items-start gap-5">
                    <span className="text-[0.6875rem] font-bold tracking-widest text-accent/60 mt-1">{pillar.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-secondary/8 flex items-center justify-center border border-secondary/10">
                          <Icon className="w-4 h-4 text-secondary" />
                        </div>
                        <h3 className="text-[1rem] font-bold text-secondary">{pillar.title}</h3>
                      </div>
                      <p className="text-[0.9375rem] text-muted-foreground leading-[1.75]">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 lg:py-32 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.deliverablesEyebrow}</p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">{T.deliverablesHeading}</h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85]">{T.deliverablesPara}</p>
            </div>
            <div className="space-y-px bg-border">
              {T.deliverables.map((d) => (
                <div key={d.title} className="bg-background p-7 flex items-start gap-4">
                  <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[0.9375rem] font-semibold text-secondary mb-1.5">{d.title}</p>
                    <p className="text-[0.875rem] text-muted-foreground leading-snug">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market in Motion */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.marketEyebrow}</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">{T.marketHeading}</h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-4">{T.marketPara1}</p>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">{T.marketPara2}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton primary onClick={scrollToContact}>
                {T.marketCta1} <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton onClick={scrollToContact}>{T.marketCta2}</CTAButton>
              <CTAButton onClick={scrollToContact}>{T.marketCta3}</CTAButton>
              <CTAButton onClick={scrollToContact}>{T.marketCta4}</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Collaboration */}
      <section id="awpii-contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">{T.contactEyebrow}</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-white leading-snug mb-6">{T.contactHeading}</h2>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-4">{T.contactPara1}</p>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-8">{T.contactPara2}</p>
            <a
              href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-white border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              info@africaweb3institute.org
            </a>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="border-t border-border py-6 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground hover:text-secondary transition-colors">
            {T.backHome}
          </Link>
        </div>
      </div>

    </div>
  );
}