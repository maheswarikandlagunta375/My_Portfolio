import { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Target,
  X,
  Info,
  Users,
} from 'lucide-react';
import { PROJECTS, type Project, type ProjectLink } from '@/data/portfolio';
import { GitHubIcon } from '@/components/SocialIcons';

export function Projects() {
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-brand-600/10 blur-[130px]" />
        <div className="absolute left-10 bottom-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="container-px">
        <div className="reveal section-eyebrow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          Featured Projects
        </div>

        <div className="reveal mb-14 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Selected work, treated as{' '}
            <span className="gradient-text">case studies</span>.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Each project is a study in problem framing, applied tooling, and the
            full lifecycle from idea to working platform.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCaseStudy
              key={project.id}
              project={project}
              index={i}
              onOpenDetails={() => setDetailProject(project)}
            />
          ))}
        </div>
      </div>

      {detailProject && (
        <ProjectDetailsModal
          project={detailProject}
          onClose={() => setDetailProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCaseStudy({
  project,
  index,
  onOpenDetails,
}: {
  project: Project;
  index: number;
  onOpenDetails: () => void;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="reveal group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.16]">
      <div
        className={`grid lg:grid-cols-2 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Visual */}
        <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-[440px]">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent lg:bg-gradient-to-r" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-violet-500/20 mix-blend-overlay" />

          <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-white/30" />
            <span className="rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-200 backdrop-blur-md">
              {project.focus}
            </span>
          </div>

          {project.collaboration && (
            <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-violet-200 backdrop-blur-md">
              <Users size={11} />
              Team Project
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between gap-6 p-7 sm:p-9">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-300">
              {project.tagline}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
              {project.category}
            </p>

            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
              <Target size={15} className="mt-0.5 shrink-0 text-violet-300" />
              <p className="text-sm leading-relaxed text-slate-400">
                {project.problem}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            {/* Focus areas */}
            <div className="mt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Focus Areas
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-300 hover:border-brand-400/30 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-400/70" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-5">
            {project.links.map((link) => (
              <ProjectLinkButton
                key={link.label}
                link={link}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectLinkButton({
  link,
  onOpenDetails,
}: {
  link: ProjectLink;
  onOpenDetails: () => void;
}) {
  if (link.type === 'internal') {
    return (
      <button
        type="button"
        onClick={onOpenDetails}
        className="group/link inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-medium text-brand-200 transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/20 hover:text-white"
      >
        <Info size={13} />
        {link.label}
        <ArrowUpRight
          size={13}
          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </button>
    );
  }

  const disabled = !link.url;

  if (disabled) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.01] px-4 py-2 text-xs font-medium text-slate-500"
        title="Repository URL to be added"
      >
        <GitHubIcon className="h-3.5 w-3.5" />
        {link.label}
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
          · soon
        </span>
      </span>
    );
  }

  const external = link.type === 'live' || link.type === 'github';

  return (
    <a
      href={link.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group/link inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
        link.type === 'github'
          ? 'border border-white/10 bg-white/[0.03] text-slate-200 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white'
          : 'border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:text-white'
      }`}
    >
      {link.type === 'github' && <GitHubIcon className="h-3.5 w-3.5" />}
      {link.type === 'live' && <ExternalLink size={13} />}
      {link.label}
      <ArrowUpRight
        size={13}
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </a>
  );
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="glass-strong relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] p-7 sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-white/20 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200">
            {project.focus}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-violet-200">
            <Users size={11} />
            Team Project
          </span>
        </div>

        <h3
          id="project-detail-title"
          className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl"
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-300">
          {project.tagline}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
          {project.category}
        </p>

        <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <Target size={15} className="mt-0.5 shrink-0 text-violet-300" />
          <p className="text-sm leading-relaxed text-slate-400">
            {project.problem}
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Focus areas */}
        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Focus Areas
          </p>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {project.focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-xs text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Contribution note */}
        <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            My Contribution
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.contribution && project.contribution.trim().length > 0
              ? project.contribution
              : 'Describe your role and contributions here. This is a collaborative project — the repository belongs to a teammate and is not in my personal GitHub. Add details about the parts you owned, such as routing logic, UI, data handling, or integrations.'}
          </p>
          <p className="mt-3 border-t border-white/[0.06] pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
            An external repository link can be added later with the
            teammate&apos;s permission.
          </p>
        </div>
      </div>
    </div>
  );
}
