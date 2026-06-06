import React from "react";
import AfricaMapSVG from "./AfricaMapSVG";

export default function AfricaMapInteractive({ onCountrySelect }) {
  return (
    <div className="w-full relative z-0 h-[600px] rounded-xl overflow-hidden shadow-inner border border-border bg-slate-950">
      <AfricaMapSVG
        interactive={true}
        onCountryClick={(key) => {
          if (onCountrySelect) {
            onCountrySelect(key);
          }
        }}
      />
      
      {/* Legend inside map card */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs space-y-2">
        <p className="font-bold text-white mb-1.5">AWPII 2026 Grade Tier Legend</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#14532d]" />
            <span>AA+ (Very High)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#166534]" />
            <span>AA- to A (High)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#22c55e]" />
            <span>A- (Medium-High)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#eab308]" />
            <span>BBB+ to BB (Emerging)</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <span className="w-3 h-3 rounded-sm bg-[#dc2626]" />
            <span>BB- & lower (Restricted)</span>
          </div>
        </div>
      </div>
    </div>
  );
}