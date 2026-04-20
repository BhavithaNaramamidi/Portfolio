import React from 'react';
import { HERO, CONTACT } from '../mock';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 flex items-center overflow-hidden">
      <div className="ds-container w-full relative z-10">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left column: greeting + role */}
          <div className="col-span-12 lg:col-span-4 pt-6">
            <div className="flex items-baseline gap-3">
              <span className="ds-heading text-3xl italic text-white/90">Hey,</span>
              <span className="text-3xl ds-float" style={{ '--ds-rot': '0deg' }}>👋</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--ds-accent)] inline-block" style={{ animation: 'ds-pulse-dot 2s ease-in-out infinite' }} />
              <span className="ds-mono text-[13px] text-white/80">{HERO.role}</span>
            </div>
          </div>

          {/* Center column: image */}
          <div className="col-span-12 lg:col-span-4 flex justify-center relative">
            <div className="relative w-[260px] sm:w-[320px] md:w-[380px]">
              <div
                className="relative rounded-md overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ds-float"
                style={{ '--ds-rot': '6deg', transform: 'rotate(6deg)' }}
              >
                <img
                  src={HERO.image}
                  alt="Bruno Simon"
                  className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              {/* Offset background card */}
              <div
                className="absolute inset-0 -z-10 rounded-md bg-[#b29a2c]/90"
                style={{ transform: 'rotate(-6deg) translate(12px, 18px)' }}
              />
            </div>
          </div>

          {/* Right column: contact */}
          <div className="col-span-12 lg:col-span-4 pt-6 flex flex-col items-start lg:items-end">
            <div className="space-y-3 ds-mono text-[13px]">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-[10px] text-[var(--ds-muted)]">E</span>
                <a href={`mailto:${CONTACT.email}`} className="ds-link">{CONTACT.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-[10px] text-[var(--ds-muted)]">T</span>
                <a href={`tel:${CONTACT.phone}`} className="ds-link">{CONTACT.phone}</a>
              </div>
            </div>
            <div className="mt-10 flex gap-3 flex-wrap">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-[var(--ds-border)] ds-mono text-[12px] text-white/80 hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
                >
                  / {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom name + description */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="ds-heading text-[18vw] lg:text-[10vw] leading-[0.9] text-white">
              {HERO.name}
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-end">
            <p className="text-[15px] leading-relaxed text-[var(--ds-muted)] max-w-md">
              {HERO.description}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex items-center gap-2 ds-mono text-[11px] tracking-[0.25em] text-[var(--ds-muted)]">
          <ArrowDown size={14} className="text-[var(--ds-accent)]" />
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
