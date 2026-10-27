import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Clock, Mail, MapPin, Phone } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-ink py-20 text-canvas sm:py-24 lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <p className="text-xs font-medium uppercase tracking-label text-gold">
              08 — Start a conversation
            </p>
          </div>

          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl leading-[1.02] tracking-[-0.01em] text-canvas sm:text-5xl lg:text-6xl">
            Let&apos;s talk about your home.
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-7 text-canvas/75 sm:text-base">
            Tell us what you are imagining, what is not working, and how you want
            the house to feel. We will start with a conversation and take it from
            there.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="light" href={site.emailHref}>
              Email the studio
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline-light" href={site.phoneHref}>
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-white/15 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-label text-gold">
              Studio details
            </p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-label text-canvas/50">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 inline-block text-canvas transition-colors hover:text-gold focus-visible:outline-gold"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-label text-canvas/50">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-1 inline-block break-all text-canvas transition-colors hover:text-gold focus-visible:outline-gold"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-label text-canvas/50">
                    Studio
                  </p>
                  <p className="mt-1 text-canvas">
                    {site.city}, {site.region}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-label text-canvas/50">
                    Hours
                  </p>
                  <p className="mt-1 text-canvas">{site.hours}</p>
                </div>
              </li>
            </ul>
            <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-5 text-canvas/60">
              Prefer to write? Include your neighborhood, the rooms involved, and
              a rough timeline. We will reply within two business days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
