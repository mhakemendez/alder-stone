type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : ""} ${className}`}
    >
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className={`h-px w-8 ${isDark ? "bg-gold" : "bg-brand"}`}
          aria-hidden="true"
        />
        <p
          className={`text-xs font-medium uppercase tracking-label ${
            isDark ? "text-gold" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className={`mt-5 text-balance font-display text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl ${
          isDark ? "text-canvas" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {intro ? (
        <p
          className={`mt-5 max-w-2xl text-pretty text-base leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-canvas/75" : "text-muted"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
