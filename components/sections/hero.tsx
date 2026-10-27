import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Phone } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="lg:col-span-6 lg:pb-6 xl:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <p className="text-xs font-medium uppercase tracking-label text-brand">
              {site.tagline} · {site.city}, {site.region}
            </p>
          </div>

          <h1 className="mt-6 text-balance font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
            Spaces that feel like they&apos;ve always belonged.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A design-build studio for kitchens, baths, additions, and whole-home
            transformations in {site.city}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/#work" variant="secondary">
              View our work
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-xs uppercase tracking-label text-muted">
            <span>Design-build</span>
            <span>Licensed &amp; insured</span>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-sand sm:aspect-[16/11] lg:aspect-[3/2]">
            <Image
              src="/images/hero.jpg"
              alt="Modern home exterior with warm wood cladding, large windows, and mature trees"
              fill
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              preload
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-card bg-canvas px-4 py-3 text-xs uppercase tracking-label text-ink-soft sm:bottom-6 sm:left-6 sm:right-auto sm:gap-10">
            <span className="whitespace-nowrap">Recent work</span>
            <Link
              href="/#work"
              className="inline-flex items-center gap-1 whitespace-nowrap text-brand transition-colors hover:text-brand-strong"
            >
              Garden Residence
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
