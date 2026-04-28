import React from "react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          Build with us. Shape policy.
          <br />
          Define the future.
        </h2>
        <p className="mt-6 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Join a growing network of governments, innovators, and institutions
          advancing Africa's Web3 agenda.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={() => scrollTo("#community")}
          >
            Join the Community
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}