import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Clock,
  Shield,
  Volume2,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Volume2,
      title: "Professional Audio Editing",
      desc: "Broadcast-quality mastering, precise pacing cuts, and relentless noise reduction. We make you sound sharp.",
    },
    {
      icon: FileText,
      title: "Show Notes & SEO",
      desc: "Every episode gets properly formatted show notes, SEO-rich summaries, and accurate timestamps.",
    },
    {
      icon: Clock,
      title: "48-Hour Turnaround",
      desc: "Clockwork reliability. Submit your raw tape and get the polished episode back in two business days.",
    },
    {
      icon: Shield,
      title: "Monthly Retainer",
      desc: "Flat-rate predictability. No hourly billing surprises, no haggling over scope. Just clean execution.",
    },
  ];

  const pricingFeatures = [
    "Up to 4 episodes per month",
    "Full audio mastering & noise reduction",
    "Meticulous pacing edits & um/ah removal",
    "SEO-optimized show notes",
    "Accurate timestamps & highlights",
    "48-hour turnaround guarantee",
    "100% human editing (no AI cuts)",
  ];

  return (
    <div
      className="min-h-screen text-slate-300 selection:bg-[#00E5FF] selection:text-[#070B14]"
      style={{ fontFamily: "'Chivo', system-ui, sans-serif", backgroundColor: "#070B14" }}
    >
      {/* Global styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        .font-mono-brand { font-family: 'Space Mono', monospace; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      {/* ── NAVIGATION ─────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "border-white/10 py-4"
            : "border-transparent py-6"
        }`}
        style={{
          background: isScrolled ? "rgba(7,11,20,0.9)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-white font-black text-xl tracking-tight cursor-pointer bg-transparent border-0"
          >
            <div className="w-6 h-6 bg-[#00E5FF] flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 bg-[#070B14]" />
            </div>
            HUMAN EDIT PROS
          </button>

          <div className="hidden md:flex items-center gap-8 font-mono-brand text-sm text-slate-400">
            {["services", "pricing", "about"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-[#00E5FF] transition-colors uppercase tracking-widest bg-transparent border-0 cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center justify-center font-mono-brand text-sm font-bold uppercase tracking-widest bg-white text-[#070B14] px-6 py-3 hover:bg-[#00E5FF] transition-colors border-0 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 md:px-12 bg-grid overflow-hidden border-b border-white/5"
        style={{ backgroundColor: "#070B14" }}
      >
        {/* Glow */}
        <div
          className="absolute top-1/4 -right-1/4 pointer-events-none"
          style={{
            width: "800px",
            height: "800px",
            background: "rgba(0,229,255,0.10)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 font-mono-brand text-xs text-[#00E5FF] mb-8 uppercase tracking-widest">
              <Terminal size={14} />
              <span>System Status: Online</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Turn Your Founder Podcast Into a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #ffffff, #64748b)" }}
              >
                Lead Generation Machine.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mb-12 leading-relaxed">
              Professional editing, show notes, and 48-hour turnaround.{" "}
              <br className="hidden md:block" />
              <span className="text-white font-medium">$1,600/month</span> for up to 4 episodes.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-3 font-mono-brand text-sm font-bold uppercase tracking-widest bg-[#00E5FF] text-[#070B14] px-8 py-5 hover:bg-white transition-all duration-300 border-0 cursor-pointer"
              >
                Start Your Retainer
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <div className="flex items-center gap-3 font-mono-brand text-sm text-slate-500 uppercase tracking-widest">
                <div
                  className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse-dot"
                />
                Accepting 3 new clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-white text-[#070B14]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-mono-brand text-sm text-[#008299] mb-4 uppercase tracking-widest font-bold">
                The Standard
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Invisible Editing.
                <br />
                Visible Results.
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-md font-light">
              We handle the rigorous technical work so you can focus on the conversation. No missed deadlines, no amateur sound.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group border border-slate-200 p-8 bg-white hover:border-[#070B14] transition-all duration-300"
                style={{ transition: "border-color .3s, box-shadow .3s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0 0 #070B14";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-[#00E5FF] flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon size={24} className="text-[#070B14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────── */}
      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 border-t border-slate-200 text-[#070B14]"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-mono-brand text-sm text-[#008299] mb-4 uppercase tracking-widest font-bold">
              Predictable Investment
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              One Price.
              <br />
              Full Production.
            </h2>
            <p className="text-xl text-slate-600 font-light mb-8 max-w-lg leading-relaxed">
              Stop managing freelancers and stringing together tools. Our flat monthly retainer acts as your complete audio post-production department.
            </p>
            <ul className="space-y-4 font-mono-brand text-sm">
              {["Cancel anytime", "Onboarding in 24 hours", "Direct access to your producer"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-[#008299] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card */}
          <div
            className="text-white p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundColor: "#070B14",
              boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: "128px",
                height: "128px",
                background: "rgba(0,229,255,0.20)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10 flex-wrap gap-4">
                <div>
                  <div className="text-2xl font-bold tracking-tight mb-1">Executive Plan</div>
                  <div className="font-mono-brand text-sm text-slate-400">Everything you need.</div>
                </div>
                <div className="text-right">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight">$1,600</div>
                  <div className="font-mono-brand text-sm text-[#00E5FF] mt-1 uppercase tracking-wider">USD / Month</div>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {pricingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300">
                    <div
                      className="flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Check size={12} className="text-[#00E5FF]" />
                    </div>
                    <span className="font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("contact")}
                className="w-full inline-flex items-center justify-between font-mono-brand text-sm font-bold uppercase tracking-widest bg-[#00E5FF] text-[#070B14] px-8 py-5 hover:bg-white transition-all duration-300 border-0 cursor-pointer"
              >
                Secure Your Spot
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5 text-white"
        style={{ backgroundColor: "#070B14" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <p className="font-mono-brand text-sm text-[#00E5FF] mb-4 uppercase tracking-widest font-bold">
              The Quiet Professionals
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Behind the Mic.
            </h2>
            <div className="mt-12 h-1 bg-[#00E5FF]" style={{ width: "96px" }} />
          </div>

          <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            <p>
              We are a team of veteran podcast producers and content strategists. We built Human Edit Pros because we saw too many founders delegating their voice to cheap AI tools or unreliable freelancers.
            </p>
            <p>
              Your podcast is your most intimate marketing channel. When you speak to your audience, credibility matters. Every breath, every pause, and every word needs to sound intentional. A poor edit doesn't just sound bad — it costs you trust.
            </p>
            <p>
              That's why we rely on{" "}
              <strong className="text-white font-medium">100% human editing</strong>. No AI shortcuts, no automated mastering templates. Just rigorous, broadcast-quality production that makes you sound exactly as sharp as you are.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-white text-[#070B14]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Ready to sound like a professional?
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Submit the form below. We'll review your current show or concept and reply within 24 hours to schedule a quick fit-call.
            </p>
          </div>

          <div className="border border-slate-200 p-8 md:p-12" style={{ backgroundColor: "#f8fafc" }}>
            {formState === "success" ? (
              <div className="py-16 text-center">
                <div
                  className="flex items-center justify-center mx-auto mb-6"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(0,130,153,0.10)",
                  }}
                >
                  <Check size={40} className="text-[#008299]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Request Received</h3>
                <p className="text-slate-600 font-light">
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono-brand text-xs uppercase tracking-widest text-slate-500 font-bold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-slate-200 px-4 py-3 text-[#070B14] outline-none transition-all focus:border-[#070B14]"
                      style={{ borderRadius: 0, fontFamily: "inherit" }}
                      onFocus={(e) => ((e.target as HTMLElement).style.boxShadow = "0 0 0 1px #070B14")}
                      onBlur={(e) => ((e.target as HTMLElement).style.boxShadow = "none")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono-brand text-xs uppercase tracking-widest text-slate-500 font-bold mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-white border border-slate-200 px-4 py-3 text-[#070B14] outline-none transition-all focus:border-[#070B14]"
                      style={{ borderRadius: 0, fontFamily: "inherit" }}
                      onFocus={(e) => ((e.target as HTMLElement).style.boxShadow = "0 0 0 1px #070B14")}
                      onBlur={(e) => ((e.target as HTMLElement).style.boxShadow = "none")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="podcast"
                    className="block font-mono-brand text-xs uppercase tracking-widest text-slate-500 font-bold mb-2"
                  >
                    Podcast Name (Optional)
                  </label>
                  <input
                    id="podcast"
                    type="text"
                    placeholder="The Founder's Journey"
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-[#070B14] outline-none transition-all"
                    style={{ borderRadius: 0, fontFamily: "inherit" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.boxShadow = "0 0 0 1px #070B14")}
                    onBlur={(e) => ((e.target as HTMLElement).style.boxShadow = "none")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono-brand text-xs uppercase tracking-widest text-slate-500 font-bold mb-2"
                  >
                    Message / Current Challenges
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your show and what you're looking for..."
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-[#070B14] outline-none transition-all resize-none"
                    style={{ borderRadius: 0, fontFamily: "inherit" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.boxShadow = "0 0 0 1px #070B14")}
                    onBlur={(e) => ((e.target as HTMLElement).style.boxShadow = "none")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full inline-flex items-center justify-center font-mono-brand text-sm font-bold uppercase tracking-widest bg-[#070B14] text-white px-8 py-5 hover:bg-[#00E5FF] hover:text-[#070B14] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed border-0 cursor-pointer"
                >
                  {formState === "submitting" ? "Sending Request..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer
        className="pt-12 pb-8 px-6 md:px-12 border-t border-white/5"
        style={{ backgroundColor: "#04060A" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 text-white font-black text-lg tracking-tight">
            <div className="w-4 h-4 bg-[#00E5FF] flex items-center justify-center flex-shrink-0">
              <div className="bg-[#070B14]" style={{ width: "6px", height: "6px" }} />
            </div>
            HEP
          </div>

          <p
            className="font-mono-brand text-xs text-slate-500 text-center max-w-md leading-relaxed uppercase tracking-widest"
          >
            © {new Date().getFullYear()} Human Edit Pros. All rights reserved.
            <br />
            <span className="opacity-50">
              Results may vary based on host delivery, audio equipment, and recording environment.
            </span>
          </p>

          <div className="flex gap-6 font-mono-brand text-xs text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
