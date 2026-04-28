import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent uppercase">
                Pan-African Think Tank
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-secondary leading-[1.15] tracking-tight">
              Shaping Africa's Web3 Policy, Education & Digital Future
            </h1>

            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Africa Web3 Institute is a pan-African public policy and
              educational think tank advancing blockchain innovation through
              research, regulation, education, and ecosystem building.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-11"
                onClick={() => scrollTo("#publications")}
              >
                Explore Our Research
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 h-11"
                onClick={() => scrollTo("#community")}
              >
                Join the Community
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-secondary px-6 h-11"
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-secondary/5 rounded-2xl -rotate-3" />
              <img
                src="https://media.base44.com/images/public/69f0c79c7957f32b49dcc978/3064f0acc_generated_d1507269.png"
                alt="Abstract illustration of Africa and Web3 technology — blockchain nodes forming the African continent"
                className="relative rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}