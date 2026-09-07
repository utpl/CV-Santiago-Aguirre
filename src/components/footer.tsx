import { PROFILE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-ink-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-4 text-xs text-mist-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="text-center sm:text-right">
          Construido con Next.js y Tailwind CSS · {PROFILE.location}
        </p>
      </div>
    </footer>
  );
}
