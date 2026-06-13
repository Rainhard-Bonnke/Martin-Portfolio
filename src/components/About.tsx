import { Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutPhoto from "@/assets/martin-koyih-photo.jpeg";
import SectionHeader from "@/components/SectionHeader";
import { CV_PATH } from "@/lib/contact";
import { profile, skillTags, languages, ayawin } from "@/lib/portfolio-data";
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
                  alt="Martin Koyih"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-secondary text-secondary-foreground p-6 rounded-lg max-w-[220px] shadow-elevated">
                <p className="font-display text-2xl font-semibold text-primary">Founder</p>
                <p className="text-sm text-secondary-foreground/70 mt-1">
                  {ayawin.name}, serving trusted clients across Kenya
                </p>
              </div>            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <SectionHeader
              number="01"
              label="About"
              title="Inventory professional focused on"
              highlight="accuracy and control"
            />

            <blockquote className="border-l-2 border-primary pl-6 mb-8">
              <p className="font-display text-xl lg:text-2xl text-foreground italic leading-relaxed">
                "{profile.quote}"
              </p>
            </blockquote>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I am Martin Koyih, Founder and Manager of{" "}
                <a
                  href={ayawin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  {ayawin.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                , a growing stock and accounting solutions company with trusted clients
                across Kenya. I bring hands-on experience in stock audits, inventory
                reconciliation, procurement, and ERP-based stock management.
              </p>
              <p>
                {profile.certificationNote} Combined with my BCom in Finance from the
                University of Nairobi, I offer both entrepreneurial leadership and
                practical inventory expertise.
              </p>
              <p>{profile.objective}</p>
            </div>
            <Button variant="outline" className="rounded-full mb-10" asChild>
              <a href={CV_PATH} download>
                <Download className="mr-2 h-4 w-4" />
                Download Full CV
              </a>
            </Button>

            <div className="flex flex-wrap gap-2 mb-6">
              {skillTags.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground rounded-full border border-border/60"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Languages:</span>{" "}
              {languages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
