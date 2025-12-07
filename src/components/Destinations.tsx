import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import zanzibar from "@/assets/zanzibar-beach.jpg";
import wildlife from "@/assets/wildlife-lion.jpg";
import mountKenya from "@/assets/mount-kenya.jpg";
import maasai from "@/assets/maasai-culture.jpg";

const destinations = [
  {
    image: wildlife,
    title: "Maasai Mara",
    location: "Kenya",
    description: "Witness the great migration and encounter Africa's Big Five.",
    featured: true,
  },
  {
    image: zanzibar,
    title: "Zanzibar",
    location: "Tanzania",
    description: "Pristine beaches, crystal waters, and rich Swahili culture.",
    featured: false,
  },
  {
    image: mountKenya,
    title: "Mount Kenya",
    location: "Kenya",
    description: "Africa's second-highest peak with diverse ecosystems.",
    featured: false,
  },
  {
    image: maasai,
    title: "Cultural Villages",
    location: "Kenya & Tanzania",
    description: "Authentic experiences with Maasai and local communities.",
    featured: false,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Popular Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Explore Our Top{" "}
              <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From the iconic savannas of Kenya to the spice islands of Zanzibar, 
              discover destinations that will take your breath away.
            </p>
          </div>
          <Button variant="outline" size="lg" className="mt-6 lg:mt-0" asChild>
            <a href="#contact">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.title}
              className={`group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up ${
                destination.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${destination.featured ? "h-[500px]" : "h-[280px]"}`}>
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 text-primary-foreground/80 text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.location}</span>
                </div>
                <h3 className={`font-serif font-bold text-primary-foreground mb-2 ${
                  destination.featured ? "text-2xl lg:text-3xl" : "text-xl"
                }`}>
                  {destination.title}
                </h3>
                <p className={`text-primary-foreground/80 ${
                  destination.featured ? "text-base" : "text-sm"
                } ${destination.featured ? "" : "line-clamp-2"}`}>
                  {destination.description}
                </p>
                <Button 
                  variant="heroOutline" 
                  size="sm" 
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  asChild
                >
                  <a href="#contact">Explore</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
