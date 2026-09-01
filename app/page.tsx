'use client';

import { useState } from 'react';
import { InvitationFlow } from '@/components/invitation/InvitationFlow';

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0);
  return <main className="invitation-shell"><InvitationFlow activeScreen={activeScreen} onScreenChange={setActiveScreen} /></main>;
}
