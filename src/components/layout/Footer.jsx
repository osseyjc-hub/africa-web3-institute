import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const T = t[lang].footer;

  return (
    <footer style={{ backgroundColor: "#0B1437", borderTop: "1px solid rgba(212,160,23,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/80f640b57_Logo.png"
                alt="Africa Web3 Institute"
                className="h-12 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-[0.8125rem] leading-[1.85] max-w-xs mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              {T.description}
            </p>
            <a
              href="mailto:info@africaweb3institute.org"
              className="block text-[0.8125rem] mb-8 transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={e => e.target.style.color = "#D4A017"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
            >
              info@africaweb3institute.org
            </a>
            {/* Social icons */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Facebook].map((SocialIcon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4A017"; e.currentTarget.style.color = "#D4A017"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(T.links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-[0.6875rem] font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "#D4A017" }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span
                      className="text-[0.8125rem] cursor-pointer transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.8)"}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[0.75rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
              {T.copyright}
            </p>
            <span
              className="text-[0.6875rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm"
              style={{ border: "1px solid rgba(212,160,23,0.3)", color: "#D4A017" }}
            >
              Independent &amp; Non-Partisan
            </span>
          </div>
          <div className="flex gap-6">
            <span className="text-[0.75rem] cursor-pointer transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
            >{T.privacy}</span>
            <span className="text-[0.75rem] cursor-pointer transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
            >{T.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}