import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="container-px">
        <div className="reveal section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Education
        </div>

        <div className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A foundation built on{' '}
            <span className="gradient-text">consistency</span>.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            An academic record focused on depth, discipline, and a steady
            trajectory in computer science and engineering.
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10 sm:space-y-14">
            {EDUCATION.map((item, i) => (
              <li
                key={item.institution}
                className="reveal relative pl-12 sm:pl-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* node */}
                <span className="absolute left-4 top-2 z-10 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full border border-brand-400/60 bg-ink-950 sm:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                </span>

                <div
                  className={`sm:w-1/2 ${
                    i % 2 === 0
                      ? 'sm:pr-10 sm:text-right'
                      : 'sm:ml-auto sm:pl-10'
                  }`}
                >
                  <EducationCard item={item} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item }: { item: (typeof EDUCATION)[number] }) {
  return (
    <div className="group glass card-hover relative overflow-hidden rounded-2xl p-6">
      {item.highlight && (
        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand-500/20 blur-2xl" />
      )}

      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
        <GraduationCap size={13} className="text-brand-300" />
        {item.period}
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
        {item.institution}
      </h3>
      <p className="mt-1.5 text-sm text-slate-400">{item.qualification}</p>

      <div className="mt-4 flex items-center gap-2">
        {item.highlight ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-200">
            <Award size={12} />
            {item.highlight}
          </span>
        ) : (
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
            {item.detail}
          </span>
        )}
      </div>

      {item.highlight && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
          {item.detail}
        </p>
      )}
    </div>
  );
}
