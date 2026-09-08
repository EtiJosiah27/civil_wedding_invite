import { wedding } from '@/data/wedding';
import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

const details = [['Date', wedding.date], ['Time', wedding.time], ['Venue / address', wedding.address], ['Dress code', wedding.dressCode], ['Additional information', wedding.additionalInformation]] as const;

export function FormalInvitationScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><article className="formal-content">
    <div className="invitation-intro">
      <h2 className="formal-heading"><span>You’re invited to our</span><strong>Civil Wedding</strong></h2>
    </div>
    <div className="details-panel">
      <h3 className="details-heading">THE DETAILS</h3>
      <dl className="details-grid">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
    <GoldButton onClick={onContinue}>RSVP&nbsp; →</GoldButton>
  </article><span className="screen-index" aria-hidden="true">04 / 06</span></OrnateFrame></section>;
}
