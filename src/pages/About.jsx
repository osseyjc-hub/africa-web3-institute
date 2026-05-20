import React from "react";
import { Link } from "react-router-dom";
import { Globe, BookOpen, Users, Shield } from "lucide-react";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Policy Research",
    desc: "Producing rigorous, evidence-based research on blockchain governance, digital assets regulation, and Web3 policy frameworks tailored to the African context.",
  },
  {
    icon: Globe,
    title: "Blockchain Education",
    desc: "Building capacity across government, civil society, and industry through training programs, workshops, and the Africa Web3 Policy & Innovation Index (AWPII).",
  },
  {
    icon: Users,
    title: "Ecosystem Incubation",
    desc: "Connecting innovators, policymakers, and investors to accelerate the growth of a responsible and inclusive Web3 economy across all 54 African nations.",
  },
];

const TEAM = [
  { name: "Executive Director", role: "Leadership & Strategy" },
  { name: "Head of Research", role: "Policy & Publications" },
  { name: "Director of Partnerships", role: "Institutional Relations" },
  { name: "Communications Lead", role: "Media & Outreach" },
];

const STATS = [
  { value: "2023", label: "Year Founded" },
  { value: "54", label: "African Nations Covered" },
  { value: "10+", label: "Reports Published" },
  { value: "500+", label: "Stakeholders Engaged" },
];

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <title>About Us | Africa Web3 Institute</title>

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border" style={{ background: "linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(224 82% 14%) 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Who We Are</p>
          <h1 className="text-[2rem] lg:text-[3rem] font-bold text-white leading-snug mb-6">
            About Africa Web3 Institute
          </h1>
          <p className="text-[1.1rem] leading-[1.85]" style={{ color: "rgba(255,255,255,0.65)" }}>
            Africa Web3 Institute (AWI) is the continent's leading independent think tank for Web3 policy, blockchain governance, and digital economy research.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {STATS.map((s) => (
              <div key={s.label} className="py-10 px-8 text-center">
                <p className="text-[2rem] font-bold text-secondary mb-1">{s.value}</p>
                <p className="text-[0.8125rem] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Our Mission</p>
            <h2 className="text-[1.5rem] font-bold text-secondary leading-snug mb-5">
              Shaping Africa's Digital Future Through Evidence-Based Policy
            </h2>
            <p className="text-muted-foreground leading-[1.85]">
              Africa Web3 Institute exists to bridge the gap between emerging blockchain technology and the regulatory and policy frameworks needed to harness it responsibly. We equip African governments, institutions, and entrepreneurs with the knowledge and tools to build inclusive, innovation-friendly digital economies.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Our Vision</p>
            <h2 className="text-[1.5rem] font-bold text-secondary leading-snug mb-5">
              An Africa Where Web3 Drives Equitable Growth
            </h2>
            <p className="text-muted-foreground leading-[1.85]">
              We envision a continent where Web3 technologies — from decentralised finance to tokenised assets and digital identity — are harnessed to reduce inequality, increase financial inclusion, and position Africa as a global leader in the next digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>What We Do</p>
            <h2 className="text-[1.75rem] font-bold text-secondary">Three Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-5" style={{ backgroundColor: "hsl(220 20% 8%)" }}>
                  <Icon className="w-5 h-5" style={{ color: "#D4A017" }} />
                </div>
                <h3 className="text-[1rem] font-bold text-secondary mb-3">{title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Why It Matters</p>
          <h2 className="text-[1.75rem] font-bold text-secondary leading-snug mb-6">
            Africa Cannot Afford to Be Left Behind
          </h2>
          <div className="space-y-4 text-muted-foreground leading-[1.85]">
            <p>
              Africa is home to the world's youngest population and some of its fastest-growing digital economies. Yet African nations remain underrepresented in global Web3 policy conversations, often importing frameworks designed for entirely different contexts.
            </p>
            <p>
              Africa Web3 Institute changes this by generating Africa-first research, building local expertise, and creating platforms — such as the AWPII and Africa Blockchain Awards — that elevate the continent's voice in global digital governance.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Our Team</p>
            <h2 className="text-[1.75rem] font-bold text-secondary">The People Behind AWI</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white p-6 flex flex-col items-center text-center border border-border">
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "hsl(220 20% 8%)", border: "2px solid #D4A017" }}>
                  <Users className="w-7 h-7" style={{ color: "#D4A017" }} />
                </div>
                <p className="text-[0.9375rem] font-bold text-secondary mb-1">{member.name}</p>
                <p className="text-[0.8125rem] text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Statement */}
      <section className="py-16 border-b border-border" style={{ background: "linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(224 82% 14%) 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 mx-auto mb-5" style={{ color: "#D4A017" }} />
          <h2 className="text-[1.5rem] font-bold text-white mb-4">Independent &amp; Non-Partisan</h2>
          <p className="text-[1rem] leading-[1.85]" style={{ color: "rgba(255,255,255,0.65)" }}>
            Africa Web3 Institute is an independent research organisation with no political, commercial, or governmental affiliation. Our research and positions are driven solely by evidence, rigorous analysis, and the public interest of African communities.
          </p>
        </div>
      </section>

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