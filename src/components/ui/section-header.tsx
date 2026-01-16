interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
      <div className="w-1 h-10 bg-blue-600 rounded"></div>
      {icon}
      {title}
    </h2>
  );
}
