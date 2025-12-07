import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Building2, 
  PiggyBank, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Filing",
    description: "Comprehensive tax planning strategies and timely KRA compliance to minimize liabilities and maximize returns.",
  },
  {
    icon: FileText,
    title: "Audit & Assurance",
    description: "Independent audit services providing stakeholders with reliable financial information and compliance verification.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description: "Strategic financial advice to help you make informed decisions and achieve your business objectives.",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    description: "Expert guidance on business formation, restructuring, mergers, and operational efficiency improvements.",
  },
  {
    icon: PiggyBank,
    title: "Bookkeeping Services",
    description: "Accurate and timely bookkeeping to keep your financial records organized and audit-ready.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Complete payroll solutions including PAYE, NSSF, NHIF compliance and employee payment processing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Professional{" "}
            <span className="text-primary">Accounting Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial solutions tailored to meet the unique needs 
            of individuals and businesses across Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
