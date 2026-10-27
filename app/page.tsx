import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Faq } from "@/components/sections/faq";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServiceArea } from "@/components/sections/service-area";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <TrustBar />
      <FeaturedWork />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <ContactCta />
    </main>
  );
}
