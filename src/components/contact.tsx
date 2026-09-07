import { ArrowDownToLine, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Reveal } from './reveal';
import { CONTACT, PROFILE } from '@/lib/site';

const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="hairline mb-14" />
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-gradient-to-br from-navy-dark/60 via-ink-card to-ink-soft p-9 sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]"
            />

            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow">Contacto</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-mist sm:text-4xl">
                ¿Buscas un desarrollador full stack?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist-muted">
                Estoy abierto a posiciones full stack, back-end en Python o front-end en
                React y Next.js, presenciales en Loja o remotas. Escríbeme y conversamos.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft"
                >
                  <Mail className="h-4 w-4" />
                  Escribir un correo
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-medium text-mist transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={PROFILE.cv}
                  download={PROFILE.cvFileName}
                  className="no-print inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-medium text-mist transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Descargar CV
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-line pt-7 text-sm text-mist-muted">
                <a href={`mailto:${CONTACT.email}`} className="link-underline">
                  {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="link-underline">
                  {CONTACT.phone}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
