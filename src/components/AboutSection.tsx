import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe, Calendar, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Calendar },
    { number: "200+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Industries Served", icon: Globe }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started as a partnership with a vision to transform African businesses through technology"
    },
    {
      year: "2015", 
      title: "First Major Success",
      description: "Launched COWSOKO - revolutionizing digital livestock markets across Kenya"
    },
    {
      year: "2017",
      title: "Global Recognition", 
      description: "Incorporated & participated in Global Entrepreneurship Summit with international exposure"
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description: "Extended our solutions across East Africa, serving diverse industries and markets"
    },
    {
      year: "2024",
      title: "Quality Certification",
      description: "Currently pursuing ISO 9001 certification to ensure world-class service delivery"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We pioneer cutting-edge solutions that solve real-world business challenges"
    },
    {
      icon: Award,
      title: "Quality Excellence", 
      description: "Every solution is built to the highest standards with rigorous testing and optimization"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our success - we build lasting partnerships, not just software"
    },
    {
      icon: CheckCircle,
      title: "Trust & Reliability",
      description: "Dependable solutions with proven track records across multiple industries"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary/95 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Harley Systems
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A decade of innovation, countless success stories, and a commitment to empowering 
            African businesses through transformative technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center glass-card hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2014 with a simple yet powerful vision: to bridge the technology gap 
              for African businesses. What started as a partnership has grown into a leading 
              technology solutions provider, serving over 50 clients across 15+ industries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our breakthrough COWSOKO digital livestock platform to our comprehensive 
              enterprise solutions, we've consistently delivered innovation that drives real 
              business results. Our journey has been marked by continuous growth, learning, 
              and an unwavering commitment to our clients' success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, as we pursue ISO 9001 certification, we continue to push boundaries, 
              embracing new technologies and methodologies to serve our clients better. 
              Our philosophy of "Faith in People" guides everything we do.
            </p>
            <Button variant="hero" size="lg">
              Learn More About Our Journey
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.year}</h3>
                <h4 className="text-lg font-semibold text-secondary mb-3">{milestone.title}</h4>
                <p className="text-white/70 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center glass-card hover:scale-105 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;