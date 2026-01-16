interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
}

export function ProgressBar({ value, color = 'blue', className = '' }: ProgressBarProps) {
  const colorClasses = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
    red: 'bg-gradient-to-r from-red-500 to-red-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600'
  };

  return (
    <div className={`w-full bg-slate-200 rounded-full h-2 ${className}`}>
      <div
        className={`h-2 rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
