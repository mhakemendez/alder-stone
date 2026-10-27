import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Phone } from "@/components/ui/icons";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <Container className="flex h-20 items-center justify-between gap-4 xl:gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-3"
          aria-label={`${site.name} home`}
        >
          <span className="whitespace-nowrap font-display text-2xl leading-none tracking-[-0.01em] text-ink">
            {site.name}
          </span>
          <span className="hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-label text-muted sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-ink-soft transition-colors duration-200 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
          <a
            href={site.phoneHref}
            className="hidden min-h-11 items-center gap-2 whitespace-nowrap text-sm text-ink-soft transition-colors duration-200 hover:text-brand xl:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button href="/#contact">Start a project</Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
