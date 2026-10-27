import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "outline-light"
  | "text";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-strong focus-visible:outline-focus",
  secondary:
    "border border-line text-ink hover:border-brand hover:text-brand focus-visible:outline-focus",
  light:
    "bg-gold text-ink hover:bg-canvas focus-visible:outline-gold",
  "outline-light":
    "border border-white/40 text-canvas hover:border-gold hover:text-gold focus-visible:outline-gold",
  text:
    "min-h-0 px-0 text-brand hover:text-brand-strong focus-visible:outline-focus",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  ariaLabel,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-card px-6 text-sm font-medium tracking-wide transition-colors duration-200";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
