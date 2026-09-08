import { useEffect, useState } from 'react';
import { wedding } from '@/data/wedding';
import { GoldButton } from './GoldButton';
import { OrnateFrame } from './OrnateFrame';

const details = [['Date', wedding.date], ['Time', wedding.time], ['Venue / address', wedding.address], ['Dress code', wedding.dressCode], ['Additional information', wedding.additionalInformation]] as const;
const transferEmail = 'etijosiah27@gmail.com';

export function FormalInvitationScreen({ active, onContinue }: { active: boolean; onContinue: () => void }) {
  const [giftsOpen, setGiftsOpen] = useState(false);
  const [showTransferNote, setShowTransferNote] = useState(false);
  const [transferCopied, setTransferCopied] = useState(false);

  const showTransferDetails = async () => {
    setShowTransferNote(true);
    try {
      await navigator.clipboard.writeText(transferEmail);
      setTransferCopied(true);
    } catch {
      setTransferCopied(false);
    }
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setGiftsOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return <section className={`screen content-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}><OrnateFrame><article className="formal-content">
    <div className="invitation-intro">
      <h2 className="formal-heading"><span>You’re invited to our</span><strong>Civil Wedding</strong></h2>
    </div>
    <div className="details-panel">
      <h3 className="details-heading">THE DETAILS</h3>
      <dl className="details-grid">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
    <div className="invitation-actions"><GoldButton className="gift-button" onClick={() => { setShowTransferNote(false); setTransferCopied(false); setGiftsOpen(true); }}>Gifts</GoldButton><GoldButton onClick={onContinue}>RSVP&nbsp; →</GoldButton></div>
    {giftsOpen && <div className="gift-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setGiftsOpen(false); }}><dialog className="gift-modal" open aria-labelledby="gift-modal-title">
      <button className="gift-modal-close" type="button" onClick={() => setGiftsOpen(false)} aria-label="Close gifts options">×</button>
      <p className="eyebrow">With love</p><h3 id="gift-modal-title">Gifts</h3><p>Your presence is the greatest gift. If you’d still like to give something, you can choose an option below.</p>
      <div className="gift-options"><a className="gold-button" href="https://www.amazon.ca/wedding/guest-view/3PMNPVZPB52AZ" target="_blank" rel="noreferrer">Amazon Registry&nbsp; →</a><GoldButton onClick={() => void showTransferDetails()}>Interac e-Transfer</GoldButton></div>
      {showTransferNote && <output className="transfer-note">{transferCopied ? 'Email copied to your clipboard' : 'Send your e-transfer to'}<strong>{transferEmail}</strong></output>}
    </dialog></div>}
  </article><span className="screen-index" aria-hidden="true">04 / 06</span></OrnateFrame></section>;
}
