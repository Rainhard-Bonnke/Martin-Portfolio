import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { CV_PATH, EMAIL, getWhatsAppLink, LOCATION, PHONE_DISPLAY } from "@/lib/contact";
import SectionHeader from "@/components/SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Martin will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappLink = getWhatsAppLink();

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: PHONE_DISPLAY,
      href: whatsappLink,
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: LOCATION,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="05"
          label="Contact"
          title="Let's connect about"
          highlight="your opportunity"
          description="Available for stock controller roles and related inventory positions. I typically respond within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <item.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-medium text-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <Button variant="outline" size="lg" className="w-full rounded-full" asChild>
              <a href={CV_PATH} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>

            <Button variant="secondary" size="lg" className="w-full rounded-full" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-3 bg-secondary rounded-2xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-secondary-foreground mb-2">
              Send a message
            </h3>
            <p className="text-secondary-foreground/60 text-sm mb-8">
              Interested in my stock control experience? Send a message below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Tell me about the role or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="resize-none bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
