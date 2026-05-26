import React, { useState, useEffect, useRef, useCallback } from "react";
import { STATUS_COLORS, STATUS, COUNTRY_DATA } from "./africaCountryData";

// More reliable GeoJSON source with proper continent/ISO properties
const GEOJSON_URL =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const AFRICAN_ISO_CODES = new Set([
  "DZ","AO","BJ","BW","BF","BI","CV","CM","CF","TD","KM","CD","CG",
  "CI","DJ","EG","GQ","ER","SZ","ET","GA","GM","GH","GN","GW","KE",
  "LS","LR","LY","MG","MW","ML","MR","MU","MA","MZ","NA","NE","NG",
  "RW","ST","SN","SL","SO","ZA","SS","SD","TZ","TG","TN","UG","ZM","ZW","EH",
]);

// Map GeoJSON ADMIN/name fields → COUNTRY_DATA keys
const GEO_NAME_TO_KEY = {
  "Nigeria": "Nigeria",
  "Rwanda": "Rwanda",
  "South Africa": "South Africa",
  "Kenya": "Kenya",
  "Ghana": "Ghana",
  "Egypt": "Egypt",
  "Ethiopia": "Ethiopia",
  "Senegal": "Senegal",
  "Tanzania": "Tanzania",
  "United Republic of Tanzania": "Tanzania",
  "Morocco": "Morocco",
  "Cameroon": "Cameroon",
  "Ivory Coast": "Côte d'Ivoire",
  "Côte d'Ivoire": "Côte d'Ivoire",
  "Zimbabwe": "Zimbabwe",
  "Zambia": "Zambia",
};

const VW = 800;
const VH = 950;

function createProjection() {
  const mercY = (lat) =>
    Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

  const lonMin = -19, lonMax = 53;
  const latMin = -36, latMax = 38;
  const radMin = lonMin * (Math.PI / 180);
  const radMax = lonMax * (Math.PI / 180);
  const yTop = -mercY(latMax);
  const yBot = -mercY(latMin);
  const pad = 30;
  const scale = Math.min(
    (VW - 2 * pad) / (radMax - radMin),
    (VH - 2 * pad) / (yBot - yTop)
  );
  const mapW = (radMax - radMin) * scale;
  const mapH = (yBot - yTop) * scale;
  const offX = (VW - mapW) / 2 - radMin * scale;
  const offY = (VH - mapH) / 2 - yTop * scale;

  return (lon, lat) => {
    const x = lon * (Math.PI / 180) * scale + offX;
    const y = -mercY(lat) * scale + offY;
    return [x, y];
  };
}

function geoToPath(geometry, project) {
  const ringToD = (ring) =>
    ring
      .map(([lon, lat], i) => {
        const [x, y] = project(lon, lat);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join("") + "Z";

  if (geometry.type === "Polygon") return geometry.coordinates.map(ringToD).join(" ");
  if (geometry.type === "MultiPolygon")
    return geometry.coordinates.flatMap((p) => p.map(ringToD)).join(" ");
  return "";
}

function isAfrican(props) {
  return (
    props.continent === "Africa" ||
    AFRICAN_ISO_CODES.has(props.ISO_A2) ||
    AFRICAN_ISO_CODES.has(props.iso_a2) ||
    AFRICAN_ISO_CODES.has(props.id)
  );
}

function getDisplayName(props) {
  return props.ADMIN || props.name || props.NAME || "";
}

export default function AfricaMapSVG({ onCountryClick, interactive = false }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const loadMap = useCallback(() => {
    setLoading(true);
    setError(false);
    setCountries([]);

    const timeout = setTimeout(() => {
      console.error("Map fetch timed out after 8s");
      setError(true);
      setLoading(false);
    }, 8000);

    fetch(GEOJSON_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        clearTimeout(timeout);
        const project = createProjection();
        const list = data.features
          .filter((f) => isAfrican(f.properties))
          .map((f) => {
            const geoName = getDisplayName(f.properties);
            const key = GEO_NAME_TO_KEY[geoName] || geoName;
            const path = geoToPath(f.geometry, project);
            return { geoName, key, path };
          })
          .filter((c) => c.path);
        console.log(`Africa map: loaded ${list.length} countries`);
        setCountries(list);
        setLoading(false);
      })
      .catch((err) => {
        clearTimeout(timeout);
        console.error("Map fetch failed:", err);
        setError(true);
        setLoading(false);
      });

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const cleanup = loadMap();
    return cleanup;
  }, [loadMap]);

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full" style={{ height: 400 }}>
        <div
          className="w-8 h-8 rounded-full border-4 animate-spin"
          style={{ borderColor: "#D4A017", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center w-full gap-4 rounded-lg"
        style={{ height: 400, backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,160,23,0.2)" }}
      >
        <p className="text-[0.9375rem] font-medium text-center px-6" style={{ color: "rgba(255,255,255,0.7)" }}>
          Map could not be loaded. Please refresh the page.
        </p>
        <button
          onClick={loadMap}
          className="text-[0.8125rem] font-semibold px-5 py-2.5 transition-colors"
          style={{ backgroundColor: "#D4A017", color: "#fff" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Debug: remove once confirmed working */}
      {countries.length > 0 && (
        <p style={{ color: "lime", fontSize: 11, position: "absolute", top: 4, left: 4, zIndex: 20, pointerEvents: "none" }}>
          ✓ {countries.length} countries loaded
        </p>
      )}

      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {countries.map(({ geoName, key, path }) => {
          const data = COUNTRY_DATA[key];
          const fill = data ? STATUS_COLORS[data.status] : STATUS_COLORS[STATUS.NO_DATA];
          const isHovered = hovered?.geoName === geoName;

          return (
            <path
              key={geoName}
              d={path}
              fill={fill}
              stroke="#0B1437"
              strokeWidth="0.7"
              strokeLinejoin="round"
              style={{
                opacity: isHovered ? 1 : 0.78,
                cursor: interactive ? "pointer" : "default",
                transition: "opacity 0.15s ease, filter 0.15s ease",
                filter: isHovered ? "brightness(1.2)" : "none",
              }}
              onMouseEnter={interactive ? (e) => { setHovered({ geoName, key }); handleMouseMove(e); } : undefined}
              onMouseLeave={interactive ? () => setHovered(null) : undefined}
              onMouseMove={interactive ? handleMouseMove : undefined}
              onClick={interactive && onCountryClick ? () => onCountryClick(key) : undefined}
            />
          );
        })}
      </svg>

      {interactive && hovered && (
        <div
          className="pointer-events-none absolute z-10 px-3 py-2 text-xs font-semibold text-white rounded shadow-xl"
          style={{
            left: Math.min(tooltip.x + 14, VW - 160),
            top: Math.max(tooltip.y - 42, 4),
            backgroundColor: "#0B1437",
            border: "1px solid rgba(212,160,23,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          {COUNTRY_DATA[hovered.key]?.flag && (
            <span className="mr-1.5">{COUNTRY_DATA[hovered.key].flag}</span>
          )}
          {hovered.key}
        </div>
      )}
    </div>
  );
}