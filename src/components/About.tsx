import { Award, Target, Shield, TrendingUp } from "lucide-react";
import martinPhoto from "@/assets/martin-koyih-photo.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <img
                src={martinPhoto}
                alt="Martin Koyih at work"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-elevated max-w-[180px] sm:max-w-[220px]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <p className="font-serif text-xl sm:text-2xl font-bold text-foreground">CPA (K)</p>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm">Member of ICPAK - Institute of Certified Public Accountants of Kenya</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Martin Koyih
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted{" "}
              <span className="text-primary">Financial Partner</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4">
              With 3+ years of experience in accounting and financial management, 
              Martin Koyih is a Certified Public Accountant and the Founder & Manager of{" "}
              <a 
                href="https://ayawin.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Ayawin Stock Solution
              </a>
              , dedicated to helping individuals and businesses navigate the complex world of finance.
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              Specializing in tax planning, auditing, stock management, financial consulting, 
              and business advisory services, Martin brings expertise and a commitment 
              to excellence to every client relationship.
            </p>

            {/* Expertise Areas */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Strategic Planning</h3>
                  <p className="text-muted-foreground text-sm">
                    Long-term financial strategies tailored to your goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Tax Compliance</h3>
                  <p className="text-muted-foreground text-sm">
                    KRA compliance and tax optimization expertise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Advisory services to scale your business efficiently.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ICPAK Certified</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional standards and ethical practice.
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
