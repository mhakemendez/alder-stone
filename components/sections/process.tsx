import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-ink py-20 text-canvas sm:py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading
            tone="dark"
            eyebrow="03 — Process"
            title="A calm, deliberate process"
            intro="Good buildings come from good decisions. Our process makes room for both."
          />
          <p className="mt-8 max-w-sm text-sm leading-6 text-canvas/70">
            You will always know what is happening, who is responsible, and what
            comes next.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ol className="border-t border-white/15">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8"
              >
                <span className="font-display text-xl leading-none text-gold">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-canvas">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-canvas/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
