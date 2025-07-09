import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Muthaiga Suites", "Nairobi, Kenya"],
      description: "Visit us at our modern office space"
    },
    {
      icon: Phone, 
      title: "Phone & WhatsApp",
      details: ["+254 720143959"],
      description: "Call or text us anytime"
    },
    {
      icon: Mail,
      title: "Email Address", 
      details: ["info@harleysystems.co.ke", "support@harleysystems.co.ke"],
      description: "Send us your project details"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "East Africa Time (EAT)"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4 sm:mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch and let's discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="glass-card max-w-lg mx-auto self-start">
            <CardHeader>
              <CardTitle className="text-lg sm:text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-xs sm:text-base">
                Tell us about your project and we'll get back to you with a detailed proposal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Kimani Brian"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 min-h-24 sm:min-h-32"
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-card">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-xs sm:text-base text-muted-foreground mb-4 sm:mb-8">
                Whether you need a custom software solution, want to integrate new technologies, 
                or have questions about our services, we're here to help.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-xs sm:text-sm">{detail}</p>
                        ))}
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Image */}
            {/* <div className="relative overflow-hidden rounded-lg min-h-32 sm:min-h-48"> */}
              {/* <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                alt="Modern office space"
                className="w-full h-32 sm:h-64 object-cover"
              /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <h4 className="font-semibold text-sm sm:text-base">Visit Our Office</h4>
                <p className="text-xs sm:text-sm opacity-90">Modern workspace in the heart of Nairobi</p>
              </div>
            </div> */}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {/* <Button variant="outline" size="lg" className="h-auto py-4">
                <div className="text-center">
                  <Phone className="h-5 w-5 mx-auto mb-2" />
                  <div className="text-sm font-medium">Call Now</div>
                  <div className="text-xs text-muted-foreground">Immediate Response</div>
                </div>
              </Button> */}
              {/* <Button variant="secondary" size="lg" className="h-auto py-4">
                <div className="text-center">
                  <Calendar className="h-5 w-5 mx-auto mb-2" />
                  <div className="text-sm font-medium">Schedule Demo</div>
                  <div className="text-xs text-muted-foreground">See Our Solutions</div>
                </div>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;