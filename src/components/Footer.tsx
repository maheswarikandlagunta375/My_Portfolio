import { ArrowUp } from 'lucide-react';
import { PROFILE, NAV_ITEMS } from '@/data/portfolio';
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from '@/components/SocialIcons';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="container-px">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#top"
              className="font-display text-lg font-semibold text-white"
            >
              Maheswari Kandlagunta
            </a>
            <p className="mt-1.5 text-sm text-slate-500">
              Computer Science &amp; Engineering · AI &amp; ML
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <FooterSocial
              href={PROFILE.socials.linkedin}
              label="LinkedIn"
              icon={<LinkedInIcon className="h-4 w-4" />}
            />
            <FooterSocial
              href={PROFILE.socials.github}
              label="GitHub"
              icon={<GitHubIcon className="h-4 w-4" />}
            />
            <FooterSocial
              href={PROFILE.socials.leetcode}
              label="LeetCode"
              icon={<LeetCodeIcon className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-600">
            © {new Date().getFullYear()} Maheswari Kandlagunta
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-400/40">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
    >
      {icon}
    </a>
  );
}
