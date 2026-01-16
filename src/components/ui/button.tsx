// src/components/ui/button.tsx

import Link from 'next/link';
import * as React from 'react';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  external?: boolean;
  asChild?: boolean;
  onClick?: () => void;
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  external = false,
  asChild = false,
  onClick
}: ButtonProps) {
  // Clases base
  const baseClasses = "font-medium transition-all hover:scale-105 inline-flex items-center gap-2";

  // Tamaños
  const sizes = {
    default: "px-5 py-2.5 rounded-lg",
    sm: "px-3 py-1.5 text-sm rounded-md",
    lg: "px-6 py-3 text-lg rounded-xl",
    icon: "p-2 rounded-full w-10 h-10"
  };

  // Variantes
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    secondary: "bg-white text-slate-900 hover:bg-blue-50",
    outline: "border border-white/30 hover:bg-white/10 text-white",
    ghost: "text-white hover:bg-white/10"
  };

  const buttonClasses = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

  if (asChild) {
    const firstChild = children as React.ReactElement;

    return React.cloneElement(firstChild, {
      className: `${firstChild.props.className || ''} ${buttonClasses}`.trim()
    });
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}