type IconProps = {
  className?: string;
};

function iconBase(className = "") {
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M7.5 3.5h2l1 4-1.6 1.4a14 14 0 0 0 6.2 6.2l1.4-1.6 4 1v2a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function Menu({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function MapPin({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Clock({ className }: IconProps) {
  return (
    <svg {...iconBase(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
