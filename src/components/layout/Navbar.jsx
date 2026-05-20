import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const T = t[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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
      }, 120);
      return;
    }
    if (id === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isAwards = location.pathname === "/africa-blockchain-awards";
  const isAwpii = location.pathname === "/awpii";

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(11,20,55,0.97)" : "#0B1437",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(212,160,23,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/80f640b57_Logo.png"
              alt="Africa Web3 Institute"
              className="h-10 w-auto object-contain"
            />
            <span className="text-[0.8125rem] font-semibold leading-tight text-white hidden sm:block">
              Africa Web3 Institute
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[0.75rem] font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={e => e.target.style.color = "#D4A017"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/awpii"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.75rem] font-semibold transition-colors border-b pb-px"
              style={{
                color: isAwpii ? "#D4A017" : "rgba(255,255,255,0.65)",
                borderColor: isAwpii ? "#D4A017" : "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.borderColor = "#D4A017"; }}
              onMouseLeave={e => { e.currentTarget.style.color = isAwpii ? "#D4A017" : "rgba(255,255,255,0.65)"; e.currentTarget.style.borderColor = isAwpii ? "#D4A017" : "transparent"; }}
            >
              AWPII
            </Link>
            <Link
              to="/africa-blockchain-awards"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.75rem] font-semibold transition-colors border-b pb-px"
              style={{
                color: isAwards ? "#D4A017" : "rgba(255,255,255,0.65)",
                borderColor: isAwards ? "#D4A017" : "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.borderColor = "#D4A017"; }}
              onMouseLeave={e => { e.currentTarget.style.color = isAwards ? "#D4A017" : "rgba(255,255,255,0.65)"; e.currentTarget.style.borderColor = isAwards ? "#D4A017" : "transparent"; }}
            >
              Awards
            </Link>
          </div>

          {/* Right controls */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Language toggle */}
            <div className="flex items-center border overflow-hidden text-[0.7rem] font-bold rounded-sm" style={{ borderColor: "rgba(212,160,23,0.4)" }}>
              <button
                onClick={() => setLang("en")}
                className="px-2.5 py-1.5 transition-colors"
                style={{ backgroundColor: lang === "en" ? "#D4A017" : "transparent", color: lang === "en" ? "#0B1437" : "rgba(255,255,255,0.6)" }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className="px-2.5 py-1.5 transition-colors"
                style={{ backgroundColor: lang === "fr" ? "#D4A017" : "transparent", color: lang === "fr" ? "#0B1437" : "rgba(255,255,255,0.6)" }}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => scrollTo("#community")}
              className="text-[0.75rem] font-semibold px-4 py-2 transition-colors rounded-sm"
              style={{ border: "1px solid rgba(212,160,23,0.5)", color: "#D4A017" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#D4A017"; e.currentTarget.style.color = "#0B1437"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#D4A017"; }}
            >
              {T.joinCommunity}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 flex items-center justify-center"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="flex items-center border overflow-hidden text-[0.7rem] font-bold" style={{ borderColor: "rgba(212,160,23,0.4)" }}>
              <button
                onClick={() => setLang("en")}
                className="px-2 py-1 transition-colors"
                style={{ backgroundColor: lang === "en" ? "#D4A017" : "transparent", color: lang === "en" ? "#0B1437" : "rgba(255,255,255,0.6)" }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className="px-2 py-1 transition-colors"
                style={{ backgroundColor: lang === "fr" ? "#D4A017" : "transparent", color: lang === "fr" ? "#0B1437" : "rgba(255,255,255,0.6)" }}
              >
                FR
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="p-2"
              style={{ color: "rgba(255,255,255,0.8)" }}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden px-6 py-4 space-y-1" style={{ backgroundColor: "#0B1437", borderTop: "1px solid rgba(212,160,23,0.15)" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm py-3 border-b transition-colors"
              style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/awpii"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-sm font-semibold py-3 border-b"
            style={{ color: "#D4A017", borderColor: "rgba(255,255,255,0.08)" }}
          >
            Africa Web3 Policy &amp; Innovation Index
          </Link>
          <Link
            to="/africa-blockchain-awards"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-sm font-semibold py-3"
            style={{ color: "#D4A017" }}
          >
            Africa Blockchain Awards
          </Link>
        </div>
      )}
    </nav>
  );
}