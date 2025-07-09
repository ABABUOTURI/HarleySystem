import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    "SMS Marketing Solutions",
    "Fleet Management", 
    "Biometric Solutions",
    "Payment Integration",
    "Business Intelligence",
    "Custom Development",
    "AI Integrations",
    "App Development",
    "System Development",
    "Web Development"
  ];

  const industries = [
    "Healthcare",
    "Finance & Banking", 
    "Education",
    "Agriculture",
    "Government",
    "Retail & Commerce"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/assets/logo.png" 
                alt="Harley Systems" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain bg-transparent"
              />
              <span className="text-lg sm:text-xl font-bold text-orange-500">Harley Systems</span>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
              Empowering African businesses through innovative technology solutions. 
              Building the future, one solution at a time.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-orange-500 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-orange-500 hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-orange-500 hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-orange-500 mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground text-xs sm:text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-orange-500 mb-4 sm:mb-6">Industries</h3>
            <ul className="space-y-2 sm:space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#industries" className="text-primary-foreground/70 hover:text-primary-foreground text-xs sm:text-sm transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-orange-500 mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-secondary mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-primary-foreground/70">
                  <p>Muthaiga Suites</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-secondary flex-shrink-0" />
                <div className="text-xs sm:text-sm text-primary-foreground/70">
                  <p>+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-secondary flex-shrink-0" />
                <div className="text-xs sm:text-sm text-primary-foreground/70">
                  <p>info@harleysystems.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-xs sm:text-sm text-orange-500">
              © 2024 Harley Systems. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;