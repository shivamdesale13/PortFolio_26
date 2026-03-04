type SectionDividerProps = {
  icon: string;
  dots?: number;
};

export default function SectionDivider({ icon, dots = 4 }: SectionDividerProps) {
  const beforeDots = Math.floor(dots / 2);
  const afterDots = dots - beforeDots;

  return (
    <div className="section-divider" aria-hidden="true">
      {Array.from({ length: beforeDots }).map((_, i) => (
        <span key={`before-${i}`} className="divider-dot" />
      ))}
      <span className="divider-icon">{icon}</span>
      {Array.from({ length: afterDots }).map((_, i) => (
        <span key={`after-${i}`} className="divider-dot" />
      ))}
    </div>
  );
}
