interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeader = ({
  number,
  label,
  title,
  highlight,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 lg:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="font-mono text-xs text-primary tracking-widest">{number}</span>
        <span className="h-px w-8 bg-primary/40" />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-primary" : "text-primary"
          }`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-secondary-foreground" : "text-foreground"
        }`}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient italic">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base lg:text-lg leading-relaxed ${
            light ? "text-secondary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
