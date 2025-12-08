import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Building2, 
  PiggyBank, 
  Users,
  Package,
  ClipboardCheck
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Filing",
    description: "Comprehensive tax planning strategies and timely KRA compliance to minimize liabilities and maximize returns.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditing Services",
    description: "Thorough internal and external audit services ensuring financial accuracy, compliance, and operational efficiency.",
  },
  {
    icon: Package,
    title: "Stock Management",
    description: "Inventory control and stock accounting solutions to optimize your business operations and reduce wastage.",
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
  {
    icon: FileText,
    title: "Financial Reporting",
    description: "Comprehensive financial statements and reports that provide clear insights into your business performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 lg:mb-6">
            Professional{" "}
            <span className="text-primary">Accounting Services</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Comprehensive financial solutions tailored to meet the unique needs 
            of individuals and businesses across Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 lg:mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
