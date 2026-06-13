import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/contact";

const CtaBand = () => {
  return (
    <section className="py-20 lg:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Let's work together
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-foreground leading-tight mb-6">
            Ready to bring clarity to your{" "}
            <span className="text-gradient italic">finances?</span>
          </h2>
          <p className="text-secondary-foreground/65 text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Whether you need a trusted advisor, accounting support, or a qualified
            CPA for your team, I am one message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
              <a href="#contact">
                Get in Touch
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-8" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
