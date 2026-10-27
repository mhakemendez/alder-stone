import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Mail, MapPin, Phone } from "@/components/ui/icons";
import { services } from "@/lib/content";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl leading-none tracking-[-0.01em] text-ink"
              aria-label={`${site.name} home`}
            >
              {site.name}
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              A design-build studio creating warm, considered homes in{" "}
              {site.city}, {site.region}.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm text-ink-soft transition-colors hover:text-brand"
              >
                Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.social.houzz}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm text-ink-soft transition-colors hover:text-brand"
              >
                Houzz
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-label text-muted">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-label text-muted">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/#services"
                    className="inline-flex min-h-11 items-center text-sm text-ink-soft transition-colors hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-label text-muted">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ink-soft">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {site.city}, {site.region}
                </span>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-5 text-muted">{site.hours}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>Licensed &amp; insured · {site.city}, {site.region}</p>
        </div>
      </Container>
    </footer>
  );
}
