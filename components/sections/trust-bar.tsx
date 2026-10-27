import { Container } from "@/components/ui/container";
import { Check } from "@/components/ui/icons";
import { trustItems } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Why work with us" className="border-b border-line bg-surface">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {trustItems.map((item) => (
          <div key={item.title} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Check className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
