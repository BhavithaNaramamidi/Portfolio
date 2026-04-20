import React from 'react';
import { ABOUT, SKILLS, STATS } from '../mock';
import { Code2, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="ds-container">
        <div className="grid grid-cols-12 gap-10">
          {/* Portrait + offset */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative w-full max-w-[420px]">
              <div
                className="relative rounded-md overflow-hidden"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <img
                  src={ABOUT.portrait}
                  alt="About"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              <div
                className="absolute inset-0 -z-10 rounded-md bg-[#b29a2c]/80"
                style={{ transform: 'rotate(3deg) translate(16px, 20px)' }}
              />
            </div>
          </div>

          {/* Skills + bio */}
          <div className="col-span-12 lg:col-span-7">
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Skills</div>

            <div className="space-y-2">
              {SKILLS.map((s) => (
                <div key={s.category} className="border-b border-[var(--ds-border)] py-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white text-base font-medium">{s.category}</h4>
                    <Code2 size={16} className="text-[var(--ds-muted)]" />
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {s.items.map((it) => (
                      <span key={it} className="text-[var(--ds-muted)] text-[15px] hover:text-[var(--ds-accent)] transition-colors cursor-default">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-relaxed text-[var(--ds-muted)] max-w-xl">
              {ABOUT.bio}
            </p>

            <button className="mt-8 group inline-flex items-center gap-2 rounded-full bg-[var(--ds-accent)] text-black px-6 py-3 font-medium hover:bg-[var(--ds-accent-2)] transition-colors">
              My Resume
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {STATS.map((st) => (
            <div key={st.label} className="border-t border-[var(--ds-border)] pt-6">
              <div className="ds-heading text-[90px] lg:text-[110px] leading-none text-white">
                {st.value}
              </div>
              <div className="mt-3 text-[var(--ds-accent)] text-sm ds-mono">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
