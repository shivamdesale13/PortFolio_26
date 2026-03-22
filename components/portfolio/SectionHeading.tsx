type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={`section-heading${className ? ` ${className}` : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
