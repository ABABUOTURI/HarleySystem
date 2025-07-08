import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  GraduationCap, 
  Building, 
  Wheat, 
  ShoppingCart, 
  Truck,
  CreditCard,
  Users,
  ArrowRight
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Modern hospital management systems with patient care optimization",
      features: ["Patient Records Management", "Appointment Scheduling", "Billing Integration", "Pharmacy Management"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      caseStudy: "Reduced patient wait times by 60% at Nairobi General Hospital"
    },
    {
      icon: CreditCard,
      title: "Finance & Banking",
      description: "Secure banking solutions, payment integration, and SACCO management",
      features: ["Core Banking Systems", "Mobile Banking", "Payment Gateways", "Risk Management"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      caseStudy: "Processed over 1M transactions for regional banks"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive school management with student tracking and analytics",
      features: ["Student Information Systems", "Learning Management", "Grade Management", "Parent Portals"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      caseStudy: "Digitized 200+ schools across East Africa"
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Digital livestock markets and modern farming solutions",
      features: ["Livestock Trading (COWSOKO)", "Farm Management", "Supply Chain", "Market Analytics"],
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
      caseStudy: "COWSOKO revolutionized livestock trading in Kenya"
    },
    {
      icon: Building,
      title: "Government",
      description: "Governance tools and public service optimization platforms",
      features: ["Citizen Services", "Document Management", "Workflow Automation", "Compliance Tracking"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      caseStudy: "Streamlined public services for 3 counties"
    },
    {
      icon: ShoppingCart,
      title: "Retail & Commerce",
      description: "Point of sale systems and comprehensive inventory management",
      features: ["POS Systems", "Inventory Management", "Customer Loyalty", "E-commerce Integration"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      caseStudy: "Increased retail efficiency by 45% on average"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized technology solutions tailored to meet the unique challenges 
            and requirements of diverse industry sectors across Africa.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Industry Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <Icon className="h-8 w-8 text-white" />
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="text-muted-foreground">
                    {industry.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-3">Key Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case Study */}
                    <div className="glass-card !p-3">
                      <h4 className="font-semibold text-xs text-secondary mb-1">SUCCESS STORY</h4>
                      <p className="text-sm text-foreground">{industry.caseStudy}</p>
                    </div>

                    <Button variant="outline" className="w-full group">
                      View Solutions
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industry Stats */}
        <div className="glass-card text-center">
          <h3 className="text-2xl font-bold mb-6">Proven Track Record Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button variant="hero" size="lg">
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;