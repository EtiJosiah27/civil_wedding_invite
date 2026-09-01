import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

export type RsvpData = { name: string; attending: boolean; partySize: string; dietary: string; message: string; song: string };

export function RsvpScreen({ active, onSubmit }: { active: boolean; onSubmit: (data: RsvpData) => void }) {
  function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const text = (key: string, fallback = '') => { const value = form.get(key); return typeof value === 'string' ? value : fallback; };
    onSubmit({ name: text('name'), attending: form.get('attendance') === 'yes', partySize: text('partySize', '1'), dietary: text('dietary'), message: text('message'), song: text('song') });
  }
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="rsvp-content">
    <p className="eyebrow">The moment of truth</p><h2 className="display-title">SO… ARE YOU COMING? <span aria-hidden="true">💛</span></h2><p className="body-copy">You made it this far. We’re taking that as a good sign.</p>
    <form className="rsvp-form" onSubmit={submit}><label>Guest name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <fieldset><legend>Will you be joining us?</legend><label className="radio-card"><input type="radio" name="attendance" value="yes" defaultChecked /><span>Absolutely! 🎉</span></label><label className="radio-card"><input type="radio" name="attendance" value="no" /><span>Sadly, I can’t make it</span></label></fieldset>
      <label>Number of guests / party size<input name="partySize" type="number" min="1" max="20" defaultValue="1" inputMode="numeric" /></label><label>Dietary restrictions<textarea name="dietary" rows={2} placeholder="Allergies or dietary needs" /></label>
      <label>Optional message for the couple<textarea name="message" rows={3} placeholder="Leave us a little note" /></label><label>Give us a song to play <span>(optional)</span><input name="song" placeholder="Song title — Artist" /></label><GoldButton type="submit">Send my RSVP&nbsp; →</GoldButton>
    </form>
  </div><span className="screen-index" aria-hidden="true">05 / 06</span></OrnateFrame></section>;
}
