import React, { useState } from 'react';
import { CONTACT, NAV_LINKS, HERO } from '../mock';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      toast.success('Email copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const go = (to) => {
    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-10 border-t border-[var(--ds-border)] bg-[#080808]">
      <div className="ds-container">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="ds-mono text-xs text-[var(--ds-accent)] mb-6">// Let's Talk</div>
            <h2 className="ds-heading text-5xl lg:text-7xl text-white leading-[0.95]">
              Have a project <br />
              in mind? <em className="text-[var(--ds-accent)] not-italic">Let's</em> <br />
              build it together.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--ds-accent)] text-black px-6 py-3 font-medium hover:bg-[var(--ds-accent-2)] transition-colors"
              >
                {CONTACT.email}
                {copied ? <Check size={16} /> : <Copy size={16} className="opacity-70 group-hover:opacity-100" />}
              </button>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ds-border)] px-6 py-3 text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
              >
                {CONTACT.phone}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="ds-mono text-xs text-[var(--ds-muted)] mb-5">// Sitemap</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <button onClick={() => go(l.to)} className="ds-link text-white/80 hover:text-[var(--ds-accent)]">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="ds-mono text-xs text-[var(--ds-muted)] mb-5">// Socials</div>
            <ul className="space-y-3">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ds-link text-white/80 hover:text-[var(--ds-accent)] inline-flex items-center gap-2"
                  >
                    {s.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--ds-border)]">
          <div className="ds-heading text-[22vw] lg:text-[16vw] leading-[0.82] text-white/90 text-center select-none">
            {HERO.name}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 ds-mono text-[11px] text-[var(--ds-muted)]">
          <div>© 2025 Devsync. Designed for developers.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--ds-accent)]" style={{ animation: 'ds-pulse-dot 2s ease-in-out infinite' }} />
            Available for freelance work
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
