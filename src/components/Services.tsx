import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/lib/portfolio-data";

const Services = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="02"
          label="Skills"
          title="Stock control expertise across"
          highlight="the full inventory cycle"
          description="From physical stock-taking and reconciliation to procurement support and ERP-based record keeping."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`group relative rounded-xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                skill.featured
                  ? "bg-secondary text-secondary-foreground sm:col-span-2 lg:col-span-1 lg:row-span-1"
                  : "bg-card border border-border/60 hover:border-primary/25 hover:shadow-elevated"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold mb-2 ${
                  skill.featured ? "text-secondary-foreground" : "text-foreground"
                }`}
              >
                {skill.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  skill.featured ? "text-secondary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {skill.description}
              </p>
              <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
