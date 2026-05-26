import React, { useState, useEffect, useRef } from "react";
import { STATUS_COLORS, STATUS, COUNTRY_DATA } from "./africaCountryData";

const GEOJSON_URL =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// Map GeoJSON country names → COUNTRY_DATA keys
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

  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(ringToD).join(" ");
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates
      .flatMap((poly) => poly.map(ringToD))
      .join(" ");
  }
  return "";
}

export default function AfricaMapSVG({ onCountryClick, interactive = false }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(null); // { geoName, key }
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(GEOJSON_URL)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const project = createProjection();
        const list = data.features
          .filter((f) => f.properties.continent === "Africa")
          .map((f) => {
            const geoName = f.properties.name;
            const key = GEO_NAME_TO_KEY[geoName] || geoName;
            const path = geoToPath(f.geometry, project);
            return { geoName, key, path };
          })
          .filter((c) => c.path);
        setCountries(list);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center w-full"
        style={{ height: 400 }}
      >
        <div
          className="w-8 h-8 rounded-full border-4 animate-spin"
          style={{ borderColor: "#D4A017", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {countries.map(({ geoName, key, path }) => {
          const data = COUNTRY_DATA[key];
          const fill = data
            ? STATUS_COLORS[data.status]
            : STATUS_COLORS[STATUS.NO_DATA];
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
              onMouseEnter={
                interactive
                  ? (e) => {
                      setHovered({ geoName, key });
                      handleMouseMove(e);
                    }
                  : undefined
              }
              onMouseLeave={interactive ? () => setHovered(null) : undefined}
              onMouseMove={interactive ? handleMouseMove : undefined}
              onClick={
                interactive && onCountryClick
                  ? () => onCountryClick(key)
                  : undefined
              }
            />
          );
        })}
      </svg>

      {/* Hover tooltip */}
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