import { useState } from 'react';
import { wedding } from '@/data/wedding';

export function EnvelopeScreen({ active, onOpened }: { active: boolean; onOpened: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  function openEnvelope() {
    if (isOpen) return;
    setIsOpen(true);
    window.setTimeout(onOpened, 950);
  }

  return (
    <section className={`screen envelope-screen ${active ? 'is-active' : ''}`} aria-hidden={!active} inert={!active}>
      <div className="envelope-stage">
        <p className="eyebrow envelope-kicker">A little something for you</p>
        <button className="envelope-button" onClick={openEnvelope} aria-label="Open the wedding invitation envelope" disabled={!active || isOpen}>
          <div className={`envelope ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
            <div className="envelope-back" />
            <div className="envelope-flap" />
            <svg className="flourish left" viewBox="0 0 150 70" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 64C34 62 36 28 70 25c25-2 32 18 23 31M27 52c-3-14 3-26 17-35M45 37c-12 0-19-5-23-15M62 27c-4-11-2-20 5-25M78 27c7-8 16-10 28-7" /><path d="M33 45c-8-3-14-1-20 4M48 34c-1-8 2-15 9-21M72 25c4-8 11-13 21-15" /></svg>
            <svg className="flourish right" viewBox="0 0 150 70" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 64C34 62 36 28 70 25c25-2 32 18 23 31M27 52c-3-14 3-26 17-35M45 37c-12 0-19-5-23-15M62 27c-4-11-2-20 5-25M78 27c7-8 16-10 28-7" /><path d="M33 45c-8-3-14-1-20 4M48 34c-1-8 2-15 9-21M72 25c4-8 11-13 21-15" /></svg>
            <div className="envelope-front" />
            <p className="envelope-names">{wedding.coupleNames}</p>
            <div className="seal" />
          </div>
        </button>
      </div>
    </section>
  );
}
