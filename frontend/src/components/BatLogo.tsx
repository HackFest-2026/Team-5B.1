import "@/bat-logo.css";

interface BatLogoProps {
  size?: number;
  className?: string;
}

export function BatLogo({ size = 40, className = "" }: BatLogoProps) {
  return (
    <span
      aria-label="Piko bat logo"
      className={`bat-logo ${className}`.trim()}
      role="img"
      style={{ "--bat-logo-size": `${size}px` } as React.CSSProperties}
    >
      <span aria-hidden="true" className="bat-logo__sprite" />
    </span>
  );
}
