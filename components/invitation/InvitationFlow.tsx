import { useEffect, useRef, useState } from 'react';
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
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const resumeMusicRef = useRef(false);
  useEffect(() => {
    const pauseForBackground = () => {
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        resumeMusicRef.current = true;
        audio.pause();
      }
    };
    const resumeFromBackground = () => {
      const audio = audioRef.current;
      if (audio && resumeMusicRef.current && !document.hidden) {
        resumeMusicRef.current = false;
        void audio.play().catch(() => undefined);
      }
    };
    const handleVisibility = () => document.hidden ? pauseForBackground() : resumeFromBackground();
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', pauseForBackground);
    window.addEventListener('pageshow', resumeFromBackground);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', pauseForBackground);
      window.removeEventListener('pageshow', resumeFromBackground);
    };
  }, []);
  const next = (screen: number) => { onScreenChange(screen); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goBack = () => { if (activeScreen === 1) setEnvelopeVersion((version) => version + 1); next(Math.max(0, activeScreen - 1)); };
  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    audio.volume = 0;
    void audio.play().then(() => {
      setMusicStarted(true);
      const start = performance.now();
      const fadeIn = (now: number) => {
        audio.volume = Math.min(.14, ((now - start) / 1800) * .14);
        if (audio.volume < .14) requestAnimationFrame(fadeIn);
      };
      requestAnimationFrame(fadeIn);
    }).catch(() => undefined);
  };
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMusicMuted(audio.muted);
  };
  const closeInvitation = () => {
    const audio = audioRef.current;
    resumeMusicRef.current = false;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setMusicStarted(false);
    window.close();
    window.setTimeout(() => {
      if (window.history.length > 1) window.history.back();
      else window.location.replace('about:blank');
    }, 120);
  };
  const submitRsvp = async (data: RsvpData) => {
    const response = await fetch('/.netlify/functions/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error('RSVP submission failed');
    setRsvp(data); next(6);
  };
  return <div className="screen-stack"><audio ref={audioRef} src="/wedding-music.mp3" loop preload="metadata"><track kind="captions" src="/wedding-music-captions.vtt" srcLang="en" label="Instrumental music" default /></audio>{musicStarted && <button className="music-toggle" type="button" onClick={toggleMusic} aria-label={musicMuted ? 'Turn music on' : 'Mute music'} aria-pressed={musicMuted}><span aria-hidden="true">{musicMuted ? '♪' : '♫'}</span>{musicMuted ? 'Music off' : 'Music on'}</button>}{activeScreen > 0 && <BackButton onClick={goBack} />}<StoryProgress activeScreen={activeScreen} /><EnvelopeScreen key={envelopeVersion} active={activeScreen === 0} onOpenStart={startMusic} onOpened={() => next(1)} /><PleaseComeScreen active={activeScreen === 1} onContinue={() => next(2)} /><MoreConvincingScreen active={activeScreen === 2} onContinue={() => next(3)} /><EvidenceScreen active={activeScreen === 3} onContinue={() => next(4)} /><FormalInvitationScreen active={activeScreen === 4} onContinue={() => next(5)} /><RsvpScreen active={activeScreen === 5} onSubmit={submitRsvp} /><ConfirmationScreen active={activeScreen === 6} rsvp={rsvp} onClose={closeInvitation} /></div>;
}
