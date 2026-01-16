import { languages } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';
import { ProgressBar } from '@/components/ui/progress-bar';

export function Languages() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Idiomas" />

        <div className="grid md:grid-cols-2 gap-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border-2 ${
                idx === 0
                  ? 'bg-gradient-to-br from-blue-50 to-slate-50 border-blue-200'
                  : 'bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{lang.flag}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{lang.name}</h3>
                  <p className="text-blue-600 font-semibold">{lang.level}</p>
                </div>
              </div>
              <ProgressBar value={lang.percentage} color="blue" className="h-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
