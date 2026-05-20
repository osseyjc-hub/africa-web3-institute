import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const COPY = {
  en: {
    heading: "Stay Ahead of Africa's Web3 Policy Landscape",
    sub: "Subscribe to our weekly intelligence brief — research, policy updates, and ecosystem insights.",
    placeholder: "Enter your email address",
    cta: "Subscribe",
    success: "You're subscribed. Welcome to the AWI community.",
  },
  fr: {
    heading: "Restez à la pointe de la politique Web3 africaine",
    sub: "Abonnez-vous à notre bulletin hebdomadaire — recherches, mises à jour politiques et analyses.",
    placeholder: "Votre adresse e-mail",
    cta: "S'abonner",
    success: "Vous êtes abonné. Bienvenue dans la communauté AWI.",
  },
};

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { lang } = useLang();
  const C = COPY[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section style={{ backgroundColor: "#0B1437" }} className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full" style={{ backgroundColor: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}>
            <Mail className="w-5 h-5" style={{ color: "#D4A017" }} />
          </div>
          <h2 className="font-display text-[1.75rem] lg:text-[2.25rem] font-bold text-white mb-4 leading-snug">
            {C.heading}
          </h2>
          <p className="text-[0.9375rem] mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            {C.sub}
          </p>

          {done ? (
            <p className="text-[0.9375rem] font-semibold py-4" style={{ color: "#D4A017" }}>
              ✓ {C.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={C.placeholder}
                className="flex-1 px-5 py-3.5 text-[0.875rem] outline-none bg-white/10 text-white placeholder:text-white/40 border focus:border-yellow-500/60 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.875rem] font-semibold transition-all flex-shrink-0"
                style={{ backgroundColor: "#D4A017", color: "#0B1437" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#b8891a"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#D4A017"}
              >
                {C.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}