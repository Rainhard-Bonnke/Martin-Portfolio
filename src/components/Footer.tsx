import { ArrowUpRight, Download } from "lucide-react";
import { CV_PATH, EMAIL, getWhatsAppLink, LOCATION, PHONE_DISPLAY } from "@/lib/contact";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
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
            <p className="text-muted-foreground text-sm mt-1">
              Stock Controller & Inventory Professional
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Inventory audits, stock reconciliation, procurement support, and ERP-based
              stock management across retail and hospitality.
            </p>
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:underline"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
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
              <li className="text-foreground/80">{LOCATION}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Martin Koyih. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">CPA certification in progress</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
