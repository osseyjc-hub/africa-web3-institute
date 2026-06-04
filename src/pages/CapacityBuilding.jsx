import React from "react";
import { Link } from "react-router-dom";

const WHO_WE_TRAIN = [
  {
    icon: "🏛️",
    title: "Government & Public Sector",
    desc: "Ministries, central banks, and regulators need to integrate new technologies safely while maintaining public trust.",
    focus: "Web3 fundamentals, digital asset regulation, stablecoin policy, Central Bank Digital Currencies (CBDCs), digital identity, and AfCFTA integration.",
  },
  {
    icon: "🏦",
    title: "Financial Institutions",
    desc: "Banks, fintechs, and asset managers are adopting programmable payments and tokenised finance. We guide them through the transition.",
    focus: "Virtual Asset Service Provider (VASP) integration, digital asset custody, AML/CFT compliance, and tokenised securities.",
  },
  {
    icon: "🎓",
    title: "Academic Institutions",
    desc: "Building the next generation of digital professionals starts with higher education. We help universities and research labs develop relevant frameworks.",
    focus: "Blockchain curriculum design, faculty training, and student innovation hubs.",
  },
  {
    icon: "🏢",
    title: "Private Sector",
    desc: "Showing corporates, SMEs, and agribusinesses how to cut costs, speed up cross-border trade, and improve supply chain transparency.",
    focus: "Enterprise blockchain, tokenisation strategies, and digital trade solutions.",
  },
  {
    icon: "📰",
    title: "Media Organisations",
    desc: "Newsrooms need to understand complex technological shifts to report on them accurately.",
    focus: "Digital asset literacy, fintech reporting, identifying market scams, and data journalism.",
  },
  {
    icon: "⚖️",
    title: "Law Enforcement & the Judiciary",
    desc: "Police, judges, and prosecutors face new types of financial crime and digital disputes. We provide the technical grounding to handle them.",
    focus: "Blockchain investigations, asset tracing, smart contract law, digital evidence management, and cross-border enforcement.",
  },
  {
    icon: "🌱",
    title: "Development Agencies & Web3 Innovators",
    desc: "Funding and building decentralised infrastructure requires clear governance. We work with NGOs, startups, and investors to structure their approach.",
    focus: "Financial inclusion, regulatory compliance, governance frameworks, and sustainable market development.",
  },
];

const PROGRAMMES = [
  {
    name: "Executive Leadership",
    audience: "C-suite, board directors, senior policymakers",
    focus: "Strategic overview of blockchain and digital assets, institutional risk, governance, and leadership in the decentralised economy.",
  },
  {
    name: "Regulatory & Policy",
    audience: "Regulators, ministries, central banks",
    focus: "VASP licensing frameworks, AML/CFT obligations, FATF Travel Rule, CBDC design, and comparative regulatory models across Africa.",
  },
  {
    name: "Banking & Finance",
    audience: "Banks, fintechs, asset managers",
    focus: "Tokenised finance, digital asset custody, programmable payments, stablecoin integration, and compliance workflows.",
  },
  {
    name: "Blockchain Fundamentals",
    audience: "Professionals entering the Web3 space",
    focus: "Distributed ledger technology, consensus mechanisms, smart contracts, wallets, and real-world applications in African contexts.",
  },
  {
    name: "Digital Trade & AfCFTA",
    audience: "Trade bodies, logistics, agribusinesses",
    focus: "Cross-border digital payments, tokenised trade finance, AfCFTA digital protocols, and supply chain transparency.",
  },
  {
    name: "Real World Asset (RWA) Tokenisation",
    audience: "Investors, legal professionals, corporates",
    focus: "Asset tokenisation frameworks, legal structuring, custody, secondary market access, and African jurisdiction considerations.",
  },
  {
    name: "Cybersecurity & Trust",
    audience: "IT teams, compliance officers, auditors",
    focus: "Blockchain security architecture, smart contract auditing, digital identity, data integrity, and incident response.",
  },
];

const DELIVERY_FORMATS = [
  { icon: "🤝", label: "Executive roundtables and boardroom briefings" },
  { icon: "🖥️", label: "In-person workshops and virtual masterclasses" },
  { icon: "🏆", label: "Intensive bootcamps and certification courses" },
  { icon: "🔬", label: "Policy labs" },
  { icon: "🏗️", label: "Custom institutional programmes" },
];

export default function CapacityBuilding() {
  return (
    <div className="bg-background text-foreground" style={{ animation: "fadeIn 0.4s ease" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
      <title>Capacity Building | Africa Web3 Institute</title>

      {/* Hero */}
      <section style={{ backgroundColor: "#0B1437" }} className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
            Programmes
          </p>
          <h1 className="text-[2rem] lg:text-[3rem] font-bold text-white leading-tight mb-3">
            Capacity Building
          </h1>
          <p className="text-[1.1875rem] font-semibold mb-4" style={{ color: "#D4A017" }}>
            Preparing Africa's Institutions for the Digital Economy
          </p>
          <p className="text-[1.0625rem] font-medium text-white mb-3">
            Technology alone doesn't build economies. People and institutions do.
          </p>
          <p className="text-[1rem] max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            The Africa Web3 Institute (AWI) provides the training governments, businesses, and academic bodies need to operate in a changing financial system. We cut through the hype to focus on practical implementation, moving your team from basic theory to active, compliant execution.
          </p>
        </div>
      </section>

      {/* Who We Train */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#D4A017" }}>Audience</p>
            <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary">Who We Train</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_WE_TRAIN.map((group) => (
              <div
                key={group.title}
                className="bg-white border border-border rounded-lg p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">{group.icon}</span>
                  <h3 className="text-[0.9375rem] font-bold text-secondary leading-snug">{group.title}</h3>
                </div>
                <p className="text-[0.8375rem] text-muted-foreground leading-relaxed">{group.desc}</p>
                <div className="mt-auto pt-3 border-t border-border/50">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-wide mb-1" style={{ color: "#D4A017" }}>Focus</p>
                  <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{group.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Training Programmes */}
      <section className="py-16 lg:py-20 border-b border-border" style={{ backgroundColor: "hsl(220 14% 97%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#D4A017" }}>Curriculum</p>
            <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary">Core Training Programmes</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr style={{ backgroundColor: "#0B1437" }}>
                  <th className="text-left px-5 py-3.5 text-[0.6875rem] font-bold tracking-wider uppercase text-white/70 whitespace-nowrap">Programme</th>
                  <th className="text-left px-5 py-3.5 text-[0.6875rem] font-bold tracking-wider uppercase text-white/70">Designed For</th>
                  <th className="text-left px-5 py-3.5 text-[0.6875rem] font-bold tracking-wider uppercase text-white/70">Focus Areas</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMMES.map((prog, i) => (
                  <tr
                    key={prog.name}
                    className="border-t border-border/50"
                    style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F9FAFB" }}
                  >
                    <td className="px-5 py-4 align-top">
                      <p className="font-bold text-secondary text-[0.875rem] whitespace-nowrap">{prog.name}</p>
                    </td>
                    <td className="px-5 py-4 align-top" style={{ minWidth: "180px" }}>
                      <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{prog.audience}</p>
                    </td>
                    <td className="px-5 py-4 align-top" style={{ minWidth: "280px" }}>
                      <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{prog.focus}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#D4A017" }}>How We Deliver</p>
            <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary mb-3">Delivery Formats</h2>
            <p className="text-[1rem] text-muted-foreground">We run training in formats that fit your schedule:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERY_FORMATS.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-4 bg-white border border-border rounded-lg px-5 py-4"
              >
                <span className="text-[1.5rem] flex-shrink-0">{f.icon}</span>
                <p className="text-[0.875rem] font-medium text-secondary leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AWI */}
      <section className="py-16 lg:py-20 border-b border-border" style={{ backgroundColor: "#0B1437" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
            Our Advantage
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white mb-6">Why AWI?</h2>
          <p className="text-[1.0625rem] leading-[1.9]" style={{ color: "rgba(255,255,255,0.7)" }}>
            Our curriculum is built for African markets. We don't teach abstract concepts and hope they fit; we combine local regulatory realities with global standards. By merging policy, law, and technical architecture, your team leaves knowing exactly what to do next.
          </p>
        </div>
      </section>

      {/* Book a Training Session CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
            Get Started
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary mb-4">
            Book a Training Session
          </h2>
          <p className="text-[1rem] text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our team to discuss education programmes, certification courses, or a workshop tailored to your organisation's specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center text-[0.9375rem] font-semibold px-7 py-3 rounded-md transition-colors"
              style={{ backgroundColor: "#D4A017", color: "#fff" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
            >
              Book a Training Session
            </a>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center text-[0.9375rem] font-semibold px-7 py-3 rounded-md border transition-colors"
              style={{ borderColor: "#0B1437", color: "#0B1437" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#0B1437"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#0B1437"; }}
            >
              Learn More About AWI
            </Link>
          </div>
          <p className="mt-5 text-[0.875rem] text-muted-foreground">
            Or email us directly:{" "}
            <a href="mailto:info@africaweb3institute.org" className="font-semibold" style={{ color: "#D4A017" }}>
              info@africaweb3institute.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}