import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-60 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-gold text-burgundy-dark hover:bg-gold-light active:scale-95 shadow-md',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-burgundy-dark active:scale-95',
    ghost: 'text-gold hover:bg-gold/10 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded',
    md: 'px-6 py-3 text-base rounded-md',
    lg: 'px-8 py-4 text-lg rounded-md',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
