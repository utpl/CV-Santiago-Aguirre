import { skillCategories, otherTechnologies } from '@/lib/data';
import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { SkillBadge } from '@/components/ui/skill-badge';

export function Skills() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      red: "from-red-500 to-red-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color];
  };

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Habilidades Técnicas" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${getColorClasses(category.color)} text-white rounded-lg`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <ProgressBar value={skill.level} color={category.color} />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Otras Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {otherTechnologies.map((tech, idx) => (
              <SkillBadge key={idx} skill={tech} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
