import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const T = t[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const NAV_LINKS = [
    { label: T.home, href: "#" },
    { label: T.about, href: "#who-we-are" },
    { label: T.programs, href: "#programs" },
    { label: T.publications, href: "#publications" },
    { label: T.events, href: "#events" },
    { label: T.community, href: "#community" },
    { label: T.contact, href: "#contact" },
  ];

  const scrollTo = (id) => {
    setOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        if (id === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
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
            <img
              src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/80f640b57_Logo.png"
              alt="Africa Web3 Institute"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="text-[0.875rem] font-semibold leading-tight" style={{ color: "#1a3a6b" }}>
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
            <Link
              to="/awpii"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.8125rem] font-semibold text-accent hover:text-accent/80 border-b border-accent/40 pb-px"
            >
              Africa Web3 Policy &amp; Innovation Index
            </Link>
            <Link
              to="/africa-blockchain-awards"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.8125rem] font-semibold text-accent hover:text-accent/80 border-b border-accent/40 pb-px"
            >
              Africa Blockchain Awards
            </Link>
          </div>

          {/* Right side: language switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-0 border border-border rounded-sm overflow-hidden text-[0.75rem] font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-secondary text-white" : "text-muted-foreground hover:text-secondary"}`}
              >
                EN
              </button>
              <span className="w-px h-full bg-border" />
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-secondary text-white" : "text-muted-foreground hover:text-secondary"}`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center border border-border rounded-sm overflow-hidden text-[0.75rem] font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-secondary text-white" : "text-muted-foreground"}`}
              >
                EN
              </button>
              <span className="w-px bg-border self-stretch" />
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 transition-colors ${lang === "fr" ? "bg-secondary text-white" : "text-muted-foreground"}`}
              >
                FR
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-secondary py-2.5 border-b border-border/50"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/awpii"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-sm font-semibold text-accent py-2.5 border-b border-border/50"
          >
            Africa Web3 Policy &amp; Innovation Index
          </Link>
          <Link
            to="/africa-blockchain-awards"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-sm font-semibold text-accent py-2.5 border-b border-border/50"
          >
            Africa Blockchain Awards
          </Link>
          <div className="pt-2" />
        </div>
      )}
    </nav>
  );
}