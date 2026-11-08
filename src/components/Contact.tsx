import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from '@/components/SocialIcons';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-600/15 blur-[140px]" />
      </div>

      <div className="container-px">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            {/* Left: invite */}
            <div>
              <div className="section-eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Contact
              </div>

              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build something{' '}
                <span className="gradient-text">worthwhile</span>.
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                I am open to collaboration, mentorship, internships, and
                conversations about AI, ML, and software development. Reach out
                and I will respond.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:maheswari.kandlagunta@gmail.com`}
                  className="btn-primary group"
                >
                  <Mail size={16} />
                  Send an email
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                <MapPin size={12} className="text-slate-500" />
                Hyderabad, India
              </div>
            </div>

            {/* Right: social cards */}
            <div className="grid gap-3">
              <SocialCard
                href={PROFILE.socials.linkedin}
                label="LinkedIn"
                handle="kandlagunta-maheswari"
                icon={<LinkedInIcon className="h-5 w-5" />}
              />
              <SocialCard
                href={PROFILE.socials.github}
                label="GitHub"
                handle="maheswarikandlagunta375"
                icon={<GitHubIcon className="h-5 w-5" />}
              />
              <SocialCard
                href={PROFILE.socials.leetcode}
                label="LeetCode"
                handle="maheswari_221145"
                icon={<LeetCodeIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialCard({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/20 to-violet-500/10 text-white transition-colors duration-300 group-hover:border-brand-400/40">
          {icon}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-white">
            {label}
          </p>
          <p className="font-mono text-xs text-slate-500">{handle}</p>
        </div>
      </div>
      <ArrowUpRight
        size={18}
        className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300"
      />
    </a>
  );
}
