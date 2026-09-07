import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/site';

const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="no-print group fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-ink-line bg-ink-card/90 py-3 pl-3 pr-4 shadow-lg backdrop-blur transition-all hover:border-gold/40 sm:bottom-8 sm:right-8"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:scale-105">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="hidden text-sm font-medium text-mist sm:inline">
        Conversemos
      </span>
    </a>
  );
}
