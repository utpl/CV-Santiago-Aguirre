import { Award, GraduationCap, Languages as LanguagesIcon } from 'lucide-react';
import { Section } from './section';
import { Reveal } from './reveal';
import { certifications, education, languages } from '@/lib/data';

export function Education() {
  return (
    <Section
      id="formacion"
      eyebrow="Credenciales"
      title="Formación, certificaciones e idiomas"
    >
      <div className="grid items-start gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="card p-7">
            <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold">
              <GraduationCap className="h-4 w-4" />
              Formación académica
            </h3>

            <ul className="mt-6 divide-y divide-ink-line">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-display text-lg text-mist">
                      {item.degree}
                      {item.highlight && (
                        <span className="ml-3 rounded-full border border-gold/40 px-2 py-0.5 align-middle text-[0.65rem] uppercase tracking-wider text-gold">
                          {item.status}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-mist-muted">{item.institution}</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-mist-faint">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6">
            <div className="card p-7">
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold">
                <Award className="h-4 w-4" />
                Certificaciones
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <p className="text-[0.95rem] text-mist">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-mist-faint">
                      {cert.organization} · {cert.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-7">
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold">
                <LanguagesIcon className="h-4 w-4" />
                Idiomas
              </h3>
              <ul className="mt-5 space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-[0.95rem] text-mist">{lang.name}</p>
                      <p className="mt-0.5 text-xs text-mist-faint">{lang.detail}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold/80">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
