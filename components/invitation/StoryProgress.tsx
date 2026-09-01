const labels = ['Please come', 'More convincing', 'The evidence', 'Invitation details', 'RSVP', 'Confirmation'];

export function StoryProgress({ activeScreen }: { activeScreen: number }) {
  if (activeScreen < 1) return null;
  return (
    <nav className="story-progress" aria-label="Invitation progress">
      <span className="sr-only">Step {activeScreen} of 6: {labels[activeScreen - 1]}</span>
      <div aria-hidden="true">{labels.map((label, index) => <i className={index + 1 <= activeScreen ? 'is-reached' : ''} key={label} />)}</div>
    </nav>
  );
}
