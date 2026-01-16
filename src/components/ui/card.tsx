interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-md transition-shadow' : '';

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
