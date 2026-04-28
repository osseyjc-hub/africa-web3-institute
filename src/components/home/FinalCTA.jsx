import React from "react";

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 lg:py-36 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white leading-snug tracking-tight">
            Build with us. Shape policy.
            <br />
            Define the future.
          </h2>
          <p className="mt-6 text-[1rem] text-white/65 leading-[1.8] max-w-lg">
            Join a growing network of governments, innovators, and institutions
            advancing Africa's Web3 agenda.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo("#community")}
              className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Join the Community
            </button>
            <button
              className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Partner With Us (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}