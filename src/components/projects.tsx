import { Section } from './section';
import { Reveal } from './reveal';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Trabajo seleccionado"
      title="Proyectos"
      intro="Herramientas y sistemas construidos para resolver problemas concretos de producción académica: automatizar lo repetitivo, quitar el HTML de en medio y mantener la infraestructura en pie."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.08}>
            <article className="card group flex h-full flex-col p-7 transition-colors hover:border-gold/30">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl leading-snug text-mist transition-colors group-hover:text-gold-soft">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs uppercase tracking-widest text-mist-faint">
                  {project.year}
                </span>
              </div>

              <p className="mt-1.5 text-xs uppercase tracking-wider text-gold/70">
                {project.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-mist-muted">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-ink-line pt-5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-mist-muted"
                  >
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold/50" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
