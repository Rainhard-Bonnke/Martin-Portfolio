import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO, TechStart Kenya",
    content: "Martin's expertise in tax planning has saved our company significant amounts. His attention to detail and proactive approach makes him invaluable to our business.",
    rating: 5,
  },
  {
    name: "Grace Wanjiku",
    role: "Business Owner",
    content: "As a small business owner, I was overwhelmed with finances. Martin simplified everything and helped me understand my numbers. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "Managing Director",
    content: "Professional, reliable, and thorough. Martin's audit services gave our stakeholders the confidence they needed. A true professional in every sense.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-3 mb-6">
            What Clients{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Trusted by businesses and individuals across Kenya for reliable 
            financial guidance and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-elevated animate-fade-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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
