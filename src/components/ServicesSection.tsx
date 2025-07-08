import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Truck, 
  Fingerprint, 
  CreditCard, 
  Building2, 
  Smartphone,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
  Code,
  Monitor,
  Brain
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies",
      features: ["E-commerce platforms", "Progressive Web Apps", "SEO optimization","Web Design & Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      icon: Monitor,
      title: "System Development", 
      description: "Enterprise-grade systems designed for scalability and performance",
      features: ["ERP systems", "CRM solutions", "Inventory management", "Workflow automation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native iOS/Android", "App Store deployment"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Intelligent automation and AI-powered solutions to enhance your business processes",
      features: ["Machine learning", "Natural language processing", "Computer vision", "Predictive analytics"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing Solution",
      description: "Advanced customer retention platform with automated campaigns and analytics",
      features: ["Bulk SMS campaigns", "Customer segmentation", "Real-time analytics", "API integration"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      icon: Truck,
      title: "Fleet Management Solution", 
      description: "Comprehensive driver safety and fleet optimization system",
      features: ["Real-time tracking", "Driver behavior monitoring", "Fuel management", "Route optimization"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
    },
    {
      icon: Fingerprint,
      title: "Biometric Solutions",
      description: "Market-leading recognition technology for security and access control",
      features: ["Fingerprint recognition", "Facial recognition", "Access control", "Time attendance"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Seamless bank and M-Pesa connectivity for all your payment needs",
      features: ["M-Pesa integration", "Bank connectivity", "Digital wallets", "Transaction monitoring"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      icon: Building2,
      title: "Petrol Station Management",
      description: "Complete fuel station solution with inventory and sales management",
      features: ["Inventory tracking", "Sales reporting", "Customer management", "Loyalty programs"],
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Data-driven insights and analytics for informed decision making",
      features: ["Custom dashboards", "Real-time reporting", "Data visualization", "Predictive analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-gradient-to-b from-background to-muted/20">
      {/* Glowing background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1 */}<div className="absolute top-10 left-10 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl animate-glow-orange" />
        {/* 2 */}<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-glow-white" />
        {/* 3 */}<div className="absolute top-20 right-16 w-44 h-44 bg-white/20 rounded-full blur-3xl animate-glow-white" />
        {/* 4 */}<div className="absolute top-1/2 left-0 -translate-y-1/2 w-36 h-36 bg-orange-400/20 rounded-full blur-3xl animate-glow-orange" />
        {/* 5 */}<div className="absolute top-1/2 right-0 -translate-y-1/2 w-36 h-36 bg-orange-400/20 rounded-full blur-3xl animate-glow-orange" />
        {/* Top Left - Orange */}
        <div className="absolute top-10 left-10 w-56 h-56 bg-orange-400/30 rounded-full blur-3xl animate-glow-orange" />
        {/* Top Center - White */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-glow-white" />
        {/* Top Right - White */}
        <div className="absolute top-20 right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-glow-white" />
        {/* Center Left - Orange */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-44 h-44 bg-orange-400/20 rounded-full blur-3xl animate-glow-orange" />
        {/* Center Right - Orange */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-44 h-44 bg-orange-400/20 rounded-full blur-3xl animate-glow-orange" />
        {/* Bottom Left - White */}
        <div className="absolute bottom-16 left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-glow-white" />
        {/* Bottom Right - Orange */}
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-400/30 rounded-full blur-3xl animate-glow-orange" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From AI integrations to mobile app development, we deliver cutting-edge solutions 
            that transform your business operations and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can address your specific challenges 
            and drive your business growth to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="hero" size="lg">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;