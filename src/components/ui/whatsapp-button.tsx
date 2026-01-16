"use client";

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "0993954787",
  message = "Hola Hermel, me gustaría conversar sobre oportunidades laborales"
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-14 right-16 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Efecto de sombra/pulse */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>

      {/* Botón principal */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:rotate-12">
        <MessageCircle className="w-6 h-6" />

        {/* Burbuja de mensaje opcional */}
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          !
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Conversemos!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
      </div>
    </button>
  );
}
