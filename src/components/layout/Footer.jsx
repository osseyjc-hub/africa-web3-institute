import React from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const T = t[lang].footer;

  return (
    <footer style={{ backgroundColor: "#F9FAFB", borderTop: "1px solid #E5E7EB" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
          style={{ borderBottom: "1px solid #E5E7EB" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/80f640b57_Logo.png"
                alt="Africa Web3 Institute"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[0.8125rem] leading-[1.8] max-w-xs" style={{ color: "#6B7280" }}>
              {T.description}
            </p>
            <a
              href="mailto:info@africaweb3institute.org"
              className="block mt-6 text-[0.8125rem] transition-colors"
              style={{ color: "#9CA3AF" }}
              onMouseEnter={(e) => (e.target.style.color = "#111827")}
              onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
            >
              info@africaweb3institute.org
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(T.links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase mb-4"
                style={{ color: "#9CA3AF" }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-[0.8125rem]" style={{ color: "#9CA3AF" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem]" style={{ color: "#9CA3AF" }}>
            {T.copyright}
          </p>
          <div className="flex gap-6">
            <span className="text-[0.75rem]" style={{ color: "#9CA3AF" }}>{T.privacy}</span>
            <span className="text-[0.75rem]" style={{ color: "#9CA3AF" }}>{T.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}