import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const response = await base44.functions.invoke("sendContactEmail", form);
    setLoading(false);
    if (response.data?.success) {
      setSubmitted(true);
    } else {
      setError(true);
    }
  };

  const inputClass =
    "w-full border border-border bg-white px-4 py-3 text-[0.875rem] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary";

  return (
    <section id="contact" className="py-28 lg:py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — description */}
          <div>
            <SectionHeader eyebrow="Work With Us" heading="Partnerships & Collaboration" />
            <p className="mt-6 text-[1rem] text-muted-foreground leading-[1.8]">
              We welcome collaboration with governments, regulators, development
              organizations, academic institutions, media, civil society, and
              private sector partners.
            </p>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
                General Enquiries
              </p>
              <a
                href="mailto:info@africaweb3institute.org"
                className="text-[1rem] font-medium text-secondary hover:text-primary transition-colors"
              >
                info@africaweb3institute.org
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="border border-border p-10 flex flex-col items-start justify-center h-full">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
                  Received
                </p>
                <p className="text-[1rem] font-semibold text-secondary leading-snug">
                  Thank you. Your message has been received. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.75rem] font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.75rem] font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.75rem] font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
                    Organization
                  </label>
                  <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Institution or company"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[0.75rem] font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Briefly describe your inquiry or partnership interest."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {error && (
                  <p className="text-[0.875rem] text-destructive">
                    Something went wrong. Please try again or contact us directly at{" "}
                    <a href="mailto:info@africaweb3institute.org" className="underline">
                      info@africaweb3institute.org
                    </a>.
                  </p>
                )}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-sm font-semibold px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}