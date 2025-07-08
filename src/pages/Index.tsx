import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <PartnersSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
};

export default Index;
