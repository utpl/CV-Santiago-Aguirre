"use client";

import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export function DownloadCV() {
  const handleDownload = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a');
    link.href = '/cv-hermel-aguirre.pdf'; // Ruta al PDF en la carpeta public
    link.download = 'CV-Hermel-Aguirre.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿Interesado en mi perfil completo?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Descarga mi currículum vitae en formato PDF para conocer más detalles sobre mi experiencia,
              habilidades técnicas y trayectoria profesional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </Button>

            <div className="text-sm text-slate-500 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              PDF • 1 página • Español
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-400">
              Última actualización: Diciembre 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
