import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { attributes, education, experience } from "@/lib/portfolio-data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="03"
          label="Experience"
          title="Hands-on roles in"
          highlight="inventory and stock control"
          description="Progressive experience across auditing, bookkeeping, and procurement in retail, hospitality, and wine distribution."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-10">
            {experience.map((item) => (
              <div key={`${item.title}-${item.organization}`} className="relative pl-10">
                <span className="absolute left-0 top-2 bottom-0 w-px bg-border" />
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                  {item.period}
                </p>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {item.organization}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border/60 bg-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>
              <ul className="space-y-5">
                {education.map((item) => (
                  <li key={item.title} className="border-b border-border/50 last:border-0 pb-5 last:pb-0">
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {item.period}
                      {item.note ? `, ${item.note}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-secondary p-6 lg:p-8">
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-4">
                Personal Attributes
              </h3>
              <ul className="space-y-3">
                {attributes.map((item) => (
                  <li
                    key={item}
                    className="text-secondary-foreground/75 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
