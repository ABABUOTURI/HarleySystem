import { ExternalLink, Handshake, Globe, Award } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Protocode Software Labs",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&h=100",
      description: "Strategic technology partnership for advanced development solutions",
      type: "Technology Partner",
      website: "https://protocode.com"
    },
    {
      name: "Kenya Commercial Bank",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=200&h=100", 
      description: "Financial integration and payment processing solutions",
      type: "Financial Partner",
      website: "#"
    },
    {
      name: "Safaricom M-Pesa",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=200&h=100",
      description: "Mobile payment integration and API services",
      type: "Payment Partner", 
      website: "#"
    },
    {
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=200&h=100",
      description: "Cloud infrastructure and enterprise solutions",
      type: "Cloud Partner",
      website: "#"
    },
    {
      name: "Kenya Bureau of Standards",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&h=100",
      description: "ISO 9001 certification and quality assurance partnership",
      type: "Certification Partner",
      website: "#"
    },
    {
      name: "Kenya Association of Software Developers",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=100",
      description: "Industry association promoting software development excellence",
      type: "Industry Partner",
      website: "#"
    }
  ];

  const stats = [
    { icon: Handshake, value: "15+", label: "Strategic Partners" },
    { icon: Globe, value: "5", label: "Countries" },
    { icon: Award, value: "8", label: "Certifications" },
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Building strong partnerships to deliver exceptional solutions across Africa
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-primary text-center p-8 hover:scale-105 transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-20 object-contain mb-4 rounded-lg bg-white/10 p-2"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                  <a 
                    href={partner.website}
                    className="text-white/60 hover:text-secondary transition-colors duration-300"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full mb-3">
                  {partner.type}
                </span>
                <p className="text-white/70 text-sm leading-relaxed">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="glass-primary p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Become Our Partner
            </h3>
            <p className="text-white/80 mb-6">
              Join our network of trusted partners and help us deliver world-class solutions across Africa
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Partner With Us
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;