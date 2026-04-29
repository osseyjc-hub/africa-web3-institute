import React from "react";
import { MapPin, Calendar } from "lucide-react";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const flagship = {
  title: "Stablecoin Africa Campus Tour 2026",
  coverage: "9 Universities · 6 Cities · Ghana, Nigeria, Kenya",
  date: "26 June – 7 July 2026",
  description:
    "A continental university roadshow activating the next wave of Web3 talent. Moving city to city, connecting students to stablecoins, policy developments, and real career pathways.",
  outcomes: [
    "Student onboarding into Web3 ecosystems",
    "Campus ambassador recruitment",
    "Talent pipeline creation",
  ],
};

const researchEvents = [
  {
    title: "State of Web3 Africa 2026 — Q2 Launch",
    date: "10 July 2026",
    location: "Golden Tulip Dar, Dar es Salaam, Tanzania",
    description:
      "A data-driven convening of policymakers, investors, and builders to decode stablecoins, regulation, and capital flows.",
    ctas: [
      { label: "Download Previous Report", variant: "outline" },
      { label: "Attend Launch Event", variant: "primary" },
    ],
  },
  {
    title: "State of Web3 Africa 2026 — Q3 Launch",
    date: "25 September 2026",
    location: "Marriott Bonvoy, Johannesburg, South Africa",
    description:
      "Tracking what's scaling, what's stalling, and where Africa captures value next.",
    ctas: [{ label: "Get Early Access", variant: "primary" }],
  },
];

const policyEvents = [
  {
    title: "VASP Policy Workshop for Journalists",
    country: "Ghana",
    date: "22–23 July 2026",
    location: "Alisa Hotel, Accra",
    cta: "Request Invitation",
  },
  {
    title: "VASP Strategy Workshop for Banks",
    country: "Ghana",
    date: "5 August 2026",
    location: "Kempinski, Accra",
    cta: "Institutional Participation",
  },
  {
    title: "Web3 Policy Sensitization Workshop",
    country: "Congo DRC",
    date: "10 September 2026",
    location: "Hilton, Kinshasa",
    cta: "Join Policy Dialogue",
  },
  {
    title: "Web3 Policy Roundtable",
    country: "Tanzania",
    date: "4 October 2026",
    location: "Hyatt, Dar es Salaam",
    cta: "Request Seat at the Table",
  },
  {
    title: "Web3 Policy Breakfast",
    country: "South Sudan",
    date: "3 December 2026",
    location: "Radisson Blu, Juba",
    cta: "Engage as Stakeholder",
  },
];

function MetaTag({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground">
      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
      {text}
    </span>
  );
}

function PrimaryBtn({ children }) {
  return (
    <button
      onClick={() => scrollTo("#contact")}
      className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 bg-primary text-white hover:bg-primary/90 transition-colors"
    >
      {children}
    </button>
  );
}

function OutlineBtn({ children }) {
  return (
    <button
      onClick={() => scrollTo("#contact")}
      className="inline-flex items-center text-[0.8125rem] font-semibold px-5 py-2.5 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
    >
      {children}
    </button>
  );
}

function SubSectionLabel({ label }) {
  return (
    <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-accent mb-6">
      {label}
    </p>
  );
}

export default function Events() {
  return (
    <section id="events" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Intro */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
            Events & Convenings
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-6">
            Events & Convenings
          </h2>
          <p className="text-[1rem] text-muted-foreground leading-[1.8] mb-4">
            Africa Web3 Institute sits at the intersection of policy, education, and market infrastructure, curating high-impact gatherings that shape Africa's digital asset future.
          </p>
          <p className="text-[1rem] text-muted-foreground leading-[1.8]">
            From campus activations to closed-door policy rooms, each event is intentional: to inform, to align, to unlock.
          </p>
        </div>

        {/* ── SECTION 1: Flagship ── */}
        <div>
          <SubSectionLabel label="Flagship Initiative" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {/* Left: Title + Meta */}
            <div className="bg-white p-8 flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-[1.25rem] font-bold text-secondary leading-snug mb-4">
                  {flagship.title}
                </h3>
                <p className="text-[1rem] text-muted-foreground leading-[1.8]">
                  {flagship.description}
                </p>
              </div>
              <div className="space-y-2">
                <MetaTag icon={Calendar} text={flagship.date} />
                <br />
                <MetaTag icon={MapPin} text={flagship.coverage} />
              </div>
            </div>

            {/* Right: Outcomes + CTA */}
            <div className="bg-white p-8 flex flex-col justify-between gap-8">
              <div>
                <p className="text-[0.75rem] font-semibold tracking-wider uppercase text-muted-foreground mb-4">
                  Key Outcomes
                </p>
                <ul className="space-y-3">
                  {flagship.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[0.9375rem] text-foreground">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PrimaryBtn>Partner With Us →</PrimaryBtn>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Research Launches ── */}
        <div>
          <SubSectionLabel label="Research & Intelligence Launches" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {researchEvents.map((ev) => (
              <div key={ev.title} className="bg-white p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <h3 className="text-[1rem] font-bold text-secondary leading-snug">{ev.title}</h3>
                  <div className="space-y-1.5">
                    <MetaTag icon={Calendar} text={ev.date} />
                    <br />
                    <MetaTag icon={MapPin} text={ev.location} />
                  </div>
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">
                    {ev.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {ev.ctas.map((cta) =>
                    cta.variant === "primary" ? (
                      <PrimaryBtn key={cta.label}>{cta.label} →</PrimaryBtn>
                    ) : (
                      <OutlineBtn key={cta.label}>{cta.label}</OutlineBtn>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: Policy Events ── */}
        <div>
          <SubSectionLabel label="Policy & Regulatory Engagements" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {policyEvents.map((ev) => (
              <div key={ev.title} className="bg-white p-7 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div>
                    <span
                      className="text-[0.6875rem] font-semibold tracking-wider uppercase px-2 py-0.5 border"
                      style={{ color: "#C9961A", borderColor: "#C9961A" }}
                    >
                      {ev.country}
                    </span>
                  </div>
                  <h3 className="text-[0.9375rem] font-semibold text-secondary leading-snug">
                    {ev.title}
                  </h3>
                  <div className="space-y-1.5">
                    <MetaTag icon={Calendar} text={ev.date} />
                    <br />
                    <MetaTag icon={MapPin} text={ev.location} />
                  </div>
                </div>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="self-start text-[0.8125rem] font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  {ev.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partnership CTA ── */}
        <div className="border border-border p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
              Partner With Us
            </p>
            <h3 className="text-[1.375rem] font-bold text-secondary leading-snug">
              Governments, institutions, builders, and capital partners shaping Africa's digital future.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <PrimaryBtn>Become a Partner →</PrimaryBtn>
            <OutlineBtn>Sponsor an Event</OutlineBtn>
          </div>
        </div>

      </div>
    </section>
  );
}