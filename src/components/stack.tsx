import { Section } from './section';
import { Reveal } from './reveal';
import { stackGroups } from '@/lib/data';

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Competencias técnicas"
      title="Stack de trabajo"
      intro="Herramientas que uso en producción, agrupadas por el tipo de problema que resuelven."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-ink-line bg-ink-line md:grid-cols-2">
        {stackGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <div className="h-full bg-ink-soft p-7">
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold">
                <span aria-hidden className="h-px w-6 bg-gold/60" />
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
