import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl float" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo and company name */}
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="/lovable-uploads/009262a1-86e5-4662-a77e-5bf8b65811a4.png" 
              alt="Harley Systems" 
              className="h-20 w-auto object-contain bg-transparent filter brightness-0 invert float"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow">
              Harley Systems
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-shadow">
            Empowering African Businesses Through Innovative Technology Solutions
          </p>

          {/* Subtitle */}
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From SMS marketing to fleet management, from biometric solutions to payment integration - 
            we build the technology that drives your business forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glass" size="xl" className="group">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Schedule a Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <Code className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-white/80 text-sm">Tailored solutions built for your unique business needs</p>
            </div>
            <div className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/80 text-sm">Bank-grade security with full regulatory compliance</p>
            </div>
            <div className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-white/80 text-sm">Get your solution up and running in record time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;