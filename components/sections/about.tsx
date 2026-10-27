import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { studioStats } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-line py-20 sm:py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-sand">
            <Image
              src="/images/studio.jpg"
              alt="Studio interior with warm timber, plaster walls, and a quiet material palette"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <SectionHeading
            eyebrow="04 — About"
            title="Built on craft, not volume."
            intro="We are a small design-build studio with a simple belief: a home should get better with time."
          />

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
            That means listening before drawing, choosing materials for how they
            age, and keeping the same people close from the first conversation to
            the final walkthrough. The result is a home that feels settled,
            useful, and entirely your own.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {studioStats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-display text-xl leading-tight text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-5 text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
