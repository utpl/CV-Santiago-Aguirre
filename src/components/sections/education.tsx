import { education, certifications } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { ICONS } from '@/lib/constants';

const { GraduationCap, Award, Calendar } = ICONS;

export function Education() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Formación Académica" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className={edu.highlight ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300' : ''}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${edu.highlight ? 'bg-blue-600' : 'bg-slate-600'} text-white rounded-lg`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-slate-700 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                    {edu.status === "En curso" && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                        En curso
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader title="Certificaciones" icon={<Award className="w-6 h-6 text-blue-600" />} />

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <Card key={idx}>
              <h4 className="font-bold text-slate-900 mb-2">{cert.title}</h4>
              <p className="text-sm text-slate-600">{cert.organization}</p>
              <p className="text-sm text-blue-600 font-semibold mt-1">{cert.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
