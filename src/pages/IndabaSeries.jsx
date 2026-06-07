import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

const CONVENING_FORMATS = [
  {
    title: "Policy Roundtables",
    desc: "Closed-door discussions for policymakers, regulators, practitioners and academics to examine specific regulatory questions in depth — from virtual asset frameworks and stablecoin regulation to AI governance and digital trade.",
    icon: "🔵",
  },
  {
    title: "Policy Breakfast Series",
    desc: "Informal sessions for senior officials, regulators and business leaders. The format is deliberately relaxed — designed for honest conversation rather than prepared remarks.",
    icon: "☕",
  },
  {
    title: "Regulatory Dialogues",
    desc: "Technical forums for central banks, securities regulators, telecommunications authorities, data protection bodies and financial intelligence units. The focus is practical: regulatory capacity, cross-border coordination and readiness for emerging technologies.",
    icon: "⚖️",
  },
  {
    title: "Government Engagement Forums",
    desc: "Working sessions with ministries and public institutions on the digital economy priorities that matter most to them — financial inclusion, digital public infrastructure, trade facilitation and investment promotion.",
    icon: "🏛️",
  },
  {
    title: "Parliamentary & Legislative Engagements",
    desc: "Briefings and workshops for lawmakers and parliamentary committees navigating digital asset legislation, consumer protection, data governance and AI policy.",
    icon: "📜",
  },
  {
    title: "Public-Private Policy Dialogues",
    desc: "Open forums where government, industry, academia and civil society sit at the same table. The aim is straightforward: better policy through broader input.",
    icon: "🤝",
  },
  {
    title: "Ministerial & Executive Forums",
    desc: "Peer-learning forums for ministers, regulators and institutional leaders. Strategic in focus, candid in tone.",
    icon: "🎯",
  },
  {
    title: "Policy Labs",
    desc: "Hands-on workshops built around specific policy problems. Participants examine the challenge, explore options and leave with something concrete.",
    icon: "🔬",
  },
  {
    title: "Technical Working Groups",
    desc: "Ongoing specialist groups tackling discrete regulatory questions — stablecoins, VASPs, real-world asset tokenisation, digital trade, AI governance, digital identity, DeFi and consumer protection.",
    icon: "⚙️",
  },
];

const PARTICIPANTS = [
  "Governments and ministries",
  "Central banks and financial regulators",
  "Commercial banks, fintechs and capital market institutions",
  "Multilateral organisations and development finance institutions",
  "Universities and research bodies",
  "Technology companies, startups and industry associations",
  "Journalists",
  "Legal practitioners and enforcement agencies",
];

const OUTPUTS = [
  { label: "Policy Briefs", icon: "📄" },
  { label: "Regulatory Recommendations", icon: "📋" },
  { label: "Consultation Reports", icon: "🗂️" },
  { label: "Research Publications", icon: "📚" },
  { label: "Lasting Relationships", icon: "🌐" },
];

export default function IndabaSeries() {
  return (
    <div className="bg-background text-foreground" style={{ animation: "fadeIn 0.4s ease" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <title>The Indaba Series | Africa Web3 Institute</title>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: "#0B1437" }} className="relative overflow-hidden py-16 lg:py-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>
            AWI Flagship Programme
          </p>
          <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-white leading-tight mb-4">
            The Indaba Series
          </h1>
          <p className="text-[1.25rem] font-medium mb-8 italic" style={{ color: "hsl(40 78% 60%)" }}>
            Convening Africa's Digital Policy Conversations
          </p>
          <div className="w-16 h-px bg-accent mb-8" />
          <p className="text-[1rem] text-white/80 leading-[1.85] max-w-2xl mb-4">
            Emerging technologies are reshaping how Africa trades, governs, and grows. For the policymakers and regulators tasked with keeping pace, this presents both real opportunity and considerable pressure.
          </p>
          <p className="text-[1rem] text-white/80 leading-[1.85] max-w-2xl mb-10">
            The Indaba Series is AWI's flagship policy engagement programme. It brings together governments, regulators, legislators, industry, academia, civil society and development partners to work through the hardest questions in Africa's digital economy — together, and on the record.
          </p>
          <a
            href="mailto:info@africaweb3institute.org"
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold px-6 py-3 transition-all"
            style={{ backgroundColor: "#D4A017", color: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
          >
            Join the Indaba <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Why These Conversations Matter ── */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
                Context
              </p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary mb-6">
                Why These Conversations Matter
              </h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-5">
                Technology moves faster than regulation. Across the continent, policymakers are navigating digital assets, stablecoins, artificial intelligence, tokenisation, digital identity and cross-border payments — frequently without access to the expertise or peer networks that those decisions demand.
              </p>
              <p className="text-[1rem] text-muted-foreground leading-[1.85]">
                The Indaba Series exists to close that gap, not through reports that sit unread, but through sustained, structured dialogue between the people who make policy and the people who live with its consequences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Digital Assets", "Stablecoins", "Artificial Intelligence", "Tokenisation", "Digital Identity", "Cross-Border Payments"].map(topic => (
                <div
                  key={topic}
                  className="p-4 border border-border bg-white text-center"
                  style={{ borderLeft: "3px solid #D4A017" }}
                >
                  <p className="text-[0.875rem] font-semibold text-secondary">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Convene ── */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
              Formats
            </p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary mb-3">
              How We Convene
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-[0.9375rem]">
              Nine structured formats designed for the depth and candour that policy decisions require.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONVENING_FORMATS.map((format) => (
              <div
                key={format.title}
                className="bg-white border border-border p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ borderTop: "3px solid #D4A017" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">{format.icon}</span>
                  <h3 className="text-[0.9375rem] font-bold text-secondary">{format.title}</h3>
                </div>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.7]">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Takes Part ── */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
                Participants
              </p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary mb-6">
                Who Takes Part
              </h2>
              <ul className="space-y-3">
                {PARTICIPANTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#D4A017" }} />
                    <span className="text-[0.9375rem] text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8 lg:p-10">
              <p className="text-[1.25rem] font-bold text-white leading-relaxed mb-0">
                "The Indaba Series is built on the conviction that good digital policy cannot be made in silos."
              </p>
              <div className="w-12 h-px mt-6" style={{ backgroundColor: "#D4A017" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── What Each Indaba Produces ── */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
              Outputs
            </p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary mb-3">
              What Each Indaba Produces
            </h2>
            <p className="text-[1rem] text-muted-foreground max-w-2xl mx-auto leading-[1.85]">
              Policy briefs, regulatory recommendations, consultation reports, research publications and the kind of relationships that keep the conversation going long after the room clears.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {OUTPUTS.map((o) => (
              <div
                key={o.label}
                className="bg-white border border-border px-6 py-4 flex items-center gap-3"
              >
                <span className="text-[1.25rem]">{o.icon}</span>
                <span className="text-[0.875rem] font-semibold text-secondary">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AWI ── */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>
              Our Approach
            </p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary mb-6">
              Why AWI
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85]">
              We are independent. We do not carry a brief for any sector or interest group. What we bring is rigour, a genuine continental network, and a commitment to conversations that are actually useful — not just well-attended.
            </p>
          </div>
        </div>
      </section>

      {/* ── Join the Indaba CTA ── */}
      <section style={{ backgroundColor: "#0B1437" }} className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>
            Get Involved
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white mb-6">
            Join the Indaba
          </h2>
          <p className="text-[1rem] text-white/75 leading-[1.85] max-w-2xl mx-auto mb-10">
            If you work in regulation, policy, legislation, finance, technology, academia or media — and you care about where Africa's digital economy is headed — we want you in the room.
          </p>
          <a
            href="mailto:info@africaweb3institute.org"
            className="inline-flex items-center gap-3 text-[0.9375rem] font-semibold px-8 py-3.5 transition-all"
            style={{ backgroundColor: "#D4A017", color: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
          >
            <Mail className="w-4 h-4" />
            info@africaweb3institute.org
          </a>
          <p className="mt-12 text-[0.9375rem] font-medium italic" style={{ color: "rgba(255,255,255,0.5)" }}>
            Convening Conversations. Informing Policy. Advancing Africa's Digital Future.
          </p>
        </div>
      </section>

      {/* Back link */}
      <div className="border-t border-border py-6 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="text-[0.8125rem] text-muted-foreground hover:text-secondary transition-colors">
            ← Back to Africa Web3 Institute homepage
          </Link>
        </div>
      </div>
    </div>
  );
}