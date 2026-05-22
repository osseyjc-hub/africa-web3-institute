import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const T = t[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAwards = location.pathname === "/africa-blockchain-awards";
  const isAwpii = location.pathname === "/awpii";
  const isFrNetwork = location.pathname === "/francophone-network";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_LINKS = [
    { label: T.about, href: "/about", isPage: true },
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

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-200"
      style={{
        backgroundColor: "#fff",
        borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid #F3F4F6",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[3.75rem]">

          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/23d3c088d_80f640b57_Logo1.png"
              alt="Africa Web3 Institute logo"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />
            <span className="font-bold text-[0.875rem] leading-tight" style={{ color: "#111827" }}>
              Africa Web3<br className="hidden sm:block" /> Institute
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => link.isPage ? navigate(link.href) : scrollTo(link.href)}
                className="text-[0.75rem] transition-colors"
                style={{ color: "#6B7280" }}
                onMouseEnter={e => e.target.style.color = "#111827"}
                onMouseLeave={e => e.target.style.color = "#6B7280"}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/awpii"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.75rem] font-semibold transition-colors"
              style={{ color: isAwpii ? "#D4A017" : "#6B7280" }}
              onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
              onMouseLeave={e => e.currentTarget.style.color = isAwpii ? "#D4A017" : "#6B7280"}
            >
              Africa Web3 Policy<br />& Innovation Index
            </Link>
            <Link
              to="/africa-blockchain-awards"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.75rem] font-semibold transition-colors"
              style={{ color: isAwards ? "#D4A017" : "#6B7280" }}
              onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
              onMouseLeave={e => e.currentTarget.style.color = isAwards ? "#D4A017" : "#6B7280"}
            >
              Awards
            </Link>
            <Link
  to="/francophone-network"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="text-[0.75rem] font-semibold transition-colors"
  style={{ color: location.pathname === "/francophone-network" ? "#D4A017" : "#6B7280" }}
  onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
  onMouseLeave={e => e.currentTarget.style.color = location.pathname === "/francophone-network" ? "#D4A017" : "#6B7280"}
>
 Francophone Web3 <br />& Students Network
</Link>
          </div>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language toggle */}
            <div className="flex items-center rounded-md overflow-hidden text-[0.6875rem] font-bold border" style={{ borderColor: "#E5E7EB" }}>
              <button
                onClick={() => setLang("en")}
                className="px-2.5 py-1.5 transition-colors"
                style={{ backgroundColor: lang === "en" ? "#D4A017" : "transparent", color: lang === "en" ? "#fff" : "#6B7280" }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className="px-2.5 py-1.5 transition-colors"
                style={{ backgroundColor: lang === "fr" ? "#D4A017" : "transparent", color: lang === "fr" ? "#fff" : "#6B7280" }}
              >
                FR
              </button>
            </div>

            <Link
              to="/awpii"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.75rem] font-semibold px-3.5 py-1.5 rounded-md transition-all"
              style={{ backgroundColor: "#D4A017", color: "#fff" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
            >
              Get Reports
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center rounded overflow-hidden text-[0.65rem] font-bold border" style={{ borderColor: "#E5E7EB" }}>
              <button
                onClick={() => setLang("en")}
                className="px-2 py-1 transition-colors"
                style={{ backgroundColor: lang === "en" ? "#D4A017" : "transparent", color: lang === "en" ? "#fff" : "#9CA3AF" }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className="px-2 py-1 transition-colors"
                style={{ backgroundColor: lang === "fr" ? "#D4A017" : "transparent", color: lang === "fr" ? "#fff" : "#9CA3AF" }}
              >
                FR
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 rounded"
              style={{ color: "#374151" }}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 py-3 space-y-0.5 border-t" style={{ backgroundColor: "#fff", borderColor: "#F3F4F6" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => link.isPage ? (setOpen(false), navigate(link.href)) : scrollTo(link.href)}
              className="block w-full text-left text-[0.875rem] py-3 border-b transition-colors"
              style={{ color: "#374151", borderColor: "#F3F4F6" }}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/awpii"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-[0.875rem] font-semibold py-3 border-b"
            style={{ color: "#D4A017", borderColor: "#F3F4F6" }}
          >
            Africa Web3 Policy<br />& Innovation Index
          </Link>
          <Link
            to="/africa-blockchain-awards"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full text-left text-[0.875rem] font-semibold py-3"
            style={{ color: "#D4A017" }}
          >
            Africa Blockchain Awards
          </Link>
          <Link
  to="/francophone-network"
  onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
  className="block w-full text-left text-[0.875rem] font-semibold py-3"
  style={{ color: "#D4A017" }}
>
  Francophone Web3 <br />& Students Network
</Link>
        </div>
      )}
    </nav>
  );
}