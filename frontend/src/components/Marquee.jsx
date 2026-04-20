import React from 'react';

const Marquee = ({ text = 'BRUNO SIMON' }) => {
  const items = Array.from({ length: 6 });
  return (
    <div className="relative py-12 overflow-hidden select-none border-y border-[var(--ds-border)]/50">
      <div className="ds-marquee-pause flex">
        <div className="ds-marquee-track flex shrink-0 whitespace-nowrap">
          {items.map((_, i) => (
            <span
              key={i}
              className="ds-heading text-[clamp(64px,12vw,180px)] leading-none px-8 text-white/5 tracking-tight"
            >
              {text}
              <span className="inline-block mx-6 text-[var(--ds-accent)]/20 align-middle">✻</span>
            </span>
          ))}
          {items.map((_, i) => (
            <span
              key={`b-${i}`}
              className="ds-heading text-[clamp(64px,12vw,180px)] leading-none px-8 text-white/5 tracking-tight"
              aria-hidden
            >
              {text}
              <span className="inline-block mx-6 text-[var(--ds-accent)]/20 align-middle">✻</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
