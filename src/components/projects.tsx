import { ExternalLink, Github } from 'lucide-react';
import { Section } from './section';
import { Reveal } from './reveal';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Trabajo seleccionado"
      title="Proyectos"
      intro="Sistemas que diseñé y construí de punta a punta. El código de la mayoría está público; los que tienen despliegue se pueden probar en vivo."
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

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.repo || project.demo) && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-line pt-4 text-sm">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-mist-muted transition-colors hover:text-gold"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold-soft transition-colors hover:text-gold"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver en vivo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
