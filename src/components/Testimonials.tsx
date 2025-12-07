import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    content: "Ayawin exceeded every expectation. The attention to detail and genuine care for both travelers and wildlife made this the trip of a lifetime.",
    rating: 5,
  },
  {
    name: "James Okoro",
    role: "Photographer",
    content: "As a wildlife photographer, I've worked with many tour operators. Ayawin's guides have an incredible knowledge of animal behavior that made capturing perfect shots possible.",
    rating: 5,
  },
  {
    name: "Emma & David Chen",
    role: "Honeymoon Travelers",
    content: "Our honeymoon was absolutely magical. From the safari lodge to the beach retreat, every moment was perfectly orchestrated. Thank you, Ayawin!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            What Our Travelers{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from travelers who have 
            experienced the magic of Africa with Ayawin.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft animate-fade-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
