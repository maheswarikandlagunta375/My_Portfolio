import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-wide text-white"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-violet-500/20 text-brand-200 transition-all duration-300 group-hover:border-brand-400/40 group-hover:from-brand-500/40 group-hover:to-violet-500/30">
            <span className="font-display text-base font-bold">M</span>
          </span>
          <span className="hidden sm:block">
            Maheswari<span className="text-brand-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.05]" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-ghost !px-5 !py-2 text-xs">
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px border-t border-white/[0.06] bg-ink-950/95 pb-6 pt-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:hello@maheswari.dev`}
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
