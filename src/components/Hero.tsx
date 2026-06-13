import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/Founder.jpeg";
import { getWhatsAppLink } from "@/lib/contact";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 lg:px-8 pt-28 pb-12 lg:pt-0 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pr-12">
          <div className="inline-flex items-center gap-2 w-fit mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-secondary-foreground/70 text-xs uppercase tracking-[0.2em] font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] font-semibold text-secondary-foreground leading-[0.95] mb-6 animate-fade-up animation-delay-100">
            Martin
            <br />
            <span className="text-gradient italic">Koyih</span>
          </h1>

          <p className="text-lg lg:text-xl text-secondary-foreground/75 max-w-md leading-relaxed mb-2 animate-fade-up animation-delay-200">
            Certified Public Accountant & Founder of{" "}
            <a
              href="https://ayawin.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4 font-medium"
            >
              Ayawin Stock Solution
            </a>
          </p>

          <p className="text-secondary-foreground/55 text-sm lg:text-base max-w-md mb-10 animate-fade-up animation-delay-200">
            Tax planning, auditing, stock management, and business advisory for
            organizations that value precision, compliance, and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animation-delay-300">
            <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
              <a href="#contact">
                Start a Conversation
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-8" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 hero-image-mask">
            <img
              src={heroPhoto}
              alt="Martin Koyih, Certified Public Accountant"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent" />
          </div>
          <div className="absolute bottom-12 left-0 -translate-x-1/2 bg-card rounded-lg px-6 py-4 shadow-elevated border border-border/60 hidden xl:block">
            <p className="font-display text-3xl font-semibold text-foreground">CPA (K)</p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-0.5">ICPAK Member</p>
          </div>
        </div>

        <div className="lg:hidden px-4 pb-8 animate-fade-up animation-delay-300">
          <div className="rounded-xl overflow-hidden aspect-[4/3] max-h-72 shadow-elevated">
            <img
              src={heroPhoto}
              alt="Martin Koyih, Certified Public Accountant"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
