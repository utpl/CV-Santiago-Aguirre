import { Section } from './section';
import { Reveal } from './reveal';
import { about } from '@/lib/data';

export function About() {
  return (
    <Section
      id="perfil"
      eyebrow="Perfil profesional"
      title="Del modelo de datos a la interfaz"
      bordered={false}
    >
      <div className="grid gap-10 lg:grid-cols-3">
        {about.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <div className="border-l border-ink-line pl-6">
              <span className="font-display text-sm text-gold/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-mist-muted">
                {paragraph}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
