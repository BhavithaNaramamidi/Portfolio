import React, { useState } from 'react';
import { SERVICES } from '../mock';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0c0c0c]">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Service</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              End-to-End Product <em className="text-[var(--ds-accent)] not-italic">Design</em> Services
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Preview image */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[440px]">
              <div
                className="relative overflow-hidden rounded-md transition-transform duration-500"
                style={{ transform: 'rotate(-3deg)' }}
                key={active}
              >
                <img
                  src={SERVICES[active].image}
                  alt={SERVICES[active].title}
                  className="w-full h-[520px] object-cover ds-fade-up"
                />
              </div>
              <div
                className="absolute inset-0 -z-10 rounded-md bg-[#b29a2c]/80"
                style={{ transform: 'rotate(3deg) translate(16px, 18px)' }}
              />
            </div>
          </div>

          {/* Accordion list */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="divide-y divide-[var(--ds-border)] border-y border-[var(--ds-border)]">
              {SERVICES.map((s, i) => (
                <div key={s.index} className="py-6">
                  <button
                    onClick={() => setActive(i)}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-6">
                        <span className={`ds-mono text-xs ${active === i ? 'text-[var(--ds-accent)]' : 'text-[var(--ds-muted)]'}`}>({s.index})</span>
                        <h3 className={`ds-heading text-3xl lg:text-4xl transition-colors ${
                          active === i ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                        }`}>
                          {s.title}
                        </h3>
                      </div>
                      {active === i && (
                        <div className="mt-5 pl-[64px] ds-fade-up">
                          <p className="text-[15px] leading-relaxed text-[var(--ds-muted)] max-w-xl">
                            {s.description}
                          </p>
                          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--ds-accent)] text-black px-5 py-2.5 text-sm font-medium hover:bg-[var(--ds-accent-2)] transition-colors">
                            Hire Me
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                    <span className={`mt-2 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                      active === i ? 'border-[var(--ds-accent)] text-[var(--ds-accent)]' : 'border-[var(--ds-border)] text-[var(--ds-muted)]'
                    }`}>
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
