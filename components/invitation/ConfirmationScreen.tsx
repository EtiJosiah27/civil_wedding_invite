import { OrnateFrame } from './OrnateFrame';
import { GoldButton } from './GoldButton';
import type { RsvpData } from './RsvpScreen';

export function ConfirmationScreen({ active, rsvp, onClose }: { active: boolean; rsvp: RsvpData | null; onClose: () => void }) {
  if (!rsvp) return null;
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="centered-content confirmation-content">
    <p className="confirmation-mark" aria-hidden="true">{rsvp.attending ? '🎉' : '♡'}</p><h2 className={`display-title ${rsvp.attending ? '' : 'confirmation-decline-title'}`}>{rsvp.attending ? 'YAY!' : 'WE’LL MISS YOU.'}</h2><p className="confirmation-message">{rsvp.attending ? 'We can’t wait to celebrate with you.' : 'Thank you for letting us know. We’ll be thinking of you.'}</p>
    <div className="rsvp-summary"><p><span>Guest</span>{rsvp.name}</p><p><span>Response</span>{rsvp.attending ? 'Joyfully attending' : 'Unable to attend'}</p></div><p className="tiny-note">Your RSVP has been received.</p><GoldButton className="close-invitation" onClick={onClose}>Close</GoldButton>
  </div><span className="screen-index" aria-hidden="true">06 / 06</span></OrnateFrame></section>;
}
