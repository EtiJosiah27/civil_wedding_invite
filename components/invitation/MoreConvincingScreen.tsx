import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';
import { wedding } from '@/data/wedding';
import Image from 'next/image';

export function MoreConvincingScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="centered-content compact-content">
    <h2 className="display-title dramatic-title">YOU REALLY NEED <strong>MORE CONVINCING?!</strong><span aria-hidden="true">👀</span></h2><p className="script-line">Okay, we came prepared.</p>
    <figure className="reaction-placeholder">{wedding.visuals.convincingImage.src ? <Image src={wedding.visuals.convincingImage.src} alt={wedding.visuals.convincingImage.alt} fill sizes="260px" /> : <span className="reaction-face" aria-hidden="true">👉</span>}{!wedding.visuals.convincingImage.src && <figcaption>Pointing reaction visual</figcaption>}</figure>
    <p className="body-copy">Fine. We brought evidence.</p><GoldButton onClick={onContinue}>Show me&nbsp; →</GoldButton>
  </div><span className="screen-index" aria-hidden="true">02 / 06</span></OrnateFrame></section>;
}
