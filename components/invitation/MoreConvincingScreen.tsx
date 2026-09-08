import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

export function MoreConvincingScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="centered-content compact-content">
    <h2 className="display-title dramatic-title">YOU REALLY NEED <strong>MORE CONVINCING?!</strong></h2>
    <div className="angry-animation"><span aria-hidden="true">😠</span><span className="sr-only">Angry face</span></div>
    <p className="script-line prepared-line">Okay, we came prepared. <span aria-hidden="true">🤦🏾‍♀️</span></p>
    <p className="body-copy">Fine. We brought evidence.</p><GoldButton onClick={onContinue}>Show me&nbsp; →</GoldButton>
  </div><span className="screen-index" aria-hidden="true">02 / 06</span></OrnateFrame></section>;
}
