import { wedding } from '@/data/wedding';
import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

const details = [['Date', wedding.date], ['Time', wedding.time], ['Venue', wedding.venue], ['Address', wedding.address], ['Dress code', wedding.dressCode], ['Additional information', wedding.additionalInformation]] as const;

export function FormalInvitationScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><article className="formal-content">
    <p className="eyebrow">Now, the real invitation</p><h2 className="formal-heading">WE CAN’T IMAGINE SAYING <strong>“I DO”</strong> WITHOUT YOU THERE.</h2><p className="personal-message">{wedding.personalMessage}</p><div className="gold-divider" aria-hidden="true">❦</div>
    <h3 className="details-heading">THE DETAILS</h3><dl className="details-grid">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><GoldButton onClick={onContinue}>RSVP&nbsp; →</GoldButton>
  </article><span className="screen-index" aria-hidden="true">04 / 06</span></OrnateFrame></section>;
}
