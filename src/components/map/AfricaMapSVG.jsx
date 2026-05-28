import React, { useState, useEffect, useRef } from "react";
import { COUNTRY_DATA, STATUS_COLORS, STATUS } from "@/data/countryData";
import { MapContainer, GeoJSON, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AFRICA_GEOJSON_URL =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson";

const GEO_NAME_TO_KEY = {
  "Nigeria": "nigeria",
  "Rwanda": "rwanda",
  "South Africa": "southafrica",
  "Kenya": "kenya",
  "Ghana": "ghana",
  "Egypt": "egypt",
  "Ethiopia": "ethiopia",
  "Senegal": "senegal",
  "Tanzania": "tanzania",
  "United Republic of Tanzania": "tanzania",
  "Morocco": "morocco",
  "Cameroon": "cameroon",
  "Ivory Coast": "cotedivoire",
  "Côte d'Ivoire": "cotedivoire",
  "Zimbabwe": "zimbabwe",
  "Zambia": "zambia",
  "Algeria": "algeria",
  "Uganda": "uganda",
  "Tunisia": "tunisia",
  "Botswana": "botswana",
};

function getKeyFromFeature(feature) {
  const name = feature.properties?.name || feature.properties?.NAME || "";
  return GEO_NAME_TO_KEY[name] || name;
}

function countryStyle(feature, hoveredKey) {
  const key = getKeyFromFeature(feature);
  const data = COUNTRY_DATA[key];
  const status = data?.status || STATUS.UNDEFINED;
  const fill = STATUS_COLORS[status];
  const isHovered = hoveredKey === key;
  return {
    fillColor: fill,
    fillOpacity: isHovered ? 1 : 0.78,
    color: "#0B1437",
    weight: 1,
  };
}

export default function AfricaMapSVG({ onCountryClick, interactive = false }) {
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);
  const geoJsonRef = useRef(null);

  useEffect(() => {
    fetch(AFRICA_GEOJSON_URL)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => { setGeoData(data); setLoading(false); })
      .catch(err => { console.error("Map fetch failed:", err); setError(true); setLoading(false); });
  }, []);

  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.setStyle(feature => countryStyle(feature, hoveredKey));
    }
  }, [hoveredKey]);

  const onEachFeature = (feature, layer) => {
    const key = getKeyFromFeature(feature);
    layer.on({
      mouseover: () => interactive && setHoveredKey(key),
      mouseout: () => interactive && setHoveredKey(null),
      click: () => interactive && onCountryClick && onCountryClick(key),
    });
    if (interactive) {
      layer.bindTooltip(
        `<div style="font-size:12px; padding:4px 8px; font-weight:600">${key}</div>`,
        { permanent: false, sticky: true, opacity: 1, direction: "top" }
      );
    }
  };

  if (loading) return (
    <div style={{ height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", border: "4px solid #D4A017", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
    </div>
  );

  if (error) return (
    <div style={{ height: 500, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <p style={{ color: "rgba(255,255,255,0.7)" }}>Map could not be loaded. Please refresh.</p>
      <button onClick={() => window.location.reload()} style={{ background: "#D4A017", color: "#fff", padding: "8px 20px", borderRadius: 6, border: "none", cursor: "pointer" }}>Retry</button>
    </div>
  );

  return (
    <>
      <style>{`
        .leaflet-container { background: #0B1437 !important; }
        .leaflet-control-attribution { display: none !important; }
        .leaflet-tooltip { background: #0B1437 !important; border: 1px solid rgba(212,160,23,0.5) !important; color: #fff !important; border-radius: 6px !important; }
        .leaflet-tooltip::before { display: none !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
      <MapContainer
        center={[2, 22]}
        zoom={3}
        minZoom={2}
        maxZoom={7}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "600px", borderRadius: "12px" }}
        maxBounds={[[-40, -30], [40, 60]]}
      >
        <ZoomControl position="bottomright" />
        {geoData && (
          <GeoJSON
            ref={geoJsonRef}
            data={geoData}
            style={feature => countryStyle(feature, hoveredKey)}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </>
  );
}