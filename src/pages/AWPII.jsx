import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, BarChart3, Globe, Zap, Users, Building2, Mail, ChevronRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Policy & Regulation",
    description: "Legislative clarity, licensing requirements for Virtual Asset Service Providers (VASPs), tax treatment of digital assets, and consumer protection protocols.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Market Adoption",
    description: "On-chain transaction volumes, stablecoin utilisation for merchant trade, remittance flows, and retail user density.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Ecosystem Density",
    description: "Concentration of active developers, local startups, technology hubs, and corporate partnerships utilising distributed ledger technology.",
    icon: Users,
  },
  {
    number: "04",
    title: "Infrastructure & Connectivity",
    description: "Internet penetration, mobile money interoperability, fiat-to-crypto on-ramps and off-ramps, power grid reliability, and digital public infrastructure.",
    icon: Globe,
  },
];

const audience = [
  { title: "Regulators & Central Banks", description: "Designing financial governance and VASP frameworks." },
  { title: "Founders & Operators", description: "Assessing jurisdictional risk before deploying capital or setting up regional hubs." },
  { title: "Institutional Allocators", description: "Managing risk profiles across diverse African markets." },
  { title: "Legal & Banking Entities", description: "Monitoring compliance, cross-border settlement shifts, and counterparty risks." },
];

const deliverables = [
  {
    title: "Annual Rankings & Scorecards",
    description: "Comprehensive matrix comparing national performance across all four pillars.",
  },
  {
    title: "Policy Snapshots",
    description: "Rapid-response briefings issued immediately following major legislative shifts, central bank directives, or market events.",
  },
  {
    title: "Granular Country Profiles",
    description: "Independent assessments highlighting specific jurisdictional risks, structural advantages, and legislative directions.",
  },
  {
    title: "Strategic Directives",
    description: "Evidence-based policy recommendations formulated to support balanced regulation and sustainable innovation.",
  },
];

const questions = [
  "Which jurisdictions have legally enforceable frameworks for digital asset service providers?",
  "Where is policy actively reducing friction for cross-border settlement and stablecoin integration?",
  "How do infrastructure realities impact actual market viability from one country to the next?",
];

function CTAButton({ children, primary, href, onClick }) {
  const base = "inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 transition-colors";
  const style = primary
    ? `${base} bg-secondary text-white hover:bg-secondary/90`
    : `${base} border border-secondary text-secondary hover:bg-secondary hover:text-white`;
  if (href) return <a href={href} className={style}>{children}</a>;
  return <button onClick={onClick} className={style}>{children}</button>;
}

export default function AWPII() {
  const scrollToContact = () => {
    document.querySelector("#awpii-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-accent border border-accent/40 px-3 py-1">
                Flagship Initiative — Africa Web3 Institute
              </span>
            </div>
            <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Africa Web3 Policy &amp; Innovation Index
            </h1>
            <p className="text-[1.25rem] lg:text-[1.5rem] font-medium text-white/60 mb-8 leading-snug">
              Benchmarking Regulatory Clarity and Market Readiness Across the Continent
            </p>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="text-[1rem] text-white/80 leading-[1.85] mb-4 max-w-2xl">
              Africa is rewriting the rules of exchange, identity, and commerce.
            </p>
            <p className="text-[1rem] text-white/80 leading-[1.85] mb-4 max-w-2xl font-semibold">
              Regulatory frameworks will determine which markets scale—and which stall.
            </p>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-10 max-w-2xl">
              The AWPII is the definitive benchmark evaluating how African jurisdictions regulate, restrict, or enable decentralised technologies. Through rigorous annual analysis and real-time Snapshot updates, we provide clear, data-driven comparisons of continental policy environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton primary onClick={scrollToContact}>
                Explore the Interactive Index <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton onClick={scrollToContact}>
                <Download className="w-4 h-4" /> Download the 2026 Annual Report
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: "54", label: "African Nations Tracked" },
              { value: "4", label: "Assessment Pillars" },
              { value: "Annual", label: "Index Editions" },
              { value: "Real-Time", label: "Policy Snapshots" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <p className="text-[1.75rem] font-bold text-secondary leading-none mb-2">{s.value}</p>
                <p className="text-[0.75rem] font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
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
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Overview</p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">
                Systemic intelligence for Africa's decentralised economy
              </h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-5">
                The AWPII evaluates African nations on their systemic readiness for the decentralised economy.
              </p>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">
                By pairing exhaustive annual indexing with high-frequency Snapshot editions, the AWPII provides sovereign authorities, market participants, and institutional investors with immediate, actionable intelligence.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Objective Data", desc: "Replacing anecdotal assumptions with verified structural metrics." },
                  { label: "Comparative Clarity", desc: "Evaluating regional progress using standardised repeatable indicators." },
                  { label: "Operational Intelligence", desc: "Serving as an active analytical tool for institutional decision-making." },
                ].map((item) => (
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
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">Built specifically for</p>
              <div className="space-y-px bg-border">
                {audience.map((a) => (
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
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Why It Matters</p>
            <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white leading-snug mb-6">
              Eliminating regulatory opacity across 54 nations
            </h2>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-4">
              While digital asset adoption continues to rise across Africa, regulatory approaches remain highly fragmented.
            </p>
            <p className="text-[1rem] text-white/70 leading-[1.85]">
              Some nations are actively codifying clear legal structures to attract capital, while others rely on restrictive measures or maintaining ambiguous enforcement positions. In a market that operates continuously and across borders, regulatory opacity creates substantial friction.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-white/40 mb-6 text-center">
              The AWPII addresses core structural questions
            </p>
            <div className="space-y-px bg-white/10">
              {questions.map((q, i) => (
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
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Methodology</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-4">
              The Four Assessment Pillars
            </h2>
            <p className="text-[1rem] text-muted-foreground max-w-xl mx-auto">
              Every country is evaluated through a weighted framework across four core dimensions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
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
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Deliverables & Insights</p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">
                Four intelligence outputs, one integrated platform
              </h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85]">
                The AWPII delivers structured, decision-grade intelligence across annual and real-time formats — designed for institutional use at the highest levels of policy and capital deployment.
              </p>
            </div>
            <div className="space-y-px bg-border">
              {deliverables.map((d) => (
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
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">A Market in Motion</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">
              The data shows a widening gap between proactive regulators and reactive markets.
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-4">
              African cross-border trade, commodity tokenisation, and daily commerce are moving toward decentralised infrastructure out of economic necessity. Standing still is not an option for regional economies.
            </p>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-10">
              The AWPII provides the baseline data needed to understand who is successfully capturing this economic shift.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton primary onClick={scrollToContact}>
                Access the Index Dashboard <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton onClick={scrollToContact}>Subscribe to Snapshot Alerts</CTAButton>
              <CTAButton onClick={scrollToContact}>Schedule an Institutional Briefing</CTAButton>
              <CTAButton onClick={scrollToContact}>Explore Partnership Opportunities</CTAButton>
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
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Institutional Collaboration</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-white leading-snug mb-6">
              An active platform for institutional progress
            </h2>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-4">
              The AWPII functions as an active platform for institutional progress. We collaborate with central banks, ministries of finance, continental bodies, financial institutions, and international development agencies to design frameworks that safeguard financial stability while encouraging technological growth.
            </p>
            <p className="text-[1rem] text-white/70 leading-[1.85] mb-8">
              To explore data integration, customised country assessments, or capacity-building workshops:
            </p>
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
            ← Back to Africa Web3 Institute
          </Link>
        </div>
      </div>

    </div>
  );
}