import React from "react";

const LINKS = {
  Institute: ["About Us", "Our Team", "Governance", "Annual Report"],
  Programs: ["Policy & Regulation", "Education", "Startup Incubation"],
  Resources: ["Publications", "Events", "Blog", "Media Kit"],
  Connect: ["Contact Us", "Partnerships", "Careers"],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D2C7D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center">
                <span className="font-bold text-[11px] tracking-wide text-white">AW3</span>
              </div>
              <span className="font-bold text-[0.9375rem] text-white">
                Africa Web3 Institute
              </span>
            </div>
            <p className="text-[0.8125rem] text-white/55 leading-[1.8] max-w-xs">
              A pan-African public policy and educational think tank advancing
              blockchain innovation through research, regulation, education,
              and ecosystem building.
            </p>
            <a
              href="mailto:info@africaweb3institute.org"
              className="block mt-6 text-[0.8125rem] text-white/40 hover:text-white/70 transition-colors"
            >
              info@africaweb3institute.org
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-[0.8125rem] text-white/60 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem] text-white/30">
            © {new Date().getFullYear()} Africa Web3 Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <span
                key={item}
                className="text-[0.75rem] text-white/30 hover:text-white/60 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}