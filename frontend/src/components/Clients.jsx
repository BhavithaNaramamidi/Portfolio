import React from 'react';
import { CLIENTS } from '../mock';

const Clients = () => {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clients" className="relative py-24 lg:py-28">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// My Client</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              Worked With <em className="text-[var(--ds-accent)] not-italic">Amazing</em> Clients
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-[var(--ds-border)] py-10 ds-marquee-pause">
        <div className="flex ds-marquee-track-slow whitespace-nowrap">
          {row.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-12 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--ds-accent)]" />
              <span className="ds-heading text-4xl lg:text-5xl text-white">
                {c}
              </span>
              <span className="ds-mono text-xs text-[var(--ds-muted)]">○</span>
            </div>
          ))}
          {row.map((c, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center gap-4 px-12 shrink-0 opacity-60"
              aria-hidden
            >
              <span className="w-2 h-2 rounded-full bg-[var(--ds-accent)]" />
              <span className="ds-heading text-4xl lg:text-5xl text-white">
                {c}
              </span>
              <span className="ds-mono text-xs text-[var(--ds-muted)]">○</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
