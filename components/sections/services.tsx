import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "@/components/ui/icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-line bg-sand py-20 sm:py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="02 — Services"
            title="What we build"
            intro="From a single room to the whole house, the work begins with how you want to live."
          />
          <Button href="/#contact" variant="secondary" className="mt-8">
            Talk through your project
          </Button>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/#contact"
                className="group grid gap-4 border-b border-line py-6 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6 sm:py-7"
              >
                <span className="font-display text-xl leading-none text-brand">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
