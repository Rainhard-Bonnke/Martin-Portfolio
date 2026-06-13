import { ArrowUpRight } from "lucide-react";
import { EMAIL, getWhatsAppLink, PHONE_DISPLAY } from "@/lib/contact";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="font-display text-2xl font-semibold text-foreground">
              Martin Koyih
            </a>
            <p className="text-muted-foreground text-sm mt-1">Certified Public Accountant</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Professional accounting, tax, and advisory services in Nairobi and
              across Kenya.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-foreground/80">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Martin Koyih, CPA. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with precision, like good accounting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
