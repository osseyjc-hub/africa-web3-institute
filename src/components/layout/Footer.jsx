import React from "react";

const LINKS = {
  Institute: ["About Us", "Our Team", "Governance", "Annual Report"],
  Programs: ["Policy & Regulation", "Education", "Startup Incubation"],
  Resources: ["Publications", "Events", "Blog", "Media Kit"],
  Connect: ["Contact Us", "Partnerships", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                <span className="font-bold text-sm text-white">AW3</span>
              </div>
              <span className="font-bold text-base">Africa Web3 Institute</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              A pan-African public policy and educational think tank advancing
              blockchain innovation through research, regulation, education,
              and ecosystem building.
            </p>
            <p className="text-sm text-white/50 mt-6">
              info@africaweb3institute.org
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold mb-4 text-white/90">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Africa Web3 Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}