import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../mock';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="ds-container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// Explore Work</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white max-w-3xl">
              A Showcase of My <em className="text-[var(--ds-accent)] not-italic">Latest</em> Projects
            </h2>
          </div>
          <div className="ds-mono text-xl text-[var(--ds-muted)]">&lt;/&gt;</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-[var(--ds-surface)] border border-[var(--ds-border)] aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl text-white font-medium group-hover:text-[var(--ds-accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-[var(--ds-muted)] text-[15px] leading-relaxed max-w-xl">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="ds-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-[var(--ds-border)] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full border border-[var(--ds-border)] px-6 py-3 text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors">
            View More Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
