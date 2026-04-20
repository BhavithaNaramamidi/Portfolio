import React from 'react';
import { BLOGS } from '../mock';
import { ArrowUpRight } from 'lucide-react';

const Blogs = () => {
  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Blogs</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              Developer <em className="text-[var(--ds-accent)] not-italic">Insights</em> & Ideas
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((b) => (
            <a
              key={b.slug}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl border border-[var(--ds-border)] bg-[var(--ds-surface)] aspect-[4/3]">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm ds-mono text-[11px] text-white">
                  {b.category}
                </div>
              </div>
              <div className="mt-5">
                <div className="ds-mono text-[11px] text-[var(--ds-muted)]">{b.date}</div>
                <h3 className="mt-3 text-xl text-white font-medium leading-snug group-hover:text-[var(--ds-accent)] transition-colors">
                  {b.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/70 group-hover:text-[var(--ds-accent)] transition-colors">
                  Read More
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full border border-[var(--ds-border)] px-6 py-3 text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors">
            View More Blogs
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
