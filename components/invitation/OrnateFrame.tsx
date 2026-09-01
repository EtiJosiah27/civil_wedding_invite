import type { ReactNode } from 'react';

export function OrnateFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`ornate-frame ${className}`}>{children}</div>;
}
