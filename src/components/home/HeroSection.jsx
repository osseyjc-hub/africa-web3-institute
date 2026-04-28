import React from "react";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-6">
              Pan-African Think Tank
            </p>

            <h1 className="text-[2.5rem] lg:text-[3.25rem] font-bold text-secondary leading-[1.1] tracking-tight">
              Shaping Africa's Web3 Policy, Education & Digital Future
            </h1>

            <p className="mt-7 text-[1rem] text-muted-foreground leading-[1.8] max-w-[30rem]">
              Africa Web3 Institute is a pan-African public policy and
              educational think tank advancing blockchain innovation through
              research, regulation, education, and ecosystem building.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("#publications")}
                className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Explore Our Research
              </button>
              <button
                onClick={() => scrollTo("#community")}
                className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
              >
                Join the Community
              </button>
              <button
                className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block">
            <img
              src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/3064f0acc_generated_d1507269.png"
              alt="Blockchain nodes forming the outline of the African continent"
              className="w-full h-auto max-w-[420px] ml-auto"
            />
          </div>

        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-b border-border bg-[#F9FAFB] mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              "Policy Research",
              "Education & Capacity",
              "Ecosystem Building",
              "Startup Incubation",
            ].map((item) => (
              <div key={item} className="py-5 px-6 text-center">
                <span className="text-[0.8125rem] font-semibold tracking-wide text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}