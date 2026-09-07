import type { ReactNode } from 'react';
import { Reveal } from './reveal';

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell relative z-10">
        {bordered && <div className="hairline mb-14" />}
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-mist sm:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-5 text-base leading-relaxed text-mist-muted">{intro}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
