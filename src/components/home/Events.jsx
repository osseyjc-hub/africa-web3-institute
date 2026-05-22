import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function EventMeta({ date, location }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-secondary">
        <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-accent" />
        {date}
      </span>
      <span className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
        {location}
      </span>
    </div>
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
    <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-accent mb-6 pb-4 border-b border-border">
      {label}
    </p>
  );
}

export default function Events() {
  const { lang } = useLang();
  const T = t[lang].events;
  const flagship = T.flagship;

  return (
    <section id="events" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* Intro */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
            {T.eyebrow}
          </p>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-secondary leading-snug tracking-tight mb-6">
            {T.heading}
          </h2>
          <p className="text-[1rem] text-muted-foreground leading-[1.8] mb-4">{T.intro1}</p>
          <p className="text-[1rem] text-muted-foreground leading-[1.8]">{T.intro2}</p>
        </div>

        {/* Flagship */}
        <div>
          <SubSectionLabel label={T.flagshipLabel} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            <div className="bg-white p-8 lg:p-10 flex flex-col gap-8">
              <div>
                <h3 className="text-[1.25rem] font-bold text-secondary leading-snug mb-5">{flagship.title}</h3>
                <p className="text-[0.9375rem] text-muted-foreground leading-[1.8]">{flagship.description}</p>
              </div>
              <EventMeta date={flagship.date} location={flagship.coverage} />
            </div>
            <div className="bg-white p-8 lg:p-10 flex flex-col gap-8">
              <div>
                <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-5">
                  {T.keyOutcomes}
                </p>
                <ul className="space-y-3">
                  {flagship.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[0.9375rem] text-foreground leading-snug">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div><PrimaryBtn>{flagship.cta}</PrimaryBtn></div>
            </div>
          </div>
        </div>

        {/* Research Launches */}
        <div>
          <SubSectionLabel label={T.researchLabel} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {T.researchEvents.map((ev) => (
              <div key={ev.title} className="bg-white p-8 lg:p-10 flex flex-col gap-6">
                <div className="flex-1 space-y-5">
                  <h3 className="text-[1rem] font-bold text-secondary leading-snug">{ev.title}</h3>
                  <EventMeta date={ev.date} location={ev.location} />
                  <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{ev.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
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

        {/* Policy Events */}
        <div>
          <SubSectionLabel label={T.policyLabel} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {T.policyEvents.map((ev) => (
              <div key={ev.title} className={`bg-white p-7 flex flex-col gap-5 ${ev.topics ? "sm:col-span-2 lg:col-span-3" : ""}`}>
                <div className="flex-1 space-y-4">
                  <span
                    className="inline-block text-[0.6875rem] font-semibold tracking-wider uppercase px-2 py-0.5 border"
                    style={{ color: "#C9961A", borderColor: "#C9961A" }}
                  >
                    {ev.country}
                  </span>
                  <h3 className="text-[0.9375rem] font-semibold text-secondary leading-snug">{ev.title}</h3>
                  <EventMeta date={ev.date} location={ev.location} />
                  {ev.description && (
                    <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">{ev.description}</p>
                  )}
                  {ev.topics && (
                    <div>
                      <p className="text-[0.6875rem] font-semibold tracking-wider uppercase text-muted-foreground mb-3">Key Topics</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {ev.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-[0.8125rem] text-foreground leading-snug">
                            <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-border">
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="text-[0.8125rem] font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    {ev.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="border border-border p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
              {T.partnerLabel}
            </p>
            <h3 className="text-[1.375rem] font-bold text-secondary leading-snug max-w-lg">
              {T.partnerHeading}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <PrimaryBtn>{T.partnerCta1}</PrimaryBtn>
            <OutlineBtn>{T.partnerCta2}</OutlineBtn>
          </div>
        </div>

      </div>
    </section>
  );
}