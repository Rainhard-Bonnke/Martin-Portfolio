import {
  Calculator,
  FileText,
  TrendingUp,
  Building2,
  PiggyBank,
  Users,
  Package,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Filing",
    description:
      "Strategic tax planning and timely KRA compliance across income tax, VAT, withholding, and annual returns.",
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: "Auditing",
    description:
      "Internal and external audits ensuring accuracy, compliance, and operational efficiency.",
    span: "lg:col-span-1",
  },
  {
    icon: Package,
    title: "Stock Management",
    description:
      "Inventory control and stock accounting to reduce wastage and improve margins.",
    span: "lg:col-span-1",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description:
      "Cash flow analysis, budgeting, and strategic advice for informed decisions.",
    span: "lg:col-span-1",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    description:
      "Guidance on formation, restructuring, and improving financial performance.",
    span: "lg:col-span-1",
  },
  {
    icon: PiggyBank,
    title: "Bookkeeping",
    description:
      "Organized, audit-ready records that keep management informed.",
    span: "lg:col-span-1",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description:
      "PAYE, NSSF, NHIF compliance and end-to-end employee payment processing.",
    span: "lg:col-span-1",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Clear financial statements and management reports for business insight.",
    span: "lg:col-span-2",
    featured: true,
  },
];

const Services = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="02"
          label="Expertise"
          title="End-to-end accounting"
          highlight="for modern businesses"
          description="Comprehensive financial solutions tailored for individuals, SMEs, and growing organizations across Kenya."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "bg-secondary text-secondary-foreground sm:col-span-2"
                  : "bg-card border border-border/60 hover:border-primary/25 hover:shadow-elevated"
              } ${service.span}`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${
                  service.featured
                    ? "bg-primary/20"
                    : "bg-primary/10 group-hover:bg-primary transition-colors"
                }`}
              >
                <service.icon
                  className={`h-5 w-5 ${
                    service.featured
                      ? "text-primary"
                      : "text-primary group-hover:text-primary-foreground transition-colors"
                  }`}
                />
              </div>
              <h3
                className={`font-display text-xl font-semibold mb-2 ${
                  service.featured ? "text-secondary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.featured
                    ? "text-secondary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
              <ArrowUpRight
                className={`absolute top-6 right-6 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                  service.featured ? "text-primary" : "text-primary"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
