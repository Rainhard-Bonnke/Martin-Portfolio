import { ArrowUpRight } from "lucide-react";
import aboutPhoto from "@/assets/martin-koyih-photo.jpeg";
import SectionHeader from "@/components/SectionHeader";

const highlights = [
  "CPA (K) Certified",
  "ICPAK Member",
  "Tax & Audit Specialist",
  "Business Advisory",
  "Stock Management",
  "KRA Compliance",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/40 -skew-x-6 translate-x-24 hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={aboutPhoto}
                  alt="Martin Koyih at work"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-secondary text-secondary-foreground p-6 rounded-lg max-w-[200px] shadow-elevated">
                <p className="font-display text-4xl font-semibold text-primary">5+</p>
                <p className="text-sm text-secondary-foreground/70 mt-1">
                  Years delivering financial clarity to Kenyan businesses
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <SectionHeader
              number="01"
              label="About"
              title="Finance professional built on"
              highlight="trust and precision"
            />

            <blockquote className="border-l-2 border-primary pl-6 mb-8">
              <p className="font-display text-xl lg:text-2xl text-foreground italic leading-relaxed">
                "Numbers tell a story. My job is to make sure yours leads to
                confident decisions."
              </p>
            </blockquote>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                I am Martin Koyih, a Certified Public Accountant and member of
                ICPAK. As Founder and Manager of{" "}
                <a
                  href="https://ayawin.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  Ayawin Stock Solution
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                , I help individuals and businesses navigate accounting, taxation,
                and financial management with clarity.
              </p>
              <p>
                From audit and tax planning to payroll and financial reporting, I
                bring hands-on expertise and a practical understanding of what
                Kenyan organizations need to stay compliant and grow sustainably.
              </p>
              <p>
                Open to consulting roles, advisory engagements, and partnerships
                with organizations that value ethical, results-driven financial
                leadership.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground rounded-full border border-border/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
