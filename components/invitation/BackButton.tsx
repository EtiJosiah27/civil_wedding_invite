export function BackButton({ onClick }: { onClick: () => void }) {
  return <button className="back-button" onClick={onClick} aria-label="Go back to the previous invitation screen"><span aria-hidden="true">←</span> Back</button>;
}
