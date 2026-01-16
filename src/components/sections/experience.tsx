import { experiences } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { ICONS } from '@/lib/constants';

const { Briefcase, Calendar } = ICONS;

export function Experience() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Experiencia Profesional" />

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-20">
                <div className="absolute left-[-8px] md:left-[24px] top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.position}</h3>
                      <p className="text-blue-600 font-semibold flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Actual
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="text-slate-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
