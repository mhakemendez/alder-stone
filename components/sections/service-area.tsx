import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { MapPin } from "@/components/ui/icons";
import { serviceAreas } from "@/lib/content";
import { site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="border-b border-line py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="06 — Service area"
            title="Serving Portland and the surrounding communities."
            intro="We take on a limited number of projects each year so every home gets the attention it deserves."
          />
        </div>

        <div className="lg:col-span-5">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {area}
              </li>
            ))}
          </ul>
          <Button href="/#contact" variant="secondary" className="mt-8">
            Book a consultation
          </Button>
          <p className="mt-4 text-xs text-muted">{site.hours}</p>
        </div>
      </Container>
    </section>
  );
}
