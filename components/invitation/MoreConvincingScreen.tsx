import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';
import { wedding } from '@/data/wedding';
import Image from 'next/image';

export function MoreConvincingScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="centered-content compact-content">
    <p className="eyebrow">Apparently, we need a stronger case</p><h2 className="display-title">YOU REALLY NEED MORE CONVINCING?! <span aria-hidden="true">😭</span></h2><p className="script-line">Okay, we came prepared.</p>
    <figure className="cat-placeholder" aria-label="Placeholder for a funny unimpressed, crossed-arms cat visual">{wedding.visuals.catImage.src ? <Image src={wedding.visuals.catImage.src} alt={wedding.visuals.catImage.alt} fill sizes="220px" /> : <span className="cat-face" aria-hidden="true">😾</span>}{!wedding.visuals.catImage.src && <figcaption>Unimpressed cat visual</figcaption>}</figure>
    <p className="body-copy">Fine. We brought evidence.</p><GoldButton onClick={onContinue}>Show me&nbsp; →</GoldButton>
  </div><span className="screen-index" aria-hidden="true">02 / 06</span></OrnateFrame></section>;
}
