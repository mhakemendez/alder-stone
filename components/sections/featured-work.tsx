import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "@/components/ui/icons";
import { projects } from "@/lib/content";

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-line py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="01 — Selected work"
            title="Recent transformations"
            intro="A closer look at the rooms, homes, and details we have had the privilege of shaping."
          />

          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-strong"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className={project.span === "wide" ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <Link href="/#contact" className="group block">
                <div
                  className={`relative overflow-hidden rounded-card bg-sand ${
                    project.span === "wide" ? "aspect-[4/3]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={
                      project.span === "wide"
                        ? "(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                        : "(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-label text-brand">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <p className="shrink-0 pt-1 text-xs text-muted">
                    {project.location} · {project.year}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
