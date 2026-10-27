import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Plus } from "@/components/ui/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-line py-20 sm:py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="07 — Good questions"
            title="Good questions"
            intro="A few things worth knowing before we begin."
          />
        </div>

        <div className="lg:col-span-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-line py-2 first:border-t"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-4 pr-10 text-sm leading-6 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
