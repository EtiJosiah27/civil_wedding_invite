import type { ButtonHTMLAttributes, ReactNode } from 'react';

type GoldButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function GoldButton({ children, className = '', ...props }: GoldButtonProps) {
  return <button className={`gold-button ${className}`} {...props}>{children}</button>;
}
