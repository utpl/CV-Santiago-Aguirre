import { Section } from './section';
import { Reveal } from './reveal';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trayectoria"
      title="Experiencia profesional"
      intro="Cinco años construyendo y sosteniendo la producción de educación en línea, del guion editorial al aula virtual publicada."
    >
      <ol className="relative space-y-12 border-l border-ink-line pl-8 sm:pl-10">
        {experiences.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 0.06}>
            <li className="relative">
              <span
                aria-hidden
                className={`absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink sm:-left-[2.8rem] ${
                  job.current ? 'bg-gold' : 'bg-ink-line'
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="font-display text-xl text-mist sm:text-2xl">
                  {job.position}
                </h3>
                <span className="text-xs uppercase tracking-widest text-mist-faint">
                  {job.period}
                </span>
              </div>

              <p className="mt-2 text-sm text-gold-soft">
                {job.company}
                {job.location && (
                  <span className="text-mist-faint"> · {job.location}</span>
                )}
                {job.current && (
                  <span className="ml-3 rounded-full border border-gold/40 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-gold">
                    Actual
                  </span>
                )}
              </p>

              <p className="mt-4 max-w-3xl text-[0.97rem] leading-relaxed text-mist-muted">
                {job.summary}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {job.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex gap-3 text-sm leading-relaxed text-mist-muted"
                  >
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold/50" />
                    {task}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
