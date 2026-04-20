import React from 'react';
import { PROCESS } from '../mock';

const Process = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Process</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              My Design <em className="text-[var(--ds-accent)] not-italic">work</em> Process
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS.map((p, i) => (
            <div
              key={p.index}
              className="group relative p-8 rounded-2xl bg-[var(--ds-surface)] border border-[var(--ds-border)] hover:border-[var(--ds-accent)]/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="ds-heading text-5xl text-white/90">{p.index}</span>
                <span className="w-10 h-10 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-[var(--ds-muted)] group-hover:border-[var(--ds-accent)] group-hover:text-[var(--ds-accent)] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-14">
                <h4 className="ds-heading text-2xl text-white">{p.title}</h4>
                <p className="mt-3 text-[15px] text-[var(--ds-muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="mt-10 h-[1px] w-full bg-[var(--ds-border)] relative overflow-hidden">
                <span className="absolute inset-y-0 left-0 w-0 bg-[var(--ds-accent)] group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
