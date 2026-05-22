import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, Rocket, Mail } from "lucide-react";

const COUNTRIES = [
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Côte d'Ivoire", flag: "🇨🇮" },
  { name: "DR Congo", flag: "🇨🇩" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Madagascar", flag: "🇲🇬" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Central African Republic", flag: "🇨🇫" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Congo", flag: "🇨🇬" },
  { name: "Comoros", flag: "🇰🇲" },
];

const COUNTRY_NAMES = COUNTRIES.map((c) => c.name);

const INTERESTS = ["DeFi", "Blockchain Development", "Web3 Policy", "NFTs", "Trading", "Other"];

export default function FrancophopeNetwork() {
  const [form, setForm] = useState({ name: "", email: "", country: "", institution: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section style={{ backgroundColor: "#0B1437" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-60px] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{ background: "rgba(212,160,23,0.07)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#D4A017" }}>
            Africa Web3 Institute
          </p>
          <h1 className="text-[2rem] lg:text-[2.75rem] font-semibold text-white leading-[1.25] max-w-3xl mb-5">
            Francophone Web3 Students Network
          </h1>
          <p className="text-[0.9375rem] leading-[1.75] mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Connecting and empowering French-speaking African students across the Web3 ecosystem.
          </p>
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold px-6 py-2.5 rounded-lg transition-all"
            style={{ backgroundColor: "#D4A017", color: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
          >
            Join the Network
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#D4A017" }}>
              About the Network
            </p>
            <h2 className="font-display text-[2rem] font-bold text-secondary leading-snug mb-5">
              Built for Francophone Africa's next generation
            </h2>
            <p className="text-[0.9375rem] leading-[1.75] text-muted-foreground">
              The Francophone Web3 Students Network is a dedicated initiative of Africa Web3 Institute connecting French-speaking students, developers, and young entrepreneurs across Francophone Africa to Web3 education, opportunities, and community.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(212,160,23,0.2)", backgroundColor: "rgba(212,160,23,0.04)", minHeight: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p className="text-muted-foreground text-sm">Photo coming soon</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#D4A017" }}>What We Offer</p>
            <h2 className="font-display text-[2rem] font-bold text-secondary">Programs &amp; Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <GraduationCap className="w-6 h-6" />, title: "Education & Workshops", desc: "Web3 learning programs delivered in French" },
              { icon: <Globe className="w-6 h-6" />, title: "Community & Networking", desc: "Connecting students across Francophone African nations" },
              { icon: <Rocket className="w-6 h-6" />, title: "Opportunities & Grants", desc: "Access to Web3 grants, hackathons, and career opportunities" },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-lg bg-background" style={{ border: "1px solid rgba(212,160,23,0.2)" }}>
                <div className="mb-4" style={{ color: "#D4A017" }}>{item.icon}</div>
                <h3 className="font-display text-[1.0625rem] font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#D4A017" }}>Coverage</p>
            <h2 className="font-display text-[2rem] font-bold text-secondary">Countries We Cover</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2 p-4 rounded-lg text-center" style={{ border: "1px solid hsl(var(--border))" }}>
                <span className="text-2xl">{c.flag}</span>
                <span className="text-[0.75rem] text-muted-foreground font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join" className="py-20 lg:py-28 border-b border-border bg-muted/30">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#D4A017" }}>Get Involved</p>
            <h2 className="font-display text-[2rem] font-bold text-secondary">Join the Network</h2>
          </div>
          {submitted ? (
            <div className="text-center p-10 rounded-lg" style={{ border: "1px solid rgba(212,160,23,0.4)", backgroundColor: "rgba(212,160,23,0.06)" }}>
              <p className="text-[1.0625rem] font-semibold text-secondary">Welcome to the Francophone Web3 Students Network!</p>
              <p className="text-muted-foreground mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-background p-8 rounded-lg" style={{ border: "1px solid hsl(var(--border))" }}>
              {[
                { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
                { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
                { label: "University / Institution", key: "institution", type: "text", placeholder: "Your university or institution" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-[0.8125rem] font-medium text-secondary mb-1.5">{label}</label>
                  <input
                    type={type}
                    required
                    value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 text-[0.875rem] rounded-md outline-none"
                    style={{ border: "1px solid hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-[0.8125rem] font-medium text-secondary mb-1.5">Country</label>
                <select
                  required
                  value={form.country}
                  onChange={e => setForm({ ...form, country: e.target.value })}
                  className="w-full px-4 py-2.5 text-[0.875rem] rounded-md outline-none"
                  style={{ border: "1px solid hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                >
                  <option value="">Select your country</option>
                  {COUNTRY_NAMES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[0.8125rem] font-medium text-secondary mb-1.5">Area of Interest</label>
                <select
                  required
                  value={form.interest}
                  onChange={e => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-2.5 text-[0.875rem] rounded-md outline-none"
                  style={{ border: "1px solid hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                >
                  <option value="">Select an area</option>
                  {INTERESTS.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-[0.875rem] font-semibold rounded-md transition-all"
                style={{ backgroundColor: "#D4A017", color: "#fff" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
              >
                Join the Network
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#D4A017" }}>Contact</p>
          <h2 className="font-display text-[1.5rem] font-bold text-secondary mb-4">Get in Touch</h2>
          <a
            href="mailto:francophone@africaweb3institute.org"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors"
            style={{ color: "#D4A017" }}
          >
            <Mail className="w-4 h-4" />
            francophone@africaweb3institute.org
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[0.875rem] text-muted-foreground hover:text-secondary transition-colors">
          ← Back to Africa Web3 Institute
        </Link>
      </div>
    </div>
  );
}