import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Award, Star, Shield, Globe, Zap, Users, Building2, Leaf, ChevronRight, Trophy } from "lucide-react";

const CATEGORY_ICONS = [Building2, Zap, Leaf, Globe, Shield, Star];

const CATEGORIES = [
  {
    number: "01",
    title: "Infrastructure & Core Technology",
    awards: [
      { name: "Enterprise Architecture of the Year", desc: "Awarded to the protocol or system demonstrating exceptional security, throughput, and uptime within an African context." },
      { name: "Web3 Venture of the Year", desc: "Recognising the early-stage enterprise showing the strongest technical execution and market viability." },
      { name: "Decentralised Infrastructure Innovation", desc: "Appreciating advancements in smart contract optimisation, security auditing, and localised node infrastructure." },
    ],
  },
  {
    number: "02",
    title: "Financial Systems & Capital Inclusion",
    awards: [
      { name: "Financial Inclusion Deployment", desc: "Honouring platforms that have measurably integrated unbanked or underbanked populations into formal economic systems." },
      { name: "Cross-Border Settlement Innovation", desc: "Recognising technical solutions minimising cost and settlement times for regional and intra-continental trade." },
      { name: "Stablecoin Integration Leadership", desc: "Awarded to institutions or projects successfully scaling fiat-pegged tokens for commercial use cases." },
    ],
  },
  {
    number: "03",
    title: "Sectoral Application & Governance",
    awards: [
      { name: "Agricultural Supply Chain Innovation", desc: "Commending tokenisation or tracking frameworks optimising provenance and liquidity for regional commodities." },
      { name: "Sustainable Infrastructure & Climate Finance", desc: "Recognising implementations leveraging distributed ledgers for carbon markets, renewable energy grid management, or green bonds." },
      { name: "Public Sector Transparency & Governance", desc: "Honouring initiatives utilising cryptographic verification to improve public accountability or institutional efficiency." },
    ],
  },
  {
    number: "04",
    title: "Ecosystem Capital & Digital Commerce",
    awards: [
      { name: "Digital Asset Economy Infrastructure", desc: "Recognising platforms advancing the deployment, fractionalization, or monetisation of digital intellectual property and real-world assets." },
      { name: "Ecosystem Development Initiative", desc: "Awarded to the organisation, hub, or incubator providing the highest qualitative output of technical literacy and engineering talent." },
    ],
  },
  {
    number: "05",
    title: "Regulatory Frameworks & Institutional Leadership",
    awards: [
      { name: "Regulatory & Policy Leadership", desc: "Honouring public sector officials, central banks, or ministries that have authored progressive, balanced, and clear regulatory frameworks." },
      { name: "Technical Capacity Building", desc: "Celebrating initiatives that provide structured, rigorous technical or legal education to institutional stakeholders and judicial officers." },
    ],
  },
  {
    number: "06",
    title: "Sovereign Honours",
    awards: [
      { name: "Pan-African Pioneer Award", desc: "Celebrating institutional cross-border initiatives that advance the unified digital market goals of the African Continental Free Trade Area (AfCFTA)." },
      { name: "Institutional Vanguard Award", desc: "Recognising female executive leadership driving structural, high-impact adoption across public or private blockchain divisions." },
      { name: "Lifetime Contribution to African Innovation", desc: "Awarded to individuals whose sustained efforts have fundamentally shaped the regulatory or technological landscape of the continent." },
    ],
  },
];

const OBJECTIVES = [
  { title: "Validate Proven Utility", desc: "Highlight production-ready deployments that optimise transactional speed, reduce friction, and lower operational overhead." },
  { title: "Establish Benchmarks", desc: "Define the standards of excellence for security, governance, and compliance within regional ecosystems." },
  { title: "Encourage Capital Alignment", desc: "Connect high-performing, verified projects with international institutional capital and strategic partners." },
  { title: "Inform Policy Trajectories", desc: "Demonstrate to regulatory authorities the practical, positive impact of compliant digital asset frameworks on financial inclusion and trade." },
];

const EVALUATION_METRICS = [
  { title: "Technical Rigour", desc: "Code quality, security architecture, and protocol efficiency." },
  { title: "Verifiable Impact", desc: "Documented transaction volume, active user bases, or audited efficiency gains." },
  { title: "Scalability", desc: "The structural capacity of the project to expand across multiple African jurisdictions." },
  { title: "Regulatory Compliance", desc: "Adherence to contemporary AML/CFT guidelines and regional VASP frameworks." },
];

const ATTENDEES = [
  "Sovereign Regulators & Policymakers shaping financial governance frameworks.",
  "Institutional allocators and venture investors deploying capital into regional infrastructure.",
  "Enterprise Banking Executives integrating next-generation payment rails.",
  "Technical Founders & Systems Architects engineering localised protocols.",
];

function CTAButton({ children, primary, href, onClick }) {
  const base = "inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 transition-colors";
  const style = primary
    ? `${base} bg-accent text-white hover:bg-accent/90`
    : `${base} border border-white/40 text-white hover:bg-white/10`;
  if (href) return <a href={href} className={style}>{children}</a>;
  return <button onClick={onClick} className={style}>{children}</button>;
}

function CTAButtonLight({ children, primary, onClick }) {
  const base = "inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 transition-colors";
  const style = primary
    ? `${base} bg-secondary text-white hover:bg-secondary/90`
    : `${base} border border-secondary text-secondary hover:bg-secondary hover:text-white`;
  return <button onClick={onClick} className={style}>{children}</button>;
}

export default function AfricaBlockchainAwards() {
  const scrollToContact = () => {
    document.querySelector("#awards-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(224 82% 14%) 60%, hsl(220 20% 10%) 100%)" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Pre-title badge */}
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8">
              <Trophy className="w-3.5 h-3.5 text-accent" />
              <span className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-accent">The Continent's Premier Recognition Platform</span>
            </div>

            <h1 className="text-[2.5rem] lg:text-[3.75rem] font-bold text-white leading-[1.05] tracking-tight mb-5">
              The Africa<br />
              <span style={{ color: "hsl(40 78% 50%)" }}>Blockchain Awards</span>
            </h1>
            <p className="text-[1.1rem] lg:text-[1.25rem] font-medium text-white/60 leading-snug mb-8 max-w-xl">
              Recognising Excellence, Utility, and Real-World Impact in Africa's Decentralised Economy
            </p>
            <div className="w-16 h-px mb-8" style={{ background: "hsl(40 78% 50%)" }} />
            <p className="text-[1rem] text-white/75 leading-[1.9] mb-5 max-w-2xl font-medium">
              Honouring the structural innovations driving Africa's digital infrastructure.
            </p>
            <p className="text-[1rem] text-white/60 leading-[1.9] mb-5 max-w-2xl">
              From scalable cross-border settlement systems and sovereign digital identity frameworks to enterprise distributed ledger solutions, Africa's financial and technological architecture is undergoing a profound transformation.
            </p>
            <p className="text-[1rem] text-white/60 leading-[1.9] mb-10 max-w-2xl">
              Presented as the concluding event of the AfricaWeb3 Summit, the awards provide a definitive platform for formally acknowledging continental leadership, regulatory foresight, and technical execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton primary onClick={scrollToContact}>
                Explore Corporate Partnerships <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton onClick={scrollToContact}>
                Submit a Nomination
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">About the Awards</p>
              <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary leading-snug mb-6">
                Rigorous evaluation of real-world impact across Africa's Web3 ecosystem
              </h2>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-5">
                The Africa Blockchain Awards provide rigorous, objective evaluation of real-world applications and systemic impact across the African Web3 ecosystem.
              </p>
              <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-8">
                As the signature evening event of the AfricaWeb3 Summit, the annual gala brings together an elite cohort of leaders shaping the continent's digital future. Our evaluation framework bypasses market sentiment to isolate and reward measurable economic and operational utility.
              </p>
              <CTAButtonLight primary onClick={scrollToContact}>
                Register to Attend <ArrowRight className="w-4 h-4" />
              </CTAButtonLight>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">The annual gala convenes</p>
              <div className="space-y-px bg-border">
                {ATTENDEES.map((a, i) => (
                  <div key={i} className="bg-background p-6 flex items-start gap-4">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-[0.9375rem] text-foreground leading-snug">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategic Objectives ── */}
      <section className="py-24 lg:py-32 border-b border-border" style={{ background: "linear-gradient(180deg, hsl(220 14% 97%) 0%, hsl(0 0% 100%) 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Strategic Objectives</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-4">
              Anchored in tangible problem-solving
            </h2>
            <p className="text-[1rem] text-muted-foreground max-w-2xl mx-auto leading-[1.85]">
              The unique economic dynamics of the African continent require blockchain implementations anchored directly in tangible problem-solving rather than speculative trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto">
            {OBJECTIVES.map((o, i) => (
              <div key={o.title} className="bg-white p-8 flex items-start gap-5">
                <span className="text-[0.6875rem] font-bold tracking-widest text-accent/50 mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[0.9375rem] font-bold text-secondary mb-2">{o.title}</p>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Award Categories ── */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Award Categories</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-4">
              Six pillars of recognition
            </h2>
            <p className="text-[1rem] text-muted-foreground max-w-xl mx-auto">
              Awards spanning the full depth of Africa's decentralised economy — from infrastructure to sovereignty.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {CATEGORIES.map((cat, ci) => {
              const Icon = CATEGORY_ICONS[ci];
              return (
                <div key={cat.number} className="bg-background">
                  {/* Category header */}
                  <div className="flex items-center gap-5 px-8 py-5 border-b border-border bg-muted/30">
                    <span className="text-[0.6875rem] font-bold tracking-widest text-accent/60">{cat.number}</span>
                    <div className="w-7 h-7 rounded bg-secondary/8 flex items-center justify-center border border-secondary/10 flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <h3 className="text-[0.9375rem] font-bold text-secondary">{cat.title}</h3>
                  </div>
                  {/* Awards list */}
                  <div className="divide-y divide-border">
                    {cat.awards.map((award) => (
                      <div key={award.name} className="px-8 py-5 flex items-start gap-4 pl-[4.5rem]">
                        <Award className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[0.9375rem] font-semibold text-secondary mb-1">{award.name}</p>
                          <p className="text-[0.875rem] text-muted-foreground leading-snug">{award.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nomination & Evaluation ── */}
      <section className="py-24 lg:py-32 border-b border-border" style={{ background: "linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(224 82% 14%) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Nomination & Evaluation Process</p>
              <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-white leading-snug mb-6">
                Strict transparency and governance guidelines
              </h2>
              <p className="text-[1rem] text-white/70 leading-[1.85] mb-6">
                The selection process adheres to strict transparency and governance guidelines. All submissions undergo independent review by a multi-disciplinary committee comprising institutional investors, regulatory experts, and senior systems engineers.
              </p>
              <CTAButton primary onClick={scrollToContact}>
                Access the Nomination Portal <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-6">Evaluation Metrics</p>
              <div className="space-y-px bg-white/10">
                {EVALUATION_METRICS.map((m, i) => (
                  <div key={m.title} className="bg-white/5 px-7 py-5 flex items-start gap-5 border border-white/8">
                    <span className="text-accent font-bold text-[0.75rem] mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-[0.9375rem] font-semibold text-white mb-1">{m.title}</p>
                      <p className="text-[0.875rem] text-white/60 leading-snug">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Media & Press ── */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Media, Press & Corporate Governance</p>
            <h2 className="text-[1.75rem] lg:text-[2rem] font-bold text-secondary leading-snug mb-6">
              An unprecedented look into continental digital transformation
            </h2>
            <p className="text-[1rem] text-muted-foreground leading-[1.85] mb-8">
              The Africa Blockchain Awards offer an unprecedented look into the verified milestones of continental digital transformation. For international press accreditation, corporate media kits, and interview requests with keynote speakers or finalists, please contact our communications office.
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <div>
                <p className="text-[0.75rem] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Communications Director</p>
                <a href="mailto:media@africaweb3institute.org"
                  className="text-[0.9375rem] font-semibold text-secondary border-b border-accent/40 pb-px hover:text-accent transition-colors">
                  media@africaweb3institute.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Institutional Engagement ── */}
      <section id="awards-contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 20% 7%) 0%, hsl(224 82% 13%) 60%, hsl(40 30% 8%) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Trophy className="w-10 h-10 text-accent mx-auto mb-6 opacity-80" />
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">Institutional Engagement</p>
          <h2 className="text-[1.75rem] lg:text-[2.5rem] font-bold text-white leading-snug mb-5 max-w-2xl mx-auto">
            Align your institution with the definitive standard of African technological excellence.
          </h2>
          <p className="text-[1rem] text-white/60 leading-[1.85] mb-10 max-w-xl mx-auto">
            Partner with the continent's most prestigious blockchain recognition platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 bg-accent text-white hover:bg-accent/90 transition-colors">
              Submit Final Nominations <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors">
              Register to Attend
            </a>
            <a href="mailto:info@africaweb3institute.org"
              className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors">
              Download Corporate Partnership Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ── Back to home ── */}
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