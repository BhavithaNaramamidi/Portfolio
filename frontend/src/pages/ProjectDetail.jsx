import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../mock';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';

const SectionHeading = ({ children }) => (
  <h3 className="ds-heading text-3xl lg:text-4xl text-white mb-6">{children}</h3>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);
  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (project) document.title = `${project.title} \u2013 Devsync`;
  }, [slug, project]);

  if (!project) {
    return (
      <main className="ds-noise bg-[var(--ds-bg)] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// 404</div>
          <h1 className="ds-heading text-5xl mb-6">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ds-border)] px-6 py-3 hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </main>
    );
  }

  const d = project.detail;

  return (
    <main className="ds-noise bg-[var(--ds-bg)] text-[var(--ds-fg)] min-h-screen overflow-x-hidden">
      <Header />

      {/* Top / breadcrumb */}
      <section className="pt-36 pb-12">
        <div className="ds-container">
          <div className="flex flex-wrap items-center gap-5 ds-mono text-xs text-[var(--ds-muted)] mb-10">
            <Link to="/" className="hover:text-[var(--ds-accent)] transition-colors">// Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-[var(--ds-accent)] transition-colors">// Portfolio</Link>
            <span>/</span>
            <span className="text-[var(--ds-accent)]">// Portfolio Single</span>
          </div>

          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="ds-heading text-6xl lg:text-8xl text-white leading-[0.95]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-xl text-[15px] text-[var(--ds-muted)] leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <a
                href={d.livePreview}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--ds-accent)] text-black px-6 py-3 font-medium hover:bg-[var(--ds-accent-2)] transition-colors"
              >
                Live Preview
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Meta grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-[var(--ds-border)]">
            {[
              { label: 'Client', value: d.client },
              { label: 'Industry', value: d.industry },
              { label: 'Timeline', value: d.timeline },
              { label: 'Technologies', value: project.tags.join(', ') },
            ].map((m) => (
              <div key={m.label} className="py-6 pr-6 border-r border-b md:border-b-0 border-[var(--ds-border)] last:border-r-0">
                <div className="ds-mono text-[11px] tracking-wider text-[var(--ds-muted)] uppercase mb-3">{m.label}</div>
                <div className="text-white text-[15px]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-20">
        <div className="ds-container">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--ds-border)] aspect-[16/9]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-20">
        <div className="ds-container grid grid-cols-12 gap-12">
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-28 space-y-3 ds-mono text-xs text-[var(--ds-muted)]">
              <div className="text-[var(--ds-accent)]">// On this page</div>
              {['Overview', 'Your Role', 'Tech Stack', 'Key Features', 'Challenges', 'Takeaways'].map((s) => (
                <div key={s} className="text-white/70 hover:text-[var(--ds-accent)] transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9 space-y-16">
            <div>
              <SectionHeading>Project Overview</SectionHeading>
              <div className="space-y-4 text-[15px] text-[var(--ds-muted)] leading-relaxed max-w-3xl">
                {d.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div>
              <SectionHeading>Your Role</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                {d.role.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[15px] text-white/85">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[var(--ds-accent)]/15 border border-[var(--ds-accent)]/40 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[var(--ds-accent)]" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading>Tech Stack Used</SectionHeading>
              <div className="divide-y divide-[var(--ds-border)] border-y border-[var(--ds-border)] max-w-3xl">
                {d.stack.map((s) => (
                  <div key={s.label} className="py-4 flex items-center justify-between gap-6">
                    <span className="text-white font-medium">{s.label}</span>
                    <span className="text-[var(--ds-muted)] text-[15px] text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.gallery.map((g, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl border border-[var(--ds-border)] aspect-[4/3]">
                  <img src={g} alt={`gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                </div>
              ))}
            </div>

            <div>
              <SectionHeading>Key Features</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
                {d.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-4 rounded-xl border border-[var(--ds-border)] bg-[var(--ds-surface)] hover:border-[var(--ds-accent)]/50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[var(--ds-accent)] text-black flex items-center justify-center shrink-0 text-xs font-semibold">
                      <Check size={12} />
                    </span>
                    <span className="text-[14px] text-white/85">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading>Challenges &amp; Solutions</SectionHeading>
              <div className="space-y-6 max-w-3xl">
                {d.challenges.map((c, i) => (
                  <div key={i} className="p-6 rounded-xl border border-[var(--ds-border)] bg-[var(--ds-surface)]">
                    <div className="ds-mono text-[11px] text-[var(--ds-accent)] mb-2">Challenge ({String(i + 1).padStart(2, '0')})</div>
                    <div className="text-white font-medium mb-4">{c.challenge}</div>
                    <div className="ds-mono text-[11px] text-[var(--ds-muted)] mb-2">Solution</div>
                    <div className="text-[14px] text-[var(--ds-muted)] leading-relaxed">{c.solution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading>Takeaways</SectionHeading>
              <p className="text-[15px] text-[var(--ds-muted)] leading-relaxed max-w-3xl">
                {d.takeaway}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20 border-t border-[var(--ds-border)] bg-[#0c0c0c]">
        <div className="ds-container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="ds-mono text-xs text-[var(--ds-accent)] mb-4">// More Project</div>
              <h2 className="ds-heading text-4xl lg:text-6xl text-white">
                Explore more <em className="text-[var(--ds-accent)] not-italic">work</em>
              </h2>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ds-border)] px-5 py-2.5 text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors text-sm"
            >
              All Projects
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl bg-[var(--ds-surface)] border border-[var(--ds-border)] aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl text-white font-medium group-hover:text-[var(--ds-accent)] transition-colors">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="ds-mono text-[11px] tracking-wide px-3 py-1 rounded-full border border-[var(--ds-border)] text-white/70">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
