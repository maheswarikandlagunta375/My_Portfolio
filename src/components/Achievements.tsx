import { Trophy, Calendar, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolio';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-brand-600/10 blur-[130px]" />
      </div>

      <div className="container-px">
        <div className="reveal section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Hackathons & Competitions
        </div>

        <div className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Hackathons &{' '}
            <span className="gradient-text">Competitions</span>.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Milestones that mark progress in competitive and applied settings.
          </p>
        </div>

        <div className="grid gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <article
              key={item.title}
              className="reveal group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:border-amber-400/20 sm:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                {/* Trophy emblem */}
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/20 to-brand-500/10 text-amber-300">
                  <Trophy size={24} />
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200">
                      <Sparkles size={10} />
                      {item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
                      <Calendar size={12} />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  {item.detail && (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
