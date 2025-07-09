"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";

const videos = [
  "/assets/w1.mp4",
  "/assets/w2.mp4",
  "/assets/w3.mp4",
  "/assets/w4.mp4",
];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000); // change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        key={currentVideo}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      {/* Glowing background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Orange Glow */}
        <div className="absolute top-24 left-16 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl animate-glow-orange" />
        {/* White Glow */}
        <div className="absolute bottom-24 right-16 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-glow-white" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="mt-20 text-5xl md:text-7xl font-bold text-shadow">
              <span className="text-white">Harley</span>
              <span className="text-orange-500"> Systems</span>
            </h1>
          </div>

          <p className="text-base md:text-2xl text-white/90 max-w-3xl mx-auto text-shadow text-center">
            Empowering African Businesses Through Innovative Technology Solutions
          </p>
          <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto text-center">
            From SMS marketing to fleet management, from biometric solutions to payment integration -
            we build the technology that drives your business forward.
          </p>

          {/* <Button
            variant="glass"
            size="xl"
            className="group hover:bg-orange-500 hover:text-white transition-colors"
          >
            Explore
          </Button> */}

          {/* Feature Cards */}
          <div className="relative mt-16 overflow-hidden w-full">
            <div className="slideshow-track flex w-max animate-slideshow">
              {[...Array(2)].flatMap((_, i) => [
                <div key={`card1-${i}`} className="glass-card text-center group mx-4 min-w-[320px] hover:scale-105 transition-all duration-300">
                  <Code className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
                  <p className="text-white/80 text-sm">Tailored solutions built for your unique business needs</p>
                </div>,
                <div key={`card2-${i}`} className="glass-card text-center group mx-4 min-w-[320px] hover:scale-105 transition-all duration-300">
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/80 text-sm">Bank-grade security with full regulatory compliance</p>
                </div>,
                <div key={`card3-${i}`} className="glass-card text-center group mx-4 min-w-[320px] hover:scale-105 transition-all duration-300">
                  <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-white/80 text-sm">Get your solution up and running in record time</p>
                </div>
              ])}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
