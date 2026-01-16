import { PERSONAL_INFO } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';

export function About() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Perfil Profesional" />

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed">
            {PERSONAL_INFO.description}
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
