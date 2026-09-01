import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';

export function PhotoFrame({ caption, rotation = 0, src, alt, children }: { caption: string; rotation?: number; src?: string | null; alt?: string; children?: ReactNode }) {
  return <figure className="photo-frame" style={{ '--rotation': `${rotation}deg` } as CSSProperties}><div className="photo-slot">{src ? <Image src={src} alt={alt ?? ''} fill sizes="(max-width: 700px) 42vw, 270px" /> : children ?? <span aria-hidden="true">Add photo</span>}</div><figcaption>{caption}</figcaption></figure>;
}
