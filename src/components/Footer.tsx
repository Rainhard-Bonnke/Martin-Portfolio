import { Linkedin, Twitter, Mail, Phone } from "lucide-react";
import logo from "@/assets/martin-koyih-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Tax Planning", href: "#services" },
      { label: "Audit & Assurance", href: "#services" },
      { label: "Financial Consulting", href: "#services" },
      { label: "Bookkeeping", href: "#services" },
    ],
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Martin Koyih CPA Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Certified Public Accountant providing expert financial guidance, 
              tax planning, and accounting services to help you achieve your 
              financial goals with confidence.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:ayawin.ke@gmail.com" 
                className="flex items-center gap-2 text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                ayawin.ke@gmail.com
              </a>
              <a 
                href="tel:+254791259510" 
                className="flex items-center gap-2 text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +254 791 259 510
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Martin Koyih, CPA. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
