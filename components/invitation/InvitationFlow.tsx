import { useState } from 'react';
import { ConfirmationScreen } from './ConfirmationScreen';
import { EnvelopeScreen } from './EnvelopeScreen';
import { EvidenceScreen } from './EvidenceScreen';
import { FormalInvitationScreen } from './FormalInvitationScreen';
import { MoreConvincingScreen } from './MoreConvincingScreen';
import { PleaseComeScreen } from './PleaseComeScreen';
import { RsvpScreen, type RsvpData } from './RsvpScreen';
import { StoryProgress } from './StoryProgress';
import { BackButton } from './BackButton';

type InvitationFlowProps = { activeScreen: number; onScreenChange: (screen: number) => void };
export function InvitationFlow({ activeScreen, onScreenChange }: InvitationFlowProps) {
  const [rsvp, setRsvp] = useState<RsvpData | null>(null);
  const [envelopeVersion, setEnvelopeVersion] = useState(0);
  const next = (screen: number) => { onScreenChange(screen); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goBack = () => { if (activeScreen === 1) setEnvelopeVersion((version) => version + 1); next(Math.max(0, activeScreen - 1)); };
  const submitRsvp = async (data: RsvpData) => {
    const response = await fetch('/api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error('RSVP submission failed');
    setRsvp(data); next(6);
  };
  return <div className="screen-stack">{activeScreen > 0 && <BackButton onClick={goBack} />}<StoryProgress activeScreen={activeScreen} /><EnvelopeScreen key={envelopeVersion} active={activeScreen === 0} onOpened={() => next(1)} /><PleaseComeScreen active={activeScreen === 1} onContinue={() => next(2)} /><MoreConvincingScreen active={activeScreen === 2} onContinue={() => next(3)} /><EvidenceScreen active={activeScreen === 3} onContinue={() => next(4)} /><FormalInvitationScreen active={activeScreen === 4} onContinue={() => next(5)} /><RsvpScreen active={activeScreen === 5} onSubmit={submitRsvp} /><ConfirmationScreen active={activeScreen === 6} rsvp={rsvp} /></div>;
}
