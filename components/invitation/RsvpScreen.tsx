import { useState } from 'react';
import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

export type RsvpData = { name: string; attending: boolean; message: string };

export function RsvpScreen({ active, onSubmit }: { active: boolean; onSubmit: (data: RsvpData) => Promise<void> }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const text = (key: string, fallback = '') => { const value = form.get(key); return typeof value === 'string' ? value : fallback; };
    setError(''); setIsSubmitting(true);
    try {
      await onSubmit({ name: text('name'), attending: form.get('attendance') === 'yes', message: text('message') });
    } catch {
      setError('We couldn’t save your RSVP. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  }
  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><div className="rsvp-content">
    <h2 className="display-title rsvp-title">SO… ARE YOU COMING? <span aria-hidden="true">🥹</span></h2>
    <form className="rsvp-form" onSubmit={submit}><label>Guest name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <fieldset><legend>Will you be joining us?</legend><label className="radio-card"><input type="radio" name="attendance" value="yes" defaultChecked /><span>Absolutely! 🎉</span></label><label className="radio-card"><input type="radio" name="attendance" value="no" /><span>Sadly, I can’t make it</span></label></fieldset>
      <label>Optional message for the couple<textarea name="message" rows={3} placeholder="Leave us a little note" /></label>
      {error && <p className="rsvp-error" role="alert">{error}</p>}
      <GoldButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send my RSVP →'}</GoldButton>
    </form>
  </div><span className="screen-index" aria-hidden="true">05 / 06</span></OrnateFrame></section>;
}
