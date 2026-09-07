import Image from 'next/image';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE, CONTACT } from '@/lib/site';
import { stats } from '@/lib/data';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Halos de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-navy/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="eyebrow">{PROFILE.availability}</p>
            </div>

            <h1 className="mt-7 font-display text-4xl font-medium leading-[1.08] tracking-tight text-mist sm:text-5xl lg:text-6xl">
              {PROFILE.name}
            </h1>

            <p className="mt-5 text-lg text-gold-soft sm:text-xl">
              {PROFILE.title}
              <span className="mt-1 block text-base text-mist-muted sm:text-lg">
                {PROFILE.subtitle}
              </span>
            </p>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-muted">
              {PROFILE.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.cv}
                download={PROFILE.cvFileName}
                className="no-print inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-soft"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Descargar CV
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-medium text-mist transition-colors hover:border-gold/50 hover:text-gold"
              >
                Hablemos
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-mist-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold/70" />
                {PROFILE.location}
              </span>
              <a href={`mailto:${CONTACT.email}`} className="link-underline">
                <Mail className="h-4 w-4 text-gold/70" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                <Linkedin className="h-4 w-4 text-gold/70" />
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                <Github className="h-4 w-4 text-gold/70" />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-gold/25"
              />
              <div className="relative overflow-hidden rounded-xl border border-ink-line bg-ink-card">
                <Image
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={520}
                  height={640}
                  priority
                  className="h-full w-full object-cover saturate-[0.92] contrast-[1.03]"
                />
                {/* Armoniza el fondo del retrato con la paleta del sitio */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-navy/30 mix-blend-multiply"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-line bg-ink-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-soft px-6 py-7">
              <dt className="font-display text-3xl text-gold">{stat.value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-wider text-mist-faint">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
