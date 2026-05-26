import React, { useState } from "react";
import { STATUS_COLORS, STATUS, COUNTRY_DATA } from "./africaCountryData";

// ViewBox: 0 0 1000 1100
// Coordinate transform: x = (lon + 18) * 14.28, y = (38 - lat) * 14.38

const COUNTRY_PATHS = {
  // ── NORTH AFRICA ───────────────────────────────────────────────────────────
  Morocco:
    "M 172,29 L 198,29 L 213,43 L 219,57 L 213,72 L 185,86 L 171,100 L 157,100 L 128,115 L 100,129 L 86,115 L 86,100 L 100,86 L 114,72 L 143,57 L 157,43 Z",
  "Western Sahara":
    "M 15,129 L 100,129 L 128,115 L 157,100 L 157,215 L 128,229 L 100,244 L 43,244 L 15,215 Z",
  Algeria:
    "M 172,29 L 357,29 L 371,43 L 399,57 L 399,100 L 414,129 L 399,172 L 371,215 L 357,229 L 299,244 L 257,244 L 214,258 L 171,258 L 157,215 L 157,100 L 171,100 L 185,86 L 213,72 L 219,57 L 213,43 Z",
  Tunisia:
    "M 357,29 L 399,29 L 414,43 L 414,100 L 399,115 L 371,115 L 357,86 L 357,29 Z",
  Libya:
    "M 399,29 L 555,29 L 570,43 L 584,86 L 584,172 L 570,215 L 555,229 L 441,229 L 399,215 L 399,172 L 414,129 L 399,100 L 399,57 L 414,43 Z",
  Egypt:
    "M 541,72 L 641,72 L 669,86 L 683,129 L 669,172 L 655,200 L 570,215 L 555,215 L 541,172 L 527,129 L 541,100 Z",

  // ── WEST AFRICA ────────────────────────────────────────────────────────────
  Mauritania:
    "M 15,215 L 43,244 L 100,244 L 128,229 L 157,215 L 171,258 L 143,287 L 100,301 L 57,315 L 15,301 Z",
  Senegal:
    "M 15,301 L 57,287 L 86,287 L 100,301 L 86,330 L 57,344 L 15,330 Z",
  Gambia:
    "M 15,316 L 71,309 L 71,323 L 15,323 Z",
  "Guinea-Bissau":
    "M 43,330 L 72,330 L 72,358 L 43,358 Z",
  Guinea:
    "M 43,316 L 114,301 L 143,330 L 157,358 L 128,387 L 86,401 L 57,387 L 43,358 Z",
  "Sierra Leone":
    "M 86,358 L 128,358 L 128,401 L 86,415 L 86,387 Z",
  Liberia:
    "M 114,387 L 157,358 L 171,415 L 143,444 L 114,430 L 100,415 Z",
  "Côte d'Ivoire":
    "M 143,301 L 214,301 L 228,344 L 228,415 L 185,430 L 143,444 L 128,401 L 143,358 L 157,344 Z",
  "Burkina Faso":
    "M 214,258 L 313,258 L 327,287 L 313,316 L 285,330 L 228,330 L 214,301 Z",
  Mali:
    "M 171,258 L 214,258 L 214,301 L 143,301 L 143,258 L 100,244 L 128,229 L 157,215 Z",
  Niger:
    "M 257,244 L 441,229 L 455,258 L 427,287 L 399,301 L 342,315 L 313,258 L 257,258 Z",
  Ghana:
    "M 199,315 L 228,315 L 228,415 L 199,444 L 185,430 L 185,358 Z",
  Togo:
    "M 228,301 L 257,301 L 257,415 L 228,444 L 228,415 L 228,315 Z",
  Benin:
    "M 257,272 L 285,272 L 285,358 L 257,415 L 257,315 L 228,301 Z",
  Nigeria:
    "M 285,258 L 427,258 L 441,287 L 441,373 L 399,415 L 342,430 L 285,415 L 257,372 L 257,301 L 285,272 Z",

  // ── CENTRAL AFRICA ─────────────────────────────────────────────────────────
  Chad:
    "M 413,172 L 527,172 L 541,215 L 541,287 L 527,330 L 470,358 L 427,315 L 427,258 L 413,229 L 399,215 L 413,172 Z",
  "Central African Republic":
    "M 399,358 L 470,344 L 541,344 L 570,373 L 541,401 L 470,430 L 427,415 L 399,387 Z",
  Sudan:
    "M 541,172 L 669,172 L 683,215 L 683,315 L 655,344 L 612,373 L 584,358 L 570,344 L 541,344 L 541,287 L 527,244 Z",
  "South Sudan":
    "M 427,315 L 527,301 L 541,315 L 555,344 L 470,358 L 470,401 L 413,415 L 399,387 L 399,358 L 427,344 Z",
  Eritrea:
    "M 641,172 L 698,186 L 683,258 L 655,272 L 641,229 L 641,172 Z",
  Djibouti:
    "M 683,258 L 712,258 L 712,287 L 669,287 L 655,272 Z",
  Somalia:
    "M 655,272 L 683,244 L 726,258 L 798,315 L 769,415 L 712,473 L 683,444 L 655,372 L 655,344 L 669,287 Z",
  Ethiopia:
    "M 527,301 L 641,287 L 655,344 L 683,444 L 598,473 L 512,444 L 484,401 L 484,358 L 513,344 Z",
  Uganda:
    "M 555,430 L 613,430 L 613,487 L 570,501 L 541,487 L 541,458 Z",
  Kenya:
    "M 613,373 L 683,358 L 712,415 L 712,473 L 641,516 L 584,487 L 584,473 L 598,444 L 598,430 L 613,401 Z",
  Rwanda:
    "M 555,487 L 584,487 L 584,501 L 555,501 Z",
  Burundi:
    "M 555,501 L 584,501 L 584,516 L 555,516 Z",
  Tanzania:
    "M 541,487 L 641,473 L 712,473 L 712,530 L 698,573 L 584,573 L 541,545 L 541,516 Z",
  Cameroon:
    "M 342,358 L 399,344 L 413,373 L 427,415 L 413,444 L 370,473 L 342,444 L 342,415 L 342,373 Z",
  "Equatorial Guinea":
    "M 342,444 L 371,444 L 371,473 L 342,473 Z",
  Gabon:
    "M 342,458 L 399,444 L 413,473 L 413,545 L 342,545 L 342,473 Z",
  Congo:
    "M 370,444 L 427,430 L 455,458 L 455,545 L 413,545 L 413,473 L 385,473 Z",
  "DR Congo":
    "M 413,415 L 541,401 L 570,430 L 598,430 L 613,444 L 613,487 L 640,487 L 640,573 L 584,573 L 555,545 L 499,573 L 441,573 L 413,545 L 455,545 L 455,458 L 427,430 L 399,415 Z",

  // ── SOUTHERN AFRICA ────────────────────────────────────────────────────────
  Angola:
    "M 342,545 L 413,545 L 441,573 L 441,659 L 399,687 L 342,659 L 313,616 L 313,573 Z",
  Zambia:
    "M 441,545 L 555,530 L 584,545 L 598,573 L 570,630 L 541,659 L 455,659 L 413,630 L 413,601 L 441,573 Z",
  Malawi:
    "M 584,545 L 612,545 L 627,573 L 612,630 L 584,659 L 570,630 L 598,573 Z",
  Mozambique:
    "M 612,530 L 655,530 L 683,573 L 669,687 L 641,744 L 598,730 L 570,687 L 570,630 L 598,616 L 612,573 L 612,545 Z",
  Zimbabwe:
    "M 455,630 L 570,616 L 598,630 L 584,701 L 527,715 L 455,701 L 441,659 Z",
  Namibia:
    "M 313,573 L 399,573 L 413,601 L 413,659 L 342,659 L 299,687 L 285,659 L 285,616 Z",
  Botswana:
    "M 413,630 L 513,616 L 527,645 L 527,715 L 441,730 L 413,701 L 413,659 Z",
  "South Africa":
    "M 356,687 L 441,687 L 455,701 L 527,701 L 570,687 L 598,716 L 641,730 L 641,758 L 570,844 L 484,872 L 399,844 L 327,787 L 313,730 L 342,701 Z",
  Lesotho:
    "M 484,773 L 527,758 L 541,787 L 513,801 L 470,787 Z",
  Eswatini:
    "M 584,701 L 613,701 L 613,730 L 584,730 Z",
  Madagascar:
    "M 726,530 L 755,516 L 784,545 L 798,630 L 784,715 L 755,744 L 726,730 L 712,659 L 726,587 Z",
  Comoros:
    "M 712,487 L 726,487 L 726,501 L 712,501 Z",
};

function getCountryFill(name) {
  const data = COUNTRY_DATA[name];
  if (!data) return STATUS_COLORS[STATUS.NO_DATA];
  return STATUS_COLORS[data.status];
}

export default function AfricaMapSVG({ onCountryClick, interactive = false }) {
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.closest("svg").getBoundingClientRect();
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 850 1050"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {Object.entries(COUNTRY_PATHS).map(([name, d]) => {
          const fill = getCountryFill(name);
          const isHovered = hovered === name;
          return (
            <path
              key={name}
              d={d}
              fill={fill}
              stroke="#0B1437"
              strokeWidth="1"
              strokeLinejoin="round"
              style={{
                opacity: isHovered ? 1 : 0.78,
                cursor: interactive ? "pointer" : "default",
                transition: "opacity 0.2s ease, filter 0.2s ease",
                filter: isHovered ? "brightness(1.2) drop-shadow(0 0 4px rgba(0,0,0,0.4))" : "none",
              }}
              onMouseEnter={
                interactive
                  ? (e) => { setHovered(name); handleMouseMove(e); }
                  : undefined
              }
              onMouseLeave={interactive ? () => setHovered(null) : undefined}
              onMouseMove={interactive ? handleMouseMove : undefined}
              onClick={interactive && onCountryClick ? () => onCountryClick(name) : undefined}
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {interactive && hovered && (
        <div
          className="pointer-events-none absolute z-10 px-3 py-2 text-xs font-semibold text-white rounded shadow-xl"
          style={{
            left: Math.min(tooltip.x + 14, 700),
            top: tooltip.y - 40,
            backgroundColor: "#0B1437",
            border: "1px solid rgba(212,160,23,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          {COUNTRY_DATA[hovered]?.flag && (
            <span className="mr-1.5">{COUNTRY_DATA[hovered].flag}</span>
          )}
          {hovered}
        </div>
      )}
    </div>
  );
}