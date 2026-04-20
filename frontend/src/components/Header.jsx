import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { NAV_LINKS } from '../mock';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (to) => {
    setOpen(false);
    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-[var(--ds-bg)]/70 backdrop-blur-md' : ''
        }`}
      >
        <div className="ds-container flex items-center justify-between py-6">
          <button
            onClick={() => go('/')}
            className="ds-mono tracking-[0.22em] text-[13px] text-white/90 hover:text-[var(--ds-accent)] transition-colors"
          >
            BRUNO SIMON
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 rounded-full bg-white text-black pl-5 pr-2 py-2 hover:bg-[var(--ds-accent)] transition-colors duration-300 group"
          >
            <span className="ds-mono text-[13px] tracking-wide">Menu</span>
            <span className="w-7 h-7 rounded-full bg-black/90 flex items-center justify-center">
              <MenuIcon size={14} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[480px] bg-[#0d0d0d] border-l border-[var(--ds-border)] transform transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-8">
            <span className="ds-mono text-xs text-[var(--ds-muted)]">// Navigation</span>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full border border-[var(--ds-border)] flex items-center justify-center hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="px-8 pt-6">
            <ul className="space-y-5">
              {NAV_LINKS.map((l, i) => (
                <li key={l.label} className="overflow-hidden">
                  <button
                    onClick={() => go(l.to)}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className={`ds-heading text-5xl sm:text-6xl text-white hover:text-[var(--ds-accent)] transition-colors duration-300 block text-left ${
                      open ? 'ds-fade-up' : ''
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between ds-mono text-xs text-[var(--ds-muted)]">
            <span>info@brunosimon.com</span>
            <span>2025 © Devsync</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
