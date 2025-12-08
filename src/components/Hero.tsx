import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import martinPhoto from "@/assets/martin-hero-photo.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-2 lg:mb-4 animate-fade-up">
              Martin Koyih,{" "}
              <span className="text-primary">CPA</span>
            </h1>

            {/* Role Badge */}
            <div className="mb-4 lg:mb-6 animate-fade-up animation-delay-100">
              <a 
                href="https://ayawin.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <span className="text-secondary-foreground/90 text-sm sm:text-base font-medium">
                  Founder & Manager at{" "}
                  <span className="text-primary font-semibold">Ayawin Stock Solution</span>
                </span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-8 animate-fade-up animation-delay-200">
              Providing expert financial guidance, tax planning, stock management, and accounting services 
              to help individuals and businesses achieve their financial goals with confidence.
            </p>

            {/* Key Points */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start mb-6 lg:mb-8 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-2 text-secondary-foreground/90">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">ICPAK Certified</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/90">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Tax Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/90">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Stock Expert</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-up animation-delay-400">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#services">
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="tel:+254791259510">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 lg:mt-12 max-w-lg mx-auto lg:mx-0 animate-fade-up animation-delay-500">
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">3+</p>
                <p className="text-secondary-foreground/70 text-xs sm:text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center lg:text-left border-x border-secondary-foreground/20 px-2 sm:px-4">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100+</p>
                <p className="text-secondary-foreground/70 text-xs sm:text-sm mt-1">Clients Served</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-secondary-foreground/70 text-xs sm:text-sm mt-1">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up animation-delay-300 order-first lg:order-last">
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Gold accent border */}
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full" />
              <div className="relative rounded-full overflow-hidden shadow-elevated w-full h-full ring-4 ring-primary/20">
                <img
                  src={martinPhoto}
                  alt="Martin Koyih - Certified Public Accountant"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-4 py-2 lg:px-5 lg:py-3 rounded-full shadow-elevated">
                <p className="font-serif text-sm lg:text-base font-bold text-foreground whitespace-nowrap">CPA (K) • ICPAK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden lg:block">
        <div className="w-6 h-10 border-2 border-secondary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
