import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';
import { PhotoFrame } from './PhotoFrame';
import { wedding } from '@/data/wedding';

export function EvidenceScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="evidence-content">
    <p className="eyebrow">Exhibit A</p><h2 className="display-title evidence-title"><span className="title-heart" aria-hidden="true">💛</span> WE’RE ADORABLE TOGETHER. <span className="title-heart" aria-hidden="true">💛</span></h2><p className="script-line proof-line"><span>Just look at the proof.</span></p>
    <div className="photo-grid" aria-label="Replaceable couple photo gallery">{wedding.visuals.evidencePhotos.map((photo, index) => <PhotoFrame key={photo.caption} caption={photo.caption ?? ''} src={photo.src} alt={photo.alt} rotation={[-3, 2.5, 1.5, -2][index]} />)}</div>
    <p className="body-copy case-closed">We rest our case.</p><GoldButton onClick={onContinue}>Okay, I’m convinced&nbsp; →</GoldButton>
  </div><span className="screen-index" aria-hidden="true">03 / 06</span></OrnateFrame></section>;
}
