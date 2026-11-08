import { Code2, Database, Wrench, Sparkles, Brain } from 'lucide-react';
import { SKILLS, type SkillCategory } from '@/data/portfolio';

const ICONS: Record<SkillCategory['icon'], typeof Code2> = {
  code: Code2,
  database: Database,
  tools: Wrench,
  sparkles: Sparkles,
  brain: Brain,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          Skills
        </div>

        <div className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A toolkit sharpened for{' '}
            <span className="gradient-text">intelligent systems</span>.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Languages, tools, and capabilities I actively use to learn, build,
            and prototype.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, i) => {
            const Icon = ICONS[cat.icon];
            const wide = i >= 3; // last row spans on lg
            return (
              <div
                key={cat.title}
                className={`reveal group glass card-hover relative overflow-hidden rounded-2xl p-6 ${
                  wide && i === SKILLS.length - 1
                    ? 'lg:col-span-1'
                    : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/20 to-violet-500/10 text-brand-200 transition-all duration-300 group-hover:border-brand-400/40">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-brand-400/30 hover:bg-brand-500/10 hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Highlight panel */}
          <div className="reveal relative overflow-hidden rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/15 via-violet-500/10 to-transparent p-6">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-30" />
            <div className="relative">
              <Sparkles className="text-brand-200" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                AI-assisted craft
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                I treat prompt-driven prototyping and vibe coding as a real
                engineering discipline — iterating on intent, context, and
                output quality to build faster and more deliberately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
