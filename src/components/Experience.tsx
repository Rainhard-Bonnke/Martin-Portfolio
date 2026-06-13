import { Briefcase, GraduationCap, Building2, FileCheck, Scale, LineChart, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const timeline = [
  {
    period: "Present",
    title: "Founder & Manager",
    organization: "Ayawin Stock Solution",
    description:
      "Lead a full-service accounting firm delivering tax, audit, stock management, and advisory to SMEs across Kenya.",
    link: "https://ayawin.co.ke",
  },
  {
    period: "2021 to Present",
    title: "Certified Public Accountant",
    organization: "ICPAK Member",
    description:
      "Licensed for audit, assurance, tax, and financial reporting under Kenyan professional standards.",
  },
  {
    period: "Prior Experience",
    title: "Accounting & Financial Management",
    organization: "Industry Practice",
    description:
      "Built expertise in bookkeeping, KRA compliance, payroll, and financial reporting before founding Ayawin.",
  },
];

const strengths = [
  {
    icon: FileCheck,
    title: "Audit-Ready Records",
    description: "Documentation that stands up to review and regulatory scrutiny.",
  },
  {
    icon: Scale,
    title: "Tax Compliance",
    description: "Proactive KRA filing and penalty-free compliance management.",
  },
  {
    icon: LineChart,
    title: "Financial Insight",
    description: "Reporting that turns numbers into actionable decisions.",
  },
  {
    icon: CheckCircle2,
    title: "Ethical Practice",
    description: "ICPAK standards, confidentiality, and transparent communication.",
  },
];

const qualifications = [
  { icon: Briefcase, title: "CPA (K)", subtitle: "Certified Public Accountant, Kenya" },
  { icon: Building2, title: "ICPAK", subtitle: "Institute of Certified Public Accountants of Kenya" },
  { icon: GraduationCap, title: "KASNEB", subtitle: "Professional accounting education pathway" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="03"
          label="Experience"
          title="Proven track record in"
          highlight="finance & advisory"
          description="From hands-on accounting to founding my own practice, I bring certified expertise and real-world results."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="relative pl-10 pb-12 last:pb-0"
                >
                  <span className="absolute left-0 top-2 bottom-0 w-px bg-border" />
                  <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                    {item.period}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.organization}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.organization}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border/60 bg-card p-6 lg:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Qualifications
              </h3>
              <ul className="space-y-5">
                {qualifications.map((q) => (
                  <li key={q.title} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <q.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{q.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{q.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-muted/40 p-5 hover:bg-card hover:shadow-soft transition-all"
                >
                  <item.icon className="h-4 w-4 text-primary mb-3" />
                  <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary p-6 lg:p-8">
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">
                Industries Served
              </h3>
              <p className="text-secondary-foreground/65 text-sm leading-relaxed">
                Retail, manufacturing, professional services, NGOs, hospitality,
                and startups across Nairobi and Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
