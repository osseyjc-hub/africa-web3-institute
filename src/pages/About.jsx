import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Globe, BookOpen, GraduationCap, Scale, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Afrikanus Kofi Akosah Adusei",
    role: "Executive Director",
    country: "🇬🇭 Ghana",
    photo: "https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/5b37f2043_9edbdc2d-86b7-4581-bb79-f31189960de2.jpg",
    linkedin: "https://linkedin.com/in/afrikanus-kofi-akosah-adusei-ba25aa88",
    twitter: null,
  },
  {
    name: "Asang Nehemiah Forgwe",
    role: "Events and Programs Manager",
    country: "🇨🇲 Cameroon",
    photo: "https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/dd836029e_ChatGPTImageMay21202607_53_59AM.png",
    linkedin: "https://www.linkedin.com/in/asang-nehemiah-forgwe-094067193",
    twitter: "https://x.com/asangnehemiah?s=21",
  },
  {
    name: "Jean Cedric Ossey",
    role: "Francophone Lead",
    country: "🇨🇮 Côte d'Ivoire",
    photo: "https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/a15daee7d_IMG_3255.png",
    linkedin: "https://linkedin.com/in/osseyjc",
    twitter: "https://t.co/twDQNioUEu",
  },
  {
    name: "Abdul Rahaman",
    role: "Comms and Partnerships Lead",
    country: "🇬🇭 Ghana",
    photo: "https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/71ba35058_IMG_8862.jpg",
    linkedin: "https://linkedin.com/in/abdulganiwu",
    twitter: "https://x.com/phrozendon?s=21",
  },
  {
    name: "Gloria Achieng",
    role: "Operations Lead",
    country: "🇺🇬 Uganda",
    photo: "https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/fbf4dc09c_ChatGPTImageMay25202611_07_17AM.png",
    linkedin: "https://linkedin.com/in/gloria-achieng-74388b108",
    twitter: "https://x.com/gloriaachieng14",
  },
    {
    name: "Adusei Akwasi",
    role: "Director of Policy & Research",
    country: "🇬🇭 Ghana",
    photo: null,
    linkedin: null,
    twitter: null,
  },
   {
    name: "Jarau Moses",
    role: "Content & Social Mdea Lead",
    country: null,
    photo: null,
    linkedin: null,
    twitter: null,
  },
   {
    name: "Carlos Juan",
    role: "CTO",
    country: null,
    photo: null,
    linkedin: null,
    twitter: null,
  },
];

const PILLARS = [
  {
    icon: Globe,
    title: "Policy & Governance",
    desc: "Engaging African governments and regulators to build progressive, innovation-friendly Web3 frameworks that protect citizens while enabling economic growth.",
  },
  {
    icon: BookOpen,
    title: "Research & Publications",
    desc: "Producing the AWPII index, country reports, and data-driven insights on blockchain adoption and digital economy trends across the continent.",
  },
  {
    icon: GraduationCap,
    title: "Education & Capacity Building",
    desc: "Training developers, students, entrepreneurs, and policymakers to lead Africa's decentralised economy through workshops, programs, and accessible resources.",
  },
];

const IMPACT_STATS = [
  { icon: "🌍", stat: "Fastest-growing", label: "Crypto adoption rate globally" },
  { icon: "📱", stat: "12%+", label: "Of Africans use crypto as of 2025" },
  { icon: "💸", stat: "$48.2M", label: "Daily stablecoin P2P volume in Nigeria alone" },
];

const PARTNER_SLOTS = Array(6).fill(null);

const CONTACTS = [
  { icon: "📧", label: "General Enquiries", email: "info@africaweb3institute.org" },
  { icon: "🤝", label: "Partnerships", email: "partnerships@africaweb3institute.org" },
  { icon: "📰", label: "Media & Press", email: "media@africaweb3institute.org" },
];

function TeamCard({ member }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white p-6 flex flex-col items-center text-center transition-all duration-200"
      style={{
        border: hovered ? "1.5px solid #D4A017" : "1.5px solid hsl(var(--border))",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0 flex items-center justify-center"
        style={{ border: "2px solid #D4A017", backgroundColor: member.photo ? "transparent" : "#0B1437" }}>
        {member.photo ? (
          <img src={member.photo} alt={`${member.name} — ${member.role} at Africa Web3 Institute`}
            className="w-full h-full object-cover" />
        ) : (
          <span className="text-[1.25rem] font-bold" style={{ color: "#D4A017" }}>{member.initials}</span>
        )}
      </div>
      <p className="text-[0.9375rem] font-bold text-secondary mb-1">{member.name}</p>
      <p className="text-[0.8125rem] text-muted-foreground mb-1">{member.role}</p>
      {member.country ? <p className="text-[0.8125rem] mb-3" style={{ color: "#D4A017" }}>{member.country}</p> : <div className="mb-3" />}
      <div className="flex gap-3 mt-auto">
        {member.linkedin && (
          <a href={member.linkedin.startsWith("http") ? member.linkedin : `https://${member.linkedin}`}
            target="_blank" rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ border: "1px solid hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4A017"; e.currentTarget.style.color = "#D4A017"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}>
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noopener noreferrer"
            aria-label={`${member.name} on X (Twitter)`}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ border: "1px solid hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4A017"; e.currentTarget.style.color = "#D4A017"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}>
            <Twitter className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <title>About Us | Africa Web3 Institute</title>

      {/* A. HERO */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1437" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>About Us</p>
          <h1 className="text-[2.25rem] lg:text-[3.25rem] font-bold text-white leading-snug mb-5">
            About Africa Web3 Institute
          </h1>
          <p className="text-[1.1rem] leading-[1.85] max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Building the policy, research, and education infrastructure for Africa's decentralised future.
          </p>
        </div>
      </section>

      {/* B. WHO WE ARE */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#D4A017" }}>Who We Are</p>
              <h2 className="text-[1.75rem] font-bold text-secondary leading-snug mb-5">
                Africa's Dedicated Web3 Think Tank
              </h2>
              <p className="text-muted-foreground leading-[1.85] mb-4">
                Founded in 2017 as Africa Blockchain University, Africa Web3 Institute (AWI) is the continent's leading independent research and policy organization dedicated to blockchain governance, Web3 policy, and digital economy development across all 54 African nations.
              </p>
              <p className="text-muted-foreground leading-[1.85] mb-8">
                Africa is home to the world's fastest-growing crypto adoption rates, yet African voices remain underrepresented in global Web3 policy conversations. AWI exists to change that — equipping governments, institutions, and communities with the knowledge and frameworks needed to harness blockchain technology responsibly.
              </p>
              {/* Inline stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2017", label: "Founded" },
                  { value: "18+", label: "Countries Covered" },
                  { value: "10+", label: "Policy Reports Published" },
                  { value: "3,000+", label: "Members" },
                ].map((s) => (
                  <div key={s.label} className="p-4 border border-border">
                    <p className="text-[1.75rem] font-bold text-secondary">{s.value}</p>
                    <p className="text-[0.8125rem] text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden" style={{ border: "1px solid hsl(var(--border))" }}>
                <img
                  src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/1d0e1310d_African_Web3_Think_Tank.png"
                  alt="Africa Web3 Institute team working on policy research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 hidden lg:block"
                style={{ border: "2px solid #D4A017", opacity: 0.4 }} />
            </div>
          </div>
        </div>
      </section>

      {/* C. MISSION & VISION */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Our Purpose</p>
            <h2 className="text-[1.75rem] font-bold text-secondary">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8" style={{ borderLeft: "4px solid #D4A017" }}>
              <p className="text-[1.5rem] mb-4">🎯</p>
              <h3 className="text-[1rem] font-bold text-secondary mb-3 uppercase tracking-wide">Mission</h3>
              <p className="text-muted-foreground leading-[1.85]">
                To shape evidence-based Web3 policy, foster blockchain innovation, and build digital economy capacity across Africa — ensuring the continent leads rather than follows in the global decentralised economy.
              </p>
            </div>
            <div className="bg-white p-8" style={{ borderLeft: "4px solid #D4A017" }}>
              <p className="text-[1.5rem] mb-4">🔭</p>
              <h3 className="text-[1rem] font-bold text-secondary mb-3 uppercase tracking-wide">Vision</h3>
              <p className="text-muted-foreground leading-[1.85]">
                A digitally sovereign Africa where blockchain technology drives inclusive economic growth and financial freedom for all — underpinned by robust policy, trusted research, and a thriving ecosystem of informed builders and leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. THREE PILLARS */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>What We Do</p>
            <h2 className="text-[1.75rem] font-bold text-secondary">Three Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-5"
                  style={{ backgroundColor: "#0B1437" }}>
                  <Icon className="w-5 h-5" style={{ color: "#D4A017" }} />
                </div>
                <h3 className="text-[1rem] font-bold text-secondary mb-3">{title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. WHY IT MATTERS */}
      <section className="py-20 border-b border-border" style={{ backgroundColor: "#0B1437" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Context</p>
            <h2 className="text-[1.75rem] font-bold text-white">Why It Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {IMPACT_STATS.map((s) => (
              <div key={s.label} className="p-8 text-center"
                style={{ border: "1px solid rgba(212,160,23,0.2)", background: "rgba(255,255,255,0.03)" }}>
                <p className="text-[2rem] mb-3">{s.icon}</p>
                <p className="text-[1.75rem] font-bold mb-2" style={{ color: "#D4A017" }}>{s.stat}</p>
                <p className="text-[0.875rem]" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[1rem] leading-[1.85] text-center max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Africa's Web3 revolution is already underway. Without strong policy frameworks, credible research, and educated leadership, the continent risks repeating the mistakes of previous digital waves — where adoption outpaced governance and ordinary citizens bore the cost. Africa Web3 Institute is here to ensure that doesn't happen.
          </p>
        </div>
      </section>

      {/* F. MEET THE TEAM */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Our People</p>
            <h2 className="text-[1.75rem] font-bold text-secondary mb-3">Meet the Team</h2>
            <p className="text-muted-foreground">The people driving Africa's Web3 policy and research agenda</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* G. PARTNERS */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(220 14% 97%)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Ecosystem</p>
            <h2 className="text-[1.75rem] font-bold text-secondary mb-3">Our Partners &amp; Affiliates</h2>
            <p className="text-muted-foreground">Working with leading organisations across Africa and globally</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNER_SLOTS.map((_, i) => (
              <div key={i} className="aspect-[3/2] flex items-center justify-center bg-white border border-border">
                <p className="text-[0.75rem] text-muted-foreground/50 text-center px-2">Partner Logo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. INDEPENDENT STATEMENT */}
      <section className="py-16 border-b border-border" style={{ background: "hsl(220 14% 96%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[2rem] mb-5">⚖️</p>
          <h2 className="text-[1.25rem] font-bold text-secondary mb-4">Independent &amp; Non-Partisan</h2>
          <p className="text-muted-foreground leading-[1.85] max-w-2xl mx-auto">
            Africa Web3 Institute is an independent, non-partisan organisation. Our research, rankings, and policy recommendations are not influenced by any government, corporation, or political body.
          </p>
        </div>
      </section>

      {/* I. CONTACT CTA */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A017" }}>Contact</p>
            <h2 className="text-[1.75rem] font-bold text-secondary mb-3">Get in Touch</h2>
            <p className="text-muted-foreground">For research partnerships, media enquiries, or membership information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACTS.map((c) => (
              <div key={c.email} className="p-8 border border-border bg-white flex flex-col items-center text-center">
                <p className="text-[1.75rem] mb-4">{c.icon}</p>
                <p className="text-[0.875rem] font-bold text-secondary mb-2">{c.label}</p>
                <p className="text-[0.8125rem] text-muted-foreground mb-5 break-all">{c.email}</p>
                <a href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold px-5 py-2.5 transition-colors"
                  style={{ backgroundColor: "#0B1437", color: "#fff" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#D4A017"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0B1437"}
                >
                  <Mail className="w-3.5 h-3.5" /> Send Email
                </a>
              </div>
            ))}
          </div>
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