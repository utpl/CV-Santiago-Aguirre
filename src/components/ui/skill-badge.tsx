interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export function SkillBadge({ skill, className = '' }: SkillBadgeProps) {
  return (
    <span className={`px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 ${className}`}>
      {skill}
    </span>
  );
}
