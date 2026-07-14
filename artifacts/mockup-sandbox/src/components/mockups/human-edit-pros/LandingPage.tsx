import React, { useState, useEffect } from "react";
import { ArrowRight, Check, FileText, Clock, Shield, Volume2, ArrowUpRight, Terminal } from "lucide-react";

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-300 font-sans selection:bg-[#00E5FF] selection:text-[#070B14]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Chivo:wght@300;400;500;700;900&display=swap');
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-sans { font-family: 'Chivo', sans-serif; }
        .bg-grid {
          background-size: 60px 60px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        html { scroll-behavior: smooth; }
      `}} />

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#070B14]/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-6 h-6 bg-[#00E5FF] rounded-none flex items-center justify-center">
              <div className="w-3 h-3 bg-[#070B14]" />
            </div>
            HUMAN EDIT PROS
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-slate-400">
            <button onClick={() => scrollTo('services')} className="hover:text-[#00E5FF] transition-colors uppercase tracking-widest">Services</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-[#00E5FF] transition-colors uppercase tracking-widest">Pricing</button>
            <button onClick={() => scrollTo('about')} className="hover:text-[#00E5FF] transition-colors uppercase tracking-widest">About</button>
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center justify-center font-mono text-sm font-bold uppercase tracking-widest bg-white text-[#070B14] px-6 py-3 hover:bg-[#00E5FF] transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 md:px-12 bg-grid overflow-hidden border-b border-white/5">
        {/* Glow effect */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8 lg:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 font-mono text-xs text-[#00E5FF] mb-8 uppercase tracking-widest">
              <Terminal size={14} />
              <span>System Status: Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Turn Your Founder Podcast Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Lead Generation Machine.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mb-12 leading-relaxed">
              Professional editing, show notes, and 48-hour turnaround. <br className="hidden md:block"/> 
              <span className="text-white font-medium">$1,600/month</span> for up to 4 episodes.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={() => scrollTo('contact')}
                className="group relative inline-flex items-center justify-center font-mono text-sm font-bold uppercase tracking-widest bg-[#00E5FF] text-[#070B14] px-8 py-5 hover:bg-white transition-all duration-300"
              >
                Start Your Retainer
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 text-sm font-mono text-slate-500 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                Accepting 3 new clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-white text-[#070B14]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-mono text-sm text-[#008299] mb-4 uppercase tracking-widest font-bold">The Standard</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Invisible Editing.<br />Visible Results.
              </h3>
            </div>
            <p className="text-lg text-slate-600 max-w-md font-light">
              We handle the rigorous technical work so you can focus on the conversation. No missed deadlines, no amateur sound.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Volume2,
                title: "Professional Audio Editing",
                desc: "Broadcast-quality mastering, precise pacing cuts, and relentless noise reduction. We make you sound sharp."
              },
              {
                icon: FileText,
                title: "Show Notes & SEO",
                desc: "Every episode gets properly formatted show notes, SEO-rich summaries, and accurate timestamps."
              },
              {
                icon: Clock,
                title: "48-Hour Turnaround",
                desc: "Clockwork reliability. Submit your raw tape and get the polished episode back in two business days."
              },
              {
                icon: Shield,
                title: "Monthly Retainer",
                desc: "Flat-rate predictability. No hourly billing surprises, no haggling over scope. Just clean execution."
              }
            ].map((service, i) => (
              <div key={i} className="group border border-slate-200 p-8 hover:border-[#070B14] hover:shadow-[8px_8px_0px_0px_#070B14] transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#00E5FF] transition-colors">
                  <service.icon size={24} className="text-[#070B14]" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-slate-50 border-t border-slate-200 text-[#070B14]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-mono text-sm text-[#008299] mb-4 uppercase tracking-widest font-bold">Predictable Investment</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              One Price.<br />Full Production.
            </h3>
            <p className="text-xl text-slate-600 font-light mb-8 max-w-lg">
              Stop managing freelancers and stringing together tools. Our flat monthly retainer acts as your complete audio post-production department.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#008299]" /> Cancel anytime
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#008299]" /> Onboarding in 24 hours
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#008299]" /> Direct access to your producer
              </li>
            </ul>
          </div>

          <div className="bg-[#070B14] text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-8">
                <div>
                  <h4 className="text-2xl font-bold tracking-tight mb-2">Executive Plan</h4>
                  <p className="text-slate-400 font-mono text-sm">Everything you need.</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight">$1,600</div>
                  <div className="font-mono text-sm text-[#00E5FF] mt-1">USD / MONTH</div>
                </div>
              </div>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Up to 4 episodes per month",
                  "Full audio mastering & noise reduction",
                  "Meticulous pacing edits & um/ah removal",
                  "SEO-optimized show notes",
                  "Accurate timestamps & highlights",
                  "48-hour turnaround guarantee",
                  "100% human editing (no AI cuts)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300">
                    <div className="mt-1 w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00E5FF]">
                      <Check size={12} />
                    </div>
                    <span className="leading-relaxed font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => scrollTo('contact')}
                className="w-full inline-flex items-center justify-between font-mono text-sm font-bold uppercase tracking-widest bg-[#00E5FF] text-[#070B14] px-8 py-5 hover:bg-white transition-all duration-300"
              >
                Secure Your Spot
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#070B14] border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="font-mono text-sm text-[#00E5FF] mb-4 uppercase tracking-widest font-bold">The Quiet Professionals</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Behind the Mic.
            </h3>
            <div className="mt-12 w-24 h-1 bg-[#00E5FF]" />
          </div>
          <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            <p>
              We are a team of veteran podcast producers and content strategists. We built Human Edit Pros because we saw too many founders delegating their voice to cheap AI tools or unreliable freelancers.
            </p>
            <p>
              Your podcast is your most intimate marketing channel. When you speak to your audience, credibility matters. Every breath, every pause, and every word needs to sound intentional. A poor edit doesn't just sound bad—it costs you trust.
            </p>
            <p>
              That's why we rely on <strong className="text-white font-medium">100% human editing</strong>. No AI shortcuts, no automated mastering templates. Just rigorous, broadcast-quality production that makes you sound exactly as sharp as you are.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
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

          <div className="bg-slate-50 border border-slate-200 p-8 md:p-12">
            {formState === 'success' ? (
              <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#008299]/10 text-[#008299] flex items-center justify-center mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Request Received</h3>
                <p className="text-slate-600 font-light">
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">Full Name</label>
                    <input 
                      id="name" 
                      required
                      className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#070B14] focus:ring-1 focus:ring-[#070B14] transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">Work Email</label>
                    <input 
                      id="email" 
                      type="email"
                      required
                      className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#070B14] focus:ring-1 focus:ring-[#070B14] transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="podcast" className="block font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">Podcast Name (Optional)</label>
                  <input 
                    id="podcast" 
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#070B14] focus:ring-1 focus:ring-[#070B14] transition-all"
                    placeholder="The Founder's Journey"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">Message / Current Challenges</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-[#070B14] focus:ring-1 focus:ring-[#070B14] transition-all resize-none"
                    placeholder="Tell us about your show and what you're looking for..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full inline-flex items-center justify-center font-mono text-sm font-bold uppercase tracking-widest bg-[#070B14] text-white px-8 py-5 hover:bg-[#00E5FF] hover:text-[#070B14] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {formState === 'submitting' ? 'Sending Request...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04060A] pt-16 pb-8 px-6 md:px-12 border-t border-white/5 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight font-sans">
            <div className="w-4 h-4 bg-[#00E5FF] rounded-none flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#070B14]" />
            </div>
            HEP
          </div>
          <div className="text-slate-500 text-center md:text-left uppercase tracking-widest max-w-lg">
            © {new Date().getFullYear()} Human Edit Pros. All rights reserved. <br className="hidden md:block"/>
            <span className="opacity-50">Results may vary based on host delivery, audio equipment, and recording environment.</span>
          </div>
          <div className="flex gap-6 uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
