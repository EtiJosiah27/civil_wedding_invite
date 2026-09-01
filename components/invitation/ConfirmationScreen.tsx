import { OrnateFrame } from './OrnateFrame';
import type { RsvpData } from './RsvpScreen';

export function ConfirmationScreen({ active, rsvp }: { active: boolean; rsvp: RsvpData | null }) {
  if (!rsvp) return null;
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="centered-content confirmation-content">
    <p className="confirmation-mark" aria-hidden="true">{rsvp.attending ? '🎉' : '♡'}</p><h2 className="display-title">{rsvp.attending ? 'YAY!' : 'WE’LL MISS YOU.'}</h2><p className="script-line">{rsvp.attending ? 'We can’t wait to celebrate with you.' : 'Thank you for letting us know. We’ll be thinking of you.'}</p>
    <div className="rsvp-summary"><p><span>Guest</span>{rsvp.name}</p><p><span>Response</span>{rsvp.attending ? 'Joyfully attending' : 'Unable to attend'}</p>{rsvp.attending && <p><span>Party size</span>{rsvp.partySize}</p>}{rsvp.song && <p><span>Song request</span>{rsvp.song}</p>}</div><p className="tiny-note">Your response is ready to be connected to an RSVP service later.</p>
  </div><span className="screen-index" aria-hidden="true">06 / 06</span></OrnateFrame></section>;
}
