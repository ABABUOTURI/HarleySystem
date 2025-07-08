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
    <section id="about" className="py-24 bg-white">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-5xl font-bold text-blue-900 mb-6">
          About Harley Systems
        </h2>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto">
            A decade of innovation, countless success stories, and a commitment to empowering 
            African businesses through transformative technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center glass-card hover:bg-white hover:border-transparent transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-secondary mx-auto mb-4 group-hover:text-blue-900 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-900 transition-colors duration-300">{stat.number}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-blue-900">Our Story</h3>
            <p className="text-blue-900 leading-relaxed">
              Founded in 2014 with a simple yet powerful vision: to bridge the technology gap 
              for African businesses. What started as a partnership has grown into a leading 
              technology solutions provider, serving over 50 clients across 15+ industries.
            </p>
            <p className="text-blue-900 leading-relaxed">
              From our breakthrough COWSOKO digital livestock platform to our comprehensive 
              enterprise solutions, we've consistently delivered innovation that drives real 
              business results. Our journey has been marked by continuous growth, learning, 
              and an unwavering commitment to our clients' success.
            </p>
            <p className="text-blue-900 leading-relaxed">
              Today, as we pursue ISO 9001 certification, we continue to push boundaries, 
              embracing new technologies and methodologies to serve our clients better. 
              Our philosophy of "Faith in People" guides everything we do.
            </p>
            {/* <Button variant="hero" size="lg">
              Learn More About Our Journey
            </Button> */}
          </div>

          <div className="relative">
          <video
            src="/assets/w4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-5xl font-bold text-center text-blue-900 mb-4">Our Journey</h3>
          <div className="mx-auto mb-12 w-24 border-b-2 border-dotted border-blue-900"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg text-center group text-blue-900 hover:bg-blue-900 hover:text-orange-500 transition-all duration-300 transform origin-bottom hover:scale-y-105 p-6"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm group-hover:text-orange-500 transition-colors duration-300">{milestone.year.slice(-2)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-orange-500">{milestone.year}</h3>
                <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-orange-500">{milestone.title}</h4>
                <p className="text-blue-900/70 text-sm transition-colors duration-300 group-hover:text-orange-500">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-5xl font-bold text-center text-blue-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center glass-card hover:bg-white hover:scale-105 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:text-blue-900 transition-colors duration-300" />
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-900 transition-colors duration-300">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-blue-900 transition-colors duration-300">{value.description}</p>
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