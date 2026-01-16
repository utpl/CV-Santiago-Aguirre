import { CONTACT_INFO, ICONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const { Mail, Phone } = ICONS;

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en trabajar juntos?</h2>
          <p className="text-blue-200 mb-6">Estoy disponible para nuevas oportunidades y proyectos desafiantes</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${CONTACT_INFO.email}`} variant="secondary">
              <Mail className="w-5 h-5" />
              {CONTACT_INFO.email}
            </Button>
            <Button href={`tel:${CONTACT_INFO.phone}`} variant="primary">
              <Phone className="w-5 h-5" />
              {CONTACT_INFO.phone}
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 {CONTACT_INFO.location.split(' - ')[1]}. Todos los derechos reservados.
          </p>
          <p className="text-blue-300/60 text-xs mt-2">
            {CONTACT_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
