import { Button } from "@/components/ui/button";
import { Compass, Camera, Tent, Mountain, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Safari Adventures",
    description: "Embark on thrilling game drives through Kenya's most renowned national parks and reserves.",
    price: "From $1,500",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning wildlife moments with expert guides and optimal positioning.",
    price: "From $2,000",
  },
  {
    icon: Tent,
    title: "Luxury Camping",
    description: "Experience the wild in comfort with our premium tented camps under starlit skies.",
    price: "From $1,800",
  },
  {
    icon: Mountain,
    title: "Mountain Treks",
    description: "Conquer Mount Kenya and other peaks with our experienced mountaineering guides.",
    price: "From $1,200",
  },
  {
    icon: Users,
    title: "Cultural Tours",
    description: "Immerse yourself in Maasai traditions and local community experiences.",
    price: "From $800",
  },
  {
    icon: Sparkles,
    title: "Custom Packages",
    description: "Tailored itineraries designed around your preferences and travel dreams.",
    price: "Custom Quote",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Crafted Travel{" "}
            <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From heart-pounding safaris to serene beach escapes, we offer diverse 
            packages designed to showcase the best of East Africa.
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
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{service.price}</span>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#contact">Learn More →</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#contact">View All Packages</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
