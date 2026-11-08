import { GraduationCap, Sparkles, Target, Cpu } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

const PILLARS = [
  {
    icon: Cpu,
    title: 'Software & AI',
    body: 'Building applied projects across machine learning, computer vision, and prompt-driven development.',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    body: 'Strengthening fundamentals in data structures, algorithms, and analytical reasoning.',
  },
  {
    icon: Sparkles,
    title: 'Emerging Tech',
    body: 'Exploring the evolving landscape of AI tooling, Google and Anthropic AI skills, and vibe coding.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          About
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Left: narrative */}
          <div className="reveal">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Engineering clarity through{' '}
              <span className="gradient-text">code and curiosity</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              {PROFILE.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>AI &amp; ML</Tag>
              <Tag>Software Development</Tag>
              <Tag>Real-world Projects</Tag>
              <Tag>Emerging Technologies</Tag>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/20 text-brand-200">
                <GraduationCap size={20} />
              </span>
              <p className="text-sm text-slate-300">
                Pursuing{' '}
                <span className="font-medium text-white">
                  B.Tech in Computer Science &amp; Engineering (AI &amp; ML)
                </span>{' '}
                — currently in my second year.
              </p>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="reveal grid gap-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="group glass card-hover relative overflow-hidden rounded-2xl p-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300 transition-colors duration-300 group-hover:border-brand-400/40 group-hover:text-brand-200">
                    <p.icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}
