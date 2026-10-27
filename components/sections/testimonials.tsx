import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      aria-label="Client testimonials"
      className="border-b border-line bg-sand py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="05 — In their words"
          title="The measure of a good project"
          intro="The best compliment is a client who would do it all again."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-card border border-line bg-canvas p-6 sm:p-8"
            >
              <blockquote className="font-display text-xl leading-8 text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-muted">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
