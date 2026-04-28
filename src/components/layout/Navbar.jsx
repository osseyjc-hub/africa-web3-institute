import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#who-we-are" },
  { label: "Programs", href: "#programs" },
  { label: "Publications", href: "#publications" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    if (id === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ background: "#0D2C7D" }}
            >
              <span className="text-white font-bold text-[11px] tracking-wide">AW3</span>
            </div>
            <span className="font-bold text-[0.95rem] tracking-tight text-secondary hidden sm:inline">
              Africa Web3 Institute
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[0.8125rem] font-medium text-muted-foreground hover:text-secondary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("#community")}
              className="text-[0.8125rem] font-semibold px-5 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              Join the Community
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-secondary py-2.5 border-b border-border/50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => scrollTo("#community")}
              className="w-full text-sm font-semibold px-5 py-2.5 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              Join the Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}