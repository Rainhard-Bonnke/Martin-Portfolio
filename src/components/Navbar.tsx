import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_PATH } from "@/lib/contact";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "At Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span
              className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-secondary-foreground"
              }`}
            >
              M. Koyih
            </span>
            <span
              className={`hidden sm:inline text-[10px] uppercase tracking-[0.25em] font-medium transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-secondary-foreground/60"
              }`}
            >
              Stock Control
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-secondary-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={isScrolled ? "outline" : "heroOutline"}
              size="default"
              className="rounded-full"
              asChild
            >
              <a href={CV_PATH} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant={isScrolled ? "default" : "hero"} size="default" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 animate-fade-in">
            <div className="bg-card rounded-lg border border-border p-5 flex flex-col gap-4 shadow-elevated">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" asChild>
                <a href={CV_PATH} download onClick={() => setIsMobileMenuOpen(false)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="default" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
