import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { RESUME_URL } from '../mock';

const ResumeModal = ({ open, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = RESUME_URL;
    a.download = 'Bhavitha_Naramamidi_Resume.pdf';
    a.target = '_blank';
    a.rel = 'noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className={`fixed inset-0 z-[80] transition-all duration-300 ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 sm:p-8 transition-transform duration-500 ${
          open ? 'scale-100' : 'scale-95'
        }`}
      >
        <div
          className="relative w-full max-w-5xl h-[90vh] bg-[#0f0f0f] border border-[var(--ds-border)] rounded-2xl overflow-hidden flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[var(--ds-border)] bg-[#0a0a0a]">
            <div className="flex items-center gap-3">
              <div className="ds-mono text-[11px] text-[var(--ds-accent)]">// Resume</div>
              <div className="hidden sm:block text-white/90 text-sm">
                Bhavitha Naramamidi — UI/UX Designer
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[var(--ds-border)] text-white/85 text-[12px] hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
              >
                <ExternalLink size={13} />
                <span className="hidden sm:inline">Open</span>
              </a>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ds-accent)] text-black text-[12px] font-medium hover:bg-[var(--ds-accent-2)] transition-colors"
              >
                <Download size={13} />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full border border-[var(--ds-border)] flex items-center justify-center text-white/80 hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] transition-colors"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* PDF preview */}
          <div className="flex-1 relative bg-[#1c1c1c] overflow-hidden">
            {open && (
              <>
                {/* Primary: Google Docs Viewer (works in most browsers without plugins) */}
                <iframe
                  title="Bhavitha Naramamidi Resume"
                  src={`https://docs.google.com/gview?url=${encodeURIComponent(RESUME_URL)}&embedded=true`}
                  className="w-full h-full border-0 relative z-10 bg-[#1c1c1c]"
                />
                {/* Fallback behind: native PDF for browsers that support it */}
                <object
                  data={`${RESUME_URL}#view=FitH&toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="absolute inset-0 w-full h-full z-0"
                  aria-label="Resume PDF preview"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-10">
                    <div className="ds-heading text-3xl text-white">Preview unavailable</div>
                    <p className="text-[var(--ds-muted)] text-sm max-w-md">
                      Your browser can&apos;t preview this PDF inline. You can still open it in a new tab or download a copy below.
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--ds-border)] text-white hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] text-sm">
                        <ExternalLink size={14} /> Open in new tab
                      </a>
                      <button onClick={handleDownload} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ds-accent)] text-black text-sm font-medium">
                        <Download size={14} /> Download
                      </button>
                    </div>
                  </div>
                </object>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
