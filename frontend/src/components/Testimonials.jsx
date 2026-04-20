import React, { useState } from 'react';
import { TESTIMONIALS } from '../mock';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#0c0c0c]">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Testimonials</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              What Clients <em className="text-[var(--ds-accent)] not-italic">Say</em> About Me
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>

        <div className="relative rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)] p-10 lg:p-14 overflow-hidden">
          <Quote
            size={120}
            className="absolute -top-4 -left-2 text-white/[0.03]"
            strokeWidth={1}
          />
          <div key={i} className="ds-fade-up">
            <p className="ds-heading text-2xl lg:text-4xl leading-snug text-white max-w-4xl">
              “{t.quote}”
            </p>
            <div className="mt-10 flex items-center gap-5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-[var(--ds-border)]"
              />
              <div>
                <div className="text-white font-medium">{t.name}</div>
                <div className="ds-mono text-xs text-[var(--ds-muted)] mt-1">{t.title}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-[3px] transition-all ${
                    idx === i ? 'w-10 bg-[var(--ds-accent)]' : 'w-6 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
