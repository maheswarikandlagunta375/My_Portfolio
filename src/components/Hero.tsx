import { ArrowUpRight, FileDown, FolderGit2, Sparkles } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from '@/components/SocialIcons';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="absolute -left-32 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/20 blur-[120px] animate-blob-float" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[120px] animate-blob-float-slow" />
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="section-eyebrow mb-6">
              <Sparkles size={12} className="text-brand-300" />
              <span>Portfolio · 2026</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-balance">Maheswari</span>
              <span className="block">
                <span className="gradient-text bg-gradient-to-r from-brand-300 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-gradient-pan">
                  Kandlagunta
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-xl font-mono text-xs uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
              {PROFILE.shortRole}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {PROFILE.intro}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                <FolderGit2 size={16} />
                Explore My Projects
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a href={PROFILE.resumeUrl} className="btn-ghost" download>
                <FileDown size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Connect
              </span>
              <div className="h-px w-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <SocialLink
                  href={PROFILE.socials.linkedin}
                  label="LinkedIn"
                  icon={<LinkedInIcon className="h-[18px] w-[18px]" />}
                />
                <SocialLink
                  href={PROFILE.socials.github}
                  label="GitHub"
                  icon={<GitHubIcon className="h-[18px] w-[18px]" />}
                />
                <SocialLink
                  href={PROFILE.socials.leetcode}
                  label="LeetCode"
                  icon={<LeetCodeIcon className="h-[18px] w-[18px]" />}
                />
              </div>
            </div>
          </div>

          {/* Right: signature visual */}
          <div className="relative hidden lg:block animate-fade-in [animation-delay:300ms]">
            <SignatureCard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
            <span className="h-2 w-1 animate-pulse rounded-full bg-brand-400/80" />
          </span>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
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
      className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
    >
      {icon}
    </a>
  );
}

function SignatureCard() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* glow ring */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-violet-500/20 blur-2xl" />

      <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-7">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            maheswari.dev
          </span>
        </div>

        {/* code block */}
        <pre className="mt-6 overflow-hidden font-mono text-[12px] leading-relaxed text-slate-300">
          <code>
            <Line n={1}>
              <span className="text-violet-400">const</span>{' '}
              <span className="text-brand-300">developer</span>{' '}
              <span className="text-slate-500">=</span>{' '}
              <span className="text-slate-300">{'{'}</span>
            </Line>
            <Line n={2}>
              {'  '}<span className="text-sky-300">name</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-emerald-300">'Maheswari K.'</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={3}>
              {'  '}<span className="text-sky-300">focus</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-slate-300">[</span>
              <span className="text-emerald-300">'AI'</span>
              <span className="text-slate-500">,</span>{' '}
              <span className="text-emerald-300">'ML'</span>
              <span className="text-slate-500">,</span>{' '}
              <span className="text-emerald-300">'Software'</span>
              <span className="text-slate-300">]</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={4}>
              {'  '}<span className="text-sky-300">stack</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-slate-300">[</span>
              <span className="text-emerald-300">'Python'</span>
              <span className="text-slate-500">,</span>{' '}
              <span className="text-emerald-300">'Java'</span>
              <span className="text-slate-500">,</span>{' '}
              <span className="text-emerald-300">'SQL'</span>
              <span className="text-slate-300">]</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={5}>
              {'  '}<span className="text-sky-300">year</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-amber-300">2</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={6}>
              {'  '}<span className="text-sky-300">cgpa</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-amber-300">9.63</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={7}>
              {'  '}<span className="text-sky-300">learning</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-amber-300">true</span>
              <span className="text-slate-500">,</span>
            </Line>
            <Line n={8}>
              <span className="text-slate-300">{'}'}</span>
            </Line>
        </code>
        </pre>

        {/* stat strip */}
        <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10">
          <Stat label="CGPA" value="9.63" />
          <Stat label="Year" value="2nd" />
          <Stat label="Focus" value="AI/ML" />
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-xl animate-pulse-glow">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 text-white">
            <Sparkles size={15} />
          </span>
          <div className="leading-tight">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Status
            </p>
            <p className="text-xs font-medium text-white">Open to learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <span className="block">
      <span className="mr-4 inline-block w-4 text-right text-slate-600">
        {n}
      </span>
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ink-900/60 px-3 py-3 text-center">
      <p className="font-display text-lg font-semibold text-white">{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
