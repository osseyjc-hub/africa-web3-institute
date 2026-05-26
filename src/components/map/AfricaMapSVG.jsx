import React, { useState } from "react";
import { STATUS_COLORS, STATUS, COUNTRY_DATA } from "./africaCountryData";

// ViewBox: 0 0 800 880
// Transform: x=(lon+20)*10, y=(40-lat)*10

const COUNTRY_PATHS = {
  Morocco: "M 145,42 L 212,42 L 215,78 L 200,112 L 172,124 L 148,104 L 140,68 Z",
  "Western Sahara": "M 30,124 L 145,124 L 158,192 L 30,192 Z",
  Algeria: "M 145,42 L 140,68 L 148,104 L 172,124 L 158,192 L 325,192 L 325,50 L 212,42 Z",
  Tunisia: "M 212,42 L 295,45 L 292,108 L 265,115 L 215,78 Z",
  Libya: "M 295,45 L 460,52 L 462,210 L 325,210 L 325,192 L 295,108 L 292,108 Z",
  Egypt: "M 445,52 L 578,52 L 568,185 L 455,185 L 445,90 Z",
  Mauritania: "M 30,192 L 158,192 L 155,262 L 100,262 L 32,248 Z",
  Mali: "M 100,192 L 250,192 L 242,218 L 248,252 L 185,292 L 155,262 L 100,262 Z",
  Niger: "M 248,192 L 395,192 L 395,262 L 372,245 L 248,252 L 242,218 Z",
  Chad: "M 328,192 L 460,185 L 468,308 L 395,315 L 395,262 L 325,210 Z",
  Sudan: "M 418,185 L 568,185 L 570,335 L 455,335 L 435,300 L 415,250 Z",
  Eritrea: "M 568,185 L 638,205 L 622,272 L 594,288 L 568,238 Z",
  Djibouti: "M 622,270 L 646,268 L 646,295 L 614,295 L 594,288 Z",
  Somalia: "M 594,288 L 638,250 L 688,272 L 748,328 L 706,406 L 640,445 L 618,382 L 614,295 Z",
  "South Sudan": "M 392,268 L 455,265 L 455,285 L 440,318 L 396,368 L 370,328 L 382,265 Z",
  Ethiopia: "M 455,285 L 594,288 L 618,382 L 534,406 L 460,378 L 440,318 Z",
  "Central African Republic": "M 332,288 L 510,282 L 515,352 L 380,368 L 332,352 L 328,318 Z",
  Cameroon: "M 295,248 L 372,245 L 378,368 L 318,382 L 295,352 L 290,292 Z",
  Nigeria: "M 248,252 L 370,248 L 378,368 L 290,368 L 248,362 Z",
  Benin: "M 224,262 L 252,262 L 252,348 L 224,348 Z",
  Togo: "M 208,282 L 226,282 L 230,352 L 208,352 Z",
  Ghana: "M 176,292 L 210,292 L 214,358 L 176,358 Z",
  "Burkina Faso": "M 155,262 L 250,258 L 255,308 L 185,308 L 162,295 Z",
  "Côte d'Ivoire": "M 130,268 L 186,268 L 190,352 L 130,358 L 128,312 Z",
  Liberia: "M 96,328 L 132,312 L 135,358 L 96,352 Z",
  "Sierra Leone": "M 70,308 L 100,308 L 96,332 L 70,332 Z",
  Guinea: "M 42,278 L 122,268 L 132,308 L 96,328 L 54,322 L 42,295 Z",
  "Guinea-Bissau": "M 42,278 L 70,278 L 70,295 L 42,295 Z",
  Gambia: "M 32,265 L 78,262 L 78,270 L 32,270 Z",
  Senegal: "M 32,248 L 88,245 L 88,278 L 58,288 L 32,278 Z",
  "Equatorial Guinea": "M 280,368 L 320,368 L 320,392 L 280,392 Z",
  Gabon: "M 280,390 L 342,385 L 345,448 L 280,448 Z",
  Congo: "M 308,368 L 382,368 L 386,452 L 308,452 Z",
  "DR Congo": "M 312,368 L 522,352 L 528,558 L 316,552 L 312,452 Z",
  Uganda: "M 480,375 L 540,368 L 545,425 L 490,428 L 480,402 Z",
  Kenya: "M 540,368 L 640,358 L 640,448 L 538,448 L 538,425 Z",
  Rwanda: "M 487,428 L 511,425 L 511,444 L 487,444 Z",
  Burundi: "M 487,444 L 511,444 L 511,458 L 487,458 Z",
  Tanzania: "M 480,448 L 640,448 L 635,552 L 475,552 L 478,460 Z",
  Angola: "M 285,448 L 445,440 L 448,572 L 285,572 Z",
  Zambia: "M 398,475 L 545,470 L 548,588 L 400,588 Z",
  Malawi: "M 528,488 L 562,488 L 560,572 L 528,572 Z",
  Mozambique: "M 510,488 L 614,488 L 618,662 L 506,662 L 512,558 Z",
  Zimbabwe: "M 442,568 L 548,568 L 548,638 L 442,638 Z",
  Namibia: "M 285,572 L 412,570 L 412,692 L 285,692 Z",
  Botswana: "M 398,578 L 498,574 L 498,668 L 398,668 Z",
  "South Africa": "M 368,655 L 520,652 L 528,638 L 548,638 L 552,655 L 538,758 L 378,752 L 358,698 Z",
  Lesotho: "M 452,698 L 488,698 L 488,722 L 452,722 Z",
  Eswatini: "M 512,648 L 538,648 L 538,670 L 512,670 Z",
  Madagascar: "M 648,508 L 684,495 L 692,598 L 668,658 L 638,638 L 636,542 Z",
  Comoros: "M 650,478 L 662,478 L 662,490 L 650,490 Z",
};

function getCountryFill(name) {
  const data = COUNTRY_DATA[name];
  if (!data) return STATUS_COLORS[STATUS.NO_DATA];
  return STATUS_COLORS[data.status];
}

export default function AfricaMapSVG({ onCountryClick, interactive = false }) {
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, name) => {
    const rect = e.currentTarget.closest("svg").getBoundingClientRect();
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 800 880"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ maxHeight: "600px" }}
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
              strokeWidth="1.2"
              style={{
                opacity: isHovered ? 0.85 : 0.72,
                cursor: interactive ? "pointer" : "default",
                transition: "opacity 0.2s ease, filter 0.2s ease",
                filter: isHovered ? "brightness(1.25)" : "none",
              }}
              onMouseEnter={interactive ? (e) => { setHovered(name); handleMouseMove(e, name); } : undefined}
              onMouseLeave={interactive ? () => setHovered(null) : undefined}
              onMouseMove={interactive ? (e) => handleMouseMove(e, name) : undefined}
              onClick={interactive && onCountryClick ? () => onCountryClick(name) : undefined}
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {interactive && hovered && (
        <div
          className="pointer-events-none absolute z-10 px-3 py-2 text-xs font-semibold text-white rounded shadow-lg"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 36,
            backgroundColor: "#0B1437",
            border: "1px solid rgba(212,160,23,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          {hovered}
          {COUNTRY_DATA[hovered] && (
            <span className="ml-2 opacity-70">
              {COUNTRY_DATA[hovered].flag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}