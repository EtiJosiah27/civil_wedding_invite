import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';
import { wedding } from '@/data/wedding';
import Image from 'next/image';

export function PleaseComeScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return (
    <section className={`screen plea-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}>
      <OrnateFrame>
        <div className="plea-content">
          <p className="eyebrow">The official announcement</p>
          <h1 className="plea-title">WE’RE GETTING MARRIED…<em>AND WE REALLY WANT YOU THERE</em></h1>
          <p className="plea-line">Pleaseee....</p>
          <figure className="pleading-placeholder" aria-label="Placeholder for a funny, cute pleading photo">
            {wedding.visuals.pleadingImage.src ? <Image src={wedding.visuals.pleadingImage.src} alt={wedding.visuals.pleadingImage.alt} fill sizes="260px" /> : <span className="placeholder-face" aria-hidden="true">🥺</span>}
            {!wedding.visuals.pleadingImage.src && <figcaption className="placeholder-label">Your pleading visual goes here</figcaption>}
          </figure>
          <GoldButton onClick={onContinue}>Keep going&nbsp; →</GoldButton>
        </div>
        <span className="screen-index" aria-hidden="true">01 / 06</span>
      </OrnateFrame>
    </section>
  );
}
