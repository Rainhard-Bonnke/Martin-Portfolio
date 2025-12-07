import { Target, Eye, Heart } from "lucide-react";
import safariLodge from "@/assets/safari-lodge.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={safariLodge}
                alt="Luxury Safari Lodge Experience"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-[200px]">
              <p className="font-serif text-3xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground text-sm mt-1">Years of Excellence in African Travel</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Ayawin
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Gateway to{" "}
              <span className="text-primary">African Adventures</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded with a passion for showcasing East Africa's unparalleled beauty, 
              Ayawin has been crafting extraordinary travel experiences for over a decade. 
              We believe every journey should be transformative, connecting travelers with 
              the heart of Africa's wild landscapes and vibrant cultures.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To provide authentic, sustainable travel experiences that celebrate 
                    Africa's natural wonders while supporting local communities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To be East Africa's most trusted travel partner, known for 
                    exceptional service and unforgettable experiences.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Values</h3>
                  <p className="text-muted-foreground text-sm">
                    Sustainability, authenticity, excellence, and a deep respect 
                    for Africa's wildlife and heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
